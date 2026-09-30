# CẨM NANG DEMO — Buổi đào tạo Claude tại VCI

Kèm kịch bản `../claude-dao-tao-kich-ban.md` (Slide 13–15). Toàn bộ file là **dữ liệu giả lập, đã ẩn danh** — an toàn để đưa lên claude.ai.

## Bộ file demo

| File | Dùng cho | Quy mô |
|---|---|---|
| `demo-hopdong.docx` | Word ①② | Hợp đồng thuê máy thiết bị thi công, 9 trang, 12 điều + 2 phụ lục (Bên A: CTCP Xây dựng ABC, Bên B: TNHH Thiết bị XYZ) |
| `demo-email-thread.docx` | Word ③ | Chuỗi 9 email đối soát công nợ thuê thiết bị Q2/2026, ~3 trang, sắp xếp mới-nhất-ở-trên, thông tin cố ý rải rác |
| `demo-vattu.xlsx` | Excel ①②③ | 3 sheet: `TonKho` 200 dòng (có dữ liệu bẩn cài sẵn) · `NhapXuat` 301 giao dịch 12 tháng (T9/2025–T8/2026, có xu hướng) · `BangGia` 60 mã giá chuẩn |
| `demo-dan-y.docx` | PowerPoint ① | Dàn ý 6 mục "An toàn lao động cho nhân viên mới" |
| `demo-slide-tho.pptx` | PowerPoint ② | 6 slide CỐ Ý XẤU "Báo cáo tổng kết dự án EMS quý 2" — mỗi trang 1 đoạn văn 140–155 từ, tiêu đề chung chung |

Mỗi ứng dụng bên dưới có 2–3 kịch bản. **Kịch bản CHÍNH cho buổi 20′ demo được đánh dấu ⭐** — các kịch bản còn lại dùng khi dư giờ, khi khán giả hỏi thêm, hoặc cho buổi đào tạo chuyên sâu.

---

# 📄 WORD

## Word ① ⭐ Tóm hợp đồng 9 trang → 1 trang + 5 điều khoản rủi ro

**🔴 Vấn đề thực tế:** Nhận bản hợp đồng dày cộp lúc 4h chiều, sếp cần ý kiến trước 9h sáng mai — mà đọc kỹ 9 trang mất cả buổi.

**⌨ Câu lệnh nguyên văn** (đính kèm `demo-hopdong.docx`):

> "Bạn là trợ lý hành chính. Hãy tóm tắt hợp đồng đính kèm thành 1 trang cho lãnh đạo đọc trong 2 phút, gồm: các bên, giá trị, thời hạn, nghĩa vụ chính của mỗi bên, các mốc thanh toán, và 5 điều khoản rủi ro cần lưu ý nhất cho Bên A. Trình bày gạch đầu dòng, tiếng Việt."

**✅ Kết quả kỳ vọng:** Bản tóm tắt 1 trang đủ 6 mục. **Chỉ khán giả xem phần rủi ro** — đối chiếu với đáp án cài sẵn trong file (Claude phải moi ra được ít nhất 4/5):
- Điều 2.4: đơn giá **tự động tăng 5%** sau 12 tháng.
- Điều 9.2–9.3: **đơn phương chấm dứt chỉ cần báo trước 45 ngày**.
- Điều 3.4: trả thiết bị sớm vẫn phải trả **tối thiểu 6 tháng** tiền thuê.
- Điều 7.1: phạt chậm bàn giao **0,05%/ngày, tối đa 8%**.

**🔍 Người dùng kiểm tra:** (mở file gốc cạnh bản tóm tắt, dò tận mắt trước khán giả)
- **Giá trị hợp đồng** — con số trong tóm tắt khớp điều khoản giá trong file gốc.
- **Thời hạn** — đúng số tháng, đúng ngày hiệu lực.
- **Mốc thanh toán** — đủ các đợt, đúng tỷ lệ %.
- **Điều khoản phạt / gia hạn / chấm dứt** — số điều Claude viện dẫn có thật trong hợp đồng, không bịa số điều (lỗi AI hay mắc nhất với văn bản pháp lý).

**💰 Lợi ích:** Trước 3–4 giờ đọc + note tay → giờ **5 phút** (chạy ~1 phút + đọc rà 4 phút).

