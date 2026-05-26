---
title: "Quality Checklist"
description: "Checklist kiểm tra trước khi trình bày, chạy demo hoặc bàn giao AI Sharing Present."
keywords: ["quality checklist", "presentation QA", "Ocean USB Builder", "CM gate"]
robots: "index, follow"
---

# Quality Checklist

> **Quick Reference**
> - **Use Before**: Live presentation, demo rehearsal, PDF export or handover.
> - **Owner**: Presenter or next AI agent.
> - **Related**: [Deployment](./deployment.md), [SOP Overview](./sop/index.md).

## Slide Deck Checks

| Check | Pass Criteria | Source |
|-------|---------------|--------|
| Open deck | Slide 1 renders with title and subtitle. | `index.html` |
| Navigate slides | Keyboard arrows and controls move across slides. | `script.js` |
| Agenda slide | Slide 2 summarizes the full presentation flow. | `index.html` |
| Playbook slides | Slide 3 through Slide 9 cover team needs, AI update, prompt, skill ecosystem, workflow and guardrails. | `index.html` |
| Demo slides | Slide 10 covers the build journey; Slide 11 covers screenshot/video proof. | `index.html` |
| Paradox slide | Slide 12 covers the AI Work Paradox reflection. | `index.html` |
| Q&A slide | Final slide is reachable. | `index.html` |
| Speaker notes | Speaker view opens with notes for all slides. | `index.html` |
| Visual background | Canvas effect does not cover or block text. | `script.js`, `style.css` |

## Demo Checks

| Check | Pass Criteria | Related SOP |
|-------|---------------|-------------|
| Repo ready | `C:\Users\Ocean\Documents\VibeCode\OSDCloud` opens locally. | [Ocean USB Builder SOP](./sop/live-demo-ocean-usb-builder.md) |
| App ready | `dist\OceanUsbBuilder\OceanUsbBuilder.exe` exists. | [Ocean USB Builder SOP](./sop/live-demo-ocean-usb-builder.md) |
| Manifest ready | `core\ocean-offline\Apps.json` opens and does not show private secrets. | [Tool Contracts](./api/tool-contracts.md) |
| Screenshot proof ready | `assets/images/ocean-usb-builder-live-build.png` exists, or Slide 11 fallback is acceptable for rehearsal. | `index.html` |
| USB install video ready | `assets/videos/ocean-usb-install-windows.mp4` exists, or Slide 11 fallback is acceptable until final media is added. | `index.html` |
| Safety mode chosen | Presenter decides walkthrough vs real build before going live. | [Ocean USB Builder SOP](./sop/live-demo-ocean-usb-builder.md) |
| Fallback path ready | Presenter can explain screenshots, docs or logs if app cannot run live. | [Demo Catalog](./demo-catalog.md) |

## Security And Safety Checks

| Risk | Required Action |
|------|-----------------|
| USB data loss | Do not click full build unless the selected USB is disposable and confirmed. |
| Secret exposure | Hide passwords, tokens, enrollment payloads and private package URLs. |
| Admin prompt confusion | Explain why Administrator rights are required before accepting. |
| Screen sharing mistake | Hide unrelated tabs, notifications and file paths not needed for demo. |
| Tool repo drift | Do not edit the OSDCloud repo while preparing presentation docs unless explicitly requested. |

:::warning
The live demo should prove the workflow and architecture. It does not need to format a USB in front of the audience.
:::

## Related

- [Tool Contracts](./api/tool-contracts.md)
- [Run Slide Deck SOP](./sop/run-slide-deck.md)
