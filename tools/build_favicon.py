"""Build favicon.svg: the "gk." wordmark on a lake-blue squircle.

    python tools/build_favicon.py path/to/BricolageGrotesque[opsz,wdth,wght].ttf

The letters are converted to outlines from Bricolage Grotesque (the site's
display face, OFL, github.com/google/fonts) so the icon doesn't depend on any
font being installed. PNG sizes are rendered from the SVG separately.
"""
import math
import os
import sys

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

OUT = os.path.join(os.path.dirname(__file__), "..", "favicon.svg")
SIZE = 64
BG, FG, AMBER = "#0F2A33", "#ECE6D9", "#F2A541"


def squircle(n=5, r=SIZE / 2, steps=96):
    # superellipse |x|^n + |y|^n = r^n, the continuous-corner shape Apple icons use
    pts = []
    for i in range(steps):
        t = 2 * math.pi * i / steps
        c, s = math.cos(t), math.sin(t)
        x = r + r * math.copysign(abs(c) ** (2 / n), c)
        y = r + r * math.copysign(abs(s) ** (2 / n), s)
        pts.append(f"{x:.2f} {y:.2f}")
    return "M" + " L".join(pts) + " Z"


def main(font_path):
    font = instancer.instantiateVariableFont(TTFont(font_path), {"wght": 800, "opsz": 96, "wdth": 100})
    gs, cmap = font.getGlyphSet(), font.getBestCmap()
    tracking = -0.04 * font["head"].unitsPerEm  # match the site's tight letter-spacing
    # lay out "gk" and measure the ink, so the block can be centred optically
    x, placed = 0, []
    for ch in "gk":
        name = cmap[ord(ch)]
        placed.append((name, x))
        x += gs[name].width + tracking
    bp = BoundsPen(gs)
    for name, dx in placed:
        gs[name].draw(TransformPen(bp, (1, 0, 0, 1, dx, 0)))
    x0, y0, x1, y1 = bp.bounds
    dot_r = 0.085 * (y1 - y0)
    dot_gap = 0.05 * (y1 - y0)
    ink_w = (x1 - x0) + dot_gap + 2 * dot_r

    scale = (SIZE * 0.70) / max(ink_w, y1 - y0)
    ox = (SIZE - ink_w * scale) / 2 - x0 * scale
    oy = (SIZE + (y1 - y0) * scale) / 2 + y0 * scale  # y flips: font units are y-up
    sp = SVGPathPen(gs)
    for name, dx in placed:
        gs[name].draw(TransformPen(sp, (scale, 0, 0, -scale, ox + dx * scale, oy)))
    dot_cx = ox + (x1 + dot_gap + dot_r) * scale
    dot_cy = oy - dot_r * scale  # sits on the baseline, like the period in "gk."

    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SIZE} {SIZE}">'
           f'<path d="{squircle()}" fill="{BG}"/>'
           f'<path d="{sp.getCommands()}" fill="{FG}"/>'
           f'<circle cx="{dot_cx:.2f}" cy="{dot_cy:.2f}" r="{dot_r * scale:.2f}" fill="{AMBER}"/></svg>\n')
    with open(OUT, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(svg)
    print(f"wrote {os.path.normpath(OUT)} ({len(svg):,} bytes)")


if __name__ == "__main__":
    main(sys.argv[1])
