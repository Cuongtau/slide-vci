# Slide UAT TC.IMS — Reveal.js

Bộ slide HTML cho **Kế hoạch UAT Đợt 1 — Hệ thống Quản trị Kho TC.IMS** (11/05 → 25/05/2026), build trên Reveal.js 5 với theme corporate hiện đại + animation tùy biến.

## Chạy slide

### Cách 1 — Mở trực tiếp (đơn giản nhất)
Double-click `index.html`. Hầu hết tính năng hoạt động, nhưng một số trình duyệt sẽ chặn fetch font/asset khi mở qua `file://`.

### Cách 2 — Local server (khuyến nghị)
```bash
# Trong thư mục dự án
python -m http.server 8000
# Hoặc nếu có Node:
npx serve .
```
Mở `http://localhost:8000` trong Chrome/Edge.

### Phím tắt
- `→ / Space` — slide kế tiếp
- `← ` — slide trước
- `F` — fullscreen
- `S` — speaker view (presenter notes)
- `O` / `Esc` — overview tất cả slide
- `?` — danh sách phím tắt

## Cấu trúc

```
.
├── index.html              # 11 slide chính
├── css/
│   ├── theme.css           # Corporate palette + biến brand
│   └── animations.css      # Keyframes & utility animation
├── js/
│   └── slides.js           # Init Reveal + animation theo slide
└── assets/
    └── logo-placeholder.svg
```

## Thay brand thật (logo, màu)

### Logo
Thay file `assets/logo-placeholder.svg` bằng logo VCI thật (giữ nguyên kích thước ~160×48 hoặc tỷ lệ tương đương).

### Màu sắc
Mở [css/theme.css](css/theme.css), chỉnh các biến CSS ở đầu file:

```css
:root {
  --brand-primary:  #0A2540;   /* Màu chính (navy) */
  --brand-accent:   #00B8A9;   /* Màu accent (teal) */
  --brand-accent-2: #4DD4C7;   /* Accent sáng hơn */
  /* ... */
}
```

Toàn bộ slide sẽ tự động cập nhật theo brand mới.

### Font
Mặc định dùng **Inter** + **Be Vietnam Pro** (Google Fonts). Đổi font tại `--font-body` / `--font-heading` trong `theme.css`.

## Export PDF

1. Mở slide với query string: `http://localhost:8000/?print-pdf`
2. Đợi tải xong, nhấn `Ctrl+P` (Cmd+P trên macOS).
3. Trong dialog Print:
   - **Destination**: Save as PDF
   - **Layout**: Landscape
   - **Margins**: None
   - **Background graphics**: ✅ bật
4. Save → có file PDF đầy đủ 11 slide.

## Tùy biến nội dung

Toàn bộ nội dung nằm trong [index.html](index.html), mỗi `<section>` là một slide. Cấu trúc:

```html
<section class="slide-bg-light">
  <div class="slide-header">
    <div class="step-pill anim-fade-up">04 — ...</div>
    <h2 class="anim-fade-up d-1">Tiêu đề</h2>
  </div>
  <!-- nội dung slide -->
</section>
```

### Class animation có sẵn
- `anim-fade-up`, `anim-fade`, `anim-slide-l`, `anim-slide-r`, `anim-zoom`, `anim-pulse`
- `d-1` ... `d-8` — delay stagger (cộng thêm với class animation)

Ví dụ: `<div class="anim-zoom d-3">...</div>` sẽ zoom-in sau 360ms.

## Phạm vi chưa hoàn thiện
- **Slide 9 — Sơ đồ phân rã chức năng**: hiện đang dùng cấu trúc đề xuất (Nhập / Xuất / Tồn / Báo cáo / Cấu hình). Cần xác nhận lại với phạm vi UAT thực tế.
- **Logo VCI**: đang dùng placeholder.
- **Speaker notes**: chưa có chi tiết, có thể bổ sung bằng `<aside class="notes">...</aside>` trong từng slide.

## Tham khảo
- Reveal.js docs: https://revealjs.com/
- Theme variables: [css/theme.css](css/theme.css)
