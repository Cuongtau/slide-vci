# RÀ SOÁT NỘI DUNG SLIDE UAT MES — ĐỂ TRÌNH CHIẾU, KHÔNG CHỈ LÀ KẾ HOẠCH

> Góc nhìn: người ngồi dưới là **tổ trưởng, đốc công, phòng kế hoạch, đại diện nhà máy**. Họ không đọc tài liệu, họ nhìn slide 20–30 giây rồi nghe anh nói. Mỗi slide phải trả lời được một câu "tôi phải làm gì / tôi được gì".
>
> Ký hiệu: ✅ giữ · ✏️ sửa chữ · 🔁 đổi cấu trúc · ➕ thêm · ➖ bớt

## Nhận xét chung (áp dụng cho cả deck)

| # | Vấn đề | Vì sao quan trọng khi trình chiếu | Đề xuất |
|---|---|---|---|
| A | **Nhiều slide là tài liệu kế hoạch chuyển lên màn hình**: câu dài 25–35 chữ, nhiều mệnh đề, dấu chấm phẩy (slide 3, 8, 9) | Người nghe đọc chậm hơn anh nói, vừa đọc vừa nghe là mất cả hai | Mỗi dòng trên slide ≤ 12 chữ. Phần giải thích để trong kịch bản nói |
| B | **Nhãn tiếng Anh**: REAL DATA, SELF-REPORTING, ACTION LIST, Q&A, PM, BA, QC, Dev | Đối tượng là nhà máy. Tổ trưởng không biết QC là ai, BA là gì | Bỏ 3 nhãn tiếng Anh ở slide 3. Lần đầu xuất hiện vai trò VCI ghi tiếng Việt: Quản lý dự án · Phân tích nghiệp vụ · Kiểm thử · Kỹ thuật. Q&A → "Hỏi đáp & chốt" |
| C | **Thiếu slide "bức tranh luồng"**: slide 4 liệt kê chức năng nhưng không có hình nào cho thấy *kế hoạch → tổ → báo cáo → tiến độ* chạy thế nào | Đây là thứ duy nhất người nghe cần hình dung được trước khi demo. Hiện phải tự ghép từ chữ | ➕ Thêm 1 slide sơ đồ luồng 4 bước, mỗi bước 1 câu, ghi rõ **ai** làm ở bước đó. Đặt trước slide Phạm vi |
| D | **Thiếu "trước – sau"**: không có chỗ nào nói hôm nay nhà máy đang báo cáo sản lượng bằng cách gì và lên MES thì khác gì | Người nghe cần lý do để bỏ công làm thử. Không có lý do thì họ làm cho xong | ➕ Thêm 1 slide 2 cột: *Hiện nay* (sổ tay / Zalo / Excel, cuối ngày mới tổng hợp) ↔ *Trên MES* (báo ngay tại tổ, kế hoạch thấy luôn). Nếu chưa khảo sát kỹ, để cột "Hiện nay" dạng câu hỏi để hỏi ngay tại buổi |
| E | **Thiếu slide "3 việc cần chốt hôm nay"**: mục tiêu buổi 30 phút nằm trong kịch bản nói, không có trên slide | Buổi họp dễ trôi; có slide thì anh chốt được từng mục trước mặt mọi người | ➕ Thay slide Q&A bằng slide "Chốt trước khi demo": 3 ô trống điền tại chỗ: Dự án · Các tổ · Khung giờ xuống tổ |
| F | **Tiêu chí đạt nằm chung với phân loại lỗi** (slide 9) | Hai nội dung khác đối tượng: phân loại lỗi là việc của VCI; tiêu chí đạt là cam kết với nhà máy | 🔁 Tách: tiêu chí đạt thành slide riêng, 4 ô to, mỗi ô 1 câu |
| G | **Số liệu không có**: không có con số nào để neo (bao nhiêu tổ, bao nhiêu cấu kiện, bao nhiêu phút mỗi tổ) | Số làm người nghe tin đây là kế hoạch thật, không phải khung chung | Điền ngay khi có: số tổ dự kiến, số cấu kiện của dự án chạy thử, "10–15 phút / tổ" |
| H | **Mục lục 7 mục** | Người nghe không cần mục lục để theo dõi 11 slide trong 30 phút | ➖ Bỏ, hoặc gộp thành 1 dòng ở cuối slide bìa. Lấy chỗ cho slide C/D/E |

**Cấu trúc đề xuất sau rà soát (12 slide):**
1 Bìa → 2 Vì sao làm UAT tại xưởng (mục đích, 3 ý ngắn) → 3 **Luồng 4 bước** (mới) → 4 **Hiện nay ↔ Trên MES** (mới) → 5 Phạm vi → 6 Ai làm gì → 7 Ngày 1 → 8 Ngày 2 → 9 Cần chuẩn bị → 10 Gặp vướng thì sao → 11 **Khi nào gọi là đạt** (tách) → 12 **Chốt 3 việc & liên hệ** (gộp)

