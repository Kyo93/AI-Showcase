---
title: "Design: Integrate AI Work Paradox"
description: "Plan to save raw source material and synthesize its knowledge into the presentation deck."
keywords: ["OpenSpec", "AI work paradox", "presentation", "raw data"]
robots: "index, follow"
---

# Design: Integrate AI Work Paradox

## Context & Technical Approach

The user supplied long-form Vietnamese source material about the paradox of AI productivity: faster execution can increase work, fatigue and decision load. The deck now uses this material as the closing reflection after the Ocean USB Builder demo/anatomy section.

## Proposed Changes

### Raw Data

- Store the original article in `raw-data/ai-work-paradox.md`.
- Preserve the content as source material for future edits.

### Presentation Deck

- Keep one synthesized reflection slide: `AI Work Paradox: Nhanh Hơn Không Tự Động Nhàn Hơn`.
- Place it after the demo/anatomy section so the audience first sees a real AI-built tool, then reflects on judgment and stopping points.
- Keep the existing visual language: Sea navy, Shopee orange, white cards and concise slide text.

### Presenter Script

- Add matching script section.
- Use it as the final conceptual bridge into Q&A.

### CM State

- Update `task.md` and `.cm/CONTINUITY.md`.

## Verification

- Count slide sections and speaker notes.
- Run `node --check script.js`.
- Confirm localhost returns HTTP 200.
- Verify the raw-data file exists.

## Related

- [Task Checklist](./tasks.md)
- [Raw Source](../../../raw-data/ai-work-paradox.md)