## Word ② Soạn email đề nghị đàm phán lại 2 điều khoản bất lợi

**🔴 Vấn đề thực tế:** Biết điều khoản bất lợi rồi nhưng ngồi cả tiếng không biết mở lời với đối tác thế nào cho vừa cứng vừa giữ quan hệ.

**⌨ Câu lệnh nguyên văn** (chạy TIẾP trong cùng chat với Word ① — cho thấy tính hội thoại):

> "Từ 2 điều khoản bất lợi nhất cho Bên A ở trên (đơn giá tự tăng 5% và trả sớm vẫn phải trả tối thiểu 6 tháng), soạn giúp tôi email gửi Bên B đề nghị đàm phán lại 2 điều khoản này. Giọng trang trọng, thiện chí nhưng rõ quan điểm, dưới 15 dòng, có đề xuất phương án thay thế cụ thể cho từng điều khoản."

**✅ Kết quả kỳ vọng:** Email hoàn chỉnh có chào hỏi, viện dẫn đúng số điều khoản, 2 phương án thay thế (vd: tăng giá theo thỏa thuận từng năm; giảm cam kết tối thiểu còn 3 tháng). Chỉ khán giả xem: Claude **nhớ ngữ cảnh** từ câu trước, không cần đính file lại.

**🔍 Người dùng kiểm tra:**
- **Giọng điệu email** — đọc to một đoạn: đúng vai công ty mình chưa, câu nào quá cứng/quá mềm cần sửa tay.
- **Số điều khoản viện dẫn** — khớp file hợp đồng gốc (2.4 và 3.4), không nhầm sang điều khác.
- **Con số trong email** — mức 5% và tối thiểu 6 tháng đúng như hợp đồng; phương án thay thế có khả thi để đem đi đàm phán thật không.
- **Email là BẢN NHÁP** — chưa bấm Gửi chừng nào người phụ trách chưa rà xong và duyệt.

**💰 Lợi ích:** Trước ~1 giờ nắn từng câu chữ → giờ **5 phút** sửa giọng theo ý mình.

## Word ③ Tóm thread email lộn xộn → bảng việc–người–hạn

**🔴 Vấn đề thực tế:** Được CC vào giữa một thread đối soát công nợ 9 email qua lại, số liệu mỗi mail một kiểu — đọc xong vẫn không biết ai đang chờ ai và mình phải làm gì.

**⌨ Câu lệnh nguyên văn** (đính kèm `demo-email-thread.docx`):

> "Đây là chuỗi email đối soát công nợ giữa công ty tôi (CTCP Xây dựng ABC) và nhà cung cấp (TNHH Thiết bị XYZ). Hãy: (1) tóm tắt diễn biến vụ việc trong 5 gạch đầu dòng theo trình tự thời gian, (2) cho biết con số công nợ hai bên đã chốt được đến đâu và còn lệch bao nhiêu vì lý do gì, (3) lập bảng các việc cần làm gồm 3 cột: Việc — Ai làm — Hạn chót, sắp theo hạn gần nhất trước."

**✅ Kết quả kỳ vọng:** Chỉ khán giả xem bảng việc–người–hạn, đối chiếu với đáp án cài trong file:
- Số liệu: ABC treo **486,5 triệu** — XYZ đòi 512,3 triệu, sau khi hủy hóa đơn xuất trùng chốt còn **498,7 triệu** — chênh còn lại **12,2 triệu** = phạt chậm thanh toán tháng 5 (đang tranh cãi căn cứ).
- Việc gấp nhất: chị **Hà** ký gửi lại bản đối chiếu **trước 19/08**; anh **Tuấn** nợ Hà biên bản bàn giao máy đào U30 + bảng chấm ca tháng 6 (quá hạn từ tuần trước); ABC chuyển tiền gốc **trước 25/08** để được miễn 50% phạt; Hà trình hồ sơ **trước 21/08** để sếp Hùng duyệt chi 24/08.
- Rủi ro: quá 15/08 chưa chốt, XYZ dọa **dừng cấp 2 máy xúc lật tháng 9** cho công trường Hà Khánh B (đã quá — nhấn cho khán giả thấy Claude bắt được cả rủi ro này).

