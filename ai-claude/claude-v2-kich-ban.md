# KỊCH BẢN NÓI 60 PHÚT — KHÓA "CLAUDE & AI TRONG CÔNG VIỆC" (V2)

> **Diễn giả:** Mr. Cuong Bui — PMO, VCI · **Deck:** 17 slide theo `claude-v2.html` (slide 1 là **trang điểm danh QR**, chiếu trước giờ G) · **Cẩm nang demo:** `demo-v2/HUONG-DAN-DEMO-V2.md`
>
> **Phân bổ 60′:** Mở đầu (S2–4) 4′ · AI là gì & đã đi tới đâu (S5–6) 5′ · **Rủi ro khi dùng AI (S7) 3′** · Cách hỏi · chọn công cụ · Claude · **thử ngay tại chỗ (S8–14) 11′** · **DEMO (S15–16) 20′** (phút 23–43: Word 9′ · Excel 11′) · **khối mở rộng tuỳ chọn 7′** (phút 43–50) · **Q&A & lời kết (S17) 10′** (phút 50–60)
>
> **Vì sao rủi ro nằm ngay sau phần AI là gì:** khán giả phải biết rủi ro *trước khi* xem demo — để lúc xem demo họ soi đúng chỗ, và để cả buổi không ai mang về ấn tượng &ldquo;AI làm được hết&rdquo;.
>
> **Thông điệp xuyên suốt (nhắc ít nhất 3 lần):** *AI soạn — người dùng kiểm — người dùng chịu trách nhiệm.*
>
> **Ràng buộc giọng nói (theo lưu ý cuối docx):** không nêu số liệu thống kê thiếu nguồn; không khẳng định tuyệt đối ("AI ít bịa", "Claude tốt nhất", "AI làm thay con người"); demo Excel dùng ngày tham chiếu cố định **14/08/2026**; ưu tiên thời gian cho demo và Q&A.

---

# PHẦN MỞ ĐẦU — 4 PHÚT

## 📺 Slide 1/17 · 01 — Điểm danh QR · chiếu sẵn TRƯỚC giờ G

> **Trang này bật sẵn từ lúc mở phòng**, để mọi người vừa vào là quét được. Không tính vào 60 phút.

🎙 **Khi phòng đã đông (trước giờ bắt đầu 2–3 phút):** "Chào anh chị em. Trước khi mình bắt đầu, cả nhà quét giúp mình cái mã QR trên màn hình để **điểm danh** nhé — ba bước thôi: mở camera điện thoại, hướng vào mã, rồi điền họ tên và phòng ban. Xong là hoàn tất.

Ai đang bận tay chưa quét kịp thì không sao — **cuối buổi mình sẽ chiếu lại mã này**."

🙋 Đợi khoảng 1 phút, nhìn quanh phòng: "Cả nhà quét xong chưa ạ? — Còn ai chưa thì giơ tay để mình để mã thêm chút." (Đừng vội chuyển slide khi còn người đang quét.)

➡ "Vậy là đủ rồi. Mình bắt đầu nhé." *(chuyển sang trang bìa — bắt đầu tính phút 0)*

---

## 📺 Slide 2/17 · Trang bìa · phút 0–1.5

🎙 **Lời dẫn:** "Chào anh chị em Trung Chính, mình là Cường bên VCI — rất vui hôm nay cả nhà dành ra một tiếng cho nhau. Mình hứa trước một điều: buổi này không phải buổi nghe giảng về công nghệ — quá nửa thời gian anh chị em sẽ nhìn mình làm việc thật trên màn hình, với hợp đồng, file Excel và slide y như đồ mình vẫn xử lý hằng ngày. Anh chị em nhìn cái sơ đồ năm nút trên màn hình: tài liệu đi vào, AI làm bản nháp, và có một ô viền đỏ nhấp nháy đứng giữa bản nháp và kết quả — *Người kiểm tra*, tức là chính chúng ta. Cả buổi hôm nay xoay quanh đúng một câu đang chạy dưới sơ đồ: AI hỗ trợ công việc — con người kiểm tra và chịu trách nhiệm."

🙋 Hỏi nhanh giơ tay: "Ai ở đây đã từng dùng ChatGPT, Claude hay Gemini rồi — giơ tay giúp mình?" (đếm nhanh, khen: "Tốt, vậy mình đi nhanh phần khái niệm được.")

➡ "Trước hết, xin phép giới thiệu ngắn hai anh em đứng lớp hôm nay."

## 📺 Slide 3/17 · 03 — Diễn giả · phút 1.5–3

🎙 **Lời dẫn:** "Hôm nay có hai anh em bên VCI đứng cùng anh chị em. Mình là **Cường**, đang làm PMO ở VCI, hơn mười hai năm làm phần mềm và quản lý dự án. Và đây là **anh Đoàn — Trưởng phòng BIM của VCI**, **nhiều năm kinh nghiệm BIM trong ngành xây dựng**: số hoá hồ sơ, bản vẽ, phối hợp mô hình giữa các bộ môn. Anh Đoàn sẽ hỗ trợ phần hồ sơ kỹ thuật và trả lời các câu hỏi thiên về bản vẽ, dự án — anh chị em bên kỹ thuật cứ hỏi thẳng anh Đoàn.

Bọn mình không đứng đây với tư cách người bán công cụ — mà với tư cách **người dùng**: tài liệu dự án, báo cáo, kế hoạch bọn mình làm hằng ngày đều có AI hỗ trợ một phần, và cũng đã đủ lần thấy nó làm sai để biết chỗ nào phải kiểm."

🎙 **Chỉ dải dưới — hai quy ước, nói nhanh:** "Luật chơi hôm nay gọn thôi, đúng hai điều. **Một — thắc mắc là hỏi ngay**, không cần chờ đến cuối buổi; buổi này càng bị ngắt lời càng tốt. **Hai — nghĩ sẵn một việc lặp lại** mà anh chị em làm mỗi tuần và ngán nhất. Giữ nó trong đầu, cuối buổi mình sẽ dùng tới."

🎙 **Rồi chỉ bốn ô nhỏ dưới cùng, giọng vui lên:** "Và bốn điều cho anh chị em yên tâm. **Không cần biết lập trình** — cả buổi hôm nay không có một dòng mã nào, chỉ gõ tiếng Việt. **Cứ hỏi thoải mái** — ai cũng bắt đầu từ con số 0; cách đây một năm mình cũng hỏi y hệt anh chị em bây giờ. **Không kiểm tra, không chấm điểm** — mọi người ngồi đây để mang một kỹ năng về, không phải để thi. Và cái cuối: **ai hỏi hay nhất buổi hôm nay có quà** — nên đừng ngại giơ tay."

> ⚠️ *Nếu chưa chuẩn bị được quà thì bỏ ô thứ tư khỏi slide trước khi trình chiếu — đừng hứa suông.*

🙋 "Có ai đang có sẵn một file — hợp đồng, bảng kê, biên bản — mà đang ngại đọc không? Nhớ nó nhé, lát demo xong anh chị em sẽ biết phải làm gì với nó."

➡ "Giờ mình cho anh chị em xem đường đi của một tiếng hôm nay."

## 📺 Slide 4/17 · 04 — Nội dung buổi thuyết trình · phút 3–4

