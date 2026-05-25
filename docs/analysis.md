---
title: "Codebase Analysis"
description: "Phân tích codebase tĩnh của AI Sharing Present theo chuẩn CM DocKit."
keywords: ["codebase analysis", "Reveal.js", "static site", "AI Sharing Present"]
robots: "index, follow"
---

# Codebase Analysis

> **Quick Reference**
> - **Project Type**: Static web slide deck.
> - **Languages**: HTML, CSS, JavaScript, Markdown.
> - **Frameworks**: Reveal.js loaded from CDN.
> - **Runtime**: Browser; optional local static server.
> - **Source Docs**: [Demo Catalog](./demo-catalog.md), [Architecture](./architecture.md).

## Summary

AI Sharing Present is a static slide web app for an AI sharing session. The active demo is a single external tool walkthrough: Ocean USB Builder in `C:\Users\Ocean\Documents\VibeCode\OSDCloud`.

## Directory Structure

```text
.
+-- index.html
+-- style.css
+-- script.js
+-- presentation_script.md
+-- demo_instructions.md
+-- AGENTS.md
+-- README.md
+-- task.md
+-- raw-data/
+-- docs/
+-- openspec/
+-- .cm/
```

## Technology Detection

| Signal | Finding | Evidence |
|--------|---------|----------|
| HTML entry | Static slide deck | `index.html` |
| Reveal.js CSS/JS | Presentation framework via CDN | `index.html` |
| Custom CSS | Local design system | `style.css` |
| Custom JS | Reveal init and particle canvas | `script.js` |
| Markdown docs | Presenter script and demo runbook | `presentation_script.md`, `demo_instructions.md` |

## Architecture Layers

| Layer | Component | Role |
|-------|-----------|------|
| Presentation | `index.html` | 13-slide Reveal deck |
| Styling | `style.css` | Sea/Shopee design tokens and layouts |
| Interaction | `script.js` | Reveal initialization and particle animation |
| Content | `presentation_script.md` | Speaker notes and Q&A |
| Demo Ops | `demo_instructions.md` | Ocean USB Builder walkthrough and prompt recipes |
| Raw Data | `raw-data/` | Source material synthesized into slides/docs |

## Entry Points

| Entry Point | Purpose |
|-------------|---------|
| `index.html` | Browser entry for the slide deck |
| `script.js` | Runs after DOM is ready |
| `style.css` | Defines design variables and components |
| `demo_instructions.md` | Presenter-facing demo runbook |

## External Demo Tool

| Tool Area | Path |
|----------|------|
| Repo | `C:\Users\Ocean\Documents\VibeCode\OSDCloud` |
| WPF app | `dist\OceanUsbBuilder\OceanUsbBuilder.exe` |
| Build engine | `tools\Invoke-OceanUsbBuild.ps1` |
| App manifest | `core\ocean-offline\Apps.json` |

The presentation repo documents and presents this tool. It should not edit the OSDCloud repo unless the user explicitly asks.

## Database Schema

No internal database, ORM, migration folder or persistent data store is present. See [Database](./database.md).

## Dependencies

| Category | Dependency | Source | Purpose |
|----------|------------|--------|---------|
| Presentation | Reveal.js 4.5.0 | CDN | Slide rendering and navigation. |
| Code highlight | Reveal Highlight plugin | CDN | Syntax highlighting for code blocks. |
| Speaker notes | Reveal Notes plugin | CDN | Optional speaker notes support. |
| Icons | Font Awesome 6.4.0 | CDN | Slide icons. |
| Fonts | Google Fonts | CDN | Inter, JetBrains Mono, Outfit, Open Sans. |

## Test Coverage

| Area | Current Status | Recommendation |
|------|----------------|----------------|
| Automated tests | Not present | Add visual smoke test if this becomes a maintained web artifact. |
| Manual QA | Required before presenting | Use [Quality Checklist](./quality-checklist.md). |
| Demo rehearsal | Required | Use [Live Demo Ocean USB Builder SOP](./sop/live-demo-ocean-usb-builder.md). |

<details>
<summary>Undetermined Items</summary>

- No `package.json`, CI config or test runner was found in the presentation workspace scan.
- No repository metadata is available because this folder is not currently a Git repository.
- The OSDCloud repo is external to this workspace and was inspected read-only for presentation content.

</details>
