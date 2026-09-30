# KẾ HOẠCH CẢI THIỆN UI/UX + BÀI GIẢNG — Deck "Claude & AI trong công việc"

> Sinh từ skill **ui-ux-pro-max** (pattern *Enterprise Gateway*, style *Micro-interactions*, nền sáng corporate) + yêu cầu: theme SÁNG hợp VCI · bớt chữ, thiên hình ảnh · gần gũi dễ hiểu · có ảnh thực tế · kèm bài giảng cho diễn giả.

## A. THEME SÁNG VCI (thay dark navy hiện tại)

Bộ token (trộn khuyến nghị skill với màu thương hiệu VCI):

| Vai trò | Màu | Ghi chú |
|---|---|---|
| Nền slide | `#F8FAFC` + tint xanh rất nhạt `#EFF6FB` | nền sáng sạch, không trắng gắt |
| Chữ chính / phụ | `#0F2A43` / `#47586B` | đạt tương phản ≥ 4.5:1 |
| Primary | **#0E6FA8** (xanh VCI) | heading nhấn, step-pill, viền |
| Accent | **#0FB4F0** (cyan VCI) | gradient, highlight, hover |
| CTA/cảnh báo | **#CB2330** (đỏ VCI) | callout, badge — dùng tiết chế |
| Card | trắng `#FFFFFF`, viền `#E2E8F0`, bóng mềm 2 lớp | thay glassmorphism tối |
| Font | giữ **Plus Jakarta Sans / Be Vietnam Pro** | skill gợi ý Lexend/Source Sans nhưng bộ hiện tại render dấu tiếng Việt tốt hơn — giữ |

Anti-pattern skill cảnh báo phải sửa: **bỏ emoji làm icon** (thay SVG — deck đang dùng 💬🔁👤🛠… trong chips) · không animation lặp vô hạn trang trí · hover không làm xô layout.

## B. UI/UX THEO TỪNG TRANG + BỚT CHỮ (nguyên tắc: ≤25 từ/khối, 1 slide 1 thông điệp, hình ảnh làm chủ)

| Slide | Cải thiện |
|---|---|
| Cover | Nền sáng gradient xanh nhạt, hero [CLAUDE] chữ gradient VCI; **ảnh thật**: văn phòng VCI hoặc ảnh người làm việc với laptop |
| Diễn giả | **Ảnh chân dung thật Mr. Cuong Bui** (bạn cung cấp) thay avatar "CB"; chỉ 3 dòng chữ |
| Mở đầu (3 vấn đề) | Mỗi vấn đề = 1 icon SVG + 1 câu ≤12 từ; ảnh nền mờ cảnh bàn giấy ngập việc |
| Tiến hóa AI | Giữ 3 cột nhưng chips đổi icon SVG; mô tả 1 dòng |
| Nhà phát triển | Dùng **logo thật các hãng** (OpenAI, Anthropic, Google, Meta — tải SVG chính thức) thay chữ |
| Claude là gì / 3 cách dùng | Thêm **ảnh chụp màn hình thật** giao diện claude.ai (tiếng Việt) — minh họa mạnh hơn mọi mô tả |
| Ba cấp độ | Vẽ thành **bậc thang 3 bước đi lên** (SVG) thay 3 card ngang |
| Word / Excel / PowerPoint | Mỗi slide 1 **ảnh chụp màn hình demo thật** (trước/sau hoặc hội thoại thật với Claude) — đây là phần đáng đầu tư ảnh nhất |
| Công cụ Claude | Ảnh chụp màn hình Artifacts/Projects thật |
| Quy tắc vàng | Đồ họa "phễu 3 lớp kiểm" thay 3 card; callout đỏ VCI |
| Bắt đầu + Q&A | Checklist lớn dễ chụp lại bằng điện thoại; Q&A nền xanh VCI đậm (slide duy nhất tối — tạo nhịp đóng) |

## C. KẾ HOẠCH ẢNH THỰC TẾ (research)

1. **Ảnh chụp màn hình tự làm (giá trị nhất, không vướng bản quyền):** mở claude.ai làm 3 demo thật (tóm tắt 1 tài liệu Word, viết công thức Excel, dựng dàn ý slide) → chụp màn hình tiếng Việt → lưu `assets/claude-demo/`. *Cần bạn hoặc mình dựng demo rồi chụp.*
2. **Ảnh văn phòng/người thật:** ưu tiên **ảnh nội bộ VCI** (buổi làm việc, phòng họp — bạn cung cấp); thiếu thì dùng Unsplash/Pexels (miễn phí thương mại) chủ đề "office vietnam", "team meeting laptop" — tải về local vì slide chạy offline.
3. **Logo hãng AI:** tải SVG chính thức (Simple Icons / trang press-kit của hãng) về `assets/ai-logos/`.
4. Mọi ảnh: nén WebP/JPG ≤300KB, lưu local (không hotlink), có alt text.

## D. KẾ HOẠCH BÀI GIẢNG PHỤC VỤ DIỄN GIẢ (Mr. Cuong Bui)

Tạo `halongepc/claude-dao-tao-kich-ban.md` theo định dạng teleprompter đã dùng cho khóa quản trị:
- **Mỗi slide 1 khối:** 📺 Đang chiếu · 🎙 Lời dẫn nguyên văn (giọng gần gũi, xưng "mình/anh chị em", 3–6 câu) · ⌨ nhịp bấm · 🙋 tương tác · 📎 bối cảnh số liệu (nguồn 78%, 5,4h, +64%...) · ➡ câu chuyển
- **Phân bổ 60′:** Mở đầu+diễn giả 5′ · Hiểu AI 12′ · Giao tiếp/3 cấp độ 8′ · **Demo sống Word/Excel/PPT 20′** (kịch bản demo từng bước, có phương án dự phòng nếu mất mạng: dùng ảnh chụp sẵn) · Quy tắc an toàn 7′ · Cam kết + Q&A 8′
- **Kèm:** 8 câu hỏi khán giả dự kiến + đáp án gợi ý · checklist trước giờ (mạng, tài khoản Claude, file demo) · 3 điểm "phải chốt được" mỗi phần

## E. LỘ TRÌNH THỰC HIỆN

1. **Đợt 1 — Theme sáng + bớt chữ + icon SVG** (làm ngay được, không cần ảnh)
2. **Đợt 2 — Ảnh:** mình dựng demo + chụp màn hình claude.ai; bạn cung cấp ảnh chân dung diễn giả + ảnh văn phòng VCI (nếu có)
3. **Đợt 3 — Kịch bản diễn giả** (viết sau khi slide chốt để khớp từng trang)

> **Chờ duyệt:** OK kế hoạch → mình chạy Đợt 1 ngay; Đợt 2 cần bạn gửi ảnh chân dung + ảnh VCI (hoặc cho phép dùng ảnh stock).
