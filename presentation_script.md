---
title: "Presentation Script: AI Agent Playbook"
description: "Kịch bản nói theo từng slide cho bài chia sẻ AI Agent Playbook."
keywords: ["AI Agent", "presentation script", "prompt", "skill ecosystem", "Ocean USB Builder"]
robots: "index, follow"
---

# Kịch Bản Thuyết Trình: AI Agent Playbook

Tài liệu này là script nói theo từng slide. Khi trình chiếu, mở `http://localhost:8000`, bấm `S` để đọc speaker notes trong cửa sổ riêng.

---

## Cover: AI Agent Playbook

* **Nội dung trên slide:** AI AGENT PLAYBOOK. Giao việc rõ. Kiểm chứng chắc. Demo thật. Minh họa: Ocean USB Builder.
* **Thời gian ước tính:** 2 phút.
* **Kịch bản nói:**
  > "Xin chào anh em. Cám ơn mọi người đã dành thời gian để tham gia buổi chia sẻ hôm nay. Do Nam yêu cầu mình chia sẻ kiến thức về AI nên mới có buổi hôm nay. Mình sẽ chia sẻ tất cả các kiến thức về AI mà mình mới update được trong thời gian gần đây. Tuy nhiên do thời gian có hạn hôm nay sẽ chỉ tập trung vào Agentic AI, AI Agent"
  >
  > "Phần cuối sẽ có một số demo về các sản phẩm gần đây mình làm ra được trong lúc tranh thủ công ty đang cho Unlimited token của Codex"

## Slide 1: Cảm ơn Adam

* **Nội dung trên slide:** Special thanks to Adam: người mở đường, giới thiệu tool/công nghệ và truyền lại kinh nghiệm thực chiến để mình tiếp cận AI sớm hơn.
* **Thời gian ước tính:** 1 - 2 phút.
* **Kịch bản nói:**
  > "Trước khi vào mục lục, mình muốn dành một slide ngắn để cảm ơn Adam.
  >
  > Adam là người đã giới thiệu cho mình rất nhiều công nghệ, tool và cách tiếp cận thực tế với AI từ khá sớm. Điều quan trọng nhất không chỉ là biết tên công cụ, mà là biết tool nào đáng thử, workflow nào có thể áp dụng vào công việc thật, và kinh nghiệm nào nên học trước để không đi lòng vòng.
  >
  > Nhiều phần trong buổi chia sẻ hôm nay, từ cách nhìn AI Agent, cách dùng skill, cách kết hợp tool, đến cách giữ guardrails, đều có ảnh hưởng từ những kinh nghiệm đó. Nên trước khi nói về playbook, mình muốn ghi nhận người đã giúp mình có điểm xuất phát tốt hơn."

## Slide 2: Mục lục

* **Nội dung trên slide:** Bản đồ 6 phần của buổi thuyết trình.
* **Thời gian ước tính:** 2 phút.
* **Kịch bản nói:**
  > "Trước khi bắt đầu thì mình muốn giới thiệu qua về nội dung của buổi thuyết trình hôm nay
  >
  > Phần một là mình sẽ xem lại kết quả khảo sát nội bộ, cũng chính từ kết quả này mình mới đưa ra các nội dung sau cho buổi chia sẻ hôm nay. Phần 2 là mình sẽ giới thiệu về các công cụ và xu thế AI hiện tại,phần 03 là phân tích sự khác nhau giữa Chatbot và AI Agent, phần 04 là mình sẽ đi sâu vào các kỹ thuật prompt, skill, workflow và guardrails. Sau đó là phần demo một số dự án thực tế đã được làm bằng AI. Cuối cùng là Q&A và một số kinh nghiệm mà bản thân mình đã rút ra sau 2 tháng sử dụng AI.
  >
  > Mục tiêu không phải là mọi người nhớ hết tất cả công cụ. Mục tiêu là ra khỏi buổi này, mỗi người có thể chọn một task lặp lại trong công việc của mình và biết cách giao cho AI Agent một cách rõ ràng, an toàn, có kiểm chứng."

## Slide 3: Survey result

