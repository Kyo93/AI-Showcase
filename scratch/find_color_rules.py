with open('style.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if 'color:' in line and ('col' in lines[idx-1] or 'col' in line or 'header' in lines[idx-1] or 'header' in line or 'table' in lines[idx-1] or 'table' in line):
        print(f"{idx+1}: {line.strip()} (context: {lines[idx-1].strip()})")
