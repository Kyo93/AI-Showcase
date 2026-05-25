---
title: "Presentation Script: AI Agent Playbook"
description: "Kịch bản nói theo từng slide cho bài chia sẻ AI Agent Playbook."
keywords: ["AI Agent", "presentation script", "prompt", "skill ecosystem", "Ocean USB Builder"]
robots: "index, follow"
---

# Kịch Bản Thuyết Trình: AI Agent Playbook

Tài liệu này là script nói theo từng slide. Khi trình chiếu, mở `http://localhost:8000`, bấm `S` để đọc speaker notes trong cửa sổ riêng.

---

## Slide 1: AI Agent Playbook

* **Nội dung trên slide:** AI AGENT PLAYBOOK. Giao việc rõ. Kiểm chứng chắc. Demo thật. Minh họa: Ocean USB Builder.
* **Thời gian ước tính:** 2 phút.
* **Kịch bản nói:**
  > "Chào mọi người. Buổi hôm nay là AI Agent Playbook: một buổi chia sẻ thực dụng về cách giao việc cho AI Agent, cách kiểm chứng kết quả và cách đặt guardrails để dùng AI an toàn trong công việc thật.
  >
  > Phần cuối chỉ có một demo chính là Ocean USB Builder. Mình sẽ dùng demo đó để minh họa cách một workflow agentic có thể đi từ requirement rõ ràng tới một công cụ vận hành được."

## Slide 2: Mục Lục Buổi Chia Sẻ

* **Nội dung trên slide:** Bản đồ 6 phần của buổi thuyết trình.
* **Thời gian ước tính:** 2 phút.
* **Kịch bản nói:**
  > "Trước khi vào nội dung, mình muốn đưa mọi người một bản đồ rất ngắn của buổi hôm nay.
  >
  > Chúng ta sẽ đi từ nhu cầu thật của team, sang bối cảnh AI đang chuyển sang agent, rồi làm rõ chatbot khác agent ở đâu. Sau đó mình đi vào phần thực hành: prompt, skill, workflow và guardrails. Cuối cùng là demo Ocean USB Builder, giải phẫu demo, rồi chốt bằng AI Work Paradox.
  >
  > Mục tiêu không phải là mọi người nhớ hết tất cả công cụ. Mục tiêu là ra khỏi buổi này, mỗi người có thể chọn một task lặp lại trong công việc của mình và biết cách giao cho AI Agent một cách rõ ràng, an toàn, có kiểm chứng."

## Slide 3: Team Cần Gì Từ AI?

* **Nội dung trên slide:** Dashboard khảo sát nội bộ: 13 phản hồi, format mong muốn, ranking chủ đề, bốn việc buổi này trả lời và lý do chọn Ocean USB Builder làm case thực tế.
* **Thời gian ước tính:** 3 phút.
* **Kịch bản nói:**
  > "Mình bắt đầu từ nhu cầu của team trước, vì đây không phải một buổi điểm tin AI chung chung.
  >
  > Click đầu tiên: khảo sát có 13 phản hồi từ ngày 07/05 đến 18/05/2026. Về format, 7 người chọn live demo, 5 người chọn case study và 1 người chọn hỏi đáp. Gộp lại là 12/13 người, tương đương 92.3%, muốn thấy demo hoặc case thực tế. Nên buổi này không thể chỉ nói lý thuyết. Nó phải có output thật.
  >
  > Click thứ hai: với câu hỏi chọn nhiều, có tổng cộng 36 lượt chọn chủ đề. Tự động hóa và workflow đứng đầu với 12/13, kỹ thuật prompt nâng cao đứng ngay sau với 11/13. Sau đó là AI trong coding 6/13, tư duy sản phẩm AI 5/13, và AI cho thiết kế UI/UX 2/13.
  >
  > Click thứ ba: từ các câu trả lời mở, mình gom lại thành bốn câu hỏi dễ áp dụng. Một là AI đang đổi ở đâu: từ chat trả lời sang agent có thể đọc file, dùng tool và chạy task. Hai là giao việc cho AI thế nào: nói rõ mục tiêu, bối cảnh, quyền được làm và tiêu chí xong. Ba là biết AI đã làm thật bằng gì: phải có file, code, docs, log, hoặc phần thay đổi sẵn để review và commit. Bốn là khi nào phải hỏi lại người: trước dữ liệu thật, xóa file, deploy, format USB, gửi email hoặc gọi API thật.
  >
  > Click cuối: vì vậy case thực tế là Ocean USB Builder, một tool thật để nối survey, playbook và guardrails.
  >
  > Trước khi vào cách làm, mình muốn zoom ra một bước: vì sao đúng thời điểm này AI lại chuyển mạnh từ chatbot sang agent?"

