---
title: "CM Task State"
description: "Mục lục trạng thái hiện tại cho AI Sharing Present theo chuẩn cm-status."
keywords: ["cm-status", "task state", "CM workflow", "AI Agent Playbook", "presentation outline"]
robots: "index, follow"
---

# CM Task State

> **Quick Reference**
> - **Active Goal**: Deck đã chuyển thành Practical AI Agent Playbook với mạch mới: team need -> AI update -> concept -> how-to -> safety -> demo -> reflection.
> - **Last Completed**: Đã xoá `DESIGN.md`, đọc lại tài liệu deck và reset `style.css` thành visual system mới: Operator Briefing System.
> - **Next Task**: Mở `http://localhost:8000`, kiểm tra nhịp fragment ở Slide 3-4, rồi rehearsal theo `presentation_script.md`.
> - **Blocked**: Không có blocker; workspace hiện không phải Git repository.

## Mục Lục Buổi Thuyết Trình

| Phần | Slide | Nội dung chính | Mục tiêu nói với audience |
|------|-------|----------------|---------------------------|
| Mở bài | Cover | AI Agent Playbook | Mở thẳng vào playbook thực dụng: giao việc rõ, kiểm chứng chắc, demo thật. |
| Tri ân | 1 | Cảm ơn Adam | Ghi nhận người đã giới thiệu công nghệ, tool và kinh nghiệm để rút ngắn đường cong học AI. |
| Mục lục | 2 | Bản đồ 6 phần | Cho người nghe biết toàn bộ buổi sẽ đi qua những gì. |
| Nhu cầu team | 3 | Team Cần Gì Từ AI? | Gắn nội dung với nhu cầu thật: workflow, prompt, coding và demo. |
| Bối cảnh | 4 | AI Update 2026: Từ Chatbot Sang Agent | AI đang rời khỏi khung chat để đi vào workflow thật, có tool-use và governance. |
| Khái niệm nền | 5 | Chatbot -> AI Agent | Làm rõ khác biệt giữa hỏi đáp và agent làm task nhiều bước. |
| Ví dụ agent | 6 | Common AI Agent | Nhìn các agent phổ biến như Codex, Antigravity và Claude Code. |
| Kỹ năng giao việc | 7 | Prompt Cho Agent | Dạy framework Goal, Context, Tools, Constraints, Checkpoint, Definition of Done. |
| Skill ecosystem | 8 | Superpowers / GSD / CodyMaster + reference subslides | Giải thích skill như SOP cho AI, dùng khi workflow lặp lại. |
| Workflow thực chiến | 9 | Agentic Coding Workflow | Đưa quy trình requirement -> read codebase -> plan -> verify -> handover. |
| An toàn | 10 | Guardrails | Nhấn mạnh secret, data, approval gate, log, mock-first. |
| Demo journey | 11 | Demo Hình Thành Như Thế Nào? | Cho người nghe thấy AI xác định pain point, goal, constraint, stack, architecture và verification. |
| Demo proof | 12 | Ocean USB Builder Proof | Show ảnh build thật trong app và video USB boot/cài Windows. |
| Góc nhìn chiến lược | 13 | AI Work Paradox | Nhanh hơn không tự động nhàn hơn; giá trị dịch sang phán đoán. |
| Kết thúc | Final | Q&A | Mở câu hỏi: task lặp lại nào nên giao cho AI Agent tiếp theo? |

## Tóm Tắt Một Trang Để Mở Bài

Buổi chia sẻ này có một thông điệp trung tâm: AI không còn chỉ là chatbot để hỏi đáp, mà đang chuyển thành AI Agent có thể đọc file, dùng tool, chạy task nhiều bước và tạo output thật. Vì vậy team cần một playbook thực dụng để biết cách giao việc, kiểm soát rủi ro và chọn đúng việc đáng làm.