* **Nội dung trên slide:** Dashboard khảo sát nội bộ: 13 phản hồi, format mong muốn, ranking chủ đề, bốn việc buổi này trả lời và lý do chọn Ocean USB Builder làm case thực tế.
* **Thời gian ước tính:** 3 phút.
* **Kịch bản nói:**
  > "Mình bắt đầu từ nhu cầu của team trước, vì đây không phải một buổi điểm tin AI chung chung.
  >
  > Click đầu tiên: khảo sát có 13 phản hồi từ ngày 07/05 đến 18/05/2026. Về format, 7 người chọn live demo, 5 người chọn case study và 1 người chọn hỏi đáp. Gộp lại là 12/13 người, tương đương 92.3%, muốn thấy demo hoặc case thực tế. Nên buổi này không thể chỉ nói lý thuyết. Mà sẽ show một số sản phẩm mình đã làm bằng AI để mọi người nếu thấy hứng thú thì có thể cùng nhau sử dụng và cải tiến thêm.
  >
  > Click thứ hai: Có tổng cộng 36 lượt chọn chủ đề. Tự động hóa và workflow đứng đầu với 12/13, kỹ thuật prompt nâng cao đứng ngay sau với 11/13. Sau đó là AI trong coding 6/13, tư duy sản phẩm AI 5/13, và AI cho thiết kế UI/UX 2/13.
  >
  > Click thứ ba: từ các câu hỏi và phản hồi mở, mình gom lại thành bốn chủ đề chính mà buổi chia sẻ này sẽ trả lời. Một là xu thế AI hiện nay, đi từ chatbot hội thoại sang agent tự chạy task. Hai là Agentic AI có thể làm gì: lập plan, dùng tool, đọc code. Ba là cách prompt hiệu quả: giao việc bằng brief có Goal, Context, Constraints, Checkpoint và DoD rõ ràng. Bốn là AI trong môi trường Enterprise, bao gồm dùng platform nội bộ và bảo đảm an toàn dữ liệu qua Guardrails.
  >
  > Click cuối: Cuối cùng là mình đã áp dụng AI như thế nào để xây dựng nên một tool có thể sử dụng trong thực tế
  >
  > Trước khi vào cách làm, mình muốn zoom ra một bước: vì sao đúng thời điểm này AI lại chuyển mạnh từ chatbot sang agent?"
## Slide 4: AI Trend update

* **Nội dung trên slide:** AI đã rời khỏi khung chat và bắt đầu đi vào workflow thật.
* **Thời gian ước tính:** 3 phút.
* **Kịch bản nói:**
  > "Từ nhu cầu của team, mình zoom ra bối cảnh rộng hơn. Để xem gần đây AI có gì mới có gì hay mà team mình cần phải cập nhật để có thể áp dụng vào công việc. Và mình nhận ra "AI đã rời khỏi khung chat và bắt đầu đi vào workflow thật". Lý do tại sao lại như vậy?
  >
  > Click đầu tiên: model làm được việc dài hơi hơn bộ nhớ lên tới 1M context, làm được đa dạng công việc hơn từ code, research, data, documents đến software operation. Ví dụ như các bạn có thể thấy Gemini 3 Pro có thể xử lý tới 1M context, điều này có nghĩa là nó có thể xử lý tới 700.000 từ, tương đương với việc nó có thể đọc và hiểu toàn bộ nội dung của 1 cuốn tiểu thuyết dày. Ví dụ cụ thể hơn như trong các dự án lớn, bộ nhớ 1M có thể giúp AI đọc và hiểu toàn bộ nội dung của các repo, các tài liệu kỹ thuật, các API docs. Điều này giúp AI có thể hiểu sâu sắc hơn về dự án và có thể đưa ra các giải pháp chính xác và hiệu quả hơn.
  >
  > Click thứ hai: coding agent bắt đầu nhận task end-to-end: đọc repo, lập plan, sửa file, chạy test và review diff. Nó có thể độc lập suy luận và lấy thông tin từ nhiều nguồn khác nhau để tham khảo cũng như tự phát hiện ra các lỗi sai, bug, lỗi bảo mật bằng nhiều cách khác nhau. Tự test, tự debug... Không chỉ đơn thuần là một công cụ hỗ trợ mà nó đã trở thành một đồng nghiệp giúp chúng ta giải quyết các công việc một cách độc lập, nhanh chóng và hiệu quả hơn. Mình còn thấy có một số tool còn được tích hợp vào các IDE để có thể sử dụng ngay trong quá trình lập trình. Ví dụ cụ thể hơn như việc lập trình viên có thể yêu cầu AI Agent đọc toàn bộ repo, phân tích kiến trúc, tìm ra các API chưa được sử dụng hoặc các điểm nóng về hiệu năng, sau đó AI Agent có thể tự động viết các unit test, integration test và thậm chí là tự động fix các lỗi nhỏ hoặc đề xuất các cải tiến cho code, sau đó gửi cho lập trình viên review và merge. 
  >
  > Click thứ ba: Hệ sinh thái công cụ (tool ecosystem) đang bùng nổ, đóng vai trò như "tay chân" giúp AI tương tác với thế giới thực. Trước đây AI chỉ có "não" để suy nghĩ và trò chuyện, còn bây giờ chúng đã có hạ tầng để thực hiện hành động thông qua MCP, connectors, skills, API hay các business tools. Ví dụ, với giao thức MCP, AI có thể chủ động đọc tài liệu của bên thứ ba, kết nối trực tiếp với database hoặc gọi các dịch vụ bên ngoài để lấy dữ liệu thời gian thực. Hệ sinh thái này giúp biến suy nghĩ của AI thành kết quả vận hành cụ thể.
  >
  > Click thứ tư: Khi AI đã có cả "não" lẫn "tay chân" để tự vận hành, thì quản trị hệ thống (governance) trở thành yếu tố bắt buộc để đảm bảo an toàn. Chúng ta không thể để một Agent tự ý sửa code hay gọi API mà thiếu sự kiểm soát. Vì vậy, các cơ chế như giới hạn quyền truy cập, thiết lập chốt phê duyệt từ con người (approval gate) trước các hành động quan trọng, ghi chép nhật ký hoạt động (log & audit), và chạy thử trong môi trường cô lập (sandbox) là cực kỳ quan trọng để đảm bảo Agent hoạt động trong ranh giới an toàn.
  >
  > Click cuối: Câu hỏi mới không còn là AI trả lời gì, mà là Agent được phép làm gì và kiểm chứng ra sao. Từ đây mình quay lại khái niệm nền: chatbot khác agent ở đâu?"

