# KẾ HOẠCH LÀM SLIDE UAT — Phân hệ Hóa đơn & Báo cáo tài chính

> Dựng bộ slide **Kế hoạch UAT** cho nhóm chức năng Hóa đơn / Quyết toán / Báo cáo, **dùng lại nguyên giao diện** bộ UAT cũ (`tc/uat-2-ims-ems.html`).

## 1. Thông tin đầu vào

| Mục | Nội dung |
|---|---|
| **Ngày UAT** | **04/08/2026** (khởi động) |
| **Đợt** | UAT Đợt 3 *(giả định — cần xác nhận)* |
| **Giao diện** | Giống `uat-2-ims-ems.html` (reveal.js · `../css/theme.css` · `../css/animations.css`) |
| **File tạo** | `tc/uat-3-hoadon.html` + kịch bản `KICH-BAN-UAT-HOADON.md` |

## 2. Phạm vi UAT (theo ảnh) — sơ đồ phân rã 3 nhánh

| ① Quản lý hóa đơn | ② Quyết toán | ③ Báo cáo |
|---|---|---|
| Hóa đơn đầu vào | Quyết toán VTTC | Báo cáo hiệu quả kinh doanh |
| Hóa đơn đầu ra | | Chi tiết hóa đơn |
| | | Báo cáo khoản mục chi phí |

## 3. Cấu trúc slide (9 slide — bám đúng bộ UAT cũ)

| # | Slide | Khối giao diện dùng lại | Nội dung đợt này |
|---|---|---|---|
| 1 | **Cover** | `cover-v3` | KẾ HOẠCH UAT · hero **[HÓA ĐƠN]** hoặc **[TÀI CHÍNH]**, khởi động 04/08/2026 |
| 2 | **Mục lục** | `toc` | 6 mục như UAT |
| 3 | **Mục đích UAT** | `cards-goal` | Kiểm chứng nhóm chức năng hóa đơn/báo cáo trước Go-live |
| 4 | **Quy trình tiếp nhận & xử lý lỗi** | `proc-flow` 6 bước | Giữ nguyên như UAT cũ |
| 5 | **Thành phần tham gia** | `org-chart` | TC (kế toán/tài chính) ↔ VCI — nhân sự giữ như UAT |
| 6 | **Cách thức tổ chức** | `timeline` + `two-col` | Timeline + trách nhiệm VCI / Chi Nhánh |
| 7 | **Phạm vi UAT** | `ims-tree` (sơ đồ động) | 3 nhánh: Quản lý hóa đơn · Quyết toán · Báo cáo |
| 8 | **Đầu mối & Kênh tiếp nhận** | `channel-flow` + `contacts` | support.vcijsc.com · PIC — giữ như UAT |
| 9 | **Q&A** | `slide-qa` | Cảm ơn |

## 4. Cần bạn xác nhận

1. **Thời lượng UAT**: mấy tuần kiểm thử + vá lỗi? (bộ cũ: 2 tuần test + 2 tuần vá) → để điền timeline slide 6.
2. **Đợt số mấy** (Đợt 3?) và **đối tượng dự** (Phòng Chi Nhánh + kế toán/tài chính?).
3. **Chữ hero trang bìa**: `[HÓA ĐƠN]` / `[TÀI CHÍNH]` / `[IMS·EMS]`?
4. **Môi trường UAT**: vẫn `system-uat.trungchinh.com.vn`?
5. Nhân sự & PIC giữ như UAT Đợt 2 (Cương · Vân Anh · Trang · Thùy Linh)?

> Sau khi bạn chốt, mình dựng luôn `uat-3-hoadon.html`.
