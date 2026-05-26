# Design: Deck GSAP Motion System

## Context & Technical Approach

The deck is a static Reveal.js presentation. Motion should support the talk track rather than become a product demo by itself.

The implementation adds a `createDeckMotion()` controller in `script.js` beside the existing cover timeline. It uses GSAP timelines for:

- Standard slide entrances
- Reveal fragment show/hide events
- Survey count/bar reveal
- Workflow runner animation
- Demo proof scan animation

Reduced motion is respected by returning no-op handlers when `prefers-reduced-motion: reduce` is active.

## Proposed Changes

### `index.html`

- Bump `style.css` and `script.js` query strings to `1.2.2`.

### `script.js`

- Add `motion-gsap-ready` only when GSAP is available and reduced motion is not requested.
- Add `createDeckMotion()` with:
  - `handleSlide()`: standard slide entrance and slide-specific loops
  - `handleFragment()`: GSAP fragment reveal choreography
  - cleanup of generated runner/scan nodes on slide leave
- Keep `createCoverMotion()` for the cover-specific title choreography.

### `style.css`

- Add `.workflow-runner` as a transient GSAP-controlled visual token on the workflow slide.
- Add `.proof-scan-line` for the Demo proof media scan.
- Disable old CSS topic-bar animation when GSAP is active.

## Special Animations

### Survey Evidence Reveal

When the survey fragments are shown, the response count animates from `0` to `13`, the donut settles with a small scale/rotation ease, and topic bars fill with staggered GSAP transforms.

### Workflow Runner

On the Agentic coding workflow slide, a small orange runner moves along the top edge of each workflow step to make the `Plan -> Patch -> Verify -> Review` loop feel operational.

### Demo Proof Scan

On the Demo proof slide, media frames receive a subtle scanning highlight. This reinforces the idea that the slide is showing evidence, not a decorative mockup.

## Verification

- `node --check script.js`
- Playwright visual QA for Slide 3, Slide 4, Slide 8 and Slide 11
- Reduced-motion QA for Slide 8
- Full visible-slide overflow smoke test
- `git diff --check`