## Slide 5: Chatbot vs AI Agent

* **Nội dung trên slide:** So sánh chatbot tạo câu trả lời với AI Agent chạy workflow có goal, context, tool, checkpoint và Definition of Done.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "Để phân biệt rõ ràng, chúng ta cùng so sánh Chatbot và AI Agent qua 4 yếu tố cốt lõi hiển thị trên slide:
  >
  > Thứ nhất là Cách hoạt động: Chatbot hoạt động thụ động theo cơ chế hỏi-đáp từng câu đơn lẻ. Còn AI Agent nhận một mục tiêu lớn (Goal), tự lập kế hoạch (Plan), chia việc và tự chạy liên tục nhiều bước.
  >
  > Thứ hai là Ngữ cảnh (Context): Chatbot chỉ biết những gì đang hiển thị trong khung chat hiện tại. Trong khi đó, Agent có thể chủ động đọc toàn bộ repository, file code, tài liệu hướng dẫn và log lỗi để có góc nhìn toàn diện.
  >
  > Thứ ba là Khả năng dùng công cụ (Tool use): Khi cần chạy một tác vụ, Chatbot chỉ gợi ý dòng lệnh trên màn hình để bạn tự copy-paste chạy thủ công. Còn Agent có thể tự tương tác với terminal, trình duyệt, editor và API để trực tiếp xử lý công việc.
  >
  > Cuối cùng là Khả năng kiểm soát: Vì Chatbot không can thiệp trực tiếp vào hệ thống nên rủi ro rất thấp. Ngược lại, Agent có quyền tác động vào file và hệ thống thật, nên bắt buộc phải có cơ chế bảo vệ như môi trường cô lập (sandbox), các chốt duyệt (approval gate) và log theo dõi rõ ràng.
  >
  > Ví dụ thực tế với dự án Ocean USB Builder: Chatbot chỉ có thể chỉ cho bạn lệnh PowerShell để tạo USB boot. Nhưng một Agentic workflow có thể đọc file cấu hình, chuẩn bị driver, tự tạo file build, kiểm tra log chạy thử, và tự động dừng lại yêu cầu bạn xác nhận trước khi thực hiện thao tác format USB thật.
  >
  > Do Agent có nhiều quyền thực thi hơn, cách chúng ta giao việc cho Agent cũng phải thay đổi. Chúng ta không thể prompt theo kiểu chat thông thường mà cần một framework prompt chuyên dụng."

## Slide 6: Common AI Agent