🎙 **Lời dẫn:** "Trước khi vào việc, mình cho anh chị em xem đường đi của buổi hôm nay — sáu phần, sáu ô trên màn hình.

**Ô 01 — Mở đầu và làm quen.** **Ô 02 — AI là gì:** nó hoạt động thế nào, có mấy loại, và bảy mươi năm AI gói trong bốn mốc. **Ô 03 — Rủi ro khi dùng AI.** Anh chị em có thể thấy lạ vì phần này thường để cuối; mình cố tình đưa lên sớm: **biết nó sai ở đâu trước, thì lúc xem demo mới biết soi đúng chỗ** — chứ không ngồi xem xong rồi tưởng AI làm được hết.

**Ô 04 — Chọn việc và giao việc:** cách hỏi cho đúng, chọn công cụ, công thức giao việc, và Claude làm được gì. Rồi tới **ô 05 — ô duy nhất tô đỏ: DEMO trực tiếp.** Đây là phần dài nhất, gần nửa buổi: mình mở Word, Excel, PowerPoint và làm thật trên file của ngành mình. Anh chị em bỏ hết các phần khác mà chỉ ngồi lại phần này thôi thì buổi hôm nay vẫn đáng. **Ô 06 — Hỏi đáp và lời kết:** anh chị em mang đúng việc thật của mình ra hỏi.

Không cần biết lập trình gì hết; chỉ cần mang theo một việc anh chị em muốn làm nhanh hơn."

📌 *Mốc phút từng phần nằm trong kịch bản này — không hiện lên slide, để khán giả tập trung vào nội dung chứ không nhìn đồng hồ.*

🙋 "Ngay bây giờ, anh chị em nghĩ trong đầu MỘT việc lặp đi lặp lại mỗi tuần mà mình ngán nhất — giữ nó trong đầu, cuối buổi mình sẽ hỏi lại."

➡ "Vào việc. Câu hỏi đầu tiên, và cũng là câu ai cũng tưởng mình biết rồi: *AI thực chất là cái gì?*"

---

# PHẦN NỀN TẢNG: AI LÀ GÌ — 5 PHÚT

## 📺 Slide 5/17 · 05 — AI là gì · phút 4–7

🎙 **Lời dẫn (chỉ khung định nghĩa):** "Trước hết thống nhất với nhau AI là cái gì, nói cho thật dễ hiểu. Anh chị em đọc cùng mình khung xanh trên màn hình: **AI là phần mềm học từ dữ liệu.** Không ai viết sẵn từng bước cho nó — người ta cho nó **đọc hàng triệu dữ liệu**: văn bản, ảnh, số liệu — rồi nó *tự rút ra quy luật* để xử lý việc mới mà nó chưa từng gặp. Nói cách khác: phần mềm thường thì **người dạy luật**; AI thì **dữ liệu dạy nó**."

🎙 **Rồi chỉ hai thẻ A và B (nói nhanh, hai câu mỗi thẻ):** "Khác biệt nằm ở đây. **Thẻ A — phần mềm thường**: người viết sẵn quy tắc, máy làm đúng y hệt; như cái máy tính bỏ túi, bấm một nghìn lần vẫn ra một kết quả. **Thẻ B — AI**: có những việc không viết nổi thành quy tắc, thì cho máy đọc thật nhiều dữ liệu. Anh chị em thử tả cho mình nghe xem — *nét thế nào thì là chữ A*? Không ai tả nổi. Nên người ta cho máy đọc cả trăm nghìn chữ A viết tay, và nó tự nhận ra."

🎙 **Cuối cùng chỉ bốn ô loại AI:** "AI không phải một cục duy nhất — có bốn loại hay gặp, và anh chị em đã dùng gần hết rồi. **AI nhìn**: nhận khuôn mặt, đọc chữ trên ảnh — mở khoá điện thoại, quét căn cước, chấm công. **AI nghe và nói**: nghe giọng rồi chuyển thành chữ — gõ bằng giọng nói, ghi biên bản cuộc họp. **AI tạo ảnh, video**: vẽ ảnh hoặc dựng video chỉ từ một câu mô tả — ảnh minh hoạ, phối cảnh.

Và ô được tô đậm ở giữa — **AI đọc và viết**: đọc tài liệu, viết văn bản, tính bảng. **Cả buổi hôm nay mình chỉ nói về đúng loại này thôi**, vì đây là loại dính trực tiếp tới công việc văn phòng của anh chị em. Claude, ChatGPT, Gemini đều nằm ở ô này."

🙋 Hỏi nhanh giơ tay: "Ai trong phòng đang mở khoá điện thoại bằng khuôn mặt hoặc vân tay? — Đấy, cả phòng dùng AI hằng ngày rồi. Nên hôm nay không phải học cái gì xa lạ."

➡ "Vậy cái phần mềm học từ ví dụ này đã đi tới đâu rồi? Bốn mốc, mình đi thật nhanh."

## 📺 Slide 6/17 · 06 — Lịch sử phát triển AI · phút 7–9

🎙 **Lời dẫn — bốn mốc, mỗi mốc đọc luôn dòng *Ví dụ* cho khán giả hình dung:**

- **1950 – 1990 · Máy chỉ làm điều được dạy.** Người phải viết sẵn từng bước cho máy; thiếu một bước là hỏng. *Ví dụ anh chị em từng dùng: máy tính bỏ túi, máy chấm công thẻ từ — bấm bao nhiêu lần cũng ra đúng một kết quả.*
- **1997 · Máy giỏi hơn người ở một việc.** *Ví dụ: Deep Blue thắng Kasparov — vua cờ vua thế giới.* Cả thế giới lần đầu tin máy có thể hơn người; nhưng ra khỏi bàn cờ là nó chịu, không làm được gì khác.
- **2012 – 2020 · Máy biết nhìn, nghe, dịch.** *Ví dụ: mở khoá điện thoại bằng khuôn mặt, Google Dịch, Maps né tắc đường.* Đây là lúc AI vào túi quần mọi người — mà chẳng ai gọi nó là AI cả.
- **2022 – nay · Máy biết đọc và viết.** *Ví dụ: ChatGPT, Claude, Gemini tóm tắt hồ sơ, soạn công văn.* Gõ tiếng Việt là giao được việc.

🎙 **Chỉ dòng dưới timeline, chậm lại:** "Anh chị em để ý dòng này: **tới hôm nay, AI đã đọc được hồ sơ, tính được bảng, viết được văn bản** — đúng những việc anh chị em làm mỗi ngày. Nên cái mới của ba năm gần đây không phải là AI bỗng thông minh vượt bậc, mà là **ai cũng dùng được**: không cần biết lập trình, không cần cài gì, mở trình duyệt và gõ tiếng Việt."

🙋 "Ai ở đây từng dùng Google Dịch? — Vậy anh chị em bước vào mốc thứ ba từ lâu rồi. Hôm nay mình bước sang mốc thứ tư."

➡ "Nghe tới đây dễ tưởng AI làm được hết. Nên trước khi mình chỉ cách dùng, phải nói ngay phần ngược lại: nó sai ở đâu, và sai thì mất gì."

---

# PHẦN RỦI RO & CẢNH BÁO — 3 PHÚT

## 📺 Slide 7/17 · 07 — Ba rủi ro khi dùng AI · phút 9–12