## Slide 4: AI Update 2026: Từ Chatbot Sang Agent

* **Nội dung trên slide:** AI đã rời khỏi khung chat và bắt đầu đi vào workflow thật.
* **Thời gian ước tính:** 3 phút.
* **Kịch bản nói:**
  > "Từ nhu cầu của team, mình zoom ra bối cảnh rộng hơn. Phần update này mình giữ ngắn vì mục tiêu không phải điểm tin. Câu đinh là: AI đã rời khỏi khung chat và bắt đầu đi vào workflow thật.
  >
  > Click đầu tiên: model làm được việc dài hơi hơn, từ code, research, data, documents đến software operation.
  >
  > Click thứ hai: coding agent bắt đầu nhận task end-to-end: đọc repo, lập plan, sửa file, chạy test và review diff.
  >
  > Click thứ ba: tool ecosystem trở thành hạ tầng để Agent lấy đúng context và dùng đúng công cụ: MCP, connector, skill, docs, repo, API và business tools.
  >
  > Click thứ tư: governance trở thành bắt buộc: quyền truy cập, approval gate, log, audit và sandbox.
  >
  > Click cuối: câu hỏi mới không còn là AI trả lời gì, mà là Agent được phép làm gì và kiểm chứng ra sao. Từ đây mình quay lại khái niệm nền: chatbot khác agent ở đâu?"

## Slide 5: Chatbot -> AI Agent: Từ Trả Lời Sang Làm Task

* **Nội dung trên slide:** So sánh chatbot tạo câu trả lời với AI Agent chạy workflow có goal, context, tool, checkpoint và Definition of Done.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "Chatbot phản hồi theo từng câu hỏi. Nó phù hợp để hỏi nhanh, tóm tắt, viết nháp hoặc giải thích khái niệm.
  >
  > AI Agent thì khác. Agent không chỉ trả lời, mà nhận mục tiêu rồi chạy một workflow: lấy context, dùng công cụ, làm nhiều bước, kiểm tra output và báo lại bằng chứng hoàn thành.
  >
  > Với Ocean USB Builder chẳng hạn: chatbot có thể gợi ý lệnh tạo USB. Agent có thể đọc repo, kiểm tra manifest, chạy build hoặc mock, review log, rồi dừng trước thao tác format USB nếu chưa có approval.
  >
  > Nhưng Agent mạnh hơn không có nghĩa là mình buông tay. Agent càng có quyền thao tác thật thì brief càng phải rõ, quyền hạn càng phải chặt, và điểm cần hỏi lại con người càng phải được định nghĩa trước. Từ đây, chúng ta cần một framework prompt mới cho agent."

## Slide 6: Prompt Cho Agent Khác Prompt Cho Chatbot

* **Nội dung trên slide:** Goal, Context, Tools, Constraints, Checkpoint, Definition of Done.
* **Thời gian ước tính:** 5 phút.
* **Kịch bản nói:**
  > "Prompt cho chatbot thường chỉ cần một câu hỏi tốt. Prompt cho Agent phải giống một brief công việc.
  >
  > Mình hay dùng sáu phần. Goal: kết quả cuối cùng là gì. Context: dữ liệu, repo, file, business background. Tools: Agent được dùng công cụ nào. Constraints: không được làm gì, giới hạn bảo mật và phạm vi sửa. Checkpoint: khi nào phải hỏi lại. Definition of Done: thế nào là xong thật.
  >
  > Ví dụ, thay vì nói 'viết tool giúp tôi', hãy nói: 'Đọc codebase trước, lập plan, chỉ sửa các file liên quan, không xóa dữ liệu, chạy verification, rồi báo lại file đã đổi và cách kiểm tra'. Nếu prompt là brief cho một task, thì skill là cách đóng gói quy trình cho những task lặp lại."

