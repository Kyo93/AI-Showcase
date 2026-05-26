# Design: Cover Cinematic Opening

## Context & Technical Approach

The cover already has a GSAP timeline in `createCoverMotion()`. The cinematic opening extends that timeline with a `cover-cinema` layer inside `.tech-cover-visual`.

The layer contains five image cards:

- Codex
- Antigravity
- Claude Code
- Ocean USB Builder proof
- Skill/SOP layer

Cards animate from far-away 3D positions using `x`, `y`, `z`, `rotationX`, `rotationY`, `rotation`, `scale`, `autoAlpha` and `filter`. After the fly-in, each card converges toward the center of the cover visual and fades out before the workflow diagram finishes entering.

## Proposed Changes

### `index.html`

- Add `.cover-cinema` with five `.cinema-card` figures under `.tech-cover-visual`.
- Bump `style.css` and `script.js` query strings to `1.2.3`.

### `style.css`

- Add 3D perspective to `.tech-cover-visual`.
- Add `.cover-cinema` and `.cinema-card` styles.
- Keep cinema cards hidden by default so reduced-motion users see the clean static cover.

### `script.js`

- Extend `createCoverMotion()` to animate `.cinema-card` elements.
- Use a GSAP timeline stage:
  - cards fly in from distant positions
  - cards converge toward the visual center
  - cards fade out
  - workflow diagram takes focus

## Verification

- `node --check script.js`
- Cover Playwright QA midflight and settled screenshots
- Reduced-motion cover QA
- Cover overflow check
- `git diff --check`
