with open('style.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if 'mockup' in line or 'demo-' in line or 'bullet-card' in line:
        print(f"{idx+1}: {line.strip()}")
