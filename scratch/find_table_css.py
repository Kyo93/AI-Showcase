with open('style.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if 'comparison' in line or 'table' in line or 'cell-' in line:
        print(f"{idx+1}: {line.strip()}")