* **Nội dung trên slide:** Codex, Antigravity và Claude Code kèm screenshot UI chính thức là các ví dụ agent phổ thông cho việc tạo tool, prototype, dashboard, automation script hoặc PR.
* **Thời gian ước tính:** 3 phút.
* **Kịch bản nói:**
  > "Slide trước mình nói Agent là goal, context, tool, checkpoint và Definition of Done. Bây giờ mình làm nó cụ thể hơn bằng những agent mọi người có thể gặp ngay trong công việc.
  >
  > Hôm nay mình focus vào nhóm agent tạo tool và sản phẩm. Ba ảnh trên slide là screenshot UI từ trang sản phẩm hoặc docs chính thức. Codex đại diện cho coding agent có thể làm feature, refactor, test và pull request. Antigravity đại diện cho agent-first development platform, nơi agent làm việc qua workspace, editor, terminal và browser. Claude Code đại diện cho terminal coding agent: đọc repo, sửa nhiều file, chạy command, xử lý test hoặc CI, rồi trả lại code để review.
  >
  > Điểm chung không phải là tên tool. Điểm chung là workflow: brief, context, plan, build, verify và artifact. Artifact có thể là pull request, prototype, dashboard, automation script hoặc một internal tool.
  >
  > Ocean USB Builder ở phần demo là một ví dụ theo hướng này: không phải hỏi AI một câu rồi xong, mà dùng agentic workflow để biến yêu cầu vận hành thành tool thật, có kiểm tra và có điểm dừng an toàn. Trước khi vào framework prompt, mình đặt thêm một mảnh ghép nội bộ: công ty mình cũng đã có platform để build agent."

## Slide 7: Internal AI Agent Buildler

* **Nội dung trên slide:** Alpha Intelligence và SMART là hai platform nội bộ để build AI Agent; đã được giới thiệu từ trước và nhiều người đã thử hoặc đang build trên đó, nên hôm nay chỉ nhắc ở mức bản đồ.
* **Thời gian ước tính:** 2 phút.
* **Kịch bản nói:**
  > "Ngoài các agent phổ biến vừa nhắc, trong công ty mình cũng đã có hai platform để build AI Agent: Alpha Intelligence và SMART.
  >
  > Hai platform này không phải nội dung mới hoàn toàn. Chúng đã được giới thiệu từ trước, nhiều anh chị em đã thử, và cũng đã có người đang build use case thật trên đó. Vì vậy hôm nay mình không đi sâu vào cách dùng từng platform.
  >
  > Ở mức bản đồ, Alpha Intelligence thiên về workflow, chatflow, super agent, nodes, tools và knowledge/resources. SMART thiên về trải nghiệm agent builder trực quan hơn, và ưu tiên các team nội bộ sử dụng để build tool chọc vào data nội bộ. Nó có tích hợp nhiều tính năng AI để tự gen ra prompt hoặc code đáng để thử.
  >
  > Điểm cần nhớ là: nếu muốn build agent nội bộ, công ty đã có kênh cung cấp và nó đã tích hợp được vào một vài hệ thống data nội bộ, đây vẫn là tool chính thống để trong việc build agent mà có thể đem đi trình diễn được. Tuy nhiên hôm nay mình sẽ không đi sâu vào các tool nội bộ, mà sẽ tập trung vào các tool phổ biến mà ngoài kia nhà nhà đang sử dụng. Điểm mấu chốt là cách prompt sao cho AI hoạt động hiệu quả, người dùng tiết kiệm được token chính là tiết kiệm được tiền"

## Slide 8: How to Prompt?

* **Nội dung trên slide:** Goal, Context, Tools, Constraints, Checkpoint, Definition of Done.
* **Thời gian ước tính:** 5 phút.
* **Kịch bản nói:**
  > "Prompt cho chatbot thường chỉ cần một câu hỏi tốt. Prompt cho Agent phải giống một brief công việc. Mục tiêu là khi AI đọc xong brief có thể tự tin làm mà không cần phải hỏi thêm nhiều lần. Nếu như prompt không rõ ràng thì AI sẽ hỏi lại và không thể tự làm một mạch được. Để cho agent hiểu rõ và làm việc hiệu quả thì prompt cần có các thành phần sau.
  >
  > Mình hay dùng sáu phần. Goal: kết quả cuối cùng là gì. Context: dữ liệu, repo, file, business background. Tools: Agent được dùng công cụ nào. Constraints: không được làm gì, giới hạn bảo mật và phạm vi sửa. Checkpoint: khi nào phải hỏi lại. Definition of Done: thế nào là xong thật.
  >
  > Ví dụ, thay vì nói 'viết tool giúp tôi', hãy nói: 'Đóng vai senior engineer. Đọc repo, lập plan trước khi sửa. Chỉ chỉnh file liên quan. Không chạy lệnh phá hủy. Sau mỗi batch, chạy verification và báo diff. Xong khi test pass, docs cập nhật và có handover ngắn'. 
  >
  > Nếu prompt là brief cho một task, thì skill là cách đóng gói workflow cho những task lặp lại.Slide sau mình sẽ giới thiệu các skill hay ho cho mọi người"