🎙 **Lời dẫn (mở, chỉ dòng trên cùng):** "Trước khi mình chỉ anh chị em cách dùng, phải nói phần này trước — vì biết nó hỏng ở đâu rồi thì lát nữa nhìn demo mới biết soi đúng chỗ. Ba ô đỏ trên màn hình. Và anh chị em đọc kỹ dòng ngay trên: **ba rủi ro này không nằm ở AI — chúng nằm ở cách mình dùng.** Đó là tin tốt: cái gì do mình thì mình sửa được."

🎙 **Ô 1 — Thụ động:** "Cái này mình thấy nhiều nhất. Bản nháp AI viết ra trông chỉn chu quá — đủ đề mục, đủ gạch đầu dòng, câu chữ mượt — nên không ai buồn đọc lại. Chép thẳng vào email gửi chủ đầu tư. **Chính cái vẻ 'chỉn chu' đó là cái bẫy**: văn bản càng đẹp mình càng lười kiểm. Trước kia bản nháp xấu nên mình còn phải sửa; giờ nó đẹp sẵn nên mình bỏ luôn bước đọc."

🎙 **Ô 2 — Phụ thuộc:** "Cái này mất chậm nên không ai để ý. Việc gì cũng nhờ, không đọc lại, không tự nghĩ — tay nghề mai một lúc nào không hay. Rồi đến hôm họp, chủ đầu tư hỏi *'con số này ở đâu ra?'*, mình đứng đó không giải thích nổi con số trong chính báo cáo mình ký. AI viết hộ được, **nhưng không đứng ra trả lời thay mình được.** Nên mình đề nghị: dùng AI để *làm nhanh việc mình đã hiểu*, đừng dùng nó để *né việc mình chưa hiểu*."

🎙 **Ô 3 — Lộ dữ liệu, nói chậm và rõ:** "Cái này nguy hiểm nhất vì **không sửa được**. Dán hợp đồng, bảng lương, danh sách khách hàng, báo giá lên tài khoản cá nhân miễn phí — là dữ liệu đã ra khỏi công ty, không thu lại được. Nguyên tắc của buổi hôm nay, mong anh chị em nhớ giúp: **chưa có tài khoản doanh nghiệp được công ty phê duyệt thì chỉ đưa lên dữ liệu công khai, dữ liệu mẫu, hoặc đã ẩn danh** — đúng như toàn bộ file demo lát nữa mình dùng."

🙋 Hỏi thẳng: "Trong ba cái này, anh chị em nghĩ cái nào hay xảy ra ở chỗ mình nhất?" (Nếu có người nói 'thụ động' — khen: "Chuẩn, và đó cũng là cái dễ sửa nhất: thêm hai phút đọc lại trước khi gửi.")

➡ "Ba rủi ro là vậy — và cả ba đều nằm ở cách dùng. Nên phần còn lại của buổi hôm nay chính là *cách dùng cho đúng*, bắt đầu từ việc chọn đúng việc để giao."

---

# PHẦN CÁCH HỎI, CÔNG CỤ & GIAO VIỆC — 11 PHÚT

## 📺 Slide 8/17 · 08 — Hai cách hỏi, hai kết quả · phút 12–14

🎙 **Lời dẫn:** "Nhiều anh chị em từng thử AI rồi thất vọng: *'hỏi nó trả lời chung chung lắm'*. Thật ra vấn đề thường không nằm ở AI — nằm ở câu hỏi. Màn hình chia đôi rất rõ: bên trái **Cách 1 — hỏi cụt**, bên phải **Cách 2 — hỏi rõ**. Cùng một việc, chỉ khác cách giao."

🎙 **Việc 1 — email xin lỗi khách (đọc to cả hai câu, đúng nguyên văn):** "Cách 1: *'Viết email xin lỗi khách.'* Hết. Nhận về cái gì? Một email xin lỗi... ai đó, về chuyện gì đó — không rõ khách nào, lỗi gì, đền bù ra sao. Ngồi sửa gần như từ đầu.

Cách 2: *'Khách A phàn nàn **giao trễ 3 ngày do bão**. Viết email xin lỗi **trang trọng**, nhận trách nhiệm, đề xuất **hỗ trợ 5% đơn sau**, **tối đa 8 câu**.'* Anh chị em đếm cùng mình: cùng một việc, mình chỉ nói thêm **bốn thứ** — chuyện gì xảy ra, giọng thế nào, đề xuất gì, dài bao nhiêu. Và nhận về bản gửi được ngay."

🎙 **Việc 2 — tóm tắt hợp đồng:** "Cách 1: *'Tóm tắt file này.'* — nó tóm lan man, dài gần bằng bản gốc, và thiếu đúng cái phần mình cần. Cách 2: *'Tóm tắt hợp đồng đính kèm thành **10 gạch đầu dòng** cho **giám đốc đọc trong 2 phút**, nêu rõ **mốc thanh toán** và **điều khoản phạt**.'* Lần này mình nói rõ **ai đọc**, **dài bao nhiêu**, và **phần nào là quan trọng** — nhận về đúng thứ mang đi họp được."

🎙 **Chỉ dòng chốt dưới cùng:** "Nên nhớ giúp mình: **khác biệt không nằm ở AI** — nằm ở bốn thứ mình nói thêm: *ai đọc · việc gì · dựa vào đâu · dài bao nhiêu*. Lát nữa mình sẽ gói bốn thứ này thành một công thức, và cả ba demo đều dùng đúng công thức đó."

🙋 Hỏi mở: "Ai từng hỏi AI một câu cụt lủn rồi chê nó dở chưa? — Hôm nay mình sửa đúng cái đó, và chỉ mất thêm ba mươi giây gõ."

➡ "Biết cách hỏi rồi. Câu tiếp theo ai cũng hỏi mình: *vậy dùng công cụ nào?* Câu trả lời không phải một cái tên."

## 📺 Slide 9/17 · 09 — Chọn công cụ theo việc · phút 14–15.5

🎙 **Lời dẫn:** "Câu ai cũng hỏi mình: *dùng cái nào?* Mình sẽ không nói 'cái này tốt nhất' — nói thế là nói liều, vì các hãng đổi tính năng liên tục. Cách nghĩ đúng là **chọn theo việc**. Năm cái quen thuộc nhất, và anh chị em để ý tên hãng ghi ngay dưới mỗi logo:

**Claude** của **Anthropic** — đọc tài liệu dài, viết, tóm tắt, phân tích file. **ChatGPT** của **OpenAI** — sáng tạo nội dung, hình ảnh, hỗ trợ đa dạng. **Gemini** của **Google** — tiện nhất nếu mình sống trong Gmail, Drive, Docs, Sheets. **Copilot** của **Microsoft** — làm việc ngay trong Word, Excel, Teams. **Perplexity** — tra thông tin mới và luôn kèm nguồn để mình tự mở ra đối chiếu.

Thẻ đầu tiên có nhãn **'Dùng hôm nay'** — mình lấy Claude làm ví dụ chính, đơn giản vì nó mạnh ở đúng thứ mình demo: tài liệu và bảng biểu."

