---
title: "Live Demo Ocean USB Builder"
description: "Runbook demo duy nhất: dùng AI Agentic để viết tool tự động tạo USB boot cài Windows và cài sẵn app/driver cần thiết."
keywords: ["Ocean USB Builder", "OSDCloud", "AI Agentic", "Windows USB", "live demo"]
robots: "index, follow"
---

# Live Demo: AI Agentic Viết Tool Tạo USB Boot Cài Windows

> **Demo duy nhất của buổi chia sẻ**  
> Tool thật đã tạo xong tại `C:\Users\Ocean\Documents\VibeCode\OSDCloud`.

## Mục Tiêu Demo

Chứng minh AI Agentic không chỉ giúp trả lời câu hỏi hoặc viết đoạn code nhỏ, mà có thể hỗ trợ xây một tool vận hành thật:

- Tạo USB boot cài Windows 11 Pro offline.
- Stage sẵn app cần thiết như 7-Zip, Chrome Enterprise, UniKey, Zoom, LibreOffice, .NET Runtime, Dell Command Update và Workspace ONE Intelligent Hub.
- Stage driver theo folder, ZIP/CAB hoặc Dell driver EXE.
- Chuẩn hóa quy trình chuẩn bị máy mới cho admin/IT.
- Có guardrail rõ ràng: cảnh báo format USB, yêu cầu quyền Administrator, không đưa secret/payload nội bộ lên slide.

## Thông Tin Tool

| Hạng mục | Giá trị |
|----------|---------|
| Repo | `C:\Users\Ocean\Documents\VibeCode\OSDCloud` |
| App demo | `dist\OceanUsbBuilder\OceanUsbBuilder.exe` |
| Engine chính | `tools\Invoke-OceanUsbBuild.ps1` |
| App manifest | `core\ocean-offline\Apps.json` |
| Tài liệu nguồn | `docs\architecture.md`, `docs\admin-guide.md`, `docs\operations-runbook.md` |
| Raw scan trong deck | `raw-data/ocean-usb-builder-tool-scan.md` |

## Kịch Bản Demo Nhanh

### Bước 1: Mở Bối Cảnh

Nói ngắn:

> "Ở phần demo, mình không demo workflow giả lập nữa. Mình demo một tool thật đã build xong bằng cách làm việc với AI Agentic: Ocean USB Builder."

Mở folder:

```powershell
cd "C:\Users\Ocean\Documents\VibeCode\OSDCloud"
```

Chỉ cho team thấy các phần chính:

- `src\OceanUsbBuilder.App\`: WPF desktop app.
- `tools\Invoke-OceanUsbBuild.ps1`: build engine.
- `core\ocean-offline\Apps.json`: danh sách app offline và silent arguments.
- `docs\`: tài liệu architecture/admin/operations.

### Bước 2: Mở App Ocean USB Builder

Chạy app với quyền Administrator nếu môi trường demo cho phép:

```powershell
.\dist\OceanUsbBuilder\OceanUsbBuilder.exe
```

Nếu không muốn chạy trực tiếp, chỉ mở folder `dist\OceanUsbBuilder` và giải thích:

- App yêu cầu Administrator vì thao tác với disk/USB.
- Người dùng chọn Windows ISO, target USB, apps, drivers, local admin account và timezone.
- Windows edition được cố định là Windows 11 Pro để tránh lệch chuẩn.

### Bước 3: Giải Thích Luồng Build

Nói theo 5 lớp:

1. WPF GUI nhận input của admin.
2. GUI gọi PowerShell engine `Invoke-OceanUsbBuild.ps1`.
3. Engine format USB và copy WinPE boot files.
4. Engine stage Windows 11 Pro image, apps, drivers và Ocean deploy scripts.
5. Khi boot USB, WinPE chạy Ocean Offline deployment flow để cài Windows, app và driver.

### Bước 4: Mở App Manifest

Mở:

```powershell
notepad .\core\ocean-offline\Apps.json
```

Điểm cần nói:

- Mỗi app có `name`, `type`, `path`, `sourceUrl`, `arguments`, `installGroup`, `installOrder` và detect rule.
- Đây là cách biến "cài app thủ công" thành một pipeline có cấu hình.
- Khi cần thêm app mới, admin không phải sửa toàn bộ engine; chỉ cần thêm manifest đúng chuẩn và test lại.

### Bước 5: Guardrail Khi Demo

Không format USB live nếu chưa chuẩn bị USB test riêng. Nếu muốn chạy build thật, phải dừng và nói rõ:

> "Bước này sẽ format USB được chọn. Mình chỉ chạy nếu đây là USB test không có dữ liệu quan trọng."

Trong buổi chia sẻ, lựa chọn an toàn nhất là walkthrough:

- Show app.
- Show manifest.
- Show engine/docs.
- Show log hoặc mô tả output.
- Không cắm USB production.
- Không show secret, token, enrollment payload hoặc đường dẫn package nội bộ nhạy cảm.

## Prompt Mẫu Cho Agentic Coding

### Prompt 1: Giao Agent Đọc Codebase Và Lập Kiến Trúc

```text
Bạn là senior Windows deployment engineer kiêm software architect.
Hãy đọc repo OSDCloud hiện tại và lập bản đồ kiến trúc theo các lớp:
1. WPF GUI nhận input gì.
2. PowerShell engine xử lý flow nào.
3. WinPE/boot image được chuẩn bị và patch ra sao.
4. Apps/drivers được stage và install thế nào.
5. Những điểm nào có rủi ro format nhầm USB, lộ secret hoặc build không idempotent.