**🔍 Người dùng kiểm tra:**
- **Con số công nợ** — dò ngược từng con số (486,5 / 512,3 / 498,7 / 12,2 triệu) về đúng email gốc chứa nó; mở file dò tận mắt ít nhất 1 số.
- **Việc – người – hạn** — tên người phụ trách và hạn chót khớp email gốc, không gán nhầm việc của Hà cho Tuấn.
- **Mốc thời hạn** — các hạn 19/08, 21/08, 25/08 đúng; việc nào đã quá hạn phải được đánh dấu đúng.
- **Không sót việc** — lướt lại 9 email xem còn cam kết nào trong thread mà bảng bỏ sót không.

**💰 Lợi ích:** Trước 30–45 phút đọc đi đọc lại + tự ghi chú → giờ **3 phút**, không sót việc.

---

# 📊 EXCEL

## Excel ① Dọn dữ liệu bẩn — chỉ đích danh lỗi

**🔴 Vấn đề thực tế:** File vật tư tổng hợp từ 3 kho về, mỗi kho nhập một kiểu — làm báo cáo trên dữ liệu bẩn thì số nào cũng sai.

**⌨ Câu lệnh nguyên văn** (đính kèm `demo-vattu.xlsx`):

> "Hãy kiểm tra chất lượng dữ liệu sheet TonKho: tìm các dòng trùng mã vật tư, ô đơn giá bị trống, tên vật tư viết hoa/thường không thống nhất, và ô ngày nhập sai định dạng. Liệt kê đích danh từng dòng lỗi kèm số dòng, rồi đề xuất cách xử lý cho từng loại lỗi."

**✅ Kết quả kỳ vọng:** Claude phải tìm đủ 4 loại lỗi đã cài sẵn — đối chiếu đáp án:
- **10 dòng trùng mã VT** (mỗi mã lặp 2 lần).
- **6 ô Đơn giá trống** (các mã: CP-017, ST-011, MD-003, ST-019, ST-005, GG-007).
- **8 tên viết HOA/thường** lẫn lộn.
- **2 ô Ngày nhập là text sai định dạng**: `15/03/2025` (text, không phải ngày) và `2025-11-40` (ngày 40 không tồn tại).

Chỉ khán giả xem: Claude không chỉ đếm mà **chỉ đúng dòng nào**, và gợi ý xử lý (gộp trùng, tra bảng giá điền đơn giá thiếu…).

**🔍 Người dùng kiểm tra:**
- **Phạm vi dữ liệu** — Claude đã quét đủ 200 dòng TonKho chưa, hay tự cắt bớt (hỏi lại: "Bạn đã đọc bao nhiêu dòng?").
- **Số dòng lỗi chỉ đích danh** — mở file gốc, nhảy đến 2–3 số dòng Claude nêu, xem đúng là dòng lỗi thật.
- **Đơn giá trống** — đúng 6 mã đã cài (CP-017, ST-011, MD-003, ST-019, ST-005, GG-007), không báo thừa mã có giá.
- **Cách xử lý đề xuất** — hợp quy trình của mình không (vd: gộp trùng phải cộng SL hay giữ dòng mới nhất?) — quyết định xử lý vẫn là của người quản kho.

**💰 Lợi ích:** Trước ~2 giờ rà tay bằng mắt + filter → giờ **5 phút**.

## Excel ② Đối chiếu đơn giá lệch so với bảng giá chuẩn (VLOOKUP)

**🔴 Vấn đề thực tế:** Nghi kho nhập đơn giá cao hơn bảng giá công ty ban hành, nhưng dò tay 200 dòng với 60 mã giá chuẩn thì hoa mắt.

**⌨ Câu lệnh nguyên văn** (cùng file `demo-vattu.xlsx`, có thể chạy tiếp trong chat của Excel ①):

> "So sánh đơn giá trong sheet TonKho với đơn giá chuẩn trong sheet BangGia theo Mã VT. Liệt kê các mã có đơn giá tồn kho CAO HƠN giá chuẩn, kèm mức chênh tuyệt đối và %, sắp theo % chênh giảm dần. Sau đó viết cho tôi công thức VLOOKUP (kèm giải thích từng tham số) để tôi tự đối chiếu trong Excel, và cả phiên bản XLOOKUP nếu Excel mới."