## Slide 9: Powerfull Skill

* **Nội dung trên slide:** Superpowers, GSD và CodyMaster đều được viết lại thành card chữ để giải thích ba lớp khác nhau của skill ecosystem.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
Mình giới thiệu 3 bộ skill phổ biến hiện tại. Thực ra skill nó chỉ là cách đóng gói prompt lại mà thôi. Nhưng để làm ra được nó thì lại cần có một chuyên môn nhất định về lĩnh vực đó. Nên để tạo ra được một skill hữu ích khá mất thời gian và công sức, phải thử đi thử lại nhiều lần, phải trải nghiệm đủ nhiều để biết lúc nào AI dễ bị sai.
  > Superpowers cho thấy task không đi thẳng vào code mà phải qua spec, implementation và review. GSD cho thấy mặt vận hành của skill: phát hiện tech stack, đề xuất pack, cài bằng CLI, check, update và kiểm soát discovery mode. CodyMaster minh họa lớp orchestration lớn hơn: profile, skill chain, dashboard, quality gate và handover.
  > 
  > Bài học không phải là dùng đúng ba bộ này, mà là cách nghĩ: khi một cách làm được lặp lại nhiều lần, hãy biến nó thành skill. Nếu chỉ dùng một lần, prompt rõ là đủ."

## Slide 9a: Superpowers Reference

* **Nội dung trên slide:** Tóm tắt Superpowers bằng chữ: workflow, các skill chính và ý cần nhớ.
* **Thời gian ước tính:** 45 giây.
* **Kịch bản nói:**
  > "Superpowers là ví dụ về skill như một methodology. Task không đi thẳng vào code; nó đi qua brainstorm, plan, execution, TDD, review và finish. Điểm cần nhớ là skill không phải prompt dài hơn, mà là kỷ luật workflow: có gate, có review, có bằng chứng trước khi nói xong."

## Slide 9b: GSD Reference

* **Nội dung trên slide:** Tóm tắt GSD bằng chữ: catalog, skill directories, install/check/update và discovery mode.
* **Thời gian ước tính:** 45 giây.
* **Kịch bản nói:**
  > "GSD cho thấy góc vận hành của skill: có catalog, có nơi lưu global và project, có cách cài, check, update, và có chế độ discovery auto/suggest/off. Nghĩa là skill không chỉ để chạy một lần; nó có vòng đời giống một tài sản kỹ thuật."

## Slide 9c: CodyMaster Reference

* **Nội dung trên slide:** Tóm tắt CodyMaster bằng chữ: one install, profiles, skill chaining, memory, safety gate và dashboard.
* **Thời gian ước tính:** 45 giây.
* **Kịch bản nói:**
  > "CodyMaster là ví dụ lớp workflow lớn hơn. Nếu Superpowers là kỷ luật task, GSD là catalog và lifecycle skill, thì CodyMaster là orchestration: nhiều skill chạy thành chain, có profile theo mức độ, có memory, có dashboard, có quality gate trước khi ship. Đây là cách nhìn skill như một hệ điều hành nhỏ cho AI Agent, không chỉ là một mẹo prompt."

> Tiếp theo là cách ghép prompt và skill thành một workflow coding thực chiến

## Slide 10: Agentic coding workflow

* **Nội dung trên slide:** Requirement -> Read codebase -> Plan -> Batch nhỏ -> Verify -> Review diff -> Docs/Handover.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "Workflow mình khuyên dùng rất đơn giản. Đầu tiên viết requirement rõ. Sau đó bắt Agent đọc codebase trước khi sửa. Tiếp theo là lập plan ngắn, làm từng batch nhỏ, chạy test hoặc verification, review diff, rồi cập nhật docs/handover.
  >
  > Điểm quan trọng là đừng để Agent nhảy thẳng vào sửa code khi chưa hiểu hệ thống. Một Agent tốt phải biết đọc trước, làm sau, kiểm tra sau mỗi bước, và nói rõ bằng chứng hoàn thành.
  >
  > Khi workflow bắt đầu chạm file, terminal hoặc hệ thống thật, guardrail trở thành phần bắt buộc."

