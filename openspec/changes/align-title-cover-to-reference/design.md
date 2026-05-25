# Design: Align Title Cover To Reference

## Context & Technical Approach

The current Slide 1 drifted into a personal diary treatment, while the requested reference is a dark technical command-center cover. The deck should open with the main theme directly: AI Agent Playbook.

## Proposed Changes

### `index.html`
- Replace Slide 1 copy with `AI AGENT PLAYBOOK`, the practical subtitle, and the Ocean USB Builder demo tag.
- Add a top system bar, bottom status bar, and right-side AI orbit visual within the existing Reveal.js slide.

### `style.css`
- Add a dedicated `tech-cover` visual system using the provided navy, Sea blue, and Shopee orange palette.
- Keep the design self-contained so the lighter briefing slides remain unchanged.

### `presentation_script.md`
- Update Slide 1 speaker notes from personal diary framing to practical playbook framing.

## Verification

- Confirm the deck still has 13 slides and 13 speaker notes.
- Run JavaScript syntax check.
- Open Slide 1 locally and capture a visual QA screenshot.
