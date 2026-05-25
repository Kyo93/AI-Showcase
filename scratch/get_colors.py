import os
from PIL import Image

path = r"c:\Users\Ocean\Desktop\AI Sharing Present\scratch\SeaLogo\Sea Logo\Sea_Logo_Web-Horizontal.png"
if not os.path.exists(path):
    print("File not found")
    exit()

try:
    im = Image.open(path)
    im_rgba = im.convert("RGBA")
    pixels = list(im_rgba.getdata())

    color_counts = {}
    for r, g, b, a in pixels:
        if a < 50:  # skip transparent pixels
            continue
        # skip white/almost white pixels
        if r > 240 and g > 240 and b > 240:
            continue
        color = (r, g, b)
        color_counts[color] = color_counts.get(color, 0) + 1

    sorted_colors = sorted(color_counts.items(), key=lambda x: x[1], reverse=True)
    print("Top 15 colors:")
    for color, count in sorted_colors[:15]:
        hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
        print(f"RGB: {color}, Hex: {hex_color.upper()}, Count: {count}")
except Exception as e:
    print(f"Error: {e}")