## Slide 11: Guardrails

* **Nội dung trên slide:** Secret, data, destructive action, approval gate, mock-first.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "Phần này rất quan trọng trong môi trường công ty. Không paste token, password, webhook, private URL hoặc dữ liệu khách hàng nhạy cảm vào AI public nếu chưa được approve.
  >
  > Với Agent có quyền thao tác file, repo, terminal hoặc hệ thống thật, cần có approval gate trước các hành động nguy hiểm: xóa file, format disk, push code, deploy, gửi email hoặc gọi API thật.
  >
  > Nguyên tắc thực tế là mock data trước, real data sau. Walkthrough trước, automation thật sau. Càng tự động hóa mạnh, càng phải có log, rollback, verification và ranh giới quyền rõ ràng. Với guardrail đó, mình đi vào demo thật: Ocean USB Builder."

## Slide 12: Demo build journey

* **Nội dung trên slide:** Pain point vận hành -> mục tiêu/constraint -> stack -> kiến trúc layer -> verification/handover.
* **Thời gian ước tính:** 4 phút.
* **Kịch bản nói:**
  > "Trước khi mở app, mình muốn trả lời câu hỏi quan trọng hơn: AI đã giúp build app này theo quá trình nào?
  >
  > Điểm bắt đầu không phải là code. Điểm bắt đầu là pain point vận hành: chuẩn bị máy mới có nhiều bước lặp lại, dễ lệch chuẩn và nếu làm sai vì lỗi con người. Thêm nữa mỗi người có thể làm một kiểu quên hoặc sót app này app kia khi cài máy.
  >
  > Từ đó mình biến bài toán thành brief cho Agent: Cần tạo ra một tool để setup máy mới. Giúp helpdesk có thể setup máy mà không mắc phải sai sót, cũng như nhanh chóng hơn. Từ đó đưa ra ý tưởng về một tool tạo ra USB boot để cài windows offline (do MDT gần đây đã ngừng hỗ trợ). AI cũng đề xuất tech stack như WPF cho app desktop, PowerShell cho engine deployment, Apps.json cho manifest, WinPE cho runtime cài máy và docs/tests để bàn giao. Nó đọc bối cảnh và đề xuất các lớp công nghệ khác nhau để giải quyết bài toán, mình chỉ cần đưa rõ bối cảnh, các điều kiện cụ thể nó sẽ tự research để đáp ứng. Ví dụ như với yêu cầu offline, AI đề xuất sử dụng WinPE thay vì dùng các công cụ khác. Điều này giúp giảm thiểu rủi ro liên quan đến kết nối mạng.
  >
  > Vì vậy câu học được là: AI build được tool khi con người đóng vai PM, architect và reviewer. Mình vẫn quyết định mục tiêu, constraint, trade-off và điểm dừng. Bây giờ mình mở demo thật để mọi người thấy artifact cuối."

## Slide 13: PM brainstorm proof 01

* **Nội dung trên slide:** Ảnh chụp prompt PM brainstorm: Image 01 phân tích bối cảnh/phương án.
* **Thời gian ước tính:** 1.5 phút.
* **Kịch bản nói:**
  > "Trước khi show app chạy thật, mình muốn cho mọi người thấy điểm bắt đầu của demo. Đây là prompt mình dùng để yêu cầu AI đóng vai PM và phân tích cách chế tạo một tool tạo USB boot Windows 11 Pro offline.
  >
  > Image 01 cho thấy AI không nhảy thẳng vào code. Nó phân tích bối cảnh hệ thống, rào cản môi trường offline, driver, việc bảo trì dài hạn và đưa ra các phương án kiến trúc cụ thể như Fat ISO, WinPE Dashboard hay Modular Script để mình so sánh."

## Slide 13b: PM brainstorm proof 02

* **Nội dung trên slide:** Ảnh chụp prompt PM brainstorm: Image 02 ma trận đánh giá/recommendation.
* **Thời gian ước tính:** 1.5 phút.
* **Kịch bản nói:**
  > "Sang Image 02 là phần chốt quyết định sau khi đã liệt kê các phương án. AI lập một ma trận đánh giá bao gồm điểm số, khuyến nghị (recommendation) và các câu hỏi mở.
  >
  > Điểm quan trọng nhất mình rút ra ở đây là: một output tốt của AI không chỉ nằm ở việc viết dài hay viết nhiều code, mà nằm ở chỗ nó phải đưa ra được tiêu chí rõ ràng, có trọng số đánh giá, phân tích rõ ràng những được và mất (trade-off) để con người dễ dàng đưa ra quyết định cuối cùng."

