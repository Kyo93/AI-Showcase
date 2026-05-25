---
title: "Tool Contracts"
description: "Operational contracts for the Ocean USB Builder demo."
keywords: ["Ocean USB Builder", "tool contracts", "Apps.json", "PowerShell", "Windows USB"]
robots: "index, follow"
---

# Tool Contracts

> **Quick Reference**
> - **Demo Tool**: `C:\Users\Ocean\Documents\VibeCode\OSDCloud`.
> - **App Entrypoint**: `dist\OceanUsbBuilder\OceanUsbBuilder.exe`.
> - **Engine Entrypoint**: `tools\Invoke-OceanUsbBuild.ps1`.
> - **Related**: [API Overview](./index.md), [Data Flow](../data-flow.md).

## WPF App Input Contract

| Input | Required | Notes |
|-------|----------|-------|
| Windows ISO | Yes | Used for boot files and Windows 11 Pro image source. |
| Target USB disk | Yes for full build | Destructive input; selected disk is formatted. |
| Offline apps | Optional but demo-relevant | Selected from app manifest/payload. |
| Drivers | Optional but demo-relevant | Folder, ZIP/CAB package or Dell driver EXE. |
| Local admin account | Yes for configured install | Do not show real passwords on screen. |
| Timezone | Yes | Applied during deployment. |

## PowerShell Engine Contract

| Entrypoint | Contract |
|------------|----------|
| `tools\Invoke-OceanUsbBuild.ps1` | Full build engine called by the WPF app. Validates inputs, formats USB, stages WinPE, Windows image, apps, drivers and deploy scripts. |
| `tools\Update-OceanUsbPayload.ps1` | Updates apps/drivers payload without presenting a second primary demo path. |
| `tools\Test-OceanUsbMediaSource.ps1` | Validates staged USB/media source for operations checks. |

## Apps Manifest Contract

`core\ocean-offline\Apps.json` stores the offline application definitions.

| Field | Meaning |
|-------|---------|
| `name` | Display name of the app. |
| `type` | Installer type such as `exe`, `msi` or `zip`. |
| `path` | Local staged installer path. |
| `sourceUrl` | Package source URL. Do not expose private/internal URLs in public docs. |
| `arguments` | Silent install arguments. |
| `installGroup` | Group such as `prerequisite`, `standard` or `vendor`. |
| `installOrder` | Numeric ordering for install sequence. |
| `detectPath`, `detectPaths`, `detectRegistryDisplayNames` | Rules used to verify whether install succeeded or is already present. |
| `successExitCodes` | Installer exit codes treated as success. |

## USB Output Contract

Expected runtime layout:

```text
USB BOOT partition
+-- sources\boot.wim

USB OSDDATA partition
+-- OSDCloud\OS
+-- OSDCloud\Apps
+-- OSDCloud\DriverPacks
+-- OSDCloud\Ocean
```

The build may use a project-local fast Windows 11 Pro image cache before copying the final payload to USB.

## Safety Contract

| Risk | Required Rule |
|------|---------------|
| USB data loss | Full build must require explicit confirmation before formatting. |
| Wrong disk | Presenter must verify USB bus type, disk number and size before continuing. |
| Admin secrets | Do not show passwords, tokens or enrollment payloads while screen sharing. |
| Package privacy | Redact private source URLs before showing manifests outside approved audience. |
| Timing | Walkthrough mode is acceptable and preferred when a full build may exceed demo time. |

## Related

- [Live Demo Ocean USB Builder SOP](../sop/live-demo-ocean-usb-builder.md)
- [Quality Checklist](../quality-checklist.md)
