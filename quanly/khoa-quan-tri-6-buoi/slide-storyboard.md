# STORYBOARD SLIDE — KHÓA "QUẢN TRỊ & LÃNH ĐẠO CHO QUẢN LÝ CẤP TRUNG"
### Ý tưởng thiết kế slide cho 6 buổi · dùng hệ thống VCI (reveal.js) có sẵn

> **Nền tảng kỹ thuật:** reveal.js 5.1.0 + `css/theme.css` (brand VCI). Mỗi buổi = 1 file HTML riêng (`buoi-1.html` … `buoi-6.html`), export PDF được. Font Plus Jakarta Sans (heading) / Be Vietnam Pro (body).

---

## 1. NGÔN NGỮ THIẾT KẾ (áp dụng cả 6 buổi)

- **Màu:** nền sáng `#F5F7FA`, chữ `#1A1A1A`; nhấn chính cyan `#0E6FA8 → #0FB4F0`; đỏ VCI `#CB2330` **chỉ dùng cho câu chốt (💥) và cảnh báo** — dùng tiết chế để không rối.
- **Bố cục:** căn trái, nhiều khoảng trắng, 1 ý lớn / 1 slide. Không nhồi chữ — slide là chỗ dựa cho người giảng, không phải để đọc.
- **Mã màu theo buổi** (một dải màu phụ ở góc/thanh brand để học viên biết đang ở buổi nào):
  | Buổi | Chủ đề | Tông phụ gợi ý |
  |---|---|---|
  | 1 | Tổng quan quản trị | Cyan đậm (nền tảng) |
  | 2 | Chức năng quản trị | Xanh lá (vận hành) |
  | 3 | Lãnh đạo | Tím (con người) |
  | 4 | Nhóm | Cam (gắn kết) |
  | 5 | Môi trường & SWOT | Đỏ-hồng (chiến lược) |
  | 6 | Thực chiến (chốt khóa) | Cyan đậm + đỏ VCI (tổng kết) |
- **Icon:** line-icon đơn sắc trong ô bo góc (tái dùng class `.ov-icon` sẵn có).
- **Nhất quán:** mỗi slide có thanh brand trên cùng + tên buổi + số slide; footer nhỏ "VCI · Đào tạo quản lý cấp trung".

---

## 2. BỘ "KHUÔN SLIDE" TÁI SỬ DỤNG (8 loại)

Mọi buổi lắp ghép từ 8 khuôn này — làm 1 lần, dùng lại 6 buổi:

| # | Khuôn | Dùng cho | Mô tả hình |
|---|---|---|---|
| A | **Tựa buổi** | mở mỗi buổi | Tên buổi cỡ lớn, số buổi, 1 dòng mục tiêu, hình nền hình học nhạt |
| B | **Câu hỏi mở** (hook) | 🎤 mở đầu | 1 câu hỏi lớn giữa slide, mời cả lớp nghĩ |
| C | **Khái niệm cốt lõi** | 📌 định nghĩa | 1 câu định nghĩa in đậm + icon; nền tối giản |
| D | **Bảng so sánh 2 cột** | quản lý/lãnh đạo, kết quả/quá trình… | 2 khối cạnh nhau, đối lập màu |
| E | **Sơ đồ / vòng lặp** | PDCA, P-O-L-C, 4 giai đoạn, SWOT, Maslow, ma trận phong cách | Hình "hero" của buổi — vẽ bằng SVG/CSS |
| F | **Ví dụ thực tế** | 💬 | Card bối cảnh phần mềm xây dựng, có nhãn "Ví dụ" + tình huống |
| G | **Hoạt động / thảo luận** | 🙋 | Nền màu nhấn, đồng hồ phút, câu hỏi cho học viên làm |
| H | **Câu chốt** (💥) | cuối mỗi phần | 1 câu quote lớn trên nền đỏ/cyan đậm, chữ trắng |

> Slide **cam kết tuần** cuối buổi = biến thể của G (checklist).

---

## 3. STORYBOARD CHI TIẾT — BUỔI 1 (mẫu ~13 slide, 35')

