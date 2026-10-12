"""Build outdoors-data.js from a Garmin Connect export.

    python tools/build_outdoors.py --csv "~/Downloads/Activities (1).csv" --gpx-dir ~/Downloads

Stats for every hike and run come from the activity-list CSV (Connect >
Activities > Export CSV). Garmin-recorded GPX files (activity_*.gpx, creator
"Garmin Connect") are matched to their activity by start time and add:
  - hikes: a simplified route plus elevation and heart-rate profiles
  - runs:  heart-rate, pace and elevation profiles, with NO coordinates,
           since runs start from home
AllTrails / planned-route GPX files are ignored; their elevation isn't measured.
"""
import argparse
import csv
import glob
import json
import math
import os
import re
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone

OUT = os.path.join(os.path.dirname(__file__), "..", "outdoors-data.js")
MIN_HIKE_MI = 1.0   # drop tiny "hikes" (walking to a viewpoint)
MIN_RUN_MI = 0.5    # drop warmups and accidental starts
PROFILE_POINTS = 240
ROUTE_POINTS = 320

# Hand-written names, places and photos, keyed by local start date.
# The CSV only has "<County> Hiking", so this is where hikes get real names.
HIKE_META = {
    "2026-08-24": {"title": "Rubicon Peak Trail", "photos": ["assets/tahoe-ridge-s.jpg", "assets/tahoe-sunrise-s.jpg", "assets/tahoe-lake-s.jpg"]},
    "2026-07-25": {"title": "Mount Tam East Peak Loop", "photos": ["assets/marin-summit-s.jpg"]},
    "2026-07-19": {"title": "Saratoga Gap and Ridge Loop", "place": "Santa Cruz Mountains, CA", "photos": ["assets/marin-ridge.jpg", "assets/marin-oak.jpg"]},
}

GPX_NS = {"g": "http://www.topografix.com/GPX/1/1", "x": "http://www.garmin.com/xmlschemas/TrackPointExtension/v1"}


def num(s):
    s = (s or "").strip().replace(",", "").lstrip("'")
    if s in ("", "--"):
        return None
    try:
        return float(s)
    except ValueError:
        return None


def secs(s):
    s = (s or "").strip()
    if not s or s == "--":
        return None
    parts = [float(p) for p in s.split(":")]
    while len(parts) < 3:
        parts.insert(0, 0)
    return round(parts[0] * 3600 + parts[1] * 60 + parts[2])


