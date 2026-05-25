---
title: "Design: Single Ocean USB Builder Demo"
description: "Plan to make Ocean USB Builder the only live demo in the AI Sharing Present deck."
keywords: ["OpenSpec", "Ocean USB Builder", "demo", "AI Agentic"]
robots: "index, follow"
---

# Design: Single Ocean USB Builder Demo

## Context & Technical Approach

The presentation now has one live demo: using AI Agentic workflows to build the Ocean USB Builder tool in `C:\Users\Ocean\Documents\VibeCode\OSDCloud`. The demo should prove that AI Agentic can move beyond chat and generate a real operations tool: a WPF app plus PowerShell engine that prepares a bootable Windows 11 Pro offline USB and stages Sea-ready apps/drivers.

The documentation must stop describing the older automation concepts as active demos. Operational runbooks, data flow, contracts and quality gates must point to the Ocean USB Builder demo.

## Proposed Changes

### Slide And Script

- Keep the demo scope focused even though the deck now has 13 slides after adding a beginning agenda page.
- Make Slide 10-11 the only demo sequence in the current Practical Agent Playbook deck:
  - Slide 10: what Ocean USB Builder does and where the repo/app are.
  - Slide 11: architecture anatomy of the WPF app, PowerShell engine, WinPE kit/cache, post-install flow and safe guardrails.
- Update speaker notes and Q&A so the presenter does not accidentally promise superseded external automation demos.

### Raw Data

- Add `raw-data/ocean-usb-builder-tool-scan.md` as the source note for the OSDCloud tool.
- Record the inspected local repo path, key entrypoints, app list and demo safety boundaries.

### CM Documentation

- Rewrite `demo_instructions.md` as the single demo runbook.
- Replace old two-demo catalog/SOP/API references with Ocean USB Builder documentation.
- Add one SOP: `docs/sop/live-demo-ocean-usb-builder.md`.
- Replace event-style contracts with tool contracts for local files, CLI/app entrypoints, inputs, outputs and safety rules.

## Verification

- Search for stale active-demo references to superseded demos.
- Verify the deck still has 13 sections and 13 speaker notes.
- Run `node --check script.js`.
- Confirm `http://localhost:8000` responds if the local server is running.
