# CẨM NANG DEMO — Khóa "Claude & AI trong công việc" (Trung Chính)

Kèm kịch bản `../claude-v2-kich-ban.md` · Slide demo: **12 (Word) · 13 (Excel) · 14 (PowerPoint)** của `../claude-v2.html`.

> **Phân vai:** slide chỉ nêu **3 việc AI làm được** cho mỗi ứng dụng. Toàn bộ chi tiết — câu lệnh nguyên văn, kết quả kỳ vọng, đáp án đối chiếu, điểm cần kiểm — nằm ở cẩm nang này. **Diễn giả cầm cẩm nang, khán giả nhìn slide.**

> ⚠ Mọi file đều là **dữ liệu giả lập, đã ẩn danh** — an toàn để đưa lên claude.ai. Tuyệt đối không dùng hợp đồng, báo giá, bảng lương hay dữ liệu khách hàng thật khi demo.

## Bộ file demo (thư mục này)

| File | Dùng cho | Nội dung |
|---|---|---|
| `demo-yeu-cau.docx` | Word ① | ~12 dòng ghi chú thô về lịch bảo trì hệ thống, có 2 dòng ghi tắt nội bộ cài sẵn |
| `demo-van-ban-loi.docx` | Word ② | Công văn ~1,5 trang triển khai phần mềm EMS — **cài sẵn 8 lỗi** |
| `demo-hsmt.docx` | Word ③ | Trích HSMT ~3 trang "Thi công Nhà xưởng B2 — KCN X" — **cài 2 chi tiết đắt nằm sâu** |
| `demo-vattu.xlsx` | Excel ① ③ | 3 sheet: `TonKho` 200 dòng · `NhapXuat` 301 giao dịch 12 tháng · `BangGia` 60 mã |
| `demo-tien-do.xlsx` | Excel ② | `TienDo` 30 hạng mục thi công — **6 hạng mục trễ >7 ngày**, hoàn thành **63,46%** |
| `demo-bao-cao-thang.docx` | PowerPoint ① | ~20 dòng ghi chép họp tháng của Phòng QL Thiết bị, có 2 ý lạc đề |
| `demo-slide-tho.pptx` | PowerPoint ② | 6 slide cố ý xấu — mỗi trang một đoạn văn ~150 từ |
| `demo-an-toan-lao-dong.docx` | PowerPoint ③ | ~14 dòng ghi chú phổ biến an toàn lao động công trường, có 1 ý lạc đề |

**Ngày tham chiếu cố định cho mọi demo Excel: 14/08/2026** (ghi rõ trong prompt thay vì "hôm nay" để kết quả ổn định mọi lần chạy).

---

# 📄 WORD — 3 ví dụ

## ① SOẠN THÔNG BÁO — từ ghi chú thô thành văn bản hoàn chỉnh

**🔴 Vấn đề:** Có đủ thông tin trong đầu nhưng ngồi cả buổi chưa xong cái thông báo cho ra hồn.

**⌨ Câu lệnh** — đính kèm `demo-yeu-cau.docx`:
> "Bạn là trợ lý hành chính. Từ thông tin đính kèm, soạn email thông báo gửi toàn công ty: trang trọng, ngắn gọn dưới 10 câu, có tiêu đề rõ ràng. Chỗ nào thiếu thông tin thì hỏi lại tôi, đừng tự bịa."

**Câu bồi** (chạy tiếp trong cùng chat): *"Viết lại thân mật hơn để đăng nhóm Zalo công ty."*

**✅ Kết quả kỳ vọng:** Email đủ ý — bảo trì 22/08 (18h–22h) · hệ thống ảnh hưởng (EMS, email nội bộ, ổ mạng chung) · phần mềm kế toán không ảnh hưởng · lưu file trước 17h · chi nhánh phía Nam bảo trì 23/08 · đầu mối anh Tuấn IT 0912 345 678 · báo lỗi trước 10h sáng 23/08.

**Điểm cộng lớn:** Claude **bỏ hoặc hỏi lại** 2 dòng ghi chú nội bộ ("hỏi lại sếp Vinh xem có cần CC ban giám đốc", "đổi mật khẩu → thôi để đợt sau") thay vì đưa thẳng vào email.