🎙 **Chỉ khung đỏ dưới cùng — nói chậm:** "Nhưng có một nguyên tắc đứng trên mọi công cụ: **không tự đưa dữ liệu nhạy cảm lên công cụ bên ngoài khi chưa được phê duyệt.** Đúng cái rủi ro số ba mình vừa nói. Và tính năng thì thay đổi theo gói tài khoản, nên đừng tin cứng vào bảng này — cứ mở ra dùng thử."

➡ "Hôm nay đi sâu vào một cái. Claude làm được những gì?"

## 📺 Slide 10/17 · 10 — Claude làm được gì · phút 15.5–17.5

🎙 **Lời dẫn (chỉ khung có logo Claude màu cam):** "Đây là logo anh chị em sẽ thấy khi mở claude.ai — nhớ cái hình sao này. **Claude là trợ lý AI do Anthropic phát triển** — một công ty AI của Mỹ. Anh chị em dùng ngay trên trình duyệt tại **claude.ai**, hoặc tải ứng dụng cho máy tính và điện thoại. Có bản miễn phí. Không phải cài đặt gì, không cần biết lập trình — mở lên, **gõ tiếng Việt là dùng được**."

🎙 **Sáu ô — dừng lâu ở hai ô đầu vì lát nữa demo đúng hai cái đó:** "**Đọc và tóm tắt tài liệu dài**: đính kèm PDF hay Word vài chục trang, nó tóm tắt và tìm điều khoản giúp mình. **Viết và soát văn bản**: soạn công văn, email, và rà lỗi chính tả, số liệu. **Phân tích bảng tính**: lọc, tổng hợp, **vẽ được biểu đồ**, viết công thức.

Ba ô còn lại nói nhanh: **dựng nội dung trình bày** từ ghi chép thô; **đọc ảnh chụp, bản scan** — chụp cái biểu mẫu là nó chuyển thành chữ, thành bảng, cái này tiện cho anh em ngoài công trường; và **tìm thông tin trên mạng có dẫn nguồn**."

🎙 **Chỉ khung đỏ:** "Nhưng nhớ giúp mình: **Claude vẫn có thể trả lời sai** — mọi đầu ra đều phải qua mắt người. Và nó không thay thế chuyên gia pháp lý, kế toán, kỹ sư hay người có thẩm quyền phê duyệt; nó là **trợ lý của những người đó**."

🙋 "Trong sáu ô này, ô nào anh chị em thấy dùng được ngay tuần sau?"

➡ "Biết nó làm được gì rồi. Giờ tới phần cốt lõi nhất của cả buổi: **giao việc cho nó thế nào cho ra kết quả dùng được ngay.**"

## 📺 Slide 11/17 · 11 — Giao tiếp với AI: 4 mảnh + 3 thói quen · phút 17.5–20.5

> **Slide quan trọng nhất phần nền tảng.** Cả ba demo lát nữa đều chạy đúng bốn mảnh này — nên nói chậm, và nhớ nhắc lại khi gõ prompt trong demo.

🎙 **Mở (chỉ dải bốn mảnh ghép):** "Nãy ở slide 07 anh chị em thấy câu hỏi rõ cho kết quả khác hẳn. Giờ mình mổ nó ra: một yêu cầu rõ chỉ gồm **bốn mảnh** — trả lời đủ bốn câu hỏi là xong. Mẹo nhớ: **giao cho AI y như giao cho nhân viên mới**; người mới thì phải nói đủ bốn thứ."

🎙 **Đi bốn thẻ, mỗi thẻ đọc to câu hỏi rồi đọc ví dụ:**
- **Vai trò — *nó đóng vai ai?*** *&ldquo;Bạn là trợ lý hành chính công ty xây dựng.&rdquo;* → để nó chọn đúng giọng và thuật ngữ ngành mình.
- **Bối cảnh — *dựa vào đâu?*** *&ldquo;Dựa trên hợp đồng đính kèm.&rdquo;* → đây là mảnh **chống bịa**: chỉ rõ tài liệu thì nó bớt tự suy đoán.
- **Việc cần làm — *làm gì?*** *&ldquo;Tóm tắt mốc thanh toán và điều khoản phạt.&rdquo;* → 'tóm tắt hợp đồng' và câu này ra hai kết quả khác hẳn nhau.
- **Đầu ra — *nhận về dạng nào?*** *&ldquo;Dạng bảng, 1 trang, tiếng Việt trang trọng.&rdquo;* → mảnh ít ai nghĩ tới nhất mà tiết kiệm nhất, vì khỏi ngồi sửa lại.

🎙 **Chuyển sang ba thói quen:** "Bốn mảnh là cách viết yêu cầu. Nhưng làm việc với AI là **một cuộc trò chuyện**, không phải gõ một phát ăn ngay. Ba thói quen ngắn thôi: **một** — chưa ưng thì nhắn tiếp ngay trong khung chat đó, *'ngắn lại 5 dòng'*, nó nhớ ngữ cảnh, khỏi đính file lại. **Hai** — chê cho cụ thể: đừng nói 'chưa được', nói *'đoạn 2 sai ngày'* thì nó sửa trúng. **Ba** — bắt nó hỏi lại: thêm một câu *'thiếu gì thì hỏi tôi, đừng tự đoán'*; thay vì bịa cho đủ, nó sẽ quay ra hỏi mình."

🙋 Làm cùng khán giả: "Ai cho mình một việc thật đang định nhờ AI? — Mình ráp thử bốn mảnh ngay tại chỗ." (Nghe 1 việc, nói to bốn mảnh cho việc đó. Nếu không ai nêu, dùng ví dụ sẵn: *soạn thông báo nghỉ lễ cho toàn công ty*.)

➡ "Nói tới đây vẫn là lý thuyết. Cho anh chị em xem luôn: ráp đủ bốn mảnh thì nhận về cái gì."

## 📺 Slide 12/17 · 12 — Thử ngay tại chỗ: ráp 4 mảnh · phút 20.5–21.5

> **Đây là slide "cho xem tận mắt" — đừng chỉ đọc, hãy chỉ tay lên màn hình theo từng mảng màu.**

🎙 **Chỉ khung bên trái:** "Nói lý thuyết mãi cũng khó hình dung, nên mình cho anh chị em xem luôn. Bên trái là **đúng một câu** mình gõ vào Claude — và anh chị em để ý, nó được tô làm bốn mảng màu, chính là bốn mảnh vừa nói:

*'**Bạn là trợ lý hành chính công ty xây dựng**' — mảnh vai trò. '**Dựa trên hợp đồng đính kèm**' — mảnh bối cảnh. '**Tóm tắt các mốc thanh toán và điều khoản phạt**' — mảnh việc cần làm. '**Trình bày dạng bảng, tối đa 1 trang, tiếng Việt trang trọng**' — mảnh đầu ra.*

Bốn dòng, gõ hết chưa tới ba mươi giây."

🎙 **Chuyển sang khung bên phải, dừng một nhịp cho khán giả nhìn:** "Và đây là thứ nhận về. Không phải một đoạn văn lan man — mà là **đúng cái bảng mình đã yêu cầu**: tạm ứng 20% sau ký 7 ngày, đợt 1 30% khi nghiệm thu phần móng, đợt 2 40% nghiệm thu phần thân, quyết toán 10% khi bàn giao kèm hồ sơ hoàn công. Cộng thêm dòng điều khoản phạt: 0,05% giá trị hợp đồng mỗi ngày, tối đa 8%.

