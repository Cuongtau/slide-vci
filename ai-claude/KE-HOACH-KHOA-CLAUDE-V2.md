# KẾ HOẠCH KHÓA HỌC MỚI — "CLAUDE & AI TRONG CÔNG VIỆC" (bản V2 gọn & dễ hiểu)

> **Nguồn nội dung chuẩn:** `noi-dung-slide-claude-ai-trong-cong-viec.docx` (19 slide, đã biên tập kỹ). Khóa V2 bám SÁT file này — khác với deck V1 (`claude-dao-tao.html`) ở chỗ: gọn hơn, thận trọng hơn, demo là trung tâm.

## 1. Định vị khóa V2 (khác V1 thế nào)

| | V1 (claude-dao-tao.html) | **V2 (mới)** |
|---|---|---|
| Trọng tâm | Hiểu AI rộng (lịch sử, nhà phát triển, thị trường) | **Làm được việc ngay** — demo là xương sống |
| Số liệu | Nhiều thống kê (78%, 5,4h, +64%...) | **Bỏ hết số liệu không kiểm chứng dễ** (theo lưu ý trong docx) |
| Giọng | Thuyết trình sự kiện | **Gần gũi, không tuyệt đối hóa** ("AI ít bịa", "Claude tốt nhất" — cấm dùng) |
| Thông điệp | Nhiều ý | **1 thông điệp xuyên suốt:** *AI soạn — người dùng kiểm — người dùng chịu trách nhiệm* |
| Mỗi slide | Nhiều khối nội dung | **1 tiêu đề nói thẳng + ≤5 gạch đầu dòng + 1 thông điệp chốt** |

## 2. Cấu trúc 19 slide (theo docx — 60 phút)

| # | Slide | Mẫu thiết kế (theo gợi ý docx) |
|---|---|---|
| 1 | Trang bìa | Navy VCI + minh họa luồng **Tài liệu → AI → Bản nháp → Người kiểm → Kết quả** |
| 2 | Mục tiêu buổi học (6 việc làm được) | Checklist 6 ô |
| 3 | Diễn giả & cách tham gia | Ảnh + 4 quy ước tham gia |
| 4 | Vì sao cần dùng AI đúng cách | 3 khối vấn đề |
| 5 | AI nên làm việc gì | **2 cột: AI hỗ trợ tốt ↔ Con người quyết định** |
| 6 | AI đã thay đổi thế nào | Timeline 3 giai đoạn |
| 7 | Chọn công cụ theo việc | Bảng việc→công cụ + lưu ý dữ liệu |
| 8 | Claude là gì | 4 ý + 1 giới hạn (có thể sai) |
| 9 | Claude dùng ở đâu | 3 khối: Claude.ai / Tích hợp / Claude Code |
| 10 | **Công thức giao việc** | So sánh yêu cầu mơ hồ ↔ rõ (ví dụ hợp đồng nguyên văn trong docx) + checklist 6 câu |
| 11 | Ba cấp độ ứng dụng | Bậc thang; đích buổi học = **cấp 2** |
| 12 | Bản đồ ứng dụng văn phòng | 4 khối Word/Excel/PPT/Quản lý |
| 13–15 | **DEMO Word · Excel · PowerPoint** | Mỗi slide 4 hàng: Đầu vào → Yêu cầu → Đầu ra → **Người dùng kiểm tra gì** (điểm mới quan trọng của docx) |
| 16 | Công cụ trong Claude | 5 thẻ: Chat kèm file · Artifacts · Projects · Phân tích dữ liệu · Tìm kiếm web |
| 17 | Quy tắc vàng | Kiểm trước khi dùng · chuyên môn duyệt việc quan trọng · danh sách dữ liệu KHÔNG đưa lên |
| 18 | Bắt đầu từ tuần này | 4 bước + cam kết điền khuyết |
| 19 | Q&A & lời kết | 3 điều cần nhớ: **Chọn đúng việc · Giao việc rõ · Dùng an toàn** + bài áp dụng 7 ngày |

## 3. Nguyên tắc "gọn & dễ hiểu" (ràng buộc khi dựng)

1. **Mỗi slide đúng 3 tầng:** tiêu đề nói thẳng ý (không đặt tên mục) → ≤5 gạch đầu dòng ≤12 từ → 1 dòng thông điệp chốt (lấy nguyên văn từ docx).
2. **Không số liệu thống kê** trừ khi có nguồn rõ + dễ kiểm chứng (theo docx). Demo Excel dùng ngày tham chiếu cố định **14/08/2026**.
3. **Không khẳng định tuyệt đối**; luôn kèm "cần kiểm tra".
4. Giao diện: **theme sáng VCI** đã dựng ở V1 (tái dùng CSS) — cover/kết navy; icon SVG, không emoji.
5. Demo dùng bộ file sẵn có trong `ai-claude/demo/` (đã ẩn danh, khớp mô tả docx: hợp đồng 9 trang, vật tư 3 sheet, dàn ý an toàn lao động).

## 4. Sản phẩm & lộ trình

| Bước | Sản phẩm | Ghi chú |
|---|---|---|
| 1 | `ai-claude/claude-v2.html` — deck 19 slide | Dựng theo bảng mục 2, tái dùng theme sáng V1 |
| 2 | `ai-claude/claude-v2-kich-ban.md` — kịch bản nói 60′ | Phân bổ: mở 8′ · nền tảng 15′ · **demo 25′** · an toàn & cam kết 7′ · Q&A 5′ (docx dặn ưu tiên demo + Q&A) |
| 3 | Cập nhật `demo/HUONG-DAN-DEMO.md` | Thêm hàng "Người dùng kiểm tra gì" cho từng demo |
| 4 | Gói chia sẻ sau buổi học | Slide + prompt mẫu + file demo (docx slide 19 có hứa chia sẻ) |

**V1 giữ nguyên** làm bản "sự kiện/giới thiệu đầy đủ"; V2 là bản "đào tạo tác nghiệp".

> **Chờ duyệt:** OK kế hoạch → dựng Bước 1 (deck V2) trước, bạn xem rồi mình làm tiếp kịch bản.
