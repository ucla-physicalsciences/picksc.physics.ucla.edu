"""Crop team photos so faces are a similar size and position in the round avatars.

Reads the untouched photos in src/assets/team/originals/, finds the face with
macOS Vision (faces.swift), and writes square crops to src/assets/team/ in which
the face is about FACE_FRAC of the width, centred horizontally. Photos whose face
is already larger than that are only re-centred (we can't zoom out past the edge).

Run from the repo root:  python3 scripts/team/normalize_faces.py [name.jpg ...]
"""
import subprocess, sys
from pathlib import Path
from PIL import Image, ImageOps

FACE_FRAC = 0.47   # face width / crop width
FACE_Y = 0.55      # face centre height / crop height (low enough to keep the top of the head)
MAX_PX = 600       # output size cap (avatars display at <= 128px, 2x = 256px)

src = Path('src/assets/team/originals')
dst = Path('src/assets/team')
files = [src / n for n in sys.argv[1:]] or sorted(src.glob('*.jpg'))

out = subprocess.run(['swift', 'scripts/team/faces.swift', *map(str, files)], capture_output=True, text=True, check=True).stdout
for line in out.splitlines():
    path, *nums = line.split()
    if len(nums) != 6:
        print(f'{path}: no face found, copied unchanged'); Image.open(path).save(dst / Path(path).name); continue
    x, y, w, h, W, H = map(int, nums)
    img = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    S = min(int(w / FACE_FRAC), W, H)
    cx, cy = x + w / 2, y + h / 2
    left = min(max(cx - S / 2, 0), W - S)
    top = min(max(cy - FACE_Y * S, 0), H - S)
    crop = img.crop((round(left), round(top), round(left) + S, round(top) + S))
    if S > MAX_PX: crop = crop.resize((MAX_PX, MAX_PX), Image.LANCZOS)
    crop.save(dst / Path(path).name, quality=90)
    print(f'{Path(path).name}: face {w / min(W, H):.2f} -> {w / S:.2f} of width, {crop.size[0]}px')
