---
title: "Design: Demo Media Proof"
description: "Implementation design for consolidating Ocean USB Builder proof media into the demo section."
keywords: ["OpenSpec", "Reveal.js", "Ocean USB Builder", "video proof"]
robots: "index, follow"
---

# Design: Demo Media Proof

## Context & Technical Approach

The demo section should now use real media:

- Screenshot: Ocean USB Builder actively building USB media, with source ISO, target USB, apps, drivers, progress/log and destructive-action warning visible.
- Video: USB boot/install Windows proof, to be added by the presenter later.

Because the chat screenshot is not currently a file in the workspace, the deck should reference a stable asset path and render a fallback placeholder if the file is not present.

## Proposed Changes

### `index.html`

- Replace Slide 11 content with a "Build USB -> Install Windows" proof layout.
- Left side: screenshot frame using `assets/images/ocean-usb-builder-live-build.png`.
- Right side: video frame using `assets/videos/ocean-usb-install-windows.mp4`.
- Add compact callouts: build progress/log, selected apps/drivers, and safe stopping before format/full run.
- Delete the old Slide 12 anatomy section.
- Move AI Work Paradox to Slide 12 and keep Q&A as final.

### `style.css`

- Add scoped styles for `.demo-proof-media-layout`, `.live-build-card`, `.install-video-card`, `.media-placeholder`, and proof callouts.
- Update final dark Q&A header-hide index after removing a horizontal slide.

### Docs

- Update `presentation_script.md`, `AGENTS.md`, `task.md`, docs/SOP references and raw slide mapping.

## Verification

- `node --check script.js`
- Localhost returns `200`
- Screenshot Slide 10, new Slide 11, Slide 12 and final Q&A.
- Confirm no overflow and no broken visual fallback.