## Slide 7: Skill Ecosystem Map

* **Nội dung trên slide:** Superpowers, GSD, CodyMaster và nguyên tắc dùng skill.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "Skill là cách biến kinh nghiệm làm việc thành quy trình có thể gọi lại. Thay vì mỗi lần đều prompt từ đầu, mình đóng gói cách làm thành skill: khi nào lập plan, khi nào TDD, khi nào review, khi nào QA, khi nào cập nhật tài liệu.
  >
  > Superpowers mạnh ở workflow discipline: planning, TDD, debugging, verification. GSD tập trung vào chia task, giữ momentum và kéo việc về trạng thái done. CodyMaster là lớp CM workflow: docs, planning, quality gate, handover và trạng thái dự án.
  >
  > Nhưng không nên build skill cho mọi thứ. Một skill chỉ đáng tồn tại khi nó giải quyết một quyết định hoặc workflow lặp lại. Nếu chỉ dùng một lần, nó nên là prompt. Tiếp theo là cách ghép prompt và skill thành một workflow coding thực chiến."

## Slide 8: Agentic Coding Workflow

* **Nội dung trên slide:** Requirement -> Read codebase -> Plan -> Batch nhỏ -> Verify -> Review diff -> Docs/Handover.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "Workflow mình khuyên dùng rất đơn giản. Đầu tiên viết requirement rõ. Sau đó bắt Agent đọc codebase trước khi sửa. Tiếp theo là lập plan ngắn, làm từng batch nhỏ, chạy test hoặc verification, review diff, rồi cập nhật docs/handover.
  >
  > Điểm quan trọng là đừng để Agent nhảy thẳng vào sửa code khi chưa hiểu hệ thống. Một Agent tốt phải biết đọc trước, làm sau, kiểm tra sau mỗi bước, và nói rõ bằng chứng hoàn thành.
  >
  > Khi workflow bắt đầu chạm file, terminal hoặc hệ thống thật, guardrail trở thành phần bắt buộc."

## Slide 9: Guardrails: Dùng AI Agent An Toàn

* **Nội dung trên slide:** Secret, data, destructive action, approval gate, mock-first.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "Phần này rất quan trọng trong môi trường công ty. Không paste token, password, webhook, private URL hoặc dữ liệu khách hàng nhạy cảm vào AI public nếu chưa được approve.
  >
  > Với Agent có quyền thao tác file, repo, terminal hoặc hệ thống thật, cần có approval gate trước các hành động nguy hiểm: xóa file, format disk, push code, deploy, gửi email hoặc gọi API thật.
  >
  > Nguyên tắc thực tế là mock data trước, real data sau. Walkthrough trước, automation thật sau. Càng tự động hóa mạnh, càng phải có log, rollback, verification và ranh giới quyền rõ ràng. Với guardrail đó, mình đi vào demo thật: Ocean USB Builder."

## Slide 10: Live Demo - Ocean USB Builder

* **Nội dung trên slide:** Tool thật: tạo USB boot Windows 11 Pro offline và stage apps/drivers.
* **Thời gian ước tính:** 8 phút.
* **Kịch bản nói:**
  > "Bây giờ mình đi vào demo chính của buổi hôm nay: Ocean USB Builder.
  >
  > Tool nằm ở `C:\Users\Ocean\Documents\VibeCode\OSDCloud`. Đây là một tool thật để admin tạo USB boot cài Windows 11 Pro offline, đồng thời stage sẵn app và driver cần thiết.
  >
  > Khi demo, mình sẽ mở repo, chỉ ra app `dist\OceanUsbBuilder\OceanUsbBuilder.exe`, engine `tools\Invoke-OceanUsbBuild.ps1`, manifest `core\ocean-offline\Apps.json`, và giải thích vì sao guardrail format USB là bắt buộc."