**✅ Kết quả kỳ vọng:** Danh sách **12 mã lệch giá** (TonKho cao hơn chuẩn ~6–18%): CP-003, DI-005, DI-013, DI-025, DI-032, GG-004, GG-011, MD-023, MD-025, NC-023, NC-025, ST-017 — kèm công thức VLOOKUP/XLOOKUP giải thích từng tham số. Điểm cộng nếu Claude tự phát hiện: 6 mã thiếu đơn giá ở TonKho **có sẵn giá chuẩn trong BangGia** để điền vào.

**🔍 Người dùng kiểm tra:**
- **Phạm vi dữ liệu** — so khớp đủ 200 dòng TonKho với 60 mã BangGia, mã không có trong bảng giá được báo riêng chứ không lặng lẽ bỏ qua.
- **Đơn giá & mức chênh** — chọn 1 mã trong danh sách, mở 2 sheet trừ tay đơn giá xem mức chênh tuyệt đối và % có khớp.
- **Đối chiếu công thức với file gốc** — dán công thức VLOOKUP/XLOOKUP Claude đưa vào file thật, chạy thử 1 mã, so kết quả với danh sách nó liệt kê.

**💰 Lợi ích:** Trước 1–2 giờ tự viết VLOOKUP + dò lỗi #N/A → giờ **5 phút**, kèm luôn công thức để tháng sau tự làm.

## Excel ③ ⭐ Tồn kho >90 ngày + xu hướng nhập xuất + biểu đồ + 3 nhận xét cho sếp

**🔴 Vấn đề thực tế:** Sếp hỏi "vật tư nào đang chôn vốn, nhóm nào đang dùng nhiều lên?" — trả lời bằng cảm giác thì nguy hiểm, mà phân tích tay thì hết buổi.

**⌨ Câu lệnh nguyên văn** (đính kèm `demo-vattu.xlsx`):

> "File có 2 sheet: TonKho (tồn hiện tại) và NhapXuat (giao dịch 12 tháng). Hãy: (1) liệt kê các mã đã tồn quá 90 ngày tính đến ngày 14/08/2026, sắp theo giá trị tồn giảm dần, cho tôi top 10; (2) phân tích xu hướng xuất kho theo tháng của từng nhóm vật tư trong 12 tháng qua, nhóm nào tăng, nhóm nào giảm; (3) vẽ biểu đồ đường thể hiện xu hướng đó; (4) chốt bằng 3 nhận xét ngắn gọn kiểu báo cáo cho sếp, tiếng Việt."

**✅ Kết quả kỳ vọng:** Chỉ khán giả xem lần lượt: top 10 tồn >90 ngày (dữ liệu cài sẵn ~168/200 dòng quá hạn nên kết quả dày) → **biểu đồ đường hiện ngay trong chat** (dừng 3 giây — điểm nhấn của cả demo) → 3 nhận xét. Đáp án xu hướng cài sẵn:
- **Sắt thép**: lượng xuất tăng ~5 lần trong 12 tháng (≈1.200 → ≈6.200 kg/tháng) — tăng mạnh nhất.
- **Vật tư điện**: tăng đều ~4 lần (≈110 → ≈430/tháng).
- **Vật tư nước**: giảm dần ~4 lần (≈970 → ≈230/tháng) — nhóm duy nhất đi xuống.
- Các nhóm còn lại (Máy đào, Giàn giáo, Cốp pha): dao động ngẫu nhiên, không xu hướng.

Câu bồi kiểu "sếp hỏi bất chợt": *"Nếu muốn làm việc này hằng tháng trong Excel, hãy viết cho tôi công thức SUMIFS tính tổng SL xuất của nhóm 'Sắt thép' theo từng tháng và giải thích từng tham số."*

**🔍 Người dùng kiểm tra:**
- **Phạm vi dữ liệu** — Claude đọc đủ 200 dòng TonKho và 12 tháng NhapXuat, không tự cắt bớt.
- **Ngày tham chiếu** — cách tính "quá 90 ngày" đúng mốc cố định **14/08/2026** (ghi rõ ngày này trong prompt thay vì "hôm nay" để kết quả ổn định — theo lưu ý trong docx nội dung slide).
- **Đơn vị tính** — kg, cái, m… không bị cộng lẫn lộn giữa các nhóm vật tư khi tính xu hướng.
- **Đơn giá** — chọn 1 mã trong top 10, mở file gốc nhân tay SL × đơn giá xem giá trị tồn có khớp.
- **Đối chiếu công thức với file gốc** — dán công thức SUMIFS vào file thật chạy 1 tháng, so với con số Claude đưa.

