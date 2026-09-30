# KẾ HOẠCH CẢI THIỆN DECK V2 — ảnh thật · sơ đồ · animation

> Áp dụng cho `ai-claude/claude-v2.html` **sau khi đã cắt**: bỏ slide timeline lịch sử AI và bỏ thẻ Artifacts → deck còn **18 slide**.
> Mục tiêu: bớt cảm giác "toàn thẻ chữ", tăng hình ảnh và sơ đồ, animation dẫn dắt theo lời nói thay vì hiện ào một lượt.

## A. Hiện trạng (đã kiểm tra trực tiếp trên file)

| Điểm | Số liệu |
|---|---|
| Slide | 18 (sau khi cắt 1) |
| **Ảnh thật trong deck** | **0** — chỉ có logo VCI (16 lần) + 1 ảnh diễn giả `assets/speaker-cuong-bui.jpg` **chưa có file**, đang rơi về avatar chữ "CB" |
| Minh họa | 37 icon SVG lineart + thẻ chữ; không có sơ đồ/biểu đồ nào |
| Animation | 14 nhóm đã dựng sẵn (aurora, stagger card, vẽ gạch chân, chat-demo, before/after, hover…) — chất lượng tốt, có `prefers-reduced-motion` |
| **Fragment** | **0** — mỗi slide hiện toàn bộ nội dung cùng lúc, người nghe đọc trước diễn giả |
| Bố cục | Nhiều slide dồn nội dung xuống dưới, chừa khoảng trắng lớn giữa tiêu đề và thẻ (rõ nhất: *Công cụ trong Claude*, *Chọn công cụ theo việc*) |
| CSS chết | ~59 dòng `.ai-timeline*` / `.stage-*` không còn markup dùng (giữ lại để tái dùng ở mục C) |

**Ba việc cần làm, theo thứ tự tác động:** ① lấp khoảng trắng bằng **sơ đồ** (rẻ, không cần chờ ai) → ② **fragment hóa** để animation phục vụ lời giảng → ③ **ảnh thật** (đắt nhất, cần bạn cấp ảnh).

## B. Ảnh thật — nguồn và cách lấy

| Nhóm | Dùng ở slide | Nguồn | Ai làm |
|---|---|---|---|
| Ảnh chụp màn hình Claude làm việc thật | 12 · 13 · 14 (3 demo) — **giá trị nhất** | Mình chạy sẵn 3 demo trên bộ file `ai-claude/demo/` (hợp đồng 9 trang, vật tư 3 sheet, dàn ý an toàn lao động) rồi chụp màn hình tiếng Việt | Mình |
| Ảnh "trước → sau" tài liệu | 12 · 13 · 14 | Chụp chính file demo: trang hợp đồng dày ↔ bản tóm tắt 1 trang; bảng thô ↔ biểu đồ | Mình |
| Ảnh chân dung diễn giả | 3 | File `speaker-cuong-bui.jpg` (chưa có) | **Bạn gửi** |
| Ảnh văn phòng / buổi làm việc VCI | 1 (bìa) · 4 (vì sao) | Ảnh nội bộ VCI; nếu không có → Unsplash/Pexels (miễn phí thương mại), tải về local | **Bạn xác nhận** dùng ảnh nội bộ hay stock |
| Logo hãng AI thật | 6 (chọn công cụ) | SVG chính thức từ Simple Icons — thay 5 ô chữ "CL/Px/CP/Ge/GPT" hiện tại | Mình |

Quy ước: mọi ảnh **lưu local** trong `ai-claude/img/` (không hotlink), nén ≤300KB, có `alt`, tránh chữ nhỏ trong ảnh vì chiếu xa không đọc được.

## C. Sơ đồ / mô hình cần dựng (SVG inline, không phụ thuộc mạng)

