"""Crop team photos so faces are a similar size and position in the round avatars.

Reads the untouched photos in src/assets/team/originals/, finds the face with
macOS Vision (faces.swift), and writes square crops to src/assets/team/ in which
the face is about FACE_FRAC of the width, centred horizontally. Photos whose face
is already larger than that are only re-centred (we can't zoom out past the edge).

Run from the repo root:  python3 scripts/team/normalize_faces.py [name.jpg ...]
"""
import subprocess, sys
from pathlib import Path
from PIL import Image, ImageFilter, ImageOps

FACE_FRAC = 0.47   # face width / crop width
FACE_Y = 0.55      # face centre height / crop height (low enough to keep the top of the head)
# Per-photo tweaks: {file: (face_frac, face_y, pad)}. `pad` extends the canvas by that
# fraction of its size on the top, left and right, filled with the background colour;
# only use it for photos on a plain, uniform background.
OVERRIDES = {
    'viktor-decyk.jpg': (0.40, 0.60, 0.12),
}
MAX_PX = 600       # output size cap (avatars display at <= 128px, 2x = 256px)

src = Path('src/assets/team/originals')
dst = Path('src/assets/team')
files = [src / n for n in sys.argv[1:]] or sorted(src.glob('*.jpg'))


def pad_background(img, pad, x, y):
    """Extend the image on the top, left and right with its own background colour."""
    W, H = img.size
    p = int(pad * max(W, H))
    edge = img.crop((0, 0, W, max(H // 50, 2))).resize((1, 1), Image.BOX).getpixel((0, 0))
    big = Image.new('RGB', (W + 2 * p, H + p), edge)
    big.paste(img, (p, p))
    # Soften the seam between the photo and the added border.
    blurred = big.filter(ImageFilter.GaussianBlur(p / 6))
    mask = Image.new('L', big.size, 255)
    mask.paste(0, (p + p // 8, p + p // 8, p + W - p // 8, H + p))
    mask = mask.filter(ImageFilter.GaussianBlur(p / 10))
    big = Image.composite(blurred, big, mask)
    return big, x + p, y + p, *big.size


out = subprocess.run(['swift', 'scripts/team/faces.swift', *map(str, files)], capture_output=True, text=True, check=True).stdout
for line in out.splitlines():
    path, *nums = line.split()
    if len(nums) != 6:
        print(f'{path}: no face found, copied unchanged'); Image.open(path).save(dst / Path(path).name); continue
    x, y, w, h, W, H = map(int, nums)
    img = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    frac, fy, pad = OVERRIDES.get(Path(path).name, (FACE_FRAC, FACE_Y, 0))
    if pad:
        img, x, y, W, H = pad_background(img, pad, x, y)
    S = min(int(w / frac), W, H)
    cx, cy = x + w / 2, y + h / 2
    left = min(max(cx - S / 2, 0), W - S)
    top = min(max(cy - fy * S, 0), H - S)
    crop = img.crop((round(left), round(top), round(left) + S, round(top) + S))
    if S > MAX_PX: crop = crop.resize((MAX_PX, MAX_PX), Image.LANCZOS)
    crop.save(dst / Path(path).name, quality=90)
    print(f'{Path(path).name}: face {w / min(W, H):.2f} -> {w / S:.2f} of width, {crop.size[0]}px')
