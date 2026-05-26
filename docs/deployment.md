---
title: "Deployment Guide"
description: "Cách mở, chạy và kiểm tra slide web tĩnh AI Sharing Present."
keywords: ["deployment", "local server", "static site", "Reveal.js"]
robots: "index, follow"
---

# Deployment Guide

> **Quick Reference**
> - **Platform**: Any modern browser.
> - **Build Step**: None.
> - **Recommended Local Server**: `python -m http.server 8000`.
> - **Related**: [Run Slide Deck SOP](./sop/run-slide-deck.md), [Quality Checklist](./quality-checklist.md).

## Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Browser | Chrome, Edge or Firefox current version | Chrome/Edge for presentation mode and PDF export |
| Internet | Required for CDN assets | Stable connection or vendored assets |
| Python | Optional | Python 3.x for local static server |
| Display | 16:9 presentation output | 1280x720 or larger |

## Local Run

Open the deck directly:

```text
index.html
```

Or run a local server from the project root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Verification

| Check | Expected Result |
|-------|-----------------|
| Slide deck opens | Title slide appears. |
| Controls visible | Reveal controls and progress bar work. |
| Speaker view | Pressing `S` opens presenter notes. |
| Particle background runs | Canvas animation does not block slide content. |
| Agenda slide present | Slide 2 summarizes the presentation table of contents. |
| Playbook slides present | Slide 3 through 9 cover team needs, AI update, prompting, skill ecosystem, workflow and guardrails. |
| Demo slides present | Slide 10 covers the build journey; Slide 11 covers screenshot/video proof. |
| Reflection slide present | Slide 12 covers AI Work Paradox. |
| Q&A slide present | Final slide can be reached. |

## Export PDF

Reveal.js supports print/PDF mode through a query string. Use this only after visual checking:

```text
http://localhost:8000/?print-pdf
```

Then use the browser print dialog and choose "Save as PDF".

<details>
<summary>Offline Packaging Option</summary>

If the venue internet is unreliable, download and vendor these dependencies before the session:

| Dependency | Current Source | Why Vendor |
|------------|----------------|------------|
| Reveal.js CSS/JS | CDN in `index.html` | Slide runtime. |
| Reveal plugins | CDN in `index.html` | Highlight and notes. |
| Font Awesome | CDN in `index.html` | Icons. |
| Google Fonts | CDN in `index.html` | Typography consistency. |

After vendoring, update `index.html` links and verify again with [Quality Checklist](./quality-checklist.md).

</details>

## Related

- [Architecture](./architecture.md)
- [SOP Overview](./sop/index.md)