Mạch trình bày đi từ nhu cầu thật của team, mở rộng sang bối cảnh AI đang chuyển từ chatbot sang agent, rồi đi qua khái niệm nền, framework prompt, skill ecosystem, workflow Agentic Coding và guardrails. Sau đó bài đi vào hành trình hình thành Ocean USB Builder, ảnh/video proof của tool thật trước khi chốt bằng AI Work Paradox: nhanh hơn không tự động nhàn hơn nếu không có phán đoán và điểm dừng.

Phần demo duy nhất là Ocean USB Builder: một tool thật ở `C:\Users\Ocean\Documents\VibeCode\OSDCloud`, dùng để tạo USB boot Windows 11 Pro offline và stage apps/drivers. Demo này chứng minh cách AI Agentic có thể hỗ trợ build tool vận hành thật khi có requirement rõ, lựa chọn công nghệ phù hợp, architecture theo layer, verification và guardrail.

## Current Checklist

- [x] Read `cm-brainstorm-idea` and current project status.
- [x] Convert current status into a presentation table of contents.
- [x] Add a beginning agenda slide to the deck.
- [x] Update `presentation_script.md` to match the main slide flow plus 3 Skill reference subslides.
- [x] Update docs/status files for the new slide order.
- [x] Refresh deck visual system using AI/technology template references.
- [x] Spot-check render screenshots for hero, agenda, workflow, demo, Q&A and dense content slides.
- [x] Save AI update speaker-coach feedback to `raw-data/ai-update-slide-speaker-review.md`.
- [x] Add OpenSpec plan for refining the AI Update slide.
- [x] Rewrite the AI update slide with shorter card copy, clear "so what" takeaway and dated source strip.
- [x] Update AI update speaker notes and `presentation_script.md`.
- [x] Add AI update visual illustration: Chat -> Agent -> Tools/Governance.
- [x] Add presenter-controlled Reveal fragments and custom fly-in/zoom animation for the AI update slide.
- [x] Add AI update click cues to speaker notes and `presentation_script.md`.
- [x] Redesign Slide 1 title cover with less copy and stronger keynote-style visual hierarchy.
- [x] Replace diary-style Slide 1 with the supplied dark technical AI Agent Playbook direction.
- [x] Refine Team Needs survey data: reorder priorities by count and clarify `12/13 people (92.3%)`.
- [x] Reorder narrative flow: Team Needs before AI Update, Demo/Anatomy before AI Work Paradox.
- [x] Rewrite `presentation_script.md` and speaker notes to add stronger slide-to-slide transitions.
- [x] Delete stale `DESIGN.md`.
- [x] Read full deck documentation corpus before redesigning the visual system.
- [x] Add OpenSpec proposal for the reset under `openspec/changes/reset-deck-visual-system/`.
- [x] Replace `style.css` with the fresh Operator Briefing System.
- [x] Capture visual QA screenshots for representative slides and print/PDF mode.
- [x] Run final verification gates.
- [x] Refine Header Chrome: Reduce Sea logo width to 48px, reduce presentation title opacity to 0.28.
- [x] Update index.html: Change style.css version query parameter to ?v=1.0.3 to prevent caching.
- [x] Verify the header styling and run final verification checks.
- [x] Disable Reveal.js navigation controls in script.js for clean briefing UI.
- [x] Refine slide typography (Vietnamese Font Optimization):
  - Change heading font to Inter (match body).
  - Reduce header/slide titles font-weight from 800-900 to 700.
  - Reduce descriptions/body text font-weight from 600-650 to 400-500.
  - Reduce card headers and sub-elements weight to 600.
- [x] Bump style.css version query parameter to ?v=1.0.4 in index.html.
- [x] Verify the refined typography and run screenshot tests.
- [x] Refine visual hierarchy and description text weight/size:
  - Reduce font-size of description paragraphs (needs, promises, skills, agenda, prompts, guards, workflow) by 1px - 1.5px.
  - Set description paragraphs font-weight to 400 (Regular) globally.
  - Settle nested strong tags and Reveal strong weight at 600 (Semi-Bold).