Anh chị em thấy chưa — cái bảng này bình thường mình phải ngồi lật hợp đồng dò từng điều, ghi ra giấy rồi gõ lại."

🎙 **Chỉ khung đỏ dưới bảng — nói chậm, đây là điểm quan trọng nhất của slide:** "**Nhưng chưa xong đâu.** Mình phải mở hợp đồng gốc, đối chiếu lại **từng tỷ lệ và mức phạt**. AI đọc hộ mình — nhưng người xác nhận số vẫn là mình, vì cái bảng này lát nữa đi vào tờ trình thanh toán."

🙋 "Anh chị em thử ước lượng: cái bảng này nếu tự làm thì mất bao lâu? — Rồi so với ba mươi giây gõ cộng hai phút kiểm."

➡ "Đó là cấp độ mà hôm nay mình nhắm tới. Nhưng có bốn cấp cả thảy — xem mình đang ở đâu."

## 📺 Slide 13/17 · 13 — Bốn cấp độ ứng dụng · phút 21.5–22

🎙 **Lời dẫn:** "Đừng kỳ vọng tuần đầu đã dùng như chuyên gia. Có bốn bậc, và anh chị em cứ leo từng bậc.

**Cấp 1 — hỏi và viết bản nháp:** gõ câu hỏi, nhận email, tóm tắt, dàn ý. Chưa đụng tới file thật. Ai cũng làm được ngay hôm nay.

**Cấp 2 — làm việc trên file của mình:** đính kèm file *đã ẩn danh*, AI đọc, phân tích, dựng bản nháp theo mẫu. Anh chị em nhìn tấm thẻ có nhãn **'Đích của buổi học'** — đây, cấp 2. Ba demo lát nữa đều là cấp 2.

**Cấp 3 — chuẩn hoá việc lặp lại:** khi tìm được câu lệnh chạy tốt thì **lưu lại dùng hằng tuần**, rồi cả phòng dùng chung một mẫu. Đây là lúc AI bắt đầu tiết kiệm thật cho tổ chức chứ không chỉ cho cá nhân."

🎙 **Cấp 4 — nói kỹ hơn vì đây là thứ mọi người hay nghe trên báo:** "Thẻ thứ tư viền nét đứt: **AI Agent**. Khác biệt nằm ở chỗ này — ba cấp trên mình giao *từng việc*; cấp 4 mình giao *một mục tiêu*, và nó tự chia bước, tự đọc file, tự làm rồi trình bản nháp cho mình duyệt. Ví dụ: *'mỗi thứ Hai đọc bảng tiến độ, lập báo cáo tuần và gửi bản nháp cho tôi.'* Nhưng nói ngay cho rõ: **cấp này cần công cụ và phê duyệt của công ty**, không làm bằng tài khoản cá nhân được — và người vẫn là người duyệt cuối, không có ngoại lệ."

🙋 "Anh chị em tự chấm xem mình đang ở bậc nào? — Đa số ở bậc 0 hoặc 1. Không sao, hôm nay mình cùng lên bậc 2."

➡ "Vậy bậc 2 làm được những gì trong Word, Excel, PowerPoint? Xem qua một lượt rồi vào demo."

## 📺 Slide 14/17 · 14 — Word · Excel · PowerPoint · phút 22–23

🎙 **Lời dẫn:** "Ba cột, ba ứng dụng anh chị em mở hằng ngày.

**Word — văn bản và hồ sơ:** soạn công văn, email, thông báo từ vài dòng ghi chú; tóm tắt hợp đồng, hồ sơ thầu dài hàng chục trang; rà lỗi chính tả, số liệu, ngày tháng trước khi trình ký; và so sánh hai bản tài liệu xem khác nhau chỗ nào.

**Excel — số liệu và bảng biểu:** lọc và làm sạch bảng hàng trăm dòng; viết công thức *kèm giải thích* để mình tự làm lại; tổng hợp theo tháng, theo nhóm, đối chiếu đơn giá; và vẽ biểu đồ kèm nhận xét kiểu báo cáo.

**PowerPoint — trình bày và báo cáo:** dựng dàn ý slide từ ghi chép thô; đặt tiêu đề nói thẳng thông điệp có số liệu; rút gọn slide dày chữ còn ba bốn gạch đầu dòng; và viết ghi chú lời nói cho người thuyết trình."

🎙 **Chỉ dòng cuối:** "Ba ứng dụng này **chính là ba demo ngay sau đây** — và mình làm thật trên file của ngành xây dựng, không phải file mẫu chung chung."

🙋 "Anh chị em để ý ứng dụng nào mình dùng nhiều nhất — lát demo phần đó thì tập trung hơn."

➡ "Nói đủ rồi. Giờ mình làm thật. Anh chị em nhìn màn hình — đừng chỉ xem kết quả, hãy xem **cách mình gõ yêu cầu**."

---

# PHẦN DEMO — 20 PHÚT + 7 PHÚT MỞ RỘNG (trái tim buổi học)

> **Chuẩn bị chung (đã làm trước giờ G — theo checklist cuối cẩm nang):** 8 file demo trong thư mục `demo-v2/` để sẵn trên Desktop (2 file cho Word phần A–B + hồ sơ thầu · 2 file Excel: vật tư + tiến độ · 3 file cho PowerPoint · 1 file an toàn lao động); claude.ai đăng nhập sẵn, còn quota, bật Phân tích dữ liệu; các file Office ĐÓNG trước khi đính kèm; thư mục `du-phong/` có video + ảnh từng bước, lưu offline.
>
> **Dự phòng mất mạng (áp dụng cho cả 2 demo):** nếu claude.ai chậm/mất mạng ngay demo đầu → chuyển hẳn sang mở video quay sẵn (`du-phong/demo-word.mp4`, `demo-excel.mp4`, `demo-ppt.mp4`) và thuyết minh trên video, không vừa chờ mạng vừa nói. Nếu chỉ nghẽn giữa chừng → dùng bộ ảnh chụp từng bước (`du-phong/word-01..04.png`, `excel-01..04.png`, `ppt-01..03.png`). Lời dẫn không đổi — chỉ đổi nguồn hình.
>
> **Lưu ý đọc kết quả:** kết quả Claude mỗi lần chạy mỗi khác một chút — đáp án trong kịch bản là mốc đối chiếu, miễn đủ các ý cài sẵn là đạt.
>
> 📎 **Cẩm nang có 12 ví dụ, buổi 60′ chỉ chạy 6.** Mỗi ứng dụng có 3 ví dụ (riêng Excel: 2 file × 3 ví dụ). Buổi chính chạy 2 ví dụ đầu mỗi loại như kịch bản dưới; ví dụ còn lại — **hồ sơ thầu · đối chiếu đơn giá · tiến độ thi công · phổ biến an toàn lao động** — dành cho khán giả đội dự án/đấu thầu (chạy thay) hoặc để học viên tự luyện sau buổi. Cách chạy tương tự, mốc phút giữ nguyên.

## 📺 Slide 15/17 · 15 — Demo Word: viết bằng prompt (4′) + kiểm tra lỗi văn bản (5′) · phút 23–32 (9′)

