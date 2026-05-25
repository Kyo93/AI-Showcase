---
title: "Database"
description: "Phạm vi dữ liệu của dự án và lý do không có database nội bộ."
keywords: ["database", "static site", "data scope", "Ocean USB Builder"]
robots: "index, follow"
---

# Database

> **Quick Reference**
> - **Engine**: Not applicable.
> - **ORM**: Not applicable.
> - **Persistence**: None inside this presentation repository.
> - **Related**: [Data Flow](./data-flow.md), [Tool Contracts](./api/tool-contracts.md).

## Scope

This project does not include an internal database. It is a static presentation artifact with Markdown documentation. The live demo references a separate local tool repo, `C:\Users\Ocean\Documents\VibeCode\OSDCloud`, but that repo is not a database for this presentation.

## Data Sources

| Data Source | Location | Persistence |
|-------------|----------|-------------|
| Slide content | `index.html` | Static file |
| Speaker notes | `presentation_script.md` and embedded Reveal notes | Static file |
| Demo runbook | `demo_instructions.md` | Static file |
| AI work paradox source | `raw-data/ai-work-paradox.md` | Static file |
| Ocean USB Builder scan | `raw-data/ocean-usb-builder-tool-scan.md` | Static file |
| External tool app manifest | `C:\Users\Ocean\Documents\VibeCode\OSDCloud\core\ocean-offline\Apps.json` | External repo file |

## Data Handling Rules

| Rule | Reason |
|------|--------|
| Keep this repo as documentation/presentation only | Avoid accidentally changing the demo tool. |
| Do not paste private package URLs or enrollment payloads into docs | Prevent source leakage. |
| Do not show real passwords or tokens while screen sharing | Protect internal operations data. |
| Document tool shape in [Tool Contracts](./api/tool-contracts.md) | Makes the demo reproducible without exposing secrets. |

:::warning
The demo tool may operate on real disks. Treat USB disk selection as destructive until proven otherwise.
:::

## Related

- [Quality Checklist](./quality-checklist.md)
- [Live Demo Ocean USB Builder SOP](./sop/live-demo-ocean-usb-builder.md)
