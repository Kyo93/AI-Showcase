---
title: "Run Slide Deck"
description: "SOP mở, kiểm tra và trình chiếu slide web AI Sharing Present."
keywords: ["run slide deck", "Reveal.js", "presentation SOP", "local server"]
robots: "index, follow"
---

# Run Slide Deck

> **Quick Reference**
> - **Who**: Presenter.
> - **Where**: Project root, then browser.
> - **Time**: 5-10 minutes.
> - **Prerequisites**: Browser, project folder and optional Python 3.

## Prerequisites

- [ ] Open project folder `c:\Users\Ocean\Desktop\AI Sharing Present`.
- [ ] Confirm `index.html`, `style.css` and `script.js` exist.
- [ ] Confirm internet access if using CDN assets.
- [ ] Read [Quality Checklist](../quality-checklist.md).

## Step-by-Step Guide

### Step 1: Open The Deck

Option A: open `index.html` directly in a browser.

Option B: run a local server:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Step 2: Verify Slide Runtime

| Item | Expected |
|------|----------|
| Slide 1 | Title appears. |
| Controls | Next/previous controls are visible. |
| Progress | Reveal progress bar moves. |
| Background | Particle canvas is subtle and non-blocking. |
| Slide 2 | Agenda/table of contents appears. |
| Slide 3 | Team needs survey appears. |
| Slide 4 | AI update appears. |
| Slide 6 | Prompt for Agent appears. |
| Slide 7 | Skill ecosystem map appears. |
| Slide 8 | Agentic coding workflow appears. |
| Slide 9 | Guardrails appear. |
| Slide 10 | Ocean USB Builder demo appears. |
| Slide 11 | Ocean USB Builder anatomy appears. |
| Slide 12 | AI work paradox appears. |
| Slide 13 | Q&A appears. |

### Step 3: Rehearse With Script

Use `presentation_script.md` as speaker notes. Slide 2 gives the audience-facing agenda. Slide 10 starts the Ocean USB Builder demo, Slide 11 explains the tool anatomy and safe operating boundaries, and Slide 12 closes with the AI Work Paradox reflection.

### Step 4: Open Speaker View

The script is embedded directly into the deck as Reveal.js speaker notes.

1. Open [http://localhost:8000](http://localhost:8000).
2. Click inside the slide window.
3. Press `S`.
4. A separate speaker view window opens with the current slide, next slide and notes.
5. Share only the original slide window in Zoom/Meet/Teams, then read from the speaker view window privately.

:::tip
Keep `presentation_script.md` open on a second screen if possible. The slide deck is visual; the speaker view carries the exact transition lines.
:::

## Expected Results

- The deck opens without layout breakage.
- The presenter can navigate from Slide 1 to Slide 13.
- The Ocean USB Builder demo slides are reachable before the session starts.

## Troubleshooting

<details>
<summary>Controls or plugins do not work</summary>

**Cause:** CDN script failed to load or the browser blocked local file behavior.

**Solution:**
1. Use `python -m http.server 8000`.
2. Refresh `http://localhost:8000`.
3. Check internet connectivity for Reveal.js CDN assets.

</details>

<details>
<summary>Visual design looks different</summary>

**Cause:** Fonts or icons did not load from CDN.

**Solution:**
1. Check internet connectivity.
2. If the venue is offline, vendor fonts/icons before the session.
3. Re-run [Quality Checklist](../quality-checklist.md).

</details>

## Related

- [Deployment Guide](../deployment.md)
- [SOP Overview](./index.md)
