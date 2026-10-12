"""Download every GPS activity from Garmin Connect as a GPX file.

Run it yourself in a terminal (it asks for your Garmin password and MFA code
there, so credentials never leave your machine):

    pip install garminconnect
    python tools/garmin_download.py

Output goes OUTSIDE the repo by default (~/garmin-gpx), because raw tracks
show where runs start and end. Nothing here is meant to be committed.

Writes one <date>_<id>_<type>.gpx per activity plus index.json with the
summary stats (name, type, distance, gain, moving time) the site needs.
Re-running skips files that already exist, so it is safe to resume.
"""
import argparse
import getpass
import json
import time
from pathlib import Path

from garminconnect import Garmin

TOKENS = Path.home() / ".garminconnect"


def login():
    try:
        api = Garmin()
        api.login(str(TOKENS))  # reuse a saved session if there is one
        return api
    except Exception:
        pass
    email = input("Garmin email: ").strip()
    password = getpass.getpass("Garmin password: ")
    api = Garmin(email, password, prompt_mfa=lambda: input("MFA code: ").strip())
    api.login()
    api.garth.dump(str(TOKENS))  # so the next run doesn't ask again
    return api


def all_activities(api, page=100):
    start = 0
    while True:
        batch = api.get_activities(start, page)
        if not batch:
            return
        yield from batch
        start += len(batch)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=str(Path.home() / "garmin-gpx"))
    ap.add_argument("--types", default="", help="comma list to keep, e.g. hiking,running,trail_running (default: all GPS activities)")
    args = ap.parse_args()

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    keep = {t.strip() for t in args.types.split(",") if t.strip()}

    api = login()
    index, saved, skipped = [], 0, 0
    for a in all_activities(api):
        kind = (a.get("activityType") or {}).get("typeKey", "unknown")
        if not a.get("startLatitude"):  # indoor / no GPS
            continue
        if keep and kind not in keep:
            continue
        aid = a["activityId"]
        date = (a.get("startTimeLocal") or "")[:10]
        path = out / f"{date}_{aid}_{kind}.gpx"
        index.append({
            "id": aid,
            "file": path.name,
            "title": a.get("activityName"),
            "type": kind,
            "start": a.get("startTimeGMT"),
            "location": a.get("locationName"),
            "miles": round((a.get("distance") or 0) / 1609.344, 2),
            "gainFt": round((a.get("elevationGain") or 0) * 3.28084),
            "mins": round((a.get("movingDuration") or a.get("duration") or 0) / 60),
        })
        if path.exists():
            skipped += 1
            continue
        try:
            path.write_bytes(api.download_activity(aid, dl_fmt=api.ActivityDownloadFormat.GPX))
            saved += 1
            print(f"saved  {path.name}")
            time.sleep(0.5)  # be gentle with Garmin's servers
        except Exception as e:
            print(f"failed {aid} ({kind}): {e}")

    (out / "index.json").write_text(json.dumps(index, indent=1))
    print(f"\n{saved} new, {skipped} already there, {len(index)} total -> {out}")


if __name__ == "__main__":
    main()
