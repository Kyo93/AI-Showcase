import re
import os
import sys

# Set stdout/stderr to UTF-8 to prevent encoding crashes on Windows terminal
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        # Fallback for older python versions
        import sys, codecs
        sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

def sync():
    script_path = "presentation_script.md"
    html_path = "index.html"
    
    if not os.path.exists(script_path) or not os.path.exists(html_path):
        print("Missing presentation_script.md or index.html")
        return
        
    with open(script_path, "r", encoding="utf-8") as f:
        script_content = f.read()
        
    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()
        
    # Parse presentation_script.md
    # Slides are separated by ## Slide X or ## Cover or ## Q&A
    slide_matches = re.finditer(r"^##\s+([^:\n]+)(?::\s*([^\n]+))?", script_content, re.MULTILINE)
    slides = []
    
    matches = list(slide_matches)
    for i, match in enumerate(matches):
        title = match.group(1).strip()
        subtitle = match.group(2).strip() if match.group(2) else ""
        
        # Get content between this header and next header
        start_pos = match.end()
        end_pos = matches[i+1].start() if i + 1 < len(matches) else len(script_content)
        slide_text = script_content[start_pos:end_pos]
        
        # Extract speech script under "* **Kịch bản nói:**"
        speech_match = re.search(r"\*\s+\*\*Kịch bản nói:\*\*\s*(.*?)(?=\n\n##|\n\*|\Z)", slide_text, re.DOTALL)
        paragraphs = []
        if speech_match:
            speech_content = speech_match.group(1).strip()
            # Split into paragraphs based on blockquotes starting with >
            raw_paras = re.split(r"\n\s*>\s*\n|\n\s*>\s*", speech_content)
            for p in raw_paras:
                p_clean = p.strip()
                if p_clean.startswith(">"):
                    p_clean = p_clean[1:].strip()
                # Strip leading/trailing quote characters
                p_clean = p_clean.strip('"').strip('“').strip('”').strip()
                if p_clean:
                    paragraphs.append(p_clean)
                    
        slides.append({
            "title": title,
            "subtitle": subtitle,
            "paragraphs": paragraphs
        })
        
    print(f"Parsed {len(slides)} slides from presentation_script.md")

    # Find all <aside class="notes"> in index.html
    # We will replace each in order
    notes_pattern = re.compile(r"<aside class=\"notes\">(.*?)</aside>", re.DOTALL)
    html_notes_matches = list(notes_pattern.finditer(html_content))
    
    print(f"Found {len(html_notes_matches)} notes sections in index.html")
    
    if len(html_notes_matches) != len(slides):
        print(f"Warning: Slide count mismatch. Script: {len(slides)}, HTML Notes: {len(html_notes_matches)}")
        
    # Reconstruct index.html with new notes
    new_html = ""
    last_idx = 0
    for idx, match in enumerate(html_notes_matches):
        if idx < len(slides):
            slide = slides[idx]
            original_inner = match.group(1)
            h3_match = re.search(r"(<h3>.*?</h3>)", original_inner)
            h3_tag = h3_match.group(1) if h3_match else f"<h3>{slide['title']}</h3>"
            
            p_tags = "\n".join(f"                    <p>{p}</p>" for p in slide['paragraphs'])
            replacement_inner = f"\n                    {h3_tag}\n{p_tags}\n                "
            
            new_html += html_content[last_idx:match.start()]
            new_html += f'<aside class="notes">{replacement_inner}</aside>'
            last_idx = match.end()
            
    new_html += html_content[last_idx:]
    
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(new_html)
    print("Successfully synchronized notes to index.html!")

if __name__ == "__main__":
    sync()