def hav(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * 6371000 * math.asin(math.sqrt(h))


def read_gpx(path):
    root = ET.parse(path).getroot()
    if "Garmin Connect" not in (root.get("creator") or ""):
        return None
    pts = []
    for p in root.iterfind(".//g:trkpt", GPX_NS):
        t = p.findtext("g:time", namespaces=GPX_NS)
        e = p.findtext("g:ele", namespaces=GPX_NS)
        hr = p.findtext(".//x:hr", namespaces=GPX_NS)
        pts.append({
            "lat": float(p.get("lat")), "lon": float(p.get("lon")),
            "ele": float(e) if e else None,
            "t": datetime.fromisoformat(t.replace("Z", "+00:00")) if t else None,
            "hr": int(hr) if hr else None,
        })
    if len(pts) < 10 or not pts[0]["t"]:
        return None
    d = 0.0
    pts[0]["d"] = 0.0
    for a, b in zip(pts, pts[1:]):
        d += hav((a["lat"], a["lon"]), (b["lat"], b["lon"]))
        b["d"] = d
    return {"start": pts[0]["t"], "pts": pts}


def resample(pts, n):
    """Pick the point nearest each of n evenly spaced distances."""
    total = pts[-1]["d"] or 1
    out, j = [], 0
    for i in range(n):
        target = total * i / (n - 1)
        while j < len(pts) - 1 and pts[j + 1]["d"] <= target:
            j += 1
        out.append(pts[j])
    return out


def profile(pts, with_pace):
    rs = resample(pts, PROFILE_POINTS)
    prof = {"mi": [round(p["d"] / 1609.344, 3) for p in rs],
            "ft": [round(p["ele"] * 3.28084) if p["ele"] is not None else None for p in rs],
            "hr": [p["hr"] for p in rs]}
    if with_pace:
        # pace from a ~0.1 mi rolling window, in seconds per mile
        pace, j = [], 0
        for p in rs:
            while j < len(pts) - 1 and pts[j]["d"] < p["d"] - 160:
                j += 1
            dd, dt = p["d"] - pts[j]["d"], (p["t"] - pts[j]["t"]).total_seconds() if p["t"] and pts[j]["t"] else 0
            pace.append(round(dt / (dd / 1609.344)) if dd > 40 and dt > 0 else None)
        prof["pace"] = pace
    return prof


def match(gpxs, local_start):
    # CSV times are local, GPX times are UTC; Pacific is UTC-7 or UTC-8.
    for g in gpxs:
        naive = g["start"].replace(tzinfo=None)
        for off in (7, 8):
            if abs((naive - timedelta(hours=off) - local_start).total_seconds()) < 120:
                return g
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", required=True)
    ap.add_argument("--gpx-dir", default=os.path.expanduser("~/Downloads"))
    args = ap.parse_args()

    gpxs, seen = [], set()
    for f in sorted(glob.glob(os.path.join(os.path.expanduser(args.gpx_dir), "*.gpx"))):
        try:
            g = read_gpx(f)
        except ET.ParseError:
            continue
        if g and g["start"] not in seen:  # skip "(1)" duplicates
            seen.add(g["start"])
            gpxs.append(g)

    hikes, runs = [], []
    with open(os.path.expanduser(args.csv), newline="", encoding="utf-8-sig") as fh:
        for r in csv.DictReader(fh):
            kind = r["Activity Type"]
            local = datetime.strptime(r["Date"], "%Y-%m-%d %H:%M:%S")
            date = local.strftime("%Y-%m-%d")
            miles = num(r["Distance"]) or 0
            if kind == "Track Running":
                miles /= 1609.344  # track runs are exported in meters
            base = {
                "date": date, "start": local.isoformat(),
                "miles": round(miles, 2),
                "timeS": secs(r["Time"]), "movingS": secs(r["Moving Time"]),
                "avgHR": num(r["Avg HR"]), "maxHR": num(r["Max HR"]),
                "gainFt": num(r["Ascent"]), "lossFt": num(r["Total Descent"]),
                "minFt": num(r["Min Elevation"]), "maxFt": num(r["Max Elevation"]),
                "calories": num(r["Calories"]), "steps": num(r["Steps"]),
                "aerobicTE": num(r["Aerobic TE"]),
            }
            g = match(gpxs, local)

            if kind == "Hiking" and miles >= MIN_HIKE_MI:
                meta = HIKE_META.get(date, {})
                county = re.sub(r"\s+Hiking$", "", r["Title"]).strip()
                h = {**base, "title": meta.get("title", county),
                     "place": meta.get("place", county + ", CA"),
                     "photos": meta.get("photos", [])}
                if g:
                    route = resample(g["pts"], ROUTE_POINTS)
                    h["track"] = [[round(p["lat"], 5), round(p["lon"], 5)] for p in route]
                    h["profile"] = profile(g["pts"], with_pace=False)
                hikes.append(h)

            elif kind in ("Running", "Track Running") and miles >= MIN_RUN_MI:
                # "Berkeley - Base" -> workout "Base"; the city is dropped on purpose
                workout = r["Title"].split(" - ", 1)[1] if " - " in r["Title"] else ("Track" if kind == "Track Running" else "Run")
                run = {**base, "workout": workout, "track": kind == "Track Running",
                       "avgPace": secs(r["Avg Pace"]), "bestPace": secs(r["Best Pace"]), "gap": secs(r["Avg GAP"]),
                       "avgCad": num(r["Avg Cadence"]), "maxCad": num(r["Max Cadence"]),
                       "strideM": num(r["Avg Stride Length"]), "vertRatio": num(r["Avg Vertical Ratio"]),
                       "vertOscCm": num(r["Avg Vertical Oscillation"]), "gctMs": num(r["Avg Ground Contact Time"]),
                       "avgPower": num(r["Avg Power"]), "maxPower": num(r["Max Power"]),
                       "laps": num(r["Number of Laps"]), "bestLapS": secs(r["Best Lap Time"]),
                       "tempF": [num(r["Min Temp"]), num(r["Max Temp"])]}
                if g:
                    run["profile"] = profile(g["pts"], with_pace=True)  # no lat/lon kept
                runs.append(run)

    hikes.sort(key=lambda a: a["start"], reverse=True)
    runs.sort(key=lambda a: a["start"], reverse=True)
    data = {"built": datetime.now(timezone.utc).strftime("%Y-%m-%d"), "hikes": hikes, "runs": runs}
    with open(OUT, "w", encoding="utf-8", newline="\n") as fh:
        fh.write("// GENERATED by tools/build_outdoors.py from a Garmin export. Do not edit by hand.\n")
        fh.write("window.OUTDOORS = " + json.dumps(data, separators=(",", ":")) + ";\n")
    mapped = sum(1 for h in hikes if "track" in h)
    profiled = sum(1 for r in runs if "profile" in r)
    print(f"{len(hikes)} hikes ({mapped} with maps), {len(runs)} runs ({profiled} with profiles) -> {os.path.normpath(OUT)}")


if __name__ == "__main__":
    main()