**🔍 Người dùng kiểm tra:** ngày giờ hai đợt bảo trì (22/08 trụ sở, 23/08 chi nhánh Nam) · số điện thoại đầu mối · **câu hỏi nội bộ có lọt vào email không** · không bịa thêm tên người ký.

**💰 Lợi ích:** soạn tay 20–30 phút → còn 2–3 phút, có sẵn 2 phiên bản giọng khác nhau.

---

## ② SOÁT LỖI VĂN BẢN — bắt lỗi trước khi phát hành

**🔴 Vấn đề:** Công văn phát hành rồi mới phát hiện sai ngày, sai số tiền — phải thu hồi, mất uy tín.

**⌨ Câu lệnh** — đính kèm `demo-van-ban-loi.docx`:
> "Rà soát văn bản đính kèm: lỗi chính tả, ngày tháng và số liệu không nhất quán, tên viết không thống nhất, câu lặp ý, danh sách đánh số thiếu. Liệt kê thành bảng [Vị trí | Lỗi | Sửa thành]. Không tự viết lại văn bản."

**✅ Đáp án — 8 lỗi cài sẵn** (bắt được từ 6/8 trở lên là đạt):

| # | Lỗi | Sửa thành |
|---|---|---|
| 1 | "triển khia" | triển khai |
| 2 | "quản lí" (2 chỗ) lẫn với "quản lý" | thống nhất "quản lý" |
| 3 | "xác xuất" | xác suất |
| 4 | Đầu văn bản ghi 25/08, cuối ghi 28/08 | thống nhất một ngày |
| 5 | Số tiền 125.000.000 nhưng chữ ghi "một trăm hai mươi tám triệu" | khớp số và chữ |
| 6 | "Nguyễn Văn A" chỗ khác ghi "Nguyen Van A" | thống nhất có dấu |
| 7 | Một câu lặp ý câu trước | bỏ câu lặp |
| 8 | Danh sách đánh số 1, 2, 4, 5 — thiếu mục 3 | đánh lại liên tục |

**🔍 Người dùng kiểm tra:** đối chiếu từng dòng bảng với văn bản gốc · Claude có bịa lỗi không có thật không · **quyết định sửa gì vẫn là của người soạn**.

**💰 Lợi ích:** đọc soát tay 15–20 phút vẫn sót → soi 1 phút, có bảng lỗi để sửa dứt điểm.

---

## ③ ĐỌC HỒ SƠ THẦU — moi checklist tài liệu phải nộp 🏗

**🔴 Vấn đề:** Hồ sơ mời thầu vài chục trang, sót một yêu cầu nhỏ là hồ sơ bị loại — công sức cả đội đổ sông.

**⌨ Câu lệnh** — đính kèm `demo-hsmt.docx`:
> "Bạn là cán bộ đấu thầu. Từ hồ sơ mời thầu đính kèm, lập bảng checklist toàn bộ tài liệu phải nộp: [Tài liệu | Yêu cầu chi tiết | Bộ phận phụ trách đề xuất | Hạn chót]. Liệt kê riêng các điều kiện năng lực cần đối chiếu với hồ sơ công ty. Cuối cùng cảnh báo những yêu cầu dễ bị bỏ sót khiến hồ sơ bị coi là không hợp lệ."

**✅ Kết quả kỳ vọng:** Checklist khoảng 12 tài liệu (đơn dự thầu · bảo đảm dự thầu 800 triệu hiệu lực từ 120 ngày · báo cáo tài chính kiểm toán 3 năm · hợp đồng tương tự · hồ sơ nhân sự · danh sách thiết bị · biện pháp thi công · cam kết an toàn lao động · đăng ký kinh doanh · xác nhận không nợ thuế · đề xuất tài chính mẫu 04 · USB bản mềm) + bảng điều kiện năng lực (doanh thu từ 120 tỷ · 2 hợp đồng từ 45 tỷ · chỉ huy trưởng hạng II từ 5 năm · ISO 9001 · không nợ thuế) + mốc **đóng thầu 09h00 ngày 15/09/2026**.