---

## Rà soát từng slide

### Slide 1 — Bìa
| | |
|---|---|
| Hiện tại | "Kế hoạch UAT tại nhà máy / Hệ thống MES — Phân hệ Quản lý sản xuất", hero [MES], cụm ngày giờ (đã sửa) |
| Vấn đề | Chữ "UAT" lặp 3 lần (tag, tiêu đề, chân). Tổ trưởng không biết UAT là gì |
| ✏️ Đề xuất | Tiêu đề: **"Chạy thử MES tại xưởng"**. Phụ đề: "Quản lý sản xuất — 2 ngày, 1 dự án thật". Tag trên: "KẾ HOẠCH UAT · HẠ LONG EPC × VCI". Giữ hero [MES] |
| Ghi chú | Cụm ngày giờ mới: 2 ô ngày to, dưới là giờ · địa điểm · tháng. OK |

### Slide 2 — Mục lục
➖ **Bỏ.** Lý do ở mục H. Nếu muốn giữ, rút còn 1 dòng ở đáy slide bìa: *Mục đích · Luồng · Phạm vi · Lịch · Chuẩn bị · Tiêu chí · Chốt*.

### Slide 3 — Mục đích
| | |
|---|---|
| Hiện tại | Câu dẫn 2 dòng + 3 thẻ, mỗi thẻ 2–3 câu, nhãn REAL DATA / SELF-REPORTING / ACTION LIST |
| Vấn đề | Thẻ 2 có câu "Tổ không báo cáo được thì báo cáo phía trên vô nghĩa" — đúng, nhưng đọc trên slide nghe như trách tổ. Để anh **nói**, không chiếu. Nhãn tiếng Anh thừa |
| ✏️ Đề xuất | Tiêu đề: **"Vì sao chạy thử ngay tại xưởng"** |
| | Câu dẫn: "Không test trên dữ liệu mẫu. Làm trên **cấu kiện đang sản xuất** của một dự án thật." |
| | Thẻ 1 — **Luồng chạy thông**: "Kế hoạch → giao tổ → tổ báo → tiến độ. Số trên hệ thống = số ở xưởng." |
| | Thẻ 2 — **Tổ tự báo được**: "Sau hướng dẫn, tổ trưởng báo sản lượng bằng điện thoại, không cần VCI bên cạnh." |
| | Thẻ 3 — **Ra được việc phải sửa**: "Chỗ nào chưa hợp cách làm của xưởng → ghi lại, có người sửa, có hạn." |
| | ➖ Bỏ 3 nhãn tiếng Anh |

### Slide mới — Luồng 4 bước (đặt sau slide 3)
➕ Sơ đồ ngang 4 ô nối mũi tên, mỗi ô: tên bước · ai làm · làm ở đâu (máy tính / điện thoại).

| Bước | Ai | Thiết bị | Một câu |
|---|---|---|---|
| 1. Lập kế hoạch | Phòng kế hoạch | Máy tính | Cấu kiện nào, bao nhiêu, xong khi nào |
| 2. Giao việc | Phòng kế hoạch | Máy tính | Việc rơi xuống đúng tổ |
| 3. Báo sản lượng | Tổ trưởng / đốc công | Điện thoại | Cuối ca bấm báo, 1 phút |
| 4. Xem tiến độ | Kế hoạch · Ban GĐ | Máy tính | Nhìn ngay, không chờ tổng hợp |

Dòng chốt dưới sơ đồ: **"Bước 3 là bước quyết định — 2 ngày này tập trung vào đó."**

### Slide mới — Hiện nay ↔ Trên MES
➕ 2 cột. Nếu chưa chắc cách nhà máy đang làm, viết cột trái dạng **câu hỏi** và hỏi luôn trong buổi, đó cũng là khảo sát.

| Hiện nay (hỏi để xác nhận) | Trên MES |
|---|---|
| Tổ ghi sản lượng vào đâu? Sổ, Zalo, Excel? | Bấm trên điện thoại ngay tại tổ |
| Bao lâu kế hoạch mới biết tổ làm được bao nhiêu? | Thấy ngay khi tổ báo |
| Lệch số thì truy thế nào? | Có bản ghi ai báo, lúc nào, số bao nhiêu |