**💰 Lợi ích:** Trước nửa ngày pivot + vẽ biểu đồ + viết nhận xét → giờ **10 phút** gồm cả đọc rà số liệu.

---

# 📽 POWERPOINT

## PowerPoint ① ⭐ Dựng 8 slide từ dàn ý thô

**🔴 Vấn đề thực tế:** "Mai trình bày 15 phút nhé" — mở PowerPoint nhìn trang trắng 30 phút chưa gõ được chữ nào; khó nhất là bắt đầu từ số không.

**⌨ Câu lệnh nguyên văn** (đính kèm `demo-dan-y.docx`):

> "Từ dàn ý đính kèm, hãy dựng bộ slide 8 trang hướng dẫn an toàn lao động cho công nhân mới vào công trường. Mỗi slide gồm: tiêu đề, 3–4 gạch đầu dòng ngắn, và ghi chú lời dẫn cho người thuyết trình. Giọng gần gũi, dễ hiểu với công nhân."

**✅ Kết quả kỳ vọng:** Outline 8 slide đủ mở–thân–kết, gạch đầu dòng ngắn đúng chuẩn, **có ghi chú lời dẫn từng slide** (chỉ khán giả xem phần này — "kịch bản mình đang cầm cũng làm kiểu này"). Câu bồi Artifacts: *"Hãy dựng luôn nội dung này thành slide dạng trang web để tôi xem trước."* → slide hiện bên khung Artifacts.

**🔍 Người dùng kiểm tra:** (nhấn với khán giả: đây là **bộ khung xem trước**, chưa phải slide đem đi trình bày)
- **Áp template thương hiệu** — chuyển nội dung vào template chuẩn công ty (logo, màu, font), không chiếu thẳng bản nháp AI.
- **Thay dữ liệu và hình ảnh thật** — hình minh họa, số liệu của chính đơn vị; AI không biết công trường của mình trông thế nào.
- **Thay ví dụ thực tế** — ví dụ an toàn phải là tình huống thật ở đơn vị; rà từng bullet, ý nào chung chung sáo rỗng thì đắp thịt trước khi dùng.

**💰 Lợi ích:** Trước 2–3 giờ từ trang trắng → giờ **10 phút** có khung duyệt được, chỉ việc đắp ví dụ thật của công trường mình.

## PowerPoint ② "Chữa" bộ slide thô thành slide gọn + ghi chú thuyết trình

**🔴 Vấn đề thực tế:** Ai cũng từng ngồi dưới nghe một bộ slide dán nguyên đoạn văn dày đặc chữ — người trình bày quay lưng đọc slide, người nghe đọc nhanh hơn và ngủ trước.

**⌨ Câu lệnh nguyên văn** (đính kèm `demo-slide-tho.pptx`):

> "Bộ slide đính kèm mắc lỗi kinh điển: mỗi trang một đoạn văn dài, tiêu đề chung chung. Hãy chữa lại từng slide: (1) đặt tiêu đề mới nói thẳng thông điệp chính (kiểu 'Hoàn thành 89% kế hoạch' thay vì 'Tình hình chung'), (2) rút mỗi trang còn 3–5 gạch đầu dòng, mỗi gạch dưới 10 từ, giữ nguyên số liệu quan trọng, (3) phần chữ bị lược đi thì chuyển thành ghi chú lời nói cho người thuyết trình. Trình bày kết quả theo từng slide."

**✅ Kết quả kỳ vọng:** Chiếu 1 slide "trước" (đoạn văn 150 từ, tiêu đề "Tình hình chung") cạnh bản "sau" của Claude: tiêu đề thành thông điệp (vd "Q2: đạt 89% kế hoạch, hài lòng KH tăng 3.9 → 4.2"), 3–5 gạch ngắn giữ đủ số liệu (142/160 điểm, 12 lỗi prod, 3 release…), phần diễn giải xuống ghi chú lời nói. Chỉ khán giả thấy: **không mất thông tin — chỉ đổi chỗ ở**: số lên slide, lời xuống ghi chú.