**⭐ Phải bắt được 2 chi tiết đắt nằm sâu trong đoạn văn:**
- **01 bản gốc + 03 bản chụp** — thiếu bản chụp là hồ sơ không hợp lệ
- **Khảo sát hiện trường trước 01/09/2026** có xác nhận của ban quản lý khu công nghiệp — không có là bị loại

**🔍 Người dùng kiểm tra:** đối chiếu từng dòng với hồ sơ gốc · cặp số 90 ngày (hiệu lực hồ sơ dự thầu) và 120 ngày (bảo lãnh) rất dễ lẫn · không để Claude bịa thêm yêu cầu.

**💰 Lợi ích:** đọc và lập checklist tay nửa ngày → 5 phút có bản nháp để cả đội soát tiếp.

---

## ⚡ Ví dụ nhanh khác — Word (prompt 1 dòng, không cần file)

- *"Soạn biên bản họp từ ghi chú sau, chia mục Nội dung — Kết luận — Việc cần làm: [dán ghi chú]"*
- *"Viết email nhắc thầu phụ nộp hồ sơ nghiệm thu đợt 2, lịch sự nhưng dứt khoát, có nêu hạn cuối"*
- *"So sánh hai đoạn điều khoản sau, chỉ ra khác biệt và đoạn nào bất lợi hơn cho bên mình: [dán 2 đoạn]"*
- *"Rút gọn công văn này còn một nửa, giữ đủ ý và giọng trang trọng: [dán công văn]"*
- *"Soạn công văn đề nghị chủ đầu tư gia hạn tiến độ, nêu nguyên nhân khách quan và phương án bù tiến độ"*

---
# 📊 EXCEL — 2 file, mỗi file 3 ví dụ

## 📦 FILE 1 — `demo-vattu.xlsx` (quản lý vật tư thi công)

### ① LỌC VẬT TƯ TỒN LÂU — tiền đang chôn ở kho nào

**🔴 Vấn đề:** Vật tư nằm kho hàng tháng trời, tiền chôn ở đó mà không ai để ý.

**⌨ Câu lệnh:**
> "Từ sheet TonKho, liệt kê các mã vật tư đã tồn quá 90 ngày tính đến ngày 14/08/2026: cho tôi top 10 theo giá trị tồn (số lượng × đơn giá) giảm dần, kèm bảng đếm số mã tồn quá 90 ngày theo từng kho. Trình bày dạng bảng, tiếng Việt."

**✅ Kết quả kỳ vọng:** Bảng top 10 theo giá trị + bảng đếm theo 3 kho. Dữ liệu cài sẵn có khoảng 168/200 dòng quá hạn — đúng cảm giác "kho đang ứ vật tư".

**🔍 Người dùng kiểm tra:** phạm vi 200 dòng · **ngày tham chiếu 14/08/2026** · đơn vị tính · nhân tay 1 dòng số lượng × đơn giá để so.

**💰 Lợi ích:** lọc và tính tay 30–45 phút → 1 phút.

---

### ② ĐỐI CHIẾU ĐƠN GIÁ — bắt mã ghi sai so với bảng giá chuẩn

**🔴 Vấn đề:** Đơn giá nhập tay mỗi người một kiểu, đến khi quyết toán mới phát hiện lệch.

**⌨ Câu lệnh:**
> "So sánh đơn giá ở sheet TonKho với sheet BangGia theo Mã VT. Liệt kê các mã có đơn giá lệch (nêu rõ giá trong TonKho, giá chuẩn, chênh bao nhiêu) và các mã bị thiếu đơn giá. Cuối cùng viết công thức VLOOKUP để tôi tự đối chiếu lại trong Excel."

**✅ Đáp án cài sẵn:** **12 mã lệch giá** (CP-003, DI-005, DI-013, DI-025, DI-032, GG-004, GG-011, MD-023, MD-025, NC-023, NC-025, ST-017) và **6 mã thiếu đơn giá** — trong BangGia đều có giá chuẩn để điền vào.

**🔍 Người dùng kiểm tra:** trừ tay mức chênh của 1 mã · dán công thức VLOOKUP vào file gốc chạy thử · **quyết định lấy giá nào là của người quản kho**.