- [x] Bump style.css version query parameter to ?v=1.0.5 in index.html.
- [x] Verify the hierarchy updates and run screenshot tests.
- [x] Redesign Slide 4 using Variant A (Tech-Infographic Layout):
  - Add grid background to .ai-shift-visual in style.css.
  - Enhance agent-core glow and update style.css.
  - Design dotted/dashed connections for .agent-orbit::before.
  - Apply glassmorphism and custom border accents to .agent-orbit nodes.
  - Add left color-accent borders to .trend-cards and set tinted icon backgrounds.
- [x] Bump style.css version query parameter to ?v=1.0.6 in index.html.
- [x] Verify Slide 4 changes by running test_screenshot.js.
- [x] Nâng cấp thiết kế động Slide 4 (Chatbot sang Agent):
  - [x] Thêm lớp SVG cho các đường kết nối và vòng quỹ đạo động trong index.html
  - [x] Cập nhật style.css để xóa CSS pseudo-elements ::before cũ của các orbit
  - [x] Thêm CSS cho .agent-connections, .orbit-ring xoay và .conn-line nét đứt động
  - [x] Nâng cấp phong cách kính mờ cao cấp và hiệu ứng breathing cho .agent-core
  - [x] Tinh chỉnh .agent-orbit với kích thước mới, blur rõ nét và border gradient màu neon riêng
  - [x] Làm dịu .chat-node và thêm hiệu ứng di chuyển nhẹ cho .shift-arrow
  - [x] Tăng stylesheet query version lên ?v=1.0.7 trong index.html
  - [x] Chạy node scratch/test_screenshot.js chụp hình kiểm chứng Slide 4 và lưu vào scratch/after_slide_4.png
  - [x] Xác minh trực quan trên localhost và cập nhật walkthrough.md
- [x] Sửa lỗi lệch bố cục Slide 4 visual:
  - [x] Cố định chiều rộng 390px và chiều cao 430px của .ai-shift-visual trong style.css
  - [x] Sửa grid-template-columns của .ai-update-showcase thành 390px 1fr trong style.css
  - [x] Tăng stylesheet query version lên ?v=1.0.8 trong index.html
  - [x] Chạy node scratch/test_screenshot.js chụp hình kiểm chứng Slide 4 và lưu vào scratch/after_slide_4.png
  - [x] Xác minh trực quan trên localhost và cập nhật walkthrough.md
- [x] Add Demo Build Journey slide:
  - [x] Use `cm-brainstorm-idea` to compare options and select a dedicated journey slide.
  - [x] Add OpenSpec under `openspec/changes/demo-build-journey/`.
  - [x] Update deck flow with a dedicated Slide 10 before the live demo.
  - [x] Add Slide 10 explaining pain point, goal/constraints, stack, architecture layers and verification.
  - [x] Update speaker script and handover docs.
  - [x] Verify with `node --check script.js`, localhost status, screenshot overflow checks and final Q&A header indexing.
- [x] Consolidate demo proof media:
  - [x] Use `cm-brainstorm-idea` to compare media options and choose replacing the old demo/anatomy pair with a proof slide.
  - [x] Add OpenSpec under `openspec/changes/demo-media-proof/`.
  - [x] Replace Slide 11 with screenshot/video proof slots.
  - [x] Remove the old duplicated `How to build?` anatomy slide.
- [x] Add GSAP cover animation:
  - [x] Use `cm-brainstorm-idea` to compare cover animation options and choose entrance choreography plus active-step pulse.
  - [x] Add OpenSpec under `openspec/changes/cover-gsap-animation/`.
  - [x] Load GSAP from a fixed CDN version and add a cover-only timeline in `script.js`.
  - [x] Keep reduced-motion users on the static cover.
  - [x] Verify syntax, CDN load, cover overflow and reduced-motion behavior.
