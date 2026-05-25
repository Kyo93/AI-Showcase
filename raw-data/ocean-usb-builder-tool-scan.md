---
title: "Ocean USB Builder Tool Scan"
description: "Raw scan notes for the single AI Agentic demo in AI Sharing Present."
keywords: ["Ocean USB Builder", "OSDCloud", "AI Agentic", "Windows USB", "Sea apps"]
robots: "noindex, follow"
---

# Ocean USB Builder Tool Scan

> **Captured**: 2026-05-25  
> **Source Repo**: `C:\Users\Ocean\Documents\VibeCode\OSDCloud`  
> **Use In Deck**: Slides 10-11 and demo runbook.

## Demo Thesis

The demo should show a real AI Agentic output, not a mock workflow. Ocean USB Builder is a Windows desktop tool that helps an admin create a bootable offline Windows 11 Pro USB, stage required applications and drivers, and standardize machine preparation.

## Key Entrypoints

| Item | Path | Notes |
|------|------|-------|
| WPF admin app | `dist\OceanUsbBuilder\OceanUsbBuilder.exe` | Run as Administrator. Primary demo surface. |
| Build engine | `tools\Invoke-OceanUsbBuild.ps1` | Called by the WPF app to format/build USB media. |
| Payload update engine | `tools\Update-OceanUsbPayload.ps1` | Updates apps/drivers payload on existing USB/media. |
| App manifest | `core\ocean-offline\Apps.json` | Defines offline app installers and silent args. |
| Architecture docs | `docs\architecture.md` | Explains WPF, PowerShell, WinPE, USB and post-install flow. |
| Admin guide | `docs\admin-guide.md` | Operational guide for building/updating the USB. |
| Operations runbook | `docs\operations-runbook.md` | Build, publish, validate and troubleshoot commands. |

## What The Tool Does

1. Admin runs `OceanUsbBuilder.exe` as Administrator.
2. Admin selects a Windows ISO, target USB disk, offline apps, drivers, local admin account and timezone.
3. The app calls `tools\Invoke-OceanUsbBuild.ps1`.
4. The engine formats the selected USB, copies WinPE boot files, stages the Windows 11 Pro image, creates `OSDCloud\Apps`, stages manual driver bundles and copies Ocean deployment scripts.
5. The engine patches `boot.wim` so WinPE starts the Ocean Offline deployment flow.
6. During install, the offline deploy engine installs Windows, drivers and selected apps.

## Apps Currently Listed

| App | Install Group | Notes |
|-----|---------------|-------|
| 7-Zip | standard | Silent EXE install. |
| Google Chrome Enterprise | standard | MSI quiet install. |
| UniKey | standard | ZIP extraction, shortcut and run-at-logon. |
| Zoom Workplace | standard | MSI quiet install. |
| LibreOffice | standard | MSI quiet install with longer timeout. |
| Microsoft Windows Desktop Runtime 8 x64 | prerequisite | Dell-only prerequisite. |
| Dell Command Update | vendor | Dell-only vendor tool with timeout handling. |
| Workspace ONE Intelligent Hub | standard | Background install, enrollment disabled by default. |

## Demo Guardrails

| Risk | Guardrail |
|------|-----------|
| USB data loss | Do not run a real full build unless a disposable test USB is selected and the presenter explicitly confirms formatting. |
| Admin privilege | Open the app as Administrator only during rehearsal or live demo when needed. |
| Secrets | Do not show real internal payloads, keys, enrollment tokens or private package URLs. |
| Long runtime | Prefer walkthrough mode: show GUI, repo structure, manifest, engine and docs; only show a recorded/logged build if timing is tight. |
| External repo changes | This presentation repo only documents the tool. Do not edit the OSDCloud repo while preparing the deck. |

## Slide Mapping

| Slide | Message |
|-------|---------|
| Slide 10 | "This is the real tool: Ocean USB Builder creates a Windows 11 Pro offline USB with apps/drivers." |
| Slide 11 | "AI Agentic helped manage layers: WPF GUI, PowerShell engine, WinPE/cache, post-install flow, validation scripts and guardrails." |
