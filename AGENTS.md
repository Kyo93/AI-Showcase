---
title: "AI Project Handover"
description: "Context bus và handover notes cho AI Sharing Present."
keywords: ["AGENTS", "handover", "AI Sharing Present", "CM docs"]
robots: "index, follow"
---

# AI Project Handover & Context Bus

Tài liệu này là điểm đọc nhanh cho AI agent tiếp quản dự án.

## Project Context

- **Workspace**: `c:\Users\Ocean\Desktop\AI Sharing Present`.
- **Artifact**: Static Reveal.js slide deck for an AI sharing session.
- **Audience**: Sea technical/operations team.
- **Main theme**: Practical AI Agent Playbook: updates, agent prompting, skill ecosystem, workflow, guardrails and one real tool demo.
- **Active demo**: One demo only: Ocean USB Builder.
- **External demo repo**: `C:\Users\Ocean\Documents\VibeCode\OSDCloud`.

## Current Presentation Flow

| Slide | Topic |
|-------|-------|
| Cover | AI Agent Playbook |
| 1 | Cảm ơn Adam |
| 2 | Mục Lục Buổi Chia Sẻ |
| 3 | Team Cần Gì Từ AI? |
| 4 | AI Update 2026: Từ Chatbot Sang Agent |
| 5 | Chatbot -> AI Agent |
| 6 | Common AI Agent |
| 7 | Internal AI Agent Buildler: Alpha Intelligence & SMART intro only |
| 8 | Prompt Cho Agent |
| 9 | Skill Ecosystem Map, plus 9a-9c reference subslides |
| 10 | Agentic Coding Workflow |
| 11 | Guardrails |
| 12 | Demo build journey: problem, goal, stack, architecture, verification |
| 13 | PM brainstorm proof: two full-screen prompt/recommendation images |
| 14 | Demo proof: full-screen Ocean USB Builder screenshot |
| 15 | Real install proof: three real-device Windows install photos |
| 16 | AI Work Paradox |
| Final | Q&A |

## Demo Source Of Truth

Use these files first:

- [Demo Runbook](demo_instructions.md)
- [Presentation Script](presentation_script.md)
- [Ocean USB Builder SOP](docs/sop/live-demo-ocean-usb-builder.md)
- [Tool Contracts](docs/api/tool-contracts.md)
- [Raw Tool Scan](raw-data/ocean-usb-builder-tool-scan.md)

Do not reintroduce the older automation concepts as active demos. They were superseded when the user confirmed the only demo is the OSDCloud/Ocean USB Builder tool.
Alpha Intelligence and SMART can be mentioned as internal build platforms, but keep them as intro/context unless the user explicitly asks for a dedicated demo.

## Design System

- `DESIGN.md` was deleted during the visual reset. Do not recreate it unless the user explicitly asks.
- Active visual source of truth: `style.css` and [Reset Deck Visual System](openspec/changes/reset-deck-visual-system/proposal.md).
- Current direction: **Operator Briefing System**. The deck should feel like a calm internal operations briefing: practical, technical, evidence-led and presenter-friendly.
- Sea navy `#05007E` is the authority color. Shopee orange `#EE4D2D` is used sparingly for proof, risk, safety, demo relevance and final decision points. Sea blue `#1492FD` is used for system/progress cues.
- Light content slides are the default. Dark navy is reserved for the cover and Q&A closeout.
- Avoid patching another override layer onto `style.css`. If the design drifts again, simplify the component rules instead of adding a new rescue section.
- Slide 3 should read as an evidence-backed audience promise: survey signal -> ranked needs -> four practical questions -> Ocean USB Builder proof strip.

## Development Notes

- `index.html`: Cover, Slide 1-16, final Q&A and embedded Reveal speaker notes.
- `style.css`: slide layout/design system.
- `script.js`: Reveal initialization and particle background.
- Use `python -m http.server 8000` to view locally.
- Press `S` in the deck to open speaker view.

## Safety Notes

- The Ocean USB Builder demo can involve formatting a USB. Default to walkthrough mode.
- Only run a real full build with a disposable test USB and explicit presenter confirmation.
- Do not show secrets, passwords, enrollment payloads or private package URLs while screen sharing.
- Treat the OSDCloud repo as read-only unless the user explicitly asks to modify that tool.

## CM Docs

- Start at [docs/README.md](docs/README.md).
- Current task state is [task.md](task.md).
- Working memory is [.cm/CONTINUITY.md](.cm/CONTINUITY.md).
- Current OpenSpec change is [openspec/changes/demo-media-proof/proposal.md](openspec/changes/demo-media-proof/proposal.md).
- Demo-scope OpenSpec change is [openspec/changes/single-ocean-usb-demo/design.md](openspec/changes/single-ocean-usb-demo/design.md).