**🔍 Người dùng kiểm tra:**
- **Số liệu giữ nguyên đúng** — dò các con số quan trọng (89%, 142/160, 12 lỗi, 3.9 → 4.2…) giữa bản gốc và bản chữa, không được rơi rớt hay tròn số sai.
- **Không mất thông tin** — soát xem ý bị lược khỏi slide đã nằm đủ trong ghi chú lời nói chưa.
- **Áp template thương hiệu** — kết quả là văn bản đề xuất; người dùng tự dựng lại trong template chuẩn công ty, thay hình ảnh/ví dụ thực tế trước khi trình bày.

**💰 Lợi ích:** Trước 1–2 giờ tự đục đẽo từng trang → giờ **10 phút** cho cả bộ 6 trang.

---

# 💰 BẢNG TỔNG LỢI ÍCH

| # | Demo | Trước | Sau | Tiết kiệm/lần |
|---|---|---|---|---|
| W① ⭐ | Tóm hợp đồng 9 trang | 3–4 giờ | 5′ | ~3,5 giờ |
| W② | Email đàm phán lại điều khoản | 1 giờ | 5′ | ~1 giờ |
| W③ | Tóm thread công nợ → bảng việc | 30–45′ | 3′ | ~40′ |
| E① | Dọn dữ liệu bẩn | 2 giờ | 5′ | ~2 giờ |
| E② | Đối chiếu giá lệch (VLOOKUP) | 1–2 giờ | 5′ | ~1,5 giờ |
| E③ ⭐ | Tồn >90 ngày + xu hướng + biểu đồ | nửa ngày | 10′ | ~3,5 giờ |
| P① ⭐ | Dựng 8 slide từ dàn ý | 2–3 giờ | 10′ | ~2,5 giờ |
| P② | Chữa slide thô | 1–2 giờ | 10′ | ~1,5 giờ |

**Cộng dồn: ~16 giờ việc lặt vặt/tuần → dưới 1 giờ**, phần người làm còn lại là đọc rà và chịu trách nhiệm — cái đó máy không thay được (nhấn đúng câu này khi chốt).

# 🛟 NHẮC QUAN TRỌNG

- **Sau buổi tổng duyệt đầu tiên**: quay video màn hình cả 3 demo chính (⭐) làm dự phòng mất mạng — `du-phong/demo-word.mp4`, `demo-excel.mp4`, `demo-ppt.mp4` + chụp ảnh từng bước (`du-phong/word-01..04.png`, `excel-01..04.png`, `ppt-01..03.png`) — lưu OFFLINE trên máy giảng. Nếu mạng chập chờn ngay từ demo đầu: chuyển hẳn sang video cho cả 3, đừng vừa chờ mạng vừa nói.
- Kết quả Claude trả về **mỗi lần mỗi khác một chút** — đáp án trong cẩm nang là mốc đối chiếu, không phải nguyên văn. Miễn bắt đủ các ý cài sẵn là đạt.

## ✅ Checklist file mở sẵn trước giờ diễn

- [ ] Copy cả 5 file demo ra **Desktop** máy giảng (đỡ lục thư mục trước khán giả)
- [ ] claude.ai đăng nhập sẵn, còn quota, đã bật Phân tích dữ liệu
- [ ] Mở sẵn `demo-hopdong.docx` (cuộn qua vài trang cho khán giả thấy độ dày)
- [ ] Mở sẵn `demo-vattu.xlsx` — để ở sheet TonKho, cuộn nhanh 200 dòng
- [ ] Mở sẵn `demo-slide-tho.pptx` ở chế độ Slide Sorter (nhìn phát thấy ngay 6 trang đặc chữ) — nếu chạy kịch bản P②
- [ ] `demo-dan-y.docx` và `demo-email-thread.docx` để sẵn trên Desktop, không cần mở trước
- [ ] Cẩm nang này in 1 bản để cạnh laptop (các câu lệnh đọc to khi gõ)
- [ ] Thư mục `du-phong/` đầy đủ ảnh + video, thử mở 1 video kiểm tra codec
- [ ] **ĐÓNG hết file demo trong Office trước khi demo Excel** — file đang mở trong Excel sẽ không đính kèm/ghi đè được
