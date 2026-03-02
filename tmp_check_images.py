import PIL.Image
import os

files = ['public/triagelogowhite.png', 'public/TriageHomeLogowhite.svg']

for f in files:
    if f.endswith('.png'):
        with PIL.Image.open(f) as img:
            print(f"{f}: {img.size}")
    else:
        with open(f, 'r') as svg:
            for line in svg:
                if 'viewBox' in line:
                    print(f"{f}: {line.strip()}")
                    break