🎙 **Lời dẫn (mở demo):** "Hai việc Word ai cũng gặp hằng tuần: soạn một cái thông báo từ mấy dòng ghi chú, và rà một văn bản trước khi trình ký. Toàn bộ file demo là giả lập, đã ẩn danh — mình nhấn mạnh: *demo chỉ dùng file mẫu hoặc đã ẩn danh, không bao giờ đưa văn bản thật lên tài khoản cá nhân*. Anh chị em xem mình giao việc đúng công thức bốn mảnh vừa học nhé."

**Phần A — VIẾT bằng prompt (4′):**

1. **(30″)** Mở `demo-yeu-cau.docx` cho khán giả thấy: "Đầu vào là hơn chục dòng ghi chú lộn xộn — kiểu ghi chú ai cũng gõ vội ra được, có cả dòng tự nhắc mình kiểu 'hỏi lại sếp Vinh'. Anh chị em để ý xem Claude xử lý thế nào với mấy dòng ghi chú nội bộ lộn xộn đó."
2. **(30″)** Vào claude.ai, đính kèm file, vừa gõ vừa đọc to prompt (chỉ ra 4 mảnh: vai trò – bối cảnh – việc – đầu ra):

   > "Bạn là trợ lý hành chính VCI. Từ thông tin đính kèm, soạn email thông báo toàn công ty: trang trọng, ngắn ≤10 câu, có tiêu đề, chỗ nào thiếu thông tin thì hỏi lại tôi."

3. **(1′)** Kết quả hiện — chỉ cho khán giả: có tiêu đề, đủ các ý chính (ngày giờ bảo trì 22/08 18h–22h · lý do nâng cấp + vá bảo mật · hệ thống bị ảnh hưởng: EMS, email nội bộ, ổ mạng chung — kế toán KHÔNG ảnh hưởng · vẫn dùng Zalo nhóm · lưu file trước 17h · đầu mối anh Tuấn IT · chi nhánh phía Nam bảo trì 23/08 · sáng 23/08 báo lỗi trước 10h). **Điểm nhấn:** dòng "hỏi lại sếp Vinh có cần CC ban giám đốc ko?" phải KHÔNG xuất hiện trong email — Claude bỏ nó ra hoặc hỏi lại mình. Điểm cộng nếu Claude **tự hỏi lại** chỗ thiếu (vd: ai ký thông báo) — "nó biết hỏi khi thiếu thông tin, vì mình dặn nó thế trong prompt."
4. **(1′)** Câu bồi — chạy tiếp **trong cùng chat** (nhấn: "không cần đính file lại — nó nhớ ngữ cảnh"):

   > "Viết lại thân mật hơn cho nhóm Zalo."

   → Hai phiên bản cho hai kênh trong một phút. Kiểm nhanh cùng khán giả **(1′)**: dò từng con số về file thô — 22/08, 18h–22h, 17h, SĐT 0912 345 678 — AI hay "tròn hóa" giờ giấc; hai đợt bảo trì có đúng không (trụ sở 22/08, chi nhánh Nam 23/08 — AI dễ gộp nhầm một ngày); soi xem câu hỏi nội bộ "hỏi sếp Vinh…" có lỡ lọt vào email không; email không được tự bịa thêm thông tin không có trong file; và **chưa bấm Gửi** chừng nào chưa rà xong.

**Phần B — KIỂM TRA LỖI văn bản (5′):**

1. **(30″)** Mở `demo-van-ban-loi.docx`, lướt qua: "Công văn triển khai phần mềm, trông rất bình thường đúng không? Đó chính là cái bẫy — văn bản này mình cài sẵn 8 lỗi, và mắt người đọc ba lượt vẫn lọt vài lỗi vì mắt đọc theo *ý*, không đọc theo *chữ*."
2. **(30″)** Mở chat mới, đính kèm, đọc to prompt:

   > "Rà soát văn bản: lỗi chính tả, ngày tháng/số liệu không nhất quán, tên viết không thống nhất, câu lặp, đánh số thiếu — liệt kê thành bảng [Vị trí | Lỗi | Sửa thành], KHÔNG tự viết lại."

3. **(1.5′)** Bảng lỗi hiện — đối chiếu với đáp án 8 lỗi cài sẵn (đạt nếu bắt ≥6/8, đủ 8 là xuất sắc): "triển **khia**" · "quản **lí**/quản **lý**" lẫn lộn · "**xác xuất**" · ngày đầu văn bản **25/08** cuối văn bản **28/08** · số tiền **125.000.000** nhưng bằng chữ "một trăm hai mươi **tám** triệu" · "Nguyễn Văn A" vs "Nguyen Van A" · một câu lặp ý · danh sách đánh số **1, 2, 4, 5** thiếu mục 3.

**🔍 Cùng khán giả KIỂM TRA kết quả (2.5′ — bước quan trọng nhất, đừng cắt; nới nhịp, dò từng lỗi cùng khán giả):**

🎙 "Giờ mới đến phần đáng giá nhất: mình *không tin ngay*. Mình mở file gốc cạnh bảng lỗi:"
- **Dò tận mắt 2–3 lỗi** — nhất là lỗi ngày 25/08 vs 28/08 và số tiền số ≠ chữ: đúng loại lỗi mắt người hay trượt nhất, và cũng là loại gây hậu quả nhất.
- **Có báo thừa không** — Claude có bịa ra "lỗi" không tồn tại không?
- **Yêu cầu "KHÔNG tự viết lại" được tôn trọng** — nó chỉ liệt kê; quyền sửa vẫn của người soạn.
- **Quyết định sửa là của mình** — ví dụ lỗi ngày: chốt 25 hay 28 là việc của người nắm kế hoạch, AI không biết ngày nào đúng.

🎙 **Chốt demo 1:** "AI soạn nháp và soi lỗi trong vài phút — nhưng người soạn văn bản vẫn quyết sửa gì, và chịu trách nhiệm trước khi văn bản rời khỏi tay mình."

➡ "Word là chữ. Giờ thử thứ khó hơn — con số. Ai làm Excel chú ý nhé."

## 📺 Slide 16/17 · 16 — Demo Excel: liệt kê theo điều kiện (4′) + làm báo cáo (7′) · phút 32–43 (11′)

🎙 **Lời dẫn (mở demo):** "Hai việc Excel kinh điển: sếp hỏi 'vật tư nào đang chôn vốn lâu nhất?' — và cuối tháng phải nộp báo cáo nhập-xuất. File vật tư giả lập này có 3 sheet: TonKho 200 dòng, NhapXuat 301 giao dịch 12 tháng, BangGia 60 mã. Để kết quả ổn định, mình chốt ngày tham chiếu cố định: **tồn quá 90 ngày tính đến ngày 14/08/2026** — anh chị em để ý mình ghi rõ ngày này trong yêu cầu, không nói 'hôm nay', vì 'hôm nay' của AI có thể không phải hôm nay của mình."

**Phần A — LIỆT KÊ theo điều kiện (4′):**

1. **(30″)** Mở `demo-vattu.xlsx` ở sheet TonKho, cuộn nhanh 200 dòng. **Đóng file lại** trước khi đính kèm (nhắc to luôn mẹo này cho khán giả).
2. **(30″)** Đính kèm file, đọc to prompt (bản Excel ① trong cẩm nang):

   > "Từ sheet TonKho, liệt kê các mã vật tư đã tồn quá 90 ngày tính đến ngày 14/08/2026: cho tôi top 10 theo giá trị tồn (SL × đơn giá) giảm dần, kèm bảng đếm số mã tồn quá 90 ngày theo từng kho. Tiếng Việt, trình bày dạng bảng."