**💰 Lợi ích:** dò tay 60 mã mất cả buổi → 1 phút, kèm công thức dùng lại hằng tháng.

---

### ③ BÁO CÁO & BIỂU ĐỒ — tổng hợp nhập–xuất 12 tháng

**🔴 Vấn đề:** Sếp hỏi "vật tư nào đang tiêu nhiều hơn hẳn?" — mở file ra ngồi lọc cả buổi.

**⌨ Câu lệnh:**
> "Từ sheet NhapXuat (giao dịch 12 tháng), tổng hợp lượng nhập và xuất theo từng tháng của từng nhóm vật tư; vẽ biểu đồ đường thể hiện xu hướng xuất kho theo nhóm; chốt bằng 3 nhận xét ngắn gọn kiểu báo cáo cho sếp. Cuối cùng viết công thức SUMIFS tính tổng số lượng xuất của nhóm 'Sắt thép' theo từng tháng và giải thích từng tham số."

**✅ Kết quả kỳ vọng:** Bảng tổng hợp → **biểu đồ đường hiện ngay trong khung chat** (dừng 3 giây cho khán giả xem — điểm nhấn của cả demo) → 3 nhận xét → công thức SUMIFS. Xu hướng cài sẵn: **Sắt thép** xuất tăng ~5 lần · **Vật tư điện** tăng ~4 lần · **Vật tư nước** giảm ~4 lần.

**🔍 Người dùng kiểm tra:** phạm vi 301 giao dịch · đơn vị tính từng nhóm · **dán thử SUMIFS vào file gốc xem có ra đúng số không**.

**💰 Lợi ích:** tổng hợp + vẽ biểu đồ tay 1–2 tiếng → 2 phút.

---

## 🏗 FILE 2 — `demo-tien-do.xlsx` (quản lý tiến độ thi công)

### ① SOI HẠNG MỤC TRỄ — chỗ nào đang kéo cả dự án chậm lại

**🔴 Vấn đề:** Bảng tiến độ 30 hạng mục, nhìn mãi không ra chỗ nào đang trễ nặng nhất.

**⌨ Câu lệnh:**
> "Từ sheet TienDo, tính đến ngày 14/08/2026, liệt kê các hạng mục chậm quá 7 ngày so với kế hoạch: nêu số ngày trễ và lý do ở cột Ghi chú, sắp xếp theo số ngày trễ giảm dần. Trình bày dạng bảng."

**✅ Đáp án — đúng 6 hạng mục:**

| Mã | Hạng mục | Trễ | Lý do |
|---|---|---|---|
| HM-09 | Dầm sàn tầng 2 | **25 ngày** | điều chỉnh thiết kế theo CV 118 |
| HM-13 | Tường bao tầng 1 | **20 ngày** | thiếu thợ xây |
| HM-11 | Lắp dựng thép tầng 3 | **18 ngày** | chờ vật tư |
| HM-04 | Ép cọc đại trà | **12 ngày** | mưa kéo dài |
| HM-17 | MEP trục đứng | **9 ngày** | chờ shop drawing |
| HM-06 | Bê tông móng khu B | **8 ngày** | tư vấn giám sát yêu cầu bổ sung thép |

*Bẫy cài sẵn:* HM-05 (trễ 2 ngày), HM-07 (trễ 1), HM-14 (trễ 4) **không được** lọt vào danh sách; HM-03/10/16 đang vượt tiến độ.

**🔍 Người dùng kiểm tra:** đếm tay số ngày trễ của HM-09 · hạng mục **chưa khởi công không bị tính là trễ**.

**💰 Lợi ích:** dò bảng tay 30 phút → 1 phút, không sót hạng mục nào.

---

### ② TÍNH % HOÀN THÀNH — dự án đang ở đâu so với kế hoạch

**🔴 Vấn đề:** Sếp hỏi "dự án được bao nhiêu phần trăm rồi?" — mỗi người trả lời một con số khác nhau.

**⌨ Câu lệnh:**
> "Từ sheet TienDo, tính % hoàn thành toàn dự án theo cột Tỷ trọng (khối lượng thực hiện chia khối lượng kế hoạch, nhân tỷ trọng từng hạng mục). Sau đó nhóm các hạng mục theo giai đoạn (móng cọc, phần thân, xây tô, cơ điện, hoàn thiện) và cho biết giai đoạn nào đang chậm nhất. Giải thích ngắn cách tính."

