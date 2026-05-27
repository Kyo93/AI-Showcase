---
title: "Design: AI Voice Pilot"
description: "Pilot workflow for adding a consented AI voice clone to selected demo slides."
keywords: ["OpenSpec", "AI voice", "voice clone", "presentation", "Reveal"]
robots: "index, follow"
---

# Design: AI Voice Pilot

## Context & Technical Approach

The deck can use an AI-generated voice clone as a proof moment, but the presenter does not yet have generated voice files in the repository. The safest implementation is a small opt-in audio layer:

- keep the live presenter as the primary experience
- prepare the script, consent, recording, and QA workflow
- only show in-deck voice controls when the audio manifest marks a clip as ready
- avoid autoplay so the presenter keeps control during the session

The initial pilot targets the Ocean USB Builder proof section because it is already the evidence-led part of the talk.

## Proposed Changes

### `assets/audio/voice-pilot/`

- Add a manifest that maps selected slides to expected MP3 files.
- Keep every entry disabled until the presenter generates and reviews the audio.
- Store generated files outside source code until they are intentionally added.

### `docs/sop/ai-voice-pilot.md`

- Define recording requirements, consent/disclosure rules, generation workflow, QA checklist, and deck activation steps.
- Use walkthrough mode by default. Do not publish or share the voice model.

### `raw-data/ai-voice-pilot-script.md`

- Provide short, TTS-ready segments for Slides 12-15.
- Include tone and pronunciation notes for Vietnamese plus English technical terms.

### `index.html`, `script.js`, `style.css`

- Add `data-voice-key` hooks to the demo proof slides.
- Load the manifest once and render a floating presenter control only for clips marked `ready: true`.
- Pause voice audio automatically on slide changes.

## Verification

- `node --check script.js`
- static manifest JSON parses successfully
- local server returns `200`
- browser smoke check confirms no console errors and no visible audio control while clips are not ready
- after generated MP3 files are added and manifest entries are enabled, verify playback manually on Slides 12-15
