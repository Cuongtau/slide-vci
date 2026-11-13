# Hạ Long EPC — tài liệu & slide theo buổi

Mỗi buổi làm việc với nhà máy Hạ Long EPC là một thư mục, đánh số theo thời gian. Slide mở trực tiếp bằng trình duyệt, không cần build. Logo và CSS dùng chung ở `../_CHUNG/ASSETS/` và `../_CHUNG/CSS/` (đường dẫn trong file là `../../`).

| # | Thư mục | Buổi | Thời gian | Nội dung chính |
|---|---|---|---|---|
| 01 | `01-CHIA-SE-AI-2026-07/` | Chuyên đề chia sẻ "Tìm hiểu về AI" | 07/2026 | `ai-ha-long-epc.html` — slide 15 trang |
| 02 | `02-DAO-TAO-AI-2026-08/` | Đào tạo AI ứng dụng vào công việc | 08/2026 | `ai-dao-tao.html` — slide · `KHUNG-BAI-DAO-TAO-AI.md` — khung bài · `slide-claude-ai-vci.zip` — gói gửi nhà máy |
| 03 | `03-UAT-MES-2026-11/` | UAT MES — Phân hệ Quản lý sản xuất, 2 ngày tại nhà máy | 02–03/11/2026 | xem bên dưới |
| 04 | `04-CHUYEN-DOI-SO-2026-11/` | Blueprint chuyển đổi số HLEPC (10 phân hệ tự xây) | 11/2026 | `index.html` — hub · `01_SOLUTION` giải pháp + timeline (tab Kế hoạch / Thực tế 10 người) · `02_INFRA` hạ tầng · `03_COST` chi phí. Bản gốc: repo `phamhoan-vci/vci-hlepc-sa` |

## 03 — UAT MES (02–03/11/2026)

```
03-uat-mes-2026-11/
├── uat-mes.html                      Slide trình chiếu, 11 trang (mở bằng trình duyệt, F11 toàn màn hình)
├── kich-ban/
│   ├── KICH-BAN-UAT-MES.md           Kịch bản nói theo từng slide, ~26 phút (PM + BA)
│   ├── kich-ban-uat-mes.html         Bản in A4, có nút In / Lưu PDF
│   └── KICH-BAN-UAT-MES.pdf          PDF sẵn để in
├── gui-di/
│   ├── GUI-NHA-MAY-HLEPC.html → .pdf Bản in cho ban lãnh đạo, 2 trang A4 (sửa nội dung ở file .html rồi xuất lại PDF)
│   ├── GUI-NHA-MAY-HLEPC.md          Cùng nội dung dạng văn bản, để chép vào email / Zalo
│   └── GUI-NOI-BO-VCI.md / .pdf      Gửi đội VCI: nguyên tắc, chuẩn bị có hạn, việc từng người theo giờ, sau UAT
└── ke-hoach/
    ├── KE-HOACH-UAT-MES.md           Kế hoạch UAT gửi nhà máy (phạm vi, lịch, chuẩn bị, tiêu chí)
    ├── NHIEM-VU-THEO-VAI-TRO-UAT-MES.md   Kịch bản theo công đoạn · phân vai PM / BA / Tester / Dev · chuẩn bị từng bên
    ├── NHIEM-VU-THEO-VAI-TRO-UAT-MES.pdf  PDF để in cho đội đi nhà máy
    └── RA-SOAT-NOI-DUNG-SLIDE-UAT-MES.md  Bản rà soát nội dung slide, đề xuất viết lại
```

Đầu mối: VCI — Bùi Xuân Cương 033.5055.068 · Hạ Long EPC — A. Thái (Tổng Giám đốc) 0985.961.138.