**✅ Đáp án:** **% hoàn thành toàn dự án = 63,46%**. Claude phải nêu rõ cách tính để người dùng kiểm lại được.

**🔍 Người dùng kiểm tra:** tính tay 1 hạng mục xem có khớp không · tổng cột Tỷ trọng phải bằng 100 · **cách nhóm giai đoạn có hợp lý với thực tế công trường không**.

**💰 Lợi ích:** tính tay dễ nhầm, mất 30–45 phút → 1 phút, có cách tính minh bạch để cả đội thống nhất.

---

### ③ BÁO CÁO TIẾN ĐỘ TUẦN — bản nháp gửi chủ đầu tư

**🔴 Vấn đề:** Tuần nào cũng phải viết báo cáo tiến độ, ngồi nhìn bảng số rồi nặn từng câu.

**⌨ Câu lệnh:**
> "Từ sheet TienDo, viết đoạn báo cáo tiến độ tuần khoảng 10 dòng gửi chủ đầu tư: nêu % hoàn thành chung, các hạng mục đang chậm và nguyên nhân, nhóm nguyên nhân chính, và đề xuất 3 việc cần làm ngay để bù tiến độ. Giọng trang trọng, không đổ lỗi cho bên nào."

**✅ Kết quả kỳ vọng:** Đoạn báo cáo có số liệu thật (63,46%, các hạng mục trễ), nhóm nguyên nhân (thời tiết · chờ vật tư/bản vẽ · thiếu nhân lực · điều chỉnh thiết kế), 3 đề xuất cụ thể.

**🔍 Người dùng kiểm tra:** số liệu khớp bảng · **báo cáo không được tự hứa mốc hoàn thành mới khi chưa được duyệt** · giọng văn không đổ lỗi · người ký và cam kết là quyết định của chỉ huy trưởng.

**💰 Lợi ích:** viết báo cáo tuần 1 tiếng → 3 phút có bản nháp để chỉnh.

---

## ⚡ Ví dụ nhanh khác — Excel (prompt 1 dòng, không cần file)

- *"Giải thích công thức này từng phần cho người không rành Excel: [dán công thức]"*
- *"Viết công thức đếm số máy đang bảo trì theo từng kho, cột B là kho, cột E là trạng thái"*
- *"Tách cột Họ và tên thành 2 cột Họ đệm và Tên, chỉ tôi cách làm trong Excel"*
- *"Tìm giá trị bất thường trong cột chi phí sau và giải thích vì sao đáng ngờ: [dán số liệu]"*
- *"Chuyển bảng số liệu này thành 3 câu nhận xét ngắn cho báo cáo tuần: [dán bảng]"*

---
# 📽 POWERPOINT — 3 ví dụ

## ① BÁO CÁO THÁNG — từ ghi chép họp thành bộ slide

**🔴 Vấn đề:** Có đủ số liệu trong sổ tay, nhưng mở PowerPoint lên là ngồi nhìn trang trắng.

**⌨ Câu lệnh** — đính kèm `demo-bao-cao-thang.docx`:
> "Từ ghi chép đính kèm, dựng nội dung 6 slide báo cáo tháng của Phòng Quản lý Thiết bị để trình bày 10 phút trong họp giao ban: mỗi slide có tiêu đề nói thẳng thông điệp chính (kiểu 'Khai thác đạt 85%, tăng 7 điểm so với tháng 6' thay vì 'Tình hình chung'), tối đa 4 gạch đầu dòng ngắn giữ nguyên số liệu, kèm ghi chú lời nói cho người thuyết trình."

**✅ Kết quả kỳ vọng:** Outline 6 slide (tổng quan đội thiết bị → khai thác & bảo trì → sự cố → chi phí → việc tháng 8 → đề xuất), tiêu đề có số liệu, mỗi slide tối đa 4 gạch, **có ghi chú lời nói**. Số liệu phải xuất hiện: 48 máy · 85% (tháng 6: 78%) · 6 vụ sự cố (tháng 6: 9 vụ) · 218 triệu vượt 12% so kế hoạch 195 triệu · đề xuất 45 triệu phụ tùng dự phòng.