## Slide 11: Anatomy - Tool Được Agentic Build Như Thế Nào?

* **Nội dung trên slide:** WPF GUI, PowerShell engine, WinPE/cache, app manifest, post-install flow.
* **Thời gian ước tính:** 5 phút.
* **Kịch bản nói:**
  > "Điểm mình muốn mọi người thấy không chỉ là tool chạy được, mà là cách bài toán được chia lớp.
  >
  > Lớp ngoài là WPF app cho admin chọn ISO, USB, apps, drivers, local admin và timezone. Phía sau là PowerShell engine chịu trách nhiệm format USB, copy WinPE, chuẩn bị Windows image, stage apps/drivers và patch boot flow.
  >
  > Ngoài ra còn có manifest app, cache, post-install engine, logs và docs. Đây là Agentic Coding ở mức thực dụng: AI hỗ trợ mình chia hệ thống, viết phần thực thi, kiểm tra rủi ro và đóng gói tài liệu vận hành. Sau khi thấy demo thật, câu hỏi còn lại là: AI làm mình nhàn hơn, hay làm mình phải phán đoán nhiều hơn?"

## Slide 12: AI Work Paradox

* **Nội dung trên slide:** Nhanh hơn không tự động nhàn hơn; giá trị dịch chuyển sang phán đoán.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "AI giúp mình làm nhanh hơn, nhưng nhanh hơn không tự động đồng nghĩa với nhàn hơn.
  >
  > Khi một ý tưởng trước đây mất 40 giờ, nay còn 40 phút, mình thường không dùng 39 giờ còn lại để nghỉ. Mình dùng nó để làm ý tưởng tiếp theo. Đây là nghịch lý thời AI: chi phí thực thi giảm, tổng số việc có thể tăng.
  >
  > Vì vậy giá trị của con người dịch chuyển từ 'làm được' sang 'biết việc gì đáng làm'. Kỹ năng mới không chỉ là biết prompt, mà còn là biết không build, không tối ưu thêm, không trả lời vội, và biết đặt điểm dừng. Đây là lý do playbook cần cả prompt, skill, workflow, guardrails và demo thật."

## Slide 13: Q&A

* **Nội dung trên slide:** Câu hỏi mở: task nào nên giao cho Agent tiếp theo?
* **Thời gian ước tính:** 5 - 10 phút.
* **Kịch bản nói:**
  > "Đó là toàn bộ Practical Agent Playbook hôm nay: bắt đầu từ nhu cầu của team, nhìn ra bối cảnh agent, học cách giao việc, kiểm soát, xem demo thật, rồi quay lại câu hỏi về phán đoán và điểm dừng.
  >
  > Mình muốn để lại một câu hỏi thực tế: trong công việc của team mình, task lặp lại nào đủ rõ, đủ đau, đủ có tiêu chí kiểm tra để giao cho AI Agent xử lý tiếp theo?
  >
  > Bây giờ mình mở Q&A. Mọi người có thể hỏi về prompt, skill, Agentic Coding Workflow, guardrail, hoặc chi tiết của Ocean USB Builder."

---

## Q&A Gợi Ý

1. **Prompt cho Agent khác gì prompt cho Chatbot?**  
   Prompt cho Agent cần có mục tiêu, context, tool được phép dùng, constraint, checkpoint và Definition of Done. Nó giống một brief công việc hơn là một câu hỏi.

2. **Khi nào nên tạo skill?**  
   Khi đó là một quyết định hoặc workflow lặp lại nhiều lần, có tiêu chí làm đúng rõ ràng. Nếu chỉ dùng một lần, dùng prompt là đủ.

3. **AI Agentic coding có an toàn trong môi trường công ty không?**  
   Có thể an toàn nếu có guardrail: không đưa secret vào prompt, không chạy thao tác phá hủy khi chưa approve, có test, có log, có review và có rollback.

4. **Tại sao demo USB Builder không nhất thiết phải format USB live?**  
   Vì mục tiêu là chứng minh kiến trúc và workflow Agentic. Với thao tác phá hủy như format USB, walkthrough có kiểm soát chuyên nghiệp hơn chạy thật khi chưa có test USB riêng.
