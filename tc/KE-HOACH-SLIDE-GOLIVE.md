# KẾ HOẠCH LÀM SLIDE GO-LIVE — Hệ thống TC.EMS

> **Mục tiêu:** dựng bộ slide trình bày **Kế hoạch Go-live hệ thống Quản trị Máy thiết bị (TC.EMS)** cho Trung Chính, **dùng lại nguyên giao diện bộ slide UAT** (`tc/uat-2-ims-ems.html`).

## 1. Thông tin đầu vào

| Mục | Nội dung |
|---|---|
| **Ngày Go-live** | **22/07/2026** |
| **Thời gian** | **2 tuần** (22/07 → 05/08/2026) — giai đoạn vận hành thật có giám sát |
| **Phạm vi** | **Toàn bộ hệ thống EMS** — Máy thiết bị |
| **Ba nhánh nghiệp vụ** | ① Xuất nhập tồn Máy thiết bị · ② Điều chuyển máy thiết bị · ③ Bảng giá thuê |

## 2. Tái sử dụng giao diện từ slide UAT

Giữ nguyên hệ thiết kế, chỉ thay nội dung:

| Thành phần | Nguồn (slide UAT) | Dùng cho Go-live |
|---|---|---|
| Nền + font + màu thương hiệu | `../css/theme.css`, `../css/animations.css` | giữ nguyên |
| Trang bìa `cover-v3` (logo TC + VCI, tag, hero chữ lớn) | Slide 1 | đổi hero thành **[ EMS ]**, tag "KẾ HOẠCH GO-LIVE · 07/2026" |
| Sơ đồ phân rã chức năng | Slide 7 (Phạm vi UAT) | **Phạm vi Go-live** — 3 nhánh EMS |
| Org-chart 2 khối TC ↔ VCI | Slide 5 (Thành phần tham gia) | **Thành phần & trách nhiệm Go-live** |
| Swimlane 3 lane | Slide 9 (Quy trình báo lỗi) | **Quy trình xử lý sự cố khi vận hành thật** |
| Timeline mốc thời gian | Slide 6 | **Timeline 2 tuần Go-live** |
| Slide kết + Q&A | Slide 10 | giữ nguyên bố cục |

**File sẽ tạo:** `tc/golive-ems.html` · kịch bản nói: `KICH-BAN-GOLIVE.md` (theo mẫu `KICH-BAN-UAT.md`).

## 3. Cấu trúc slide đề xuất (12 slide)

| # | Slide | Nội dung chính | Khối giao diện |
|---|---|---|---|
| 1 | **Cover** | Kế hoạch Go-live TC.EMS · 22/07/2026 | `cover-v3`, hero **[EMS]** |
| 2 | **Nội dung** | Mục lục 8 phần | list |
| 3 | **Mục tiêu Go-live** | Đưa EMS vào vận hành thật an toàn · chuyển toàn bộ nghiệp vụ máy thiết bị lên hệ thống · ổn định trong 2 tuần | 3 card |
| 4 | **Điều kiện sẵn sàng** | Checklist trước khi bấm nút: UAT đã đóng · hết lỗi Critical/Major · dữ liệu nền chuẩn hóa · tài khoản & phân quyền · người dùng đã đào tạo · hạ tầng sẵn sàng | checklist |
| 5 | **Phạm vi Go-live** | Sơ đồ 3 nhánh EMS + chức năng con | sơ đồ phân rã |
| 6 | **Kế hoạch chuyển đổi (Cutover) 22/07** | Chốt số liệu hệ thống cũ → nhập **tồn đầu kỳ** máy thiết bị → đối chiếu → mở hệ thống cho người dùng; ai làm gì, mấy giờ | timeline giờ |
| 7 | **Timeline 2 tuần** | 22/07 Go-live → Tuần 1 giám sát chặt → Tuần 2 ổn định → 05/08 nghiệm thu đóng Go-live | timeline mốc |
| 8 | **Thành phần & trách nhiệm** | Khối Trung Chính (vận hành thật) ↔ Khối VCI (hỗ trợ, vá lỗi) | org-chart |
| 9 | **Hỗ trợ sau Go-live (Hypercare)** | Tuần 1: trực hỗ trợ cao điểm · Tuần 2: giảm dần · cam kết thời gian phản hồi theo mức độ | bảng SLA |
| 10 | **Quy trình xử lý sự cố** | Swimlane 3 lane: Người dùng → Ban CĐS → VCI; kèm phân loại mức ưu tiên | swimlane |
| 11 | **Rủi ro & phương án dự phòng** | Rủi ro chính (số liệu lệch, người dùng chưa quen, tải cao) + cách xử lý + điều kiện rollback | bảng rủi ro |
| 12 | **Tiêu chí đóng Go-live · Q&A** | Điều kiện nghiệm thu + đầu mối liên hệ + cảm ơn | kết + Q&A |

## 4. Nội dung chi tiết cần chuẩn bị

**Phạm vi (slide 5) — 3 nhánh, chức năng con *(đề xuất — cần BA xác nhận)*:**
- **① Xuất nhập tồn Máy thiết bị:** Nhập kho MTB · Xuất kho MTB · Tồn đầu kỳ · Báo cáo xuất–nhập–tồn
- **② Điều chuyển máy thiết bị:** Lệnh điều chuyển · Biên bản bàn giao · Theo dõi vị trí/trạng thái máy · Luân chuyển giữa kho–dự án
- **③ Bảng giá thuê:** Thiết lập bảng giá · Áp giá theo loại máy/dự án · Hiệu lực giá · Tính chi phí thuê

**Timeline (slide 7):**
| Mốc | Thời gian | Nội dung |
|---|---|---|
| Chuẩn bị | trước 22/07 | Chốt UAT · chuẩn hóa dữ liệu · cấp tài khoản · đào tạo người dùng |
| **Go-live** | **22/07** | Cutover: chốt số liệu → nhập tồn đầu kỳ → mở hệ thống |
| Tuần 1 | 22/07 – 28/07 | Vận hành thật + **giám sát chặt**, trực hỗ trợ cao điểm |
| Tuần 2 | 29/07 – 05/08 | Ổn định, giảm dần hỗ trợ, xử lý nốt tồn đọng |
| Đóng Go-live | 05/08 | Nghiệm thu, chuyển sang vận hành thường |

**Tiêu chí đóng Go-live (slide 12):** không còn lỗi Critical/Major · số liệu tồn khớp giữa hệ thống và thực tế · toàn bộ nghiệp vụ phát sinh được ghi nhận trên hệ thống · người dùng thao tác độc lập được.

## 5. Giả định cần bạn xác nhận

1. **Ngày kết thúc** 2 tuần = **05/08/2026** (nếu tính theo ngày làm việc thì khác — cần chốt).
2. **Có nhập tồn đầu kỳ / chuyển đổi dữ liệu** máy thiết bị từ hệ thống cũ hoặc Excel không?
3. **Nhân sự trình bày** giữ như UAT (PM Bùi Xuân Cương · BA Ms. Trang · TL Khúc Vân Anh)?
4. **Kênh hỗ trợ** vẫn là `support.vcijsc.com` và mô hình Ban CĐS lọc trước khi chuyển VCI?
5. **Đối tượng dự** buổi trình bày Go-live (Phòng Chi Nhánh + Ban CĐS như UAT?).
