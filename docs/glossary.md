---
title: "Glossary"
description: "Thuật ngữ chính dùng trong slide, live demo và tài liệu CM."
keywords: ["glossary", "AI Agent", "Ocean USB Builder", "OSDCloud"]
robots: "index, follow"
---

# Glossary

> **Quick Reference**
> - **Scope**: Terms used across the slide deck, runbooks and demo contracts.
> - **Audience**: Presenter, reviewers and future AI agents.
> - **Related**: [Demo Catalog](./demo-catalog.md), [Architecture](./architecture.md).

## Terms

| Term | Meaning |
|------|---------|
| AI Agent | A system that can plan, use tools and complete multi-step tasks with some autonomy. |
| Agentic Coding | Workflow where an AI agent helps plan, edit, test, document and iterate on software tasks. |
| Prompt | Instruction sent to an LLM, ideally with context, role, task, constraints and output format. |
| Skill | Reusable instruction package for an AI coding agent, used to standardize repeated work. |
| Ocean USB Builder | WPF desktop tool in the OSDCloud repo that prepares a bootable Windows offline install USB. |
| OSDCloud | External local repo at `C:\Users\Ocean\Documents\VibeCode\OSDCloud` used for the live demo. |
| WinPE | Windows Preinstallation Environment used to boot and launch the offline deployment flow. |
| Apps Manifest | `core\ocean-offline\Apps.json`, the JSON file defining offline app installers and detection rules. |
| Guardrail | Explicit safety boundary such as confirming USB formatting or hiding secrets before screen sharing. |
| Reveal.js | Browser presentation framework used by the slide deck. |
| SOP | Standard Operating Procedure: step-by-step guide for repeatable execution. |
| CM Docs | CodyMaster-style documentation with frontmatter, quick references, internal links and clear handover. |

## Related Reading

- [Data Flow](./data-flow.md)
- [Tool Contracts](./api/tool-contracts.md)