| # | Khuôn | Nội dung slide |
|---|---|---|
| 1 | A | **Buổi 1 · Tổng quan về quản trị doanh nghiệp** + mục tiêu buổi |
| 2 | B | *"Công việc của quản lý khác gì một nhân viên giỏi?"* (ghi từ khóa lớp lên bảng) |
| 3 | C | **Quản trị = đạt mục tiêu THÔNG QUA người khác** (với nguồn lực có hạn) |
| 4 | E | **Sơ đồ 3 cấp quản trị** (tháp: cao–trung–cơ sở), tô sáng "cấp trung = khớp nối" |
| 5 | F | Ví dụ *dịch mục tiêu*: "tăng 30% doanh thu SP quản lý thi công" → task cụ thể của nhóm dev |
| 6 | D→bảng 3 dòng | **Tầm nhìn – Sứ mệnh – Mục tiêu** + ví dụ công ty phần mềm xây dựng |
| 7 | E | **SMART** (5 chip) + so sánh ❌"nâng cao chất lượng PM" / ✅"giảm lỗi production 10→≤3/tháng" |
| 8 | E | **Tư duy quá trình:** Đầu vào → Hoạt động → Đầu ra (ví dụ release trễ) |
| 9 | E | **Vòng PDCA** (vòng tròn 4 bước, mũi tên xoáy lên) |
| 10 | F | Ví dụ PDCA: rút gọn daily standup 25' → 12' (timeline) |
| 11 | G | Hoạt động 2': *"Phác 1 vòng PDCA cho 1 vấn đề lặp lại của nhóm bạn"* |
| 12 | H | 💥 *"Nhân viên giỏi làm cho việc xong. Quản lý giỏi làm cho cả nhóm cùng làm được — tốt hơn mỗi vòng."* |
| 13 | G | **Cam kết tuần** + "Buổi sau: 4 chức năng quản lý làm mỗi ngày" |

---

## 4. HÌNH "HERO" CẦN VẼ CHO TỪNG BUỔI (khuôn E)

Đây là phần làm slide "đẹp và đáng nhớ" — mỗi buổi có 1–2 sơ đồ chủ đạo:

- **Buổi 1:** Tháp 3 cấp quản trị · Vòng **PDCA** · Chuỗi Đầu vào–Hoạt động–Đầu ra.
- **Buổi 2:** Vòng lặp **P-O-L-C** 4 chức năng (Hoạch định→Tổ chức→Điều khiển→Kiểm tra, nối vòng).
- **Buổi 3:** Bảng **Quản lý vs Lãnh đạo** · Tháp **Maslow** 5 tầng · **Ma trận 4 phong cách lãnh đạo** (Chỉ đạo–Huấn luyện–Hỗ trợ–Ủy quyền) · Thanh Herzberg (duy trì ↔ động lực).
- **Buổi 4:** **4 giai đoạn Tuckman** (Hình thành→Sóng gió→Ổn định→Vận hành) dạng đường đi lên · Bánh xe vai trò nhóm.
- **Buổi 5:** **Sơ đồ môi trường** (vòng ngoài vĩ mô – vòng trong ngành – doanh nghiệp ở giữa) · **Ma trận SWOT 2×2** + mũi tên phối hợp S-O/S-T/W-O/W-T.
- **Buổi 6:** **4 cái bẫy** (4 thẻ: ôm việc · áp đặt · quên mượn lực từ sếp · nói ≠ làm) · Sơ đồ **"Xây hệ thống 3 bước"** (Chia việc → Nối đầu việc → Con người) · Cân **TIN ↔ BUÔNG (giữ 30% sức)** · Bảng "Khai báo thông minh" ❌/✅.

---

## 5. SỐ LƯỢNG SLIDE DỰ KIẾN

| Buổi | Số slide (đã dựng) | Nhịp |
|---|---|---|
| 1 | 14 | 35' |
| 2 | 14 | 35' |
| 3 | 13 | 38' |
| 4 | 13 | 38' |
| 5 | 12 | 38' |
| 6 | 13 | 38' |
| **Tổng** | **79 slide** | 6 buổi |

> **Đã triển khai thêm so với bản nháp:** mỗi buổi có slide **Tổng kết** (khớp mục "Chốt buổi" của kịch bản); các câu chốt 💥 giữa khối đưa lên slide dạng **punch bar** đỏ; title & quote đổi **màu theo buổi**; animation vào trang (stagger) + **fragment** bấm-để-hiện ở các sơ đồ 4 ô, bậc thang Tuckman, dòng ✅. Kịch bản trình chiếu từng slide: `slides/kich-ban-trinh-chieu.md`.

> Nhịp ~2–3 phút/slide, thoải mái cho lớp có thảo luận.

---

## 6. GỢI Ý CÁCH TRIỂN KHAI

1. **Làm prototype Buổi 1 trước** (13 slide hoàn chỉnh) để chốt phong cách → rồi nhân ra 5 buổi còn lại. *(An toàn, đỡ phải sửa cả 6 bộ.)*
2. Hoặc **dựng khung cả 6 buổi** cùng lúc (khuôn + hero diagram), điền nội dung sau.
3. Mỗi buổi 1 file HTML độc lập, mở bằng trình duyệt, nhấn `E` hoặc in PDF để phát/ chiếu.