Output bằng Markdown, có sơ đồ Mermaid, danh sách entrypoint và checklist kiểm thử.
Không sửa file ở bước này.
```

### Prompt 2: Giao Agent Thêm App Vào Manifest

```text
Bạn là release engineer phụ trách offline Windows USB.
Hãy thêm một app mới vào core/ocean-offline/Apps.json theo style hiện có.

Yêu cầu:
- Giữ JSON hợp lệ.
- Có silent install arguments.
- Có detectPath hoặc detectRegistryDisplayNames.
- Có installOrder không xung đột.
- Không hard-code secret hoặc URL nội bộ nhạy cảm.
- Sau khi sửa, chạy parser/validation phù hợp và báo rõ file đã thay đổi.
```

### Prompt 3: Giao Agent Viết Guardrail Cho Thao Tác Format USB

```text
Bạn là safety reviewer cho tool format USB.
Hãy review flow chọn target disk trong WPF app và PowerShell engine.

Tìm các rủi ro:
- Có thể chọn nhầm disk không phải USB không?
- Có xác nhận trước khi format không?
- UI có hiển thị disk number, size, bus type đủ rõ không?
- Script có chặn disk hệ thống không?
- Log có ghi đủ thông tin để audit không?

Output gồm findings theo severity, đề xuất fix và test case cụ thể.
Không tự ý sửa code nếu chưa có plan.
```

### Prompt 4: Giao Agent Tạo Tài Liệu Vận Hành

```text
Bạn là technical writer cho team IT operations.
Từ repo OSDCloud, hãy viết admin guide cho người không đọc code.

Guide cần có:
- Mục tiêu tool.
- Prerequisites.
- Cách chạy app.
- Cách chọn ISO/USB/apps/drivers.
- Cảnh báo trước khi format USB.
- Cách kiểm tra USB sau khi build.
- Troubleshooting cho lỗi quyền admin, ISO không hợp lệ, thiếu WinPE kit, app install fail.

Viết ngắn gọn, thao tác được, không dùng marketing language.
```

## Thông Điệp Kết Demo

Chốt lại bằng 3 ý:

1. AI Agentic hữu ích nhất khi có mục tiêu vận hành rõ ràng, không phải khi chỉ "chat cho vui".
2. Giá trị không nằm ở việc AI viết nhiều code hơn, mà ở việc con người biết chia bài toán thành GUI, engine, manifest, validation, docs và guardrails.
3. Với tool có tác động thật như format USB/cài Windows, tốc độ phải đi kèm kiểm soát: review, test, runbook và quyền phê duyệt của người vận hành.
