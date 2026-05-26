---
title: "Design: Demo Build Journey"
description: "Implementation design for adding a build-journey slide before the Ocean USB Builder live demo."
keywords: ["OpenSpec", "Reveal.js", "Ocean USB Builder", "demo slide"]
robots: "index, follow"
---

# Design: Demo Build Journey

## Context & Technical Approach

The presentation is a static Reveal.js deck. The new slide should not introduce a second demo. It should explain how the existing Ocean USB Builder demo was formed through an agentic workflow:

1. Identify the operational pain point.
2. Define the tool goal and constraints.
3. Pick technology that matches the environment.
4. Split the system into clear layers.
5. Verify and hand over the result.

Source evidence comes from the read-only OSDCloud repo:

- `.NET 9 WPF` app in `src\OceanUsbBuilder.App`.
- PowerShell build engine in `tools\Invoke-OceanUsbBuild.ps1`.
- App manifest in `core\ocean-offline\Apps.json`.
- WinPE/Windows 11 Pro cache strategy in `README.md` and `docs\architecture.md`.
- Operations tests and runbooks in `docs\operations-runbook.md`.

## Proposed Changes

### `index.html`

- Insert a new slide after Guardrails and before the live Demo.
- Title: `Demo hình thành như thế nào?`
- Use a two-column layout:
  - Left: five-step journey from pain point to verification.
  - Right: decision board showing how AI/human roles map to goal, stack, architecture, validation and approval.
- Add speaker notes explaining that AI did not "magically build an app"; it followed a scoped workflow with human product/architecture judgment.

### `style.css`

- Add scoped styles for the build journey slide.
- Keep the Operator Briefing System: light slide, Sea navy/blue authority colors, Shopee orange only for safety/proof.
- Avoid nested cards and avoid adding another broad override layer.

### Documentation

- Update `presentation_script.md`.
- Update AGENTS/task/continuity and core docs that reference the 13-slide flow or Slide 10-13 mapping.

## Verification

- Check `index.html` has 14 main sections and matching notes.
- Run `node --check script.js`.
- Check local server status.
- Screenshot the new slide and downstream demo/Q&A slides.
