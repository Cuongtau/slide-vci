# KẾ HOẠCH LÀM SLIDE UAT — Phân quyền hệ thống & Phân quyền dữ liệu (kho)

> Dựng bộ slide **Kế hoạch UAT** cho nhóm chức năng phân quyền, **dùng lại nguyên giao diện** bộ UAT Đợt 3 (`tc/uat-3-hoadon.html`).

## 1. Thông tin đầu vào

| Mục | Nội dung |
|---|---|
| **Ngày khởi động** | **27/08/2026**, 09:00 |
| **Thời gian kiểm thử** | **2 tuần** — 27/08 → 09/09/2026 |
| **Vá lỗi, hoàn thiện** | 09/2026 · sẵn sàng Go-live |
| **Đợt** | **UAT Đợt 4** *(giả định — cần xác nhận)* |
| **Giao diện** | Giống `uat-3-hoadon.html` (reveal.js · `../css/theme.css` · `../css/animations.css`) |
| **Môi trường** | `https://system-uat.trungchinh.com.vn/` *(giữ như đợt 3)* |
| **File tạo** | `tc/uat-4-phan-quyen.html` |

## 2. Phạm vi UAT — sơ đồ phân rã 2 nhánh

| ① Phân quyền hệ thống | ② Phân quyền dữ liệu (kho) |
|---|---|
| Quản lý vai trò (thêm/sửa/xoá) | Gán kho cho người dùng |
| Gán quyền chức năng: xem · thêm · sửa · xoá · duyệt · xuất | Lọc dữ liệu theo kho |
| Gán vai trò cho người dùng | Phạm vi báo cáo theo kho |
| Ẩn/hiện menu theo vai trò | Phân quyền theo đơn vị |
| Thu hồi quyền khi đổi vai trò | Nhật ký thay đổi quyền |

> Slide phạm vi **chỉ liệt kê tính năng**. Cách kiểm chứng (đăng nhập chéo theo vai trò, trường hợp nhiều kho / không có kho)
> không đưa lên sơ đồ — nói ở slide Mục đích và slide Cách thức tổ chức.

## 3. Điểm khác biệt của đợt UAT này — phải xử lý riêng

Ba đợt trước kiểm thử **chức năng nghiệp vụ**: mở màn hình ra, làm được việc là đạt. Đợt này kiểm thử **quyền**, nên cách test khác hẳn:

| # | Khác biệt | Ảnh hưởng tới slide |
|---|---|---|
| 1 | **Test âm tính là chính** — không chỉ xác nhận "làm được", mà phải xác nhận **KHÔNG thấy / KHÔNG làm được** dữ liệu ngoài phạm vi | Thêm 1 ô riêng ở slide Mục đích + nhấn trong Cách thức tổ chức |
| 2 | **Cần ma trận phân quyền chuẩn** (vai trò × chức năng) để đối chiếu, VCI phải gửi trước ngày khởi động | Thêm vào cột trách nhiệm VCI ở slide 6; đề xuất **thêm 1 slide ma trận** |
| 3 | **Cần nhiều tài khoản test**, mỗi vai trò một tài khoản, không dùng chung | Thêm vào cột trách nhiệm VCI + checklist chuẩn bị |
| 4 | **Lỗi phân quyền dữ liệu mặc định là Critical** — thấy dữ liệu kho/chi nhánh khác là rò rỉ thông tin | Ghi rõ ở slide Quy trình xử lý lỗi (bước 03 phân loại) |
| 5 | Người kiểm thử cần **đại diện nhiều kho / nhiều chi nhánh**, không chỉ kế toán | Điều chỉnh slide Thành phần tham gia |

## 4. Cấu trúc slide (10 slide — 9 slide gốc + 1 slide ma trận)

| # | Slide | Khối giao diện dùng lại | Nội dung đợt này |
|---|---|---|---|
| 1 | **Cover** | `cover-v3` | KẾ HOẠCH UAT · ĐỢT 4 · hero **[PHÂN QUYỀN]** · khởi động 09:00 27/08/2026 |
| 2 | **Mục lục** | `toc` | 7 mục (thêm mục Ma trận phân quyền) |
| 3 | **Mục đích UAT** | `cards-goal` 3 thẻ | ① Đúng quyền chức năng ② **Đúng phạm vi dữ liệu** ③ Ghi nhận lỗi & góp ý |
| 4 | **Quy trình tiếp nhận & xử lý lỗi** | `proc-flow` 6 bước | Giữ nguyên 6 bước; bước 03 bổ sung: *lỗi lộ dữ liệu ngoài phạm vi → Critical* |
| 5 | **Thành phần tham gia** | `org-chart` | TC: đại diện **các kho** + KSNB ↔ VCI: QLDA (Mr. Cương) · BA (Ms. Trang) |
| 6 | **Cách thức tổ chức** | `timeline` + `two-col` | Timeline 27/08 → 09/09; VCI bổ sung *ma trận phân quyền + bộ tài khoản test theo vai trò* |
| 7 | **Phạm vi UAT** | `ims-tree` (sơ đồ động) | 2 nhánh tính năng ở mục 2 |
| 8 | **Ma trận phân quyền** *(slide mới)* | bảng `rule-grid` / bảng đơn giản | Vai trò × nhóm chức năng × phạm vi kho — bản rút gọn để cả phòng nhìn chung một chuẩn |
| 9 | **Đầu mối & Kênh tiếp nhận** | `channel-flow` + `contacts` | Zalo · support.vcijsc.com · 2 đầu mối: Cương (PM) · Trang (BA) |
| 10 | **Q&A** | `slide-qa` | Cảm ơn · *UAT Đợt 4 · Phân quyền hệ thống & dữ liệu · 27/08/2026* |

## 5. Nội dung giữ nguyên từ đợt 3 (không phải nghĩ lại)

- Quy trình 6 bước xử lý lỗi và vai trò từng bước
- Kênh tiếp nhận: nhóm Zalo VCI–Chi Nhánh → `support.vcijsc.com` → VCI xử lý
- Đầu mối: **Bùi Xuân Cương** (PM — đầu mối chính) · **Cao Thị Trang** (BA — nghiệp vụ)
- Môi trường UAT và cách cấp tài khoản

## 6. Cần xác nhận trước khi dựng

1. **Đợt số mấy** — gọi là *Đợt 4* có đúng không?
2. **Chữ hero trang bìa**: `[PHÂN QUYỀN]` / `[IMS]` / `[QUẢN TRỊ]`?
3. **Danh sách vai trò thực tế** cần đưa vào ma trận slide 8 — ví dụ: Quản trị hệ thống · Trưởng kho · Nhân viên kho · Kế toán · Ban giám đốc · Chi nhánh. Chưa có thì tôi dựng bản mẫu để anh sửa.
4. **Phân quyền dữ liệu chỉ theo kho, hay có cả theo chi nhánh / đơn vị / dự án?**
5. **Thành phần tham gia**: đại diện những kho nào? Giữ Mr. Mậu · Mr. Chiến · Mr. Cường như đợt 3?
6. **Vá lỗi bao lâu** sau 2 tuần kiểm thử (đợt trước để trống, chỉ ghi "08/2026")?

> Chốt xong mục 6 là tôi dựng `uat-4-phan-quyen.html`. Riêng câu 3 nếu chưa có, tôi vẫn dựng được bằng bộ vai trò mẫu ở trên và anh sửa lại trên slide.