3. **(1.5′)** Kết quả: bảng top 10 + bảng đếm theo kho (dữ liệu cài sẵn ~168/200 dòng quá hạn nên danh sách sẽ dày). "Việc filter rồi cộng tay cả buổi — giờ một câu lệnh."
4. **(1.5′)** Kiểm nhanh cùng khán giả: hỏi lại Claude *"Bạn đã đọc bao nhiêu dòng?"* (phạm vi dữ liệu) · cách tính đúng mốc 14/08/2026 chưa · mở file gốc, chọn 1 mã trong top 10, **nhân tay SL × đơn giá** xem có khớp không (làm thật trước khán giả với 1 dòng).

**Phần B — LÀM BÁO CÁO (7′):**

5. **(30″)** Chạy tiếp trong cùng chat, đọc to prompt (bản Excel ② trong cẩm nang):

   > "Từ sheet NhapXuat (giao dịch 12 tháng), tổng hợp lượng nhập và xuất theo từng tháng của từng nhóm vật tư; vẽ biểu đồ đường thể hiện xu hướng xuất kho theo nhóm; chốt bằng 3 nhận xét ngắn gọn kiểu báo cáo cho sếp, tiếng Việt. Cuối cùng, viết cho tôi công thức SUMIFS tính tổng SL xuất của nhóm 'Sắt thép' theo từng tháng và giải thích từng tham số, để tháng sau tôi tự làm lại trong Excel."

6. **(~2′ chờ chạy)** Nói chèn: "Bốn đầu việc trong một yêu cầu — tổng hợp, vẽ biểu đồ, viết nhận xét, kèm công thức. Đây chính là 'giao việc nhiều bước' mà mình nói ở phần nền tảng."
7. **(2.5′)** Đọc kết quả theo lớp: bảng tổng hợp theo tháng/nhóm → **biểu đồ đường hiện ngay trong chat — DỪNG 3 GIÂY, đây là điểm nhấn của cả buổi demo** → 3 nhận xét → công thức SUMIFS. Đối chiếu đáp án xu hướng cài sẵn: Sắt thép xuất tăng mạnh nhất (≈1.200 → ≈6.200 kg/tháng) · Vật tư điện tăng đều (≈110 → ≈430/tháng) · Vật tư nước là nhóm duy nhất giảm (≈970 → ≈230/tháng) · Máy đào, Giàn giáo, Cốp pha dao động không xu hướng. 🎙 "Chỗ công thức này hay này: AI không chỉ làm hộ, nó còn *dạy lại mình cách tự làm* — tháng sau anh chị em không cần AI nữa."

**🔍 Cùng khán giả KIỂM TRA kết quả (2′ — nới nhịp, làm thật từng bước đối chiếu):**

🎙 "Số liệu dùng để báo cáo sếp thì tuyệt đối không dùng chay. Kiểm với mình bốn thứ:"
- **Phạm vi dữ liệu** — đủ 301 giao dịch, đủ 12 tháng (T9/2025–T8/2026), không tự cắt bớt?
- **Đơn vị tính** — kg, cái, m... có bị cộng lẫn lộn giữa các nhóm khi vẽ chung biểu đồ không?
- **Nhận xét có bám số** — mỗi nhận xét phải kèm con số cụ thể, không nói chung chung kiểu "xu hướng tích cực".
- **Đối chiếu công thức** — dán thử công thức SUMIFS vào file gốc chạy 1 tháng, so kết quả với con số Claude đưa.

🎙 **Chốt demo 2:** "AI giúp liệt kê và ra báo cáo rất nhanh — nhưng con số đem đi quyết định phải được đối chiếu với nguồn gốc. Kiểm một dòng mất ba mươi giây; đưa sếp một con số sai thì mất nhiều hơn nhiều."

➡ "Word là chữ, Excel là số — hai thứ chiếm phần lớn thời gian bàn giấy của mình. Đến đây là hết phần làm thật. Quay lại slide, mình gói cả buổi trong ba chữ."

### ⏱ Khối mở rộng (tuỳ chọn) · phút 43–50

> **7 phút này trước đây là demo PowerPoint — đã bỏ khỏi buổi.** Dùng nó theo tình hình phòng học, vẫn đứng trên slide Demo Excel:
>
> - **Khán giả đội dự án / đấu thầu** → chạy thêm **Word ③ — đọc hồ sơ mời thầu** (`demo-hsmt.docx`, cẩm nang mục 🏗). Đây là lựa chọn mạnh nhất.
> - **Khán giả thi công / kế hoạch** → chạy thêm **Excel file 2 — bảng tiến độ** (`demo-tien-do.xlsx`): soi hạng mục trễ hạn, tính % hoàn thành (đáp án **63,46%**).
> - **Phòng đang hỏi nhiều** → bỏ hẳn khối này, vào Q&A sớm ở phút 43 và để Q&A dài 17 phút.
>
> Dù chọn hướng nào cũng giữ đủ ba bước quen thuộc: đọc to prompt khi gõ → đọc kết quả theo lớp → **cùng khán giả kiểm tra**.

---

# PHẦN Q&A & LỜI KẾT — 10 PHÚT

## 📺 Slide 17/17 · Q&A & lời kết · phút 50–60

🎙 **Lời dẫn:** "Phần làm thật xong — trước khi nhận câu hỏi, mình gửi anh chị em ba điều cuối. Một — về an toàn, chỉ xin một câu: AI soạn — mình kiểm — và không đưa dữ liệu nhạy cảm lên công cụ bên ngoài; quy tắc chi tiết và bốn bước bắt đầu đều nằm trong tài liệu mình gửi sau buổi. Hai — còn nhớ cái việc lặp lại mình nhờ anh chị em giữ trong đầu từ đầu buổi chứ? Ngay bây giờ, mỗi người viết vào giấy hoặc điện thoại một câu: *'Tuần này tôi sẽ dùng AI để ______'* — mời hai, ba anh chị đọc to cho cả phòng nghe, sau hai tuần mình sẽ cùng xem lại kết quả. Ba — cả buổi gói trong đúng ba chữ đang chạy trên màn hình: *Chọn đúng việc — Giao việc rõ — Dùng an toàn*. Cảm ơn anh chị em rất nhiều — giờ sàn diễn là của mọi người: mời câu hỏi đầu tiên."

🙋 **Cam kết (làm thật, đừng bỏ qua):** mỗi người đọc xong cam kết, phản hồi nhanh 1 câu — việc đó nên đưa file gì, kiểm gì.

🙋 **Trước khi kết thúc hẳn:** quay lại **slide 1** chiếu mã QR điểm danh cho ai chưa quét kịp đầu buổi.

🙋 Nếu phòng im lặng, tự mồi: "Câu mình hay được hỏi nhất là 'AI thế này thì có mất việc không?' — mình trả lời luôn nhé..." (dùng Q1 bên dưới)

---

# PHỤ LỤC A — 6 CÂU HỎI DỰ KIẾN & ĐÁP ÁN NGẮN

