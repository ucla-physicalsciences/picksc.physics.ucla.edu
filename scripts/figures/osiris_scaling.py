"""Regenerate the OSIRIS GPU weak-scaling figure for the Research page.

Data: digitized from Fig. 2(a) of R. P. Lee et al., "Acceleration of the
particle-in-cell code Osiris with graphics processing units",
J. Plasma Phys. 91, E8 (2025). Values are read off the published plot, so
they are approximate (a few percent); replace them with the original
numbers if available.

Usage:  python3 scripts/figures/osiris_scaling.py
Writes: src/assets/areas/software-hpc.png
"""
import argparse
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.offsetbox import AnnotationBbox, OffsetImage

HERE = Path(__file__).parent
ROOT = HERE.parent.parent

gpus = np.array([64, 128, 256, 512, 1024, 2048, 4096])
# Absolute throughput in gigaparticles per second (Gp/s)
throughput = {
    "2D": [243, 444, 885, 1710, 3380, 6623, 13235],
    "Cold": [135, 255, 507, 952, 1882, 3646, 6386],
    "Base": [84, 151, 307, 601, 1155, 2302, 4230],
    "Drift": [65, 127, 215, 487, 690, 1892, 2996],
}
colors = {"2D": "#2774AE", "Cold": "#003B5C", "Base": "#E8A317", "Drift": "#C0392B"}

p = argparse.ArgumentParser()
p.add_argument("--out", default=str(ROOT / "src/assets/areas/software-hpc.png"))
args = p.parse_args()

plt.rcParams.update({
    "font.family": "Helvetica Neue",
    "font.size": 11.5,
    "axes.edgecolor": "#334155",
    "axes.labelcolor": "#0f172a",
    "xtick.color": "#334155",
    "ytick.color": "#334155",
})

fig, ax = plt.subplots(figsize=(4.6, 4.0), dpi=300)
for name, y in throughput.items():
    y = np.array(y, float)
    ideal = y[0] * gpus / gpus[0]
    ax.plot(gpus, ideal, color="#94a3b8", lw=1, ls="--", zorder=1)
    ax.plot(gpus, y, "-o", color=colors[name], lw=2.2, ms=5, label=name, zorder=3)

ax.set_xscale("log", base=2)
ax.set_yscale("log")
ax.set_xticks(gpus, [str(g) for g in gpus])
ax.minorticks_off()
ax.set_yticks([1e2, 1e3, 1e4])
ax.set_xlim(50, 5200)
ax.set_ylim(45, 3.2e4)
ax.set_xlabel("Number of GPUs")
ax.set_ylabel("Throughput (billion particles / s)")
ax.grid(True, which="major", color="#e2e8f0", lw=0.8)
ax.set_axisbelow(True)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)

handles, labels = ax.get_legend_handles_labels()
handles.append(plt.Line2D([], [], color="#94a3b8", lw=1, ls="--"))
labels.append("Ideal scaling")
ax.legend(handles, labels, loc="lower right", frameon=False, fontsize=10)

# Perlmutter photo as an inset in the empty top-left corner (top-right would cover the data)
img = plt.imread(HERE / "perlmutter.png")
img = img[int(img.shape[0] * 0.04):int(img.shape[0] * 0.90), int(img.shape[1] * 0.07):]  # trim floor/blank edges
inset = ax.inset_axes([0.03, 0.73, 0.52, 0.52 * 0.8 * img.shape[0] / img.shape[1] * 4.6 / 4.0 / 0.8])
inset.imshow(img)
inset.set_xticks([])
inset.set_yticks([])
for s in inset.spines.values():
    s.set_edgecolor("#cbd5e1")
    s.set_linewidth(0.8)
inset.text(0, -0.06, "NERSC Perlmutter (NVIDIA A100 GPUs)", transform=inset.transAxes,
           ha="left", va="top", fontsize=8.5, color="#475569")

fig.tight_layout()
fig.savefig(args.out, dpi=300, facecolor="white")
print("wrote", args.out)