### Slide 4 — Phạm vi
| | |
|---|---|
| Hiện tại | Sơ đồ 3 nhánh, 9 ô lá, dòng chú thích dài ở đáy |
| Vấn đề | Ô lá dài ("Tổ trưởng báo cáo sản lượng theo ca / ngày (điện thoại · máy tính)"). Chú thích đáy 2 ý nhồi 1 dòng |
| ✏️ Đề xuất | Rút ô lá ≤ 7 chữ: "Kế hoạch cho dự án chạy thử" · "Danh mục cấu kiện, khối lượng, tiến độ" · "Phân bổ xuống tổ" / "Giao việc xuống tổ" · "Tổ báo sản lượng theo ca" · "Sửa, bổ sung báo cáo" · "Đối chiếu với sổ nhà máy" / "Thiết kế → sản xuất: dữ liệu đi thế nào" · "Camera, mạng, thiết bị ở xưởng" |
| | Chú thích đáy tách 2 nhãn: **"1 dự án · chọn lúc 08:00 hôm nay"** và **"Chưa làm: phân hệ khác, tích hợp ngoài"** |
| ✅ | Màu xanh / cam phân biệt kiểm thử – khảo sát: giữ |

### Slide 5 — Thành phần
| | |
|---|---|
| Hiện tại | 2 khối, 8 ô, vai trò VCI viết tắt PM / BA / QC / Dev |
| Vấn đề | "Mr. Cương", "Ms. Trang" trên slide cho nhà máy Việt Nam nghe lai. Vai trò viết tắt |
| ✏️ Đề xuất | Tiêu đề: **"Ai làm gì trong 2 ngày"** |
| | VCI: "Cương — Quản lý dự án: điều phối, chốt việc" · "Trang — Phân tích nghiệp vụ: demo, hướng dẫn, đi tổ" · "2 Kiểm thử: đi cùng tổ, ghi lỗi" · "Kỹ thuật: sửa nhanh tại chỗ" |
| | Nhà máy: giữ 4 ô, rút phụ đề ≤ 6 chữ |
| | Nhãn giữa "Điều phối tại chỗ" → **"Cùng làm tại xưởng"** |
| ➕ | Dưới khối nhà máy thêm dòng: "Dự kiến **__ tổ** tham gia" (điền số) |

### Slide 6 — Ngày 1
| | |
|---|---|
| Hiện tại | 5 khung giờ, mô tả 1 dòng, nhãn phân công, dải kết quả cuối ngày |
| Vấn đề | Dòng mô tả vẫn là văn kế hoạch ("Nắm cách báo cáo của tổ trưởng / đốc công; hướng dẫn và chạy thử báo cáo"). Người nghe cần biết **mình có mặt lúc nào** |
| ✏️ Đề xuất | Tiêu đề: **"Ngày 1 — Thứ Hai 02/11: Lên kế hoạch, xuống tổ"** |
| | 08:00 "Chốt dự án, chốt tổ" — "30 phút, xong là bắt đầu" |
| | 08:30 "Xem hệ thống chạy" — "Đi hết 4 bước trên dữ liệu thật" |
| | 13:30 "Đưa kế hoạch lên MES" — "Phòng kế hoạch tự tay làm, VCI ngồi cạnh" |
| | 14:30 "Xuống tổ" — "**10–15 phút mỗi tổ**, báo ngay số ca chiều" |
| | 16:30 "Chốt ngày 1" — "Vướng gì, mai làm gì" |
| | Nhãn phân công: thêm nhãn **"Tổ trưởng có mặt"** màu cam nổi ở khung 08:30 và 14:30 để tổ biết lúc nào cần mình |
| | Kết quả cuối ngày rút: "Kế hoạch đã lên MES" · "Mỗi tổ có 1 báo cáo thật" · "Có danh sách vướng mắc" |

### Slide 7 — Ngày 2
| | |
|---|---|
| ✏️ Đề xuất | Tiêu đề: **"Ngày 2 — Thứ Ba 03/11: Tổ tự chạy, VCI đứng xa"** |
| | 08:00 "Tổ tự báo ca sáng" — "VCI chỉ đứng nhìn, không bấm hộ" |
| | 08:00 (song song, ghi trong mô tả) "Đối chiếu số MES với sổ của xưởng" |
| | 13:30 "Sang phòng thiết kế" — "Bản vẽ, khối lượng đang chuyển sang sản xuất bằng gì" |
| | 14:30 "Đi xem camera, mạng" — "Chỗ nào sóng yếu, tổ nào thiếu thiết bị" |
| | 15:30 "Tổng kết, ký biên bản" — "Việc gì sửa, ai sửa, bao giờ xong" |
| | Kết quả cuối ngày: "Tổ tự báo được" · "Số MES khớp sổ, hoặc lệch có lý do" · "Biên bản 2 bên ký" |