## Slide 14: Demo proof

* **Nội dung trên slide:** Ảnh build thật trong OceanUsbBuilder.exe, hiển thị full màn hình để thấy rõ chi tiết.
* **Thời gian ước tính:** 8 phút.
* **Kịch bản nói:**
  > "Bây giờ mình đi vào proof chính của demo: app không chỉ là mockup, mà đã chạy build thật.
  >
  > Ảnh này là Ocean USB Builder trong lúc build USB. Mọi người có thể thấy ISO đầu vào, target USB, danh sách app, driver folder, build log và progress. Mình có thể hoàn toàn chỉ cần build 1 cái USB cài windows tự động cài app mà không cần build cái giao diện WPF như này. Tuy nhiên như vậy chỉ build 1 cái usb, muốn build nhiều USB và update mỗi khi có thay đổi OS, thay đổi driver hoặc app cần cài thì lại khá bất tiện. Nên mình quyết định build ra app này để ae trong team có thể tự custom usb cài windows theo nhu cầu, ví dụ như USB cài windows của team A cần thêm app X và app Y nhưng không cần app Z. Thì để team A tự build và quản lý USB của team mình để tránh phiền.
  >
  > Lưu ý phần guardrail vẫn còn nguyên: đây là tool có thể format USB, nên build thật chỉ chạy với USB test và có xác nhận rõ

## Slide 15: Real install proof

* **Nội dung trên slide:** 3 ảnh thực tế sau khi boot USB vào máy: WinPE deploy, payload ready và post-install app.
* **Thời gian ước tính:** 2 phút.
* **Kịch bản nói:**
  > "Đây là đoạn nối từ app build ra artifact vận hành thật. Ba ảnh này mình để chung một slide vì chúng kể cùng một chuỗi, không phải ba ý rời nhau.
  >
  > Ảnh đầu tiên là máy boot vào WinPE và chạy Ocean Offline Deploy. Script nhận diện USB, model máy, ổ target, driver pack và bắt đầu deploy Windows.
  >
  > Ảnh thứ hai là payload đã copy local và USB có thể rút ra để dùng cho máy tiếp theo. Đây là checkpoint cho thấy phần deploy offline đã có điểm dừng rõ, không phải chạy mù.
  >
  > Ảnh thứ ba mới là bước cuối: sau khi Windows lên, post-install bắt đầu cài app offline. Đây là phần chứng minh USB không chỉ cài OS, mà còn stage app payload và có log theo dõi. Điểm mình muốn chốt ở đây là: demo này không chỉ là giao diện đẹp. Nó đi được tới một flow offline, lặp lại được, có checkpoint và có bằng chứng thật trên máy."

## Slide 16: AI Work Paradox

