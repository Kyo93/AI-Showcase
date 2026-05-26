---
title: "AI Sharing Present"
description: "Tổng quan dự án slide web và bộ tài liệu CM cho buổi chia sẻ AI Agent Playbook."
keywords: ["AI Agent Playbook", "Workflow Automation", "CM documentation", "Reveal.js", "Ocean USB Builder"]
robots: "index, follow"
---

# AI Sharing Present

> **Quick Reference**
> - **What**: Slide web tương tác cho buổi chia sẻ "AI Agent Playbook".
> - **Audience**: Thành viên team kỹ thuật/vận hành muốn xem demo AI thực tế.
> - **Demo duy nhất**: Ocean USB Builder tại `C:\Users\Ocean\Documents\VibeCode\OSDCloud`.
> - **CM docs**: Bắt đầu tại [docs/README.md](./docs/README.md).

Dự án này gồm bộ slide HTML/CSS/JS chạy bằng Reveal.js, kịch bản thuyết trình và hướng dẫn diễn một demo thật. Mạch chính là Practical AI Agent Playbook: mục lục đầu bài, nhu cầu thật của team, AI update gần đây, Chatbot -> Agent, prompt cho Agent, skill ecosystem, Agentic Coding Workflow, guardrails, hành trình build Ocean USB Builder, demo thật và AI Work Paradox.

## Start Here

| Nhu cầu | Tài liệu |
|---------|----------|
| Hiểu toàn bộ dự án | [Documentation Index](./docs/README.md) |
| Xem demo duy nhất | [Demo Catalog](./docs/demo-catalog.md) |
| Chạy slide | [Run Slide Deck SOP](./docs/sop/run-slide-deck.md) |
| Diễn demo Ocean USB Builder | [Ocean USB Builder SOP](./docs/sop/live-demo-ocean-usb-builder.md) |
| Xem trạng thái CM | [task.md](./task.md) |

## Project Files

| File | Role |
|------|------|
| `index.html` | Entry point của slide web, gồm cover, main flow, skill reference subslides, Q&A và CDN Reveal.js. |
| `style.css` | Design system Sea/Shopee, layout slide và component styles. |
| `script.js` | Khởi tạo Reveal.js và hiệu ứng particle background. |
| `presentation_script.md` | Kịch bản nói chi tiết theo từng slide. |
| `demo_instructions.md` | Runbook demo Ocean USB Builder và prompt mẫu cho Agentic Coding. |
| `raw-data/ai-agent-updates-2026.md` | Raw source notes cho slide AI update gần đây. |
| `raw-data/ai-work-paradox.md` | Raw source material về nghịch lý năng suất thời AI. |
| `raw-data/ocean-usb-builder-tool-scan.md` | Raw scan của tool OSDCloud. |
| `docs/` | Bộ tài liệu CM chuẩn hóa. |

## View Locally

Vì đây là web tĩnh, bạn có thể mở trực tiếp `index.html`. Nếu muốn chạy qua local server để CDN/plugin hoạt động ổn định hơn:

```powershell
python -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000
```

Trong slide, bấm `S` để mở speaker view và đọc script riêng trong lúc share màn hình chính.

## Related

- [Architecture](./docs/architecture.md)
- [Deployment](./docs/deployment.md)
- [Sitemap](./docs/sitemap.md)