**⭐ Điểm nhấn:** Claude phải **lọc bỏ 2 ý lạc đề** ("anh Hòa xin nghỉ phép tuần sau", "nhớ hỏi kế toán về hóa đơn tháng 6") — chúng không thuộc báo cáo tháng.

**🔍 Người dùng kiểm tra:** số liệu khớp ghi chép gốc · **ý lạc đề có lọt vào slide không** · áp template thương hiệu, thay hình ảnh và ví dụ thật trước khi dùng.

**💰 Lợi ích:** dựng bộ slide báo cáo tay 2–3 tiếng → 3 phút có khung để chỉnh.

---

## ② CHỮA SLIDE DÀY CHỮ — slide đặc chữ thành slide dễ nhìn

**🔴 Vấn đề:** Slide dán nguyên đoạn văn, người nghe cắm mặt đọc chữ, không ai nghe mình nói.

**⌨ Câu lệnh** — đính kèm `demo-slide-tho.pptx`:
> "Bộ slide đính kèm mỗi trang là một đoạn văn dài, tiêu đề chung chung. Hãy chữa lại từng slide: đặt tiêu đề mới nói thẳng thông điệp chính, rút mỗi trang còn 3–4 gạch đầu dòng ngắn giữ nguyên số liệu quan trọng, giọng dễ hiểu. Phần chữ bị lược đi thì chuyển thành ghi chú lời nói cho người thuyết trình. Trình bày kết quả theo từng slide."

**✅ Kết quả kỳ vọng:** Chiếu slide "trước" (đoạn văn ~150 từ, tiêu đề "Tình hình chung") cạnh bản "sau": tiêu đề thành thông điệp (ví dụ "Quý 2 đạt 89% kế hoạch, hài lòng khách hàng tăng 3.9 → 4.2"), 3–4 gạch giữ đủ số liệu (142/160 điểm, 12 lỗi, 3 đợt phát hành), phần diễn giải xuống ghi chú.

**Thông điệp cho khán giả:** *không mất thông tin — chỉ đổi chỗ ở: số lên slide, lời xuống ghi chú.*

**🔍 Người dùng kiểm tra:** số liệu giữ nguyên, không rơi rớt ý quan trọng · dựng lại trong template công ty.

**💰 Lợi ích:** cắt gọt tay 1 tiếng → 2 phút, slide nhìn chuyên nghiệp hơn hẳn.

---

## ③ PHỔ BIẾN AN TOÀN — slide cho công nhân mới vào công trường 🏗

**🔴 Vấn đề:** Tháng nào cũng có người mới, lần nào cũng phổ biến miệng — người nghe quên, không có gì lưu lại.

**⌨ Câu lệnh** — đính kèm `demo-an-toan-lao-dong.docx`:
> "Từ ghi chú đính kèm, dựng nội dung 6 slide phổ biến an toàn lao động cho công nhân mới vào công trường, trình bày trong 30 phút. Yêu cầu: chữ to, câu ngắn, dễ hiểu với người lao động phổ thông; mỗi slide tối đa 4 gạch đầu dòng; ưu tiên các quy định bắt buộc và tình huống khẩn cấp; kèm ghi chú lời nói cho người phổ biến."

**✅ Kết quả kỳ vọng:** 6 slide theo mạch: trang bị bảo hộ bắt buộc → làm việc trên cao → khu vực cẩu và điện → giàn giáo → tình huống khẩn cấp → cam kết tuân thủ. Nội dung phải có: **3 trang bị bắt buộc** (mũ, giày, áo phản quang) · làm việc **từ 2m trở lên phải đeo dây an toàn, móc vào điểm neo cố định** · cấm đứng dưới tầm hoạt động của cẩu · chỉ thợ có chứng chỉ được đấu nối điện · giàn giáo phải có thẻ nghiệm thu · **2 vụ suýt tai nạn quý 2 do không đeo dây khi lắp thép tầng 3** · gọi tổ y tế nội bộ 115, không tự ý di chuyển nạn nhân · điểm tập kết bãi xe cổng số 2 · ký cam kết cuối buổi.

