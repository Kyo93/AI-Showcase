---
title: "Tool Contracts Overview"
description: "Phạm vi API/tool contracts của AI Sharing Present sau khi chuyển sang demo Ocean USB Builder."
keywords: ["tool contracts", "Ocean USB Builder", "WPF", "PowerShell", "OSDCloud"]
robots: "index, follow"
---

# Tool Contracts Overview

> **Quick Reference**
> - **Internal API**: None in this presentation repo.
> - **External Demo Tool**: Ocean USB Builder in local OSDCloud repo.
> - **Primary Contracts**: WPF inputs, PowerShell build parameters, app manifest, USB output layout.
> - **Related**: [Tool Contracts](./tool-contracts.md), [Data Flow](../data-flow.md).

## Scope

This repository does not implement a backend API. It documents the contract between the presentation and the external local demo tool at `C:\Users\Ocean\Documents\VibeCode\OSDCloud`.

The active demo does not require HTTP event payloads. It uses local files, a Windows desktop app and PowerShell scripts.

## Contract List

| Contract | Direction | Document |
|----------|-----------|----------|
| WPF app inputs | Presenter/Admin to Ocean USB Builder | [Tool Contracts](./tool-contracts.md) |
| PowerShell build engine | WPF app to `Invoke-OceanUsbBuild.ps1` | [Tool Contracts](./tool-contracts.md) |
| Apps manifest | `Apps.json` to payload staging/install engine | [Tool Contracts](./tool-contracts.md) |
| USB output layout | Build engine to bootable USB media | [Tool Contracts](./tool-contracts.md) |

:::info
This documentation records operational shape, not secrets. Do not add enrollment tokens, private package URLs or real internal payloads.
:::

## Related

- [Database](../database.md)
- [Quality Checklist](../quality-checklist.md)
