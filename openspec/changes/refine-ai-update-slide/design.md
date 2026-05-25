---
title: "Design: Refine AI Update Slide"
description: "Plan to improve the AI update slide into a stronger speaker-ready story."
keywords: ["OpenSpec", "AI update", "slide refinement", "presentation"]
robots: "index, follow"
---

# Design: Refine AI Update Slide

## Context & Technical Approach

The AI update slide contains the right themes, but it originally read like a news summary. The user asked to save the speaker-coach feedback, create a plan and execute the fixes. This slide was later moved to Slide 4 during the narrative-flow reorder.

The implementation should keep the 13-slide deck structure and refine the AI update slide plus related script/status docs.

## Proposed Changes

### Raw Data

- Save the speaker-coach review under `raw-data/ai-update-slide-speaker-review.md`.

### `index.html`

- Title the AI update slide `AI Update 2026: Từ Chatbot Sang Agent`.
- Replace long trend-card text with shorter card headlines and proof lines.
- Add a clear audience takeaway strip:
  - "Câu hỏi mới không phải AI trả lời gì, mà là Agent được phép làm gì và kiểm chứng ra sao?"
- Add dated source strip.
- Update embedded speaker notes with the stronger narrative.

### `style.css`

- Add a compact `takeaway-strip` style that visually separates the final speaker point from source citations.

### `presentation_script.md`

- Rewrite the AI update script to match the new stage-ready story.

### Status Docs

- Update `task.md` and `.cm/CONTINUITY.md` with the completed refinement and verification status.

## Verification

- `sections=13 notes=13`
- `node --check script.js`
- `http://localhost:8000` returns 200
- Markdown links OK
- Frontmatter OK
- Stale demo references remain removed
- Letter spacing remains 0/non-positive-free per current design rule