**⭐ Điểm nhấn:** Claude phải **bỏ ý lạc đề** ("hỏi phòng hành chính xem còn mũ bảo hộ size lớn không") — đó là việc hậu cần, không phải nội dung phổ biến.

**🔍 Người dùng kiểm tra:** quy định nêu đúng như ghi chú, **không tự bịa thêm quy định an toàn** · số điện thoại khẩn cấp · nội dung phải được cán bộ an toàn duyệt trước khi phổ biến thật.

**💰 Lợi ích:** soạn bộ slide phổ biến tay nửa buổi → 3 phút, dùng lại được cho mọi đợt người mới.

---

## ⚡ Ví dụ nhanh khác — PowerPoint (prompt 1 dòng, không cần file)

- *"Viết 3 phương án tiêu đề mạnh hơn, nói thẳng thông điệp cho slide này: [dán tiêu đề hiện tại]"*
- *"Rút nội dung slide này còn tối đa 3 gạch đầu dòng, giữ nguyên số liệu: [dán nội dung]"*
- *"Gợi ý loại biểu đồ phù hợp nhất cho số liệu sau và giải thích vì sao: [dán số liệu]"*
- *"Viết ghi chú lời nói khoảng 60 giây cho slide có nội dung sau: [dán nội dung slide]"*
- *"Đề xuất thứ tự 6 slide cho bài trình bày 10 phút về chủ đề: [nêu chủ đề]"*

---

# 💰 BẢNG TỔNG LỢI ÍCH

| Việc | Làm tay | Có AI hỗ trợ |
|---|---|---|
| Soạn thông báo từ ghi chú | 20–30 phút | 2–3 phút |
| Soát lỗi công văn | 15–20 phút (vẫn sót) | 1 phút, có bảng lỗi |
| Lập checklist hồ sơ thầu | nửa ngày | 5 phút có bản nháp |
| Lọc vật tư tồn lâu | 30–45 phút | 1 phút |
| Đối chiếu đơn giá 60 mã | cả buổi | 1 phút, kèm công thức |
| Tổng hợp 12 tháng + biểu đồ | 1–2 tiếng | 2 phút |
| Soi hạng mục trễ tiến độ | 30 phút | 1 phút |
| Tính % hoàn thành dự án | 30–45 phút | 1 phút, có cách tính rõ |
| Viết báo cáo tiến độ tuần | 1 tiếng | 3 phút |
| Dựng slide báo cáo tháng | 2–3 tiếng | 3 phút |
| Chữa bộ slide dày chữ | 1 tiếng | 2 phút |
| Slide phổ biến an toàn | nửa buổi | 3 phút |

> Thời gian tiết kiệm là **thời gian soạn bản nháp** — phần đọc lại, kiểm tra và quyết định vẫn là của người dùng.

---

# 🛟 NHẮC QUAN TRỌNG

- **AI soạn — mình kiểm — mình chịu trách nhiệm.** Mọi kết quả demo đều là bản nháp.
- Không đưa hợp đồng thật, báo giá, bảng lương, thông tin khách hàng lên công cụ AI bên ngoài khi chưa được phê duyệt.
- Việc quan trọng (hồ sơ thầu, hợp đồng, pháp lý, tài chính, an toàn lao động) phải có **người có chuyên môn duyệt** trước khi dùng.
- Demo Excel luôn ghi rõ **ngày tham chiếu 14/08/2026** trong prompt để kết quả ổn định.

## ✅ Checklist trước giờ diễn

- [ ] **Đóng hết file demo đang mở trong Word/Excel/PowerPoint** (đang mở sẽ khóa file, không tải lên được)
- [ ] Copy cả thư mục `demo-v2/` ra Desktop cho dễ kéo thả
- [ ] Đăng nhập sẵn claude.ai, mở sẵn một cửa sổ chat trống
- [ ] Chạy thử trọn một lượt demo trước buổi — **quay màn hình lại làm bản dự phòng** nếu mạng chập chờn
- [ ] Chuẩn bị điện thoại phát 4G dự phòng
