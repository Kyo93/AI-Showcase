with open('style.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if '.tech-cover ' in line or 'tech-cover {' in line:
        print(f"{idx+1}: {line.strip()}")