* **Nội dung trên slide:** AI làm thực thi rẻ hơn, nhưng làm mất điểm dừng tự nhiên; giá trị dịch chuyển sang phán đoán, kỷ luật và biết không làm.
* **Thời gian ước tính:** 6 - 8 phút.
* **Kịch bản nói:**
  > "Đến đây mình muốn chốt bằng một nghịch lý rất thật của thời AI. AI giúp mình làm nhanh hơn, nhưng nhanh hơn không tự động đồng nghĩa với nhàn hơn.
  >
  > Có những ngày mình làm xong lượng việc trước đây mất cả tuần hoặc cả tháng. Đáng lẽ mình phải đóng máy sớm hơn. Nhưng thường là không. Mình mở tiếp một agent, thử thêm một ý tưởng, tạo thêm một workflow, sửa thêm một đoạn nhỏ. Câu hỏi không chỉ là: tại sao mình vẫn làm việc lúc khuya? Câu hỏi khó hơn là: tại sao mình không muốn dừng lại, dù biết mình nên dừng?
  >
  > Trong kinh tế học có Nghịch lý Jevons: khi một công nghệ làm việc sử dụng tài nguyên hiệu quả hơn, tổng lượng tiêu thụ đôi khi không giảm mà tăng. Vì chi phí thấp hơn mở ra nhiều cách dùng hơn. Với AI, điều tương tự đang xảy ra với năng lượng sáng tạo. Khi một ý tưởng từ 40 giờ còn 40 phút, mình không nhất thiết nghỉ 39 giờ còn lại. Mình dùng phần đó để nghĩ ra ý tưởng tiếp theo và làm luôn.
  >
  > Có bốn cơ chế tâm lý ở đây. Thứ nhất, ngưỡng đủ tốt biến mất. Ngày xưa một báo cáo mất ba ngày thì mình buộc phải dừng ở 80%. Giờ cải thiện từ 80% lên 85% chỉ mất vài phút, rồi 90%, rồi 95%. Cái phanh tự nhiên do chi phí thời gian tạo ra không còn nữa.
  >
  > Thứ hai, hàng đợi ý tưởng luôn dài hơn năng lực làm. Với người làm kỹ thuật, vận hành, data hay automation, ý tưởng không bao giờ thiếu. Khi AI làm mình nhanh hơn, mình không hết việc. Mình chỉ phát hiện danh sách việc trong đầu dài hơn mình tưởng. Một skill mới gợi ra ba skill khác. Một diagram xong lại lộ ra năm diagram chưa làm.
  >
  > Thứ ba, nghỉ ngơi bắt đầu có cảm giác đắt. Khi một giờ làm việc có thể tạo ra kết quả của cả ngày trước đây, một giờ đi nghỉ dễ bị não diễn giải thành bỏ lỡ. Đây là bẫy tâm lý, vì con người không được thiết kế để xử lý đòn bẩy 10x hoặc 100x liên tục.
  >
  > Thứ tư, điều phối agent cũng là một loại mệt. Khi mình chạy nhiều agent, nhiều skill, nhiều context cùng lúc, mình không chỉ làm việc nữa. Mình đang chỉ huy công việc. Phải quyết định agent nào chạy, context nào đưa vào, output nào tin được, lúc nào can thiệp, lúc nào dừng. Loại mệt này là mệt working memory, không phải chỉ mệt tay hay mệt code.
  >
  > Vì vậy trong kỷ nguyên Agentic, thứ khan hiếm không còn là khả năng thực thi. Thực thi đang rẻ đi rất nhanh. Thứ khan hiếm là phán đoán: việc gì đáng làm, việc gì không đáng làm, insight nào thay đổi quyết định, insight nào chỉ là trang trí dữ liệu được đóng gói đẹp.
  >
  > Đây là lý do năng lực mới không chỉ là biết prompt. Năng lực mới là biết không làm. Không build mọi ý tưởng thành skill hoặc pipeline. Một skill chỉ đáng tồn tại nếu nó giải quyết một quyết định lặp lại; nếu chỉ dùng một lần, nó nên là prompt. Không tối ưu mãi khi output đã đủ dùng và có giá trị. Một dashboard 85% được dùng hàng tuần tốt hơn một dashboard 99% ra mắt muộn ba tháng.
  >
  > Cũng phải biết không trả lời vội. Khi stakeholder hỏi một câu chưa rõ, phản xạ thời AI là chạy ngay vài phân tích, vài EDA, vài bản tổng hợp. Nhưng câu hỏi đúng hơn là: nếu biết câu trả lời, anh chị sẽ quyết định khác đi điều gì? Nếu câu hỏi không gắn với quyết định, có thể nó chưa đáng phân tích lúc này.
  >
  > Và cuối cùng là biết không để agent chạy 24/7 kéo mình chạy theo. Agent không ngủ, nhưng mình thì có. Nếu mình start pipeline trước khi ngủ, ba giờ sáng tỉnh dậy check output, thấy bug rồi lại sửa, thì AI không ép mình làm nhiều hơn, nhưng nó đã xóa mất ranh giới từng bảo vệ mình khỏi chính ý tưởng tiếp theo của mình.
  >
  > Cho nên playbook hôm nay cần đủ cả prompt, skill, workflow, guardrails và demo thật. Prompt giúp giao việc rõ. Skill giúp chuẩn hóa cách làm. Workflow giúp đi từ yêu cầu đến artifact. Guardrails giúp giữ điểm dừng. Demo thật nhắc mình rằng AI Agent rất mạnh, nhưng nó không thay con người quyết định việc gì đáng làm. Nó chỉ làm phần thực thi nhanh hơn khi mình giao việc đúng.
  >
  > Câu hỏi chốt không còn là AI có thể làm gì cho mình. Câu hỏi khó hơn là: mình sẽ dùng AI để làm ít hơn điều gì, để có thể làm sâu hơn điều gì? Không có agent nào trả lời thay câu đó được. Và đó là lý do vẫn cần con người ở trung tâm của hệ thống."

## Q&A

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
