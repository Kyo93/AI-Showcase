---
title: "AI Voice Pilot Script"
description: "TTS-ready script segments for the AI voice pilot in the Ocean USB Builder proof section."
keywords: ["AI voice", "voiceover", "Ocean USB Builder", "presentation script"]
robots: "noindex, follow"
---

# AI Voice Pilot Script

## Global Direction

Voice: Ocean's own consented voice clone.

Tone: calm internal technical briefing. Natural Vietnamese. Keep English technical terms short and clear.

Pacing: around 135-150 words per minute. Add a short pause after each sentence. Do not sound like an advertisement.

Pronunciation notes:

- `AI Agent`: say "AI Agent" naturally, not fully translated.
- `Ocean USB Builder`: keep the English product name.
- `OSDCloud`: say letter by letter if the provider mispronounces it.
- `WinPE`: say "Win P E".
- `WPF`: say "W P F".
- `Apps.json`: say "Apps dot JSON".

## Slide 12: Demo Build Journey

Output file: `assets/audio/voice-pilot/slide-12-demo-build-journey.mp3`

Script:

> Trước khi mở app, mình muốn trả lời một câu hỏi quan trọng hơn: AI đã giúp build tool này theo quá trình nào?
>
> Điểm bắt đầu không phải là code. Điểm bắt đầu là pain point vận hành: chuẩn bị máy mới có nhiều bước lặp lại, dễ lệch chuẩn, và nếu làm sai thì có thể mất dữ liệu trên USB.
>
> Từ đó mình biến bài toán thành brief cho Agent: cần một GUI cho admin, chạy trên Windows, Windows 11 Pro cố định, offline-first, không show secret, và mọi thao tác format USB phải có xác nhận.
>
> AI không tự chọn stack một cách ngẫu nhiên. Nó đọc bối cảnh rồi đề xuất chia lớp: WPF cho app desktop, PowerShell cho deployment engine, Apps dot JSON cho manifest, Win P E cho runtime cài máy, và docs với tests để bàn giao.
>
> Bài học ở đây là: AI build được tool khi con người vẫn giữ vai trò PM, architect và reviewer.

## Slide 13A: PM Brainstorm Proof

Output file: `assets/audio/voice-pilot/slide-13a-pm-brainstorm-proof.mp3`

Script:

> Trước khi show app chạy thật, mình muốn cho mọi người thấy điểm bắt đầu của demo.
>
> Đây là prompt dùng để yêu cầu AI đóng vai PM và phân tích cách build một tool tạo USB boot Windows 11 Pro offline.
>
> Điều đáng chú ý là AI không nhảy thẳng vào code. Nó đi qua bối cảnh hệ thống, rào cản offline, driver, maintenance, và các hướng kiến trúc như Fat ISO, WinPE Dashboard, và Modular Script.
>
> Với Agent, prompt tốt không chỉ nói "làm giúp tôi app này". Prompt tốt mô tả mục tiêu, constraint, môi trường chạy, rủi ro và tiêu chí kiểm chứng.

## Slide 13B: PM Recommendation Proof

Output file: `assets/audio/voice-pilot/slide-13b-pm-recommendation-proof.mp3`

Script:

> Ảnh thứ hai là phần chốt quyết định.
>
> AI đưa ra ma trận đánh giá, điểm số, recommendation và câu hỏi mở. Nó chọn hướng Modular Script với Ventoy cho MVP vì dễ bảo trì, triển khai nhanh, và phù hợp khi app hoặc driver thay đổi thường xuyên.
>
> Điểm mình muốn giữ lại là: output tốt không chỉ dài. Output tốt phải có tiêu chí, trọng số, trade-off, recommendation và câu hỏi tiếp theo để con người quyết định.
>
> Đây là khác biệt rất lớn giữa một chatbot trả lời chung chung và một Agent hỗ trợ decision-making thật.

## Slide 14: Demo Proof

Output file: `assets/audio/voice-pilot/slide-14-demo-proof.mp3`

Script:

> Bây giờ là proof chính của demo: app không chỉ là mockup, mà đã chạy build thật.
>
> Ảnh này là Ocean USB Builder trong lúc build USB. Mọi người có thể thấy ISO đầu vào, target USB, danh sách app, driver folder, build log và progress.
>
> Đây là phần chứng minh engine thật sự đang chạy, không phải chỉ có giao diện.
>
> Guardrail vẫn còn nguyên: đây là tool có thể format USB, nên build thật chỉ chạy với USB test và có xác nhận rõ.
>
> Với AI Agent, điều quan trọng không phải là nó viết được nhiều code. Điều quan trọng là nó nối được UI, engine, payload, log và safety gate thành một artifact có thể kiểm chứng.

## Slide 15: Real Install Proof

Output file: `assets/audio/voice-pilot/slide-15-real-install-proof.mp3`

Script:

> Đây là đoạn nối từ app build ra artifact vận hành thật.
>
> Ba ảnh này kể cùng một flow: máy boot vào WinPE, payload đã copy local, rồi post-install bắt đầu cài app offline sau khi Windows lên.
>
> Ảnh đầu tiên cho thấy Ocean Offline Deploy chạy trong môi trường cài đặt. Ảnh thứ hai là checkpoint payload ready, nơi USB có thể rút ra để dùng cho máy tiếp theo. Ảnh thứ ba là bước cài app offline.
>
> Điều mình muốn chốt ở đây là: demo này không chỉ là giao diện đẹp. Nó đi tới một flow offline, lặp lại được, có checkpoint, có log, và có bằng chứng thật trên máy.
