# Design: Cover GSAP Animation

## Context & Technical Approach

The deck is a static Reveal.js presentation. The cover animation should run when horizontal slide index `0` is active and stop when the presenter leaves the cover.

GSAP is loaded from jsDelivr with a fixed version:

```html
https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js
```

The runtime is intentionally defensive: if GSAP is unavailable or the user prefers reduced motion, the deck keeps the static cover fully visible.

## Proposed Changes

### `index.html`

- Load GSAP before `script.js`.
- Bump the stylesheet query string to avoid stale cached cover styles.

### `script.js`

- Add `createCoverMotion()`.
- Build a GSAP timeline for the cover:
  - brand and nav enter first
  - title reveals in two lines
  - subtitle, demo pill and metadata follow
  - workflow steps stagger in from the right
  - active `Reason / Plan` step receives a restrained pulse loop
- Kill timelines when leaving the cover slide.

### `style.css`

- Add `will-change` only to elements that animate.
- Keep animation hooks scoped to the cover.
- Reuse the existing global reduced-motion CSS fallback.

## Verification

- `node --check script.js`
- CDN HEAD check for GSAP runtime
- Localhost cover visual QA at 1280x720
- Reduced-motion QA
- `git diff --check`