**1. "AI thế này rồi có thay thế việc làm của chúng ta không?"**
Trong phạm vi việc văn phòng mình vừa demo, AI thay được *phần bản nháp*, không thay được phần phán đoán, quan hệ và chịu trách nhiệm — đó vẫn là phần lõi công việc của mỗi người. Điều thay đổi thật là *cách làm việc*: người biết giao việc cho AI sẽ làm nhanh hơn người không biết. Nên câu hỏi thực tế hơn là: mình có đang học cách dùng nó không.

**2. "Đưa dữ liệu lên đó có an toàn không? Họ có lấy dữ liệu của mình không?"**
Nguyên tắc của buổi hôm nay không phụ thuộc lời hứa của bất kỳ hãng nào: chưa có tài khoản doanh nghiệp được phê duyệt thì chỉ đưa lên dữ liệu công khai, dữ liệu mẫu hoặc đã ẩn danh — như toàn bộ file demo. Dữ liệu thật của công ty, khách hàng thì chờ chính sách và tài khoản do công ty cấp, khi đó có điều khoản bảo mật doanh nghiệp rõ ràng.

**3. "Bản miễn phí có đủ dùng không?"**
Đủ để bắt đầu cấp một và tập cấp hai: chat, đính file, thử các prompt hôm nay. Bản miễn phí có giới hạn số lượt và một số tính năng tùy thời điểm — cứ dùng hết giới hạn miễn phí trước đã; khi nào thấy AI tiết kiệm cho mình vài giờ mỗi tuần thật thì hãy tính chuyện nâng cấp hoặc đề xuất công ty.

**4. "Nếu AI làm sai thì ai chịu trách nhiệm?"**
Người ký, người gửi, người dùng kết quả — tức là chúng ta. Đó là lý do quy trình luôn là: AI soạn — mình kiểm — mình chịu trách nhiệm. Cũng như giao việc cho nhân viên mới: nó làm sai mà mình duyệt thì lỗi duyệt là của mình. Vì thế bước kiểm tra ở cả ba demo không phải để cho đẹp — nó chính là chỗ trách nhiệm của mình nằm ở đó.

**5. "Bắt đầu từ đâu bây giờ?"**
Đúng bốn bước trong tài liệu gửi sau buổi (`goi-chia-se-hoc-vien.md`): chọn một việc lặp lại nhỏ ngay tuần này; chuẩn bị dữ liệu an toàn (ẩn danh); giao việc theo công thức vai trò – bối cảnh – việc – đầu ra; kiểm kết quả và lưu prompt tốt. Kèm bộ prompt mẫu sẽ gửi sau buổi — anh chị em có thể copy nguyên và thay nội dung của mình.

**6. "Công ty có cấp tài khoản không? Có chính sách chưa?"**
Định hướng là mở rộng dần khi có quy trình và chính sách phù hợp — đúng như lộ trình bốn cấp độ ở slide 12; mình sẽ chuyển các đề xuất và nhu cầu của anh chị em hôm nay cho ban lãnh đạo Trung Chính và các bên liên quan. Trong lúc chờ, mọi người vẫn tiến được đến cấp hai bằng tài khoản cá nhân với *dữ liệu an toàn* — không cần chờ đủ mọi thứ mới bắt đầu học kỹ năng.

# PHỤ LỤC B — CHECKLIST TRƯỚC BUỔI

**Nội dung & thiết bị:**
- [ ] Mở deck ở **slide 1 (điểm danh QR)** từ lúc mở phòng; thử quét bằng chính điện thoại của mình xem link còn sống không
- [ ] Chạy thử 4 ví dụ sẽ trình diễn (Word viết + kiểm lỗi · Excel liệt kê + báo cáo) một lượt trên đúng máy giảng, cộng 1 ví dụ dự phòng cho khối mở rộng; các ví dụ còn lại trong cẩm nang chỉ cần đọc qua để trả lời khi khán giả hỏi, đối chiếu đáp án trong `demo-v2/HUONG-DAN-DEMO-V2.md` (riêng Word ② có bảng đáp án 8 lỗi)
- [ ] 8 file demo trong `demo-v2/` copy ra Desktop; file Office đóng hết trước giờ demo
- [ ] claude.ai đăng nhập sẵn, còn quota, đã bật Phân tích dữ liệu; xóa các chat cũ lộn xộn khỏi sidebar
- [ ] Thư mục `du-phong/` đủ 3 video + bộ ảnh từng bước, lưu OFFLINE; mở thử 1 video kiểm tra codec
- [ ] Máy chiếu: font đủ to, thử độ đọc được của chat Claude từ cuối phòng
- [ ] Kịch bản này in 1 bản để cạnh laptop; cẩm nang demo in 1 bản (đọc to prompt khi gõ)
- [ ] Đồng hồ/điện thoại bấm giờ để trước mặt — mốc cứng: **phút 12 phải xong phần rủi ro · phút 23 phải vào demo · phút 50 phải vào Q&A**. Cháy giờ thì cắt bớt phần cách hỏi/công cụ/giao việc (S7–S13), **tuyệt đối không cắt slide rủi ro S6**

**Khán phòng:**
- [ ] Giấy note + bút cho phần cam kết ở Q&A (slide 15)
- [ ] Chuẩn bị sẵn link/QR gói chia sẻ sau buổi (slide + prompt mẫu + file demo + `goi-chia-se-hoc-vien.md`: quy tắc an toàn & 4 bước bắt đầu) — đã hứa ở slide 15
- [ ] Mời trước 1–2 người "mồi" câu hỏi Q&A nếu phòng hay im lặng

**Nếu cháy giờ (ưu tiên giữ demo + Q&A theo đúng lưu ý docx):**
- [ ] Cắt trước: rút phần tương tác slide 8 và 12 · nói gộp slide 13 trong 30″
- [ ] Không bao giờ cắt: slide rủi ro (6) · slide thử tại chỗ (11) · 2 phần "cùng khán giả kiểm tra" trong demo · cam kết & Q&A (slide 16)

# PHỤ LỤC C — 3 ĐIỀU PHẢI CHỐT ĐƯỢC (thước đo thành công của diễn giả)

1. **Chọn đúng việc** — người nghe biết giao cho AI việc lặp, có cấu trúc (bản nháp, tóm tắt, công thức, dàn ý) và giữ lại việc cần phán đoán, trách nhiệm, quan hệ con người (nói ở slide 6 — ô "phụ thuộc" — và slide 13 Word/Excel/PowerPoint).
2. **Giao việc rõ** — người nghe thuộc công thức *Vai trò + Bối cảnh + Việc cần làm + Đầu ra mong muốn* và đã thấy nó chạy thật trong demo (slide 7, 10, 11, 14–15).
3. **Dùng an toàn** — người nghe nhớ: không đưa dữ liệu nhạy cảm lên công cụ công khai, mọi đầu ra phải kiểm trước khi dùng, và *AI soạn — người dùng kiểm — người dùng chịu trách nhiệm* (slide 6 + lời kết slide 16; chi tiết trong `goi-chia-se-hoc-vien.md`).

> Ba điều này phải được nói ra thành lời ít nhất ở slide 6, 7, 10 và nhắc lại trọn bộ ở lời kết slide 16. Nếu cuối buổi hỏi ngẫu nhiên một người mà họ nói lại được cả ba — buổi đào tạo đạt.
