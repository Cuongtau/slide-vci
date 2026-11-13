# Slide VCI

Kho slide & tài liệu trình chiếu, chia theo dự án. Tất cả folder viết HOA; tên file giữ nguyên.

```
.
├── _CHUNG/            # Dùng chung cho mọi dự án — KHÔNG đổi tên/di chuyển
│   ├── CSS/           # theme.css, animations.css
│   ├── JS/            # slides.js (Reveal.js)
│   └── ASSETS/        # logo VCI, Trung Chính, Hạ Long EPC, ảnh diễn giả...
├── TC-IMS-EMS/        # Trung Chính — TC.IMS / TC.EMS: UAT, Go-live, sitemap
│   └── TU-LIEU/       # PDF UAT gốc, kịch bản UAT, text & ảnh trích từ PDF
├── HALONG-EPC/        # Hạ Long EPC — AI, đào tạo, UAT MES, chuyển đổi số
├── V-MES/             # Giải pháp V-MES — các bản slide, ảnh, PDF, đối chiếu Bravo
├── AI-CLAUDE/         # Khóa Claude AI trong công việc + bộ demo
├── KHOA-QUAN-TRI/     # Khóa quản trị 6 buổi + transcript tư liệu
├── QLKTX/             # Báo cáo quản lý ký túc xá
└── VCI-NOI-BO/        # Nội bộ VCI — banner, TEMPLATE báo cáo, KHUNG-NANG-LUC
```

Slide tham chiếu tài nguyên chung bằng đường dẫn tương đối, ví dụ từ `TC-IMS-EMS/`:
`../_CHUNG/CSS/theme.css`, `../_CHUNG/ASSETS/logo-vci.png`.

Chạy slide qua local server (khuyến nghị) tại gốc repo:

```bash
python -m http.server 8000
# mở http://localhost:8000/TC-IMS-EMS/index.html
```