### Slide 8 — Chuẩn bị
| | |
|---|---|
| Hiện tại | 2 cột × 4 gạch đầu dòng, mỗi dòng 20–30 chữ |
| Vấn đề | Đây là slide khó đọc nhất. Dài, nhiều mệnh đề, đọc như checklist nội bộ |
| 🔁 Đề xuất | Đổi thành **checklist có ô tick**, mỗi dòng ≤ 10 chữ, để anh tick trực tiếp trong buổi (reveal.js hỗ trợ click đổi trạng thái) |
| | VCI: ☐ Hệ thống sẵn, dữ liệu nền đã nhập · ☐ Mỗi người một tài khoản · ☐ Báo cáo trên điện thoại đã thử · ☐ Có điện thoại dự phòng |
| | Nhà máy: ☐ Đã chọn dự án, chọn tổ · ☐ Tổ trưởng có mặt 08:30 và 14:30, mang điện thoại · ☐ Kế hoạch có người làm trên máy, mang sổ sản lượng · ☐ Chiều mai có người tiếp thiết kế, IT |
| | Tiêu đề: **"Hai bên đã chuẩn bị gì — tick ngay tại đây"** |

### Slide 9 — Ghi nhận vấn đề & tiêu chí
| | |
|---|---|
| Hiện tại | 3 thẻ phân loại + khối tiêu chí 4 dòng, cùng 1 slide |
| Vấn đề | Mục F. Ngoài ra chữ "Chặn luồng", "Lỗi thường" là ngôn ngữ phần mềm |
| 🔁 Đề xuất | **Tách làm 2 slide.** |
| | Slide 9a **"Gặp vướng thì sao"**: câu dẫn "Các anh chị cứ làm, vướng gì nói ngay — VCI ghi, không phải viết gì." 3 thẻ đổi tên: **"Không làm tiếp được"** (sửa ngay tại chỗ, không được thì ưu tiên số 1) · **"Làm được nhưng chưa đúng"** (vào danh sách sửa, có hạn) · **"Xưởng làm khác hệ thống"** (không phải lỗi, không ép, bàn ở tổng kết) |
| | Slide 9b **"Khi nào gọi là đạt"**: 4 ô to, mỗi ô 1 câu: "Kế hoạch lên được, giao đúng tổ" · "100% tổ báo được, ngày 2 tự báo" · "Số MES khớp sổ, hoặc lệch có lý do" · "Không còn lỗi chặn chưa có cách xử lý" |

### Slide 10 — Đầu mối
| | |
|---|---|
| Hiện tại | Câu dẫn 2 dòng, 3 thẻ liên hệ, nút support |
| Vấn đề | Trong 2 ngày VCI ở ngay xưởng, slide liên hệ riêng hơi thừa. Thẻ Trang ghi "support.vcijsc.com" thay số điện thoại — người nhà máy sẽ gọi, không gửi ticket |
| 🔁 Đề xuất | Gộp vào slide cuối (xem dưới). Nếu giữ riêng: thẻ Trang điền **số điện thoại**, ô nhà máy để trống có dòng "điền tại buổi" |

### Slide 11 — Q&A
| | |
|---|---|
| Hiện tại | Chữ Q&A to, 2 câu kêu gọi, chân trang |
| Vấn đề | Mục E. Buổi này không phải để hỏi đáp chung chung, mà để chốt 3 việc rồi vào demo |
| 🔁 Đề xuất | Đổi thành **"Chốt 3 việc rồi vào demo — 08:30"**: 3 ô lớn có chỗ điền: **Dự án chạy thử: ______** · **Các tổ tham gia: ______** · **Giờ xuống tổ chiều nay: 14:30 ✓ / đổi: ____**. Dưới cùng 1 dòng liên hệ: "Vướng gì gọi Cương 033.5055.068 · Trang ____". Câu kết (chiếu nhỏ): "Chỗ chưa hợp hôm nay là việc chúng tôi phải sửa, không phải lỗi người dùng." |

---

## Việc cần anh quyết / cung cấp

1. **Chấp nhận cấu trúc 12 slide** ở trên, hay giữ 11 slide và chỉ sửa chữ?
2. **Số liệu để neo**: dự kiến bao nhiêu tổ, dự án chạy thử có bao nhiêu cấu kiện (nếu đã biết).
3. **Hiện nay tổ báo sản lượng bằng cách nào** (sổ / Zalo / Excel / bảng)? Có thì tôi điền slide "Hiện nay ↔ Trên MES", không thì để dạng câu hỏi.
4. **Số điện thoại chị Trang** để lên slide thay cho support.vcijsc.com.
5. **Checklist tick tại chỗ** (slide 8): làm tương tác click trên slide hay chỉ hiển thị tĩnh?

Chốt xong 5 mục này tôi dựng lại deck và cập nhật kịch bản nói theo.