| Slide | Thay cho | Sơ đồ đề xuất |
|---|---|---|
| 5 · AI nên làm việc gì | 2 cột chữ | **Cán cân**: bên trái "AI hỗ trợ tốt" ↔ bên phải "Người quyết định", trục giữa là mức rủi ro |
| 8 · Ba cách ứng dụng | 3 khối | **Vòng tròn đồng tâm**: Claude.ai → Tích hợp → Claude Code, càng ra ngoài càng sâu |
| 9 · Công thức giao việc | 2 khung chữ mơ hồ ↔ rõ | **Sơ đồ 6 mảnh ghép** của một yêu cầu tốt (bối cảnh · việc · đầu vào · định dạng · giới hạn · tiêu chí kiểm) ghép dần thành 1 khối |
| 10 · Ba cấp độ | 3 thẻ ngang | **Bậc thang 3 bước đi lên**, gắn cờ "đích buổi học = cấp 2" (tái dùng CSS `.stage-*` đang chết) |
| 11 · Bản đồ văn phòng | 4 thẻ | **Sơ đồ tia** từ tâm "Công việc văn phòng" ra 4 nhánh Word · Excel · PowerPoint · Quản lý |
| 12–14 · Demo | 4 hàng chữ | **Băng chuyền 4 chặng**: Đầu vào → Yêu cầu → Đầu ra → *Bạn kiểm gì* (chặng cuối tô đỏ VCI) — dùng chung 1 component cho cả 3 slide |
| 16 · Quy tắc vàng | 3 thẻ | **Phễu 3 lớp lọc**: AI soạn → bạn kiểm → bạn chịu trách nhiệm; hạt "sai sót" bị giữ lại ở từng lớp |
| 17 · Bắt đầu | checklist | **Lịch 7 ngày** 1 hàng 7 ô, ô ngày 1 được đánh dấu |

## D. Animation — nâng từ "đẹp" lên "dẫn dắt"

1. **Fragment hóa 8 slide nặng chữ** (5, 9, 10, 12, 13, 14, 16, 17): mỗi lần bấm hiện 1 ý, khớp nhịp nói trong kịch bản. Đây là thay đổi tạo khác biệt lớn nhất mà không tốn ảnh.
2. **Vẽ đường SVG** (`stroke-dasharray`) cho mọi sơ đồ mục C — nét chạy theo hướng kể chuyện (trái→phải, dưới→lên).
3. **Băng chuyền demo**: mũi tên chạy một lượt khi vào slide, chặng "Bạn kiểm gì" nảy nhẹ + viền đỏ để đọng lại.
4. **Trước/sau bằng thanh trượt**: ảnh tài liệu gốc và bản AI soạn chồng nhau, thanh chia chạy 1 lượt tự động (slide 12–14).
5. **Phễu quy tắc vàng**: 3 hạt rơi, 2 hạt bị giữ lại ở lớp kiểm — minh họa "AI có thể sai".
6. **Giữ kỷ luật hiện có**: không animation lặp vô hạn, tôn trọng `prefers-reduced-motion`, hover không xô layout.

## E. Sửa bố cục (làm cùng lúc, chi phí thấp)

- Đưa khối nội dung lên sát tiêu đề, giảm khoảng trắng dọc ở slide 6 và 15 (hiện gap ~25% chiều cao).
- Slide 15 còn 4 thẻ sau khi bỏ Artifacts → cân lại tỉ lệ thẻ, không để thẻ dẹt ngang.
- Dọn ~59 dòng CSS chết nếu mục C không tái dùng hết.

## F. Lộ trình

| Đợt | Nội dung | Cần gì từ bạn | Kết quả |
|---|---|---|---|
| **1** | Sơ đồ mục C + sửa bố cục mục E + fragment hóa mục D.1 | Không | Deck 18 slide hết khoảng trắng, có 8 sơ đồ, bấm hiện từng ý |
| **2** | Animation D.2–D.5 | Không | Sơ đồ vẽ dần, băng chuyền demo, phễu quy tắc |
| **3** | Ảnh thật mục B + logo hãng | **Ảnh diễn giả** + quyết định ảnh nội bộ hay stock | Deck có ảnh thật, đóng gói lại zip (1 file HTML + PDF) |

## G. Việc kéo theo — cần bạn quyết

1. **Kịch bản nói `claude-v2-kich-ban.md` đang lệch với deck**: vẫn còn khối "Slide 6 · AI đã thay đổi thế nào", số slide 7–19 lệch 1, và 3 chỗ nhắc Artifacts (dòng 156, 189–193, 212).
2. **Demo 3 (PowerPoint) hiện dùng Artifacts để khoe kết quả.** Bỏ Artifacts khỏi slide thì demo 3 nên: (a) bỏ luôn bước xem Artifacts, chỉ xuất file; hay (b) vẫn dùng khi demo nhưng không đưa vào slide?

> **Chờ duyệt:** OK kế hoạch → mình chạy **Đợt 1** ngay (không cần chờ ảnh). Đồng thời cho mình câu trả lời mục G để đồng bộ kịch bản.
