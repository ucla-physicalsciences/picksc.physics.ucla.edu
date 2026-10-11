"""Compact figure for the AI/ML research area: data -> sparse regression -> inferred PDE.

Simplified from Fig. 1(b) of E. P. Alves & F. Fiuza, "Data-driven discovery of
reduced plasma physics models from fully kinetic simulations",
Phys. Rev. Research 4, 033192 (2022), CC BY 4.0. The phase-space panel
(vlasov-phase-space-data.png) is cropped from that figure with the
"measurement volumes" label removed.

Usage:  python3 scripts/figures/ai_ml_sparse_regression.py   (needs a LaTeX install)
Writes: src/assets/areas/ai-ml-sparse-regression.png
"""
from pathlib import Path

import matplotlib.pyplot as plt
from matplotlib.patches import FancyArrowPatch, FancyBboxPatch

HERE = Path(__file__).parent
ROOT = HERE.parent.parent
BLUE, GRAY, INK = "#1d5c8c", "#94a3b8", "#0f172a"

plt.rcParams.update({
    "text.usetex": True,
    "text.latex.preamble": r"\usepackage{amsmath}",
    "font.family": "serif",
})

fig = plt.figure(figsize=(5.2, 6.0), dpi=300)

# 1. Simulation data
ax = fig.add_axes([0.02, 0.43, 0.96, 0.50])
ax.imshow(plt.imread(HERE / "vlasov-phase-space-data.png"))
ax.axis("off")
fig.text(0.5, 0.965, r"\textbf{1.} Kinetic simulation data $f(x, v, t)$", ha="center", va="center", fontsize=14, color=INK)


def colored_math(y, pieces, fontsize):
    """Draw [(latex_math, color), ...] centred on one line; usetex text has a single color per object."""
    r = fig.canvas.get_renderer()
    texts = [fig.text(0, y, f"${s}$", fontsize=fontsize, color=c, va="baseline") for s, c in pieces]
    widths = [t.get_window_extent(r).width / fig.bbox.width for t in texts]
    gap = 0.008
    x = 0.5 - (sum(widths) + gap * (len(widths) - 1)) / 2
    for t, w in zip(texts, widths):
        t.set_x(x)
        x += w + gap


def arrow(y0, y1):
    fig.add_artist(FancyArrowPatch((0.5, y0), (0.5, y1), transform=fig.transFigure,
                                   arrowstyle="-|>", mutation_scale=14, lw=1.4, color=GRAY))


arrow(0.425, 0.385)

# 2. Sparse regression over a library of candidate terms
fig.text(0.5, 0.355, r"\textbf{2.} Sparse regression over candidate terms", ha="center", va="center",
         fontsize=14, color=INK)
colored_math(0.272, [
    (r"\partial_t f =", INK), (r"\xi_1\,\partial_x f", GRAY), ("+", INK),
    (r"\xi_2\,v\,\partial_x f", BLUE), ("+", INK), (r"\xi_3\,E\,\partial_v f", BLUE), ("+", INK),
    (r"\xi_4\,\partial_x^2 f", GRAY), (r"+\,\cdots", INK),
], fontsize=15)
fig.text(0.5, 0.228, r"\textit{keep only the few terms needed to fit the data}", ha="center", va="center",
         fontsize=12, color="#475569")

arrow(0.205, 0.165)

# 3. Inferred PDE
fig.add_artist(FancyBboxPatch((0.08, 0.02), 0.84, 0.13, transform=fig.transFigure,
                              boxstyle="round,pad=0,rounding_size=0.02", fc="#eef5fb", ec=BLUE, lw=1.4))
fig.text(0.5, 0.118, r"\textbf{3.} Inferred PDE: the Vlasov equation", ha="center", va="center", fontsize=13, color=INK)
colored_math(0.045, [(r"\partial_t f =", INK), (r"-1.031\,v\,\partial_x f", BLUE), ("+", INK),
                     (r"0.987\,E\,\partial_v f", BLUE)], fontsize=16)

out = ROOT / "src/assets/areas/ai-ml-sparse-regression.png"
fig.savefig(out, dpi=300, facecolor="white", bbox_inches="tight", pad_inches=0.04)
print("wrote", out)