- [x] Optimize deck-wide animation with GSAP:
  - [x] Use `cm-start` and `cm-brainstorm-idea` to review the animation system and select a centralized DeckMotion controller.
  - [x] Add OpenSpec under `openspec/changes/deck-gsap-motion-system/`.
  - [x] Add GSAP slide-entrance and fragment reveal choreography while preserving Reveal presenter click order.
  - [x] Add special animations: Survey count/bar reveal, Agentic workflow runner and Demo proof scan.
  - [x] Verify normal motion, reduced-motion fallback and visual overflow.
- [x] Add cinematic cover opening:
  - [x] Add OpenSpec under `openspec/changes/cover-cinematic-opening/`.
  - [x] Add floating image cards to the cover using existing deck assets.
  - [x] Animate cards from far-away 3D positions, converge them into the visual center and fade them out before the workflow diagram settles.
  - [x] Verify cover midflight, settled and reduced-motion screenshots.
- [x] Optimize deck load and runtime smoothness:
  - [x] Use `cm-brainstorm-idea`, `cm-reactor` and `cm-clean-code` to choose targeted performance fixes instead of a rewrite.
  - [x] Replace cover cinematic full-size images with lightweight thumbnails under `assets/images/cover-thumbs/`.
  - [x] Remove unused Reveal Markdown/Highlight plugin loads and the unused Outfit font family.
  - [x] Add CDN preconnect hints for Reveal/Font Awesome and GSAP.
  - [x] Lazy-load non-cover screenshots and defer demo video loading until presenter interaction.
  - [x] Pause the particle canvas outside cover/Q&A and make cursor spotlight animation event-driven.
  - [x] Verify initial load, cover cinematic, slide overflow and particle pause behavior.
- [x] Expand Slide 12 AI Work Paradox:
  - [x] Add four mechanisms from the raw source: good-enough threshold collapse, idea backlog expansion, rest feeling expensive, and agent orchestration fatigue.
  - [x] Replace the final callout with the stronger closing question: use AI to do less of what, so we can go deeper on what?
  - [x] Rewrite embedded speaker notes and `presentation_script.md` into a longer 6-8 minute reflection.
  - [x] Verify Slide 12 layout and full-deck overflow after the denser content.
- [x] Add Adam thank-you slide:
  - [x] Use `cm-brainstorm-idea` to compare concepts and choose the "mission handoff" direction.
  - [x] Insert a dedicated thank-you slide before the agenda.
  - [x] Replace the generated/vector avatar with the original Adam avatar captured from clipboard.
  - [x] Add a sharpened/upscaled display image plus a separate head overlay for playful wobble animation.
  - [x] Update `presentation_script.md` and task flow.

## Verification Targets

- Speaker notes check: Cover, Slide 1-12, Q&A and Skill reference subslides are present.
- `node --check script.js` completes with exit code 0.
- Local server check: `http://localhost:8000` returns status 200.
- Markdown links OK.
- Frontmatter OK for CM markdown files.
- No stale active-demo references to superseded demos.
- Visual hooks OK; no non-zero/negative `letter-spacing` remains.

## Related

- [Presentation Script](./presentation_script.md)
- [Practical Agent Playbook Design](./openspec/changes/practical-agent-playbook/design.md)
- [Narrative Flow Redesign](./openspec/changes/reorder-playbook-narrative-flow/design.md)
- [Aligned Title Cover Design](./openspec/changes/align-title-cover-to-reference/design.md)
- [Team Needs Survey Data Design](./openspec/changes/refine-team-needs-survey-data/design.md)
- [Single Demo Design](./openspec/changes/single-ocean-usb-demo/design.md)
- [Reset Deck Visual System](./openspec/changes/reset-deck-visual-system/proposal.md)
- [Documentation Sitemap](./docs/sitemap.md)
