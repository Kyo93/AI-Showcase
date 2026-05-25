# Design: Animate AI Update Slide

## Context & Technical Approach

The user wanted less text-heavy slides and more lively animation. The AI update slide is the right first target because it introduces the "chatbot to agent" narrative. The slide should become a visual story instead of four static text cards. It was later moved to Slide 4 during the narrative-flow reorder.

## Proposed Changes

### `index.html`
- Replace the static four-card grid on the AI update slide with a two-column layout:
  - left: Chat -> Agent visual with orbiting model/code/tool/guard nodes.
  - right: four compact story cards.
- Add Reveal fragments so the presenter can reveal the progression step by step.
- Add a final takeaway and source strip reveal at the end.

### `style.css`
- Add dedicated AI update visual classes for the chat node, agent core, orbit nodes and story cards.
- Add fragment animation classes:
  - `ai-fly-in`
  - `ai-zoom-in`
  - `ai-fade-in-soft`
- Respect `prefers-reduced-motion`.

### `presentation_script.md`
- Update the AI update script with click cues so the presenter can reveal each block in sync with speech.

## Verification

- `sections=13 notes=13`
- Fragment hooks exist on the AI update slide.
- `node --check script.js`
- Localhost responds 200.
- Screenshot spot-check confirms content is visible and not overlapping.
