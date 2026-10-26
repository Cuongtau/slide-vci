# KỊCH BẢN UAT MES THEO CÔNG ĐOẠN — PHÂN VAI & CHUẨN BỊ

> 02–03/11/2026 · Nhà máy Hạ Long EPC · Phân hệ Quản lý sản xuất
> Đội VCI: PM Cương · BA Trang · Tester Nhung, Phương · Dev Duy
> Đầu mối nhà máy: **A. Thái, Tổng Giám đốc — 0985.961.138** · Đầu mối VCI: **Cương — 033.5055.068**

**Một câu tóm tắt kịch bản:** chọn **1 cụm cấu kiện đang làm dở** của 1 dự án, đưa kế hoạch lên MES, giao việc xuống đúng tổ theo từng công đoạn, **tổ làm xong công đoạn nào thì tổ trưởng / đốc công nhập báo cáo ngay công đoạn đó** trên điện thoại. Lãnh đạo và phòng sản xuất nhìn tiến độ trên MES, đối chiếu với sổ.

---

## 1. Phân vai

| Vai trò | Người | Chủ trì việc gì | Ở đâu | Hỗ trợ ai | Không làm gì |
|---|---|---|---|---|---|
| **PM** | Cương (VCI) | Điều phối chung · chốt dự án, tổ, cụm cấu kiện · tổng kết · cùng BA hỗ trợ lập kế hoạch | Văn phòng sáng, xưởng chiều | Phòng sản xuất, A. Thái | Không hướng dẫn thao tác tại tổ |
| **BA** | Trang (VCI) | Demo · **hướng dẫn phòng sản xuất lập kế hoạch, giao việc** · phân loại vướng mắc · thu thập yêu cầu thay đổi | Văn phòng (phòng sản xuất) | Phòng sản xuất | Không nhập hộ |
| **Tester 1** | Nhung (VCI) | **Ở dưới xưởng suốt 2 ngày** · hỗ trợ tổ trưởng / đốc công nhập báo cáo ngay khi làm xong · ghi vướng mắc tại tổ | Xưởng, đi theo công đoạn | Tổ trưởng, đốc công | Không bấm hộ từ Thứ Ba 03/11 |
| **Tester 2** | Phương (VCI) | Ở văn phòng cùng BA · kiểm tra việc giao có rơi đúng tổ · **đối chiếu số MES ↔ sổ** · re-test lỗi đã sửa | Văn phòng, xuống xưởng khi cần | Phòng sản xuất, BA | |
| **Dev** | Duy (VCI) | Môi trường, tài khoản · nhập bổ sung danh mục · sửa nhanh lỗi chặn · **chủ trì khảo sát phòng thiết kế (công đoạn cắt, file export báo cáo cắt)** và **camera**, mạng, thiết bị | Trực giữa xưởng | Nhung, phòng sản xuất | Không hướng dẫn người dùng |
| **Đại diện nhà máy** | A. Thái — Tổng Giám đốc (HL.EPC) | Chọn dự án, cụm cấu kiện, tổ · quyết vướng mắc nghiệp vụ · dự tổng kết | Giao ban, tổng kết | | |
| **Phòng sản xuất** (khối văn phòng) | 1–2 người (HL.EPC) | **Tự tay lập kế hoạch, giao việc trên MES** · xem tiến độ, đối chiếu | Văn phòng | | |
| **Tổ trưởng / Đốc công** | Mỗi công đoạn 1 người (HL.EPC) | **Tự nhập báo cáo sản lượng** công đoạn của tổ mình ngay khi làm xong · chụp ảnh | Tại tổ | | |
| **Phòng thiết kế · IT** | (HL.EPC) | Tiếp khảo sát chiều Thứ Ba 03/11 | Văn phòng | | |

---

## 2. Kịch bản chung theo công đoạn

Chọn **2 cụm cấu kiện** của cùng 1 dự án để trong 2 ngày đi được hết dây chuyền:

| Cụm | Đang ở công đoạn | Mục đích |
|---|---|---|
| **Cụm A** — cấu kiện mới vào | Cắt → gá → hàn | Test đầu chuyền: kế hoạch, giao việc, báo cáo các công đoạn gia công |
| **Cụm B** — cấu kiện sắp xong | Tổ hợp / làm sạch → sơn → đóng gói | Test cuối chuyền: chuyển tiếp công đoạn, hoàn thành cụm |

> Nhà máy chốt cụm cụ thể lúc 11:10 Thứ Hai 02/11, sau demo. Tên công đoạn và thứ tự dưới đây dùng theo danh mục của nhà máy, nếu khác thì sửa tên, giữ cách chia.

### Bảng công đoạn — ai làm, ai nhập, ai hỗ trợ

| # | Công đoạn | Tổ thực hiện | Việc trên MES | Ai nhập | VCI hỗ trợ | Cụm | Ngày làm |
|---|---|---|---|---|---|---|---|
| 1 | **Cắt** | Tổ cắt | Nhận việc → báo số lượng / khối lượng cắt xong, ảnh | Tổ trưởng tổ cắt | Nhung | A | Thứ Hai 02/11 chiều |
| 2 | **Gá** | Tổ gá | Nhận việc → báo số cấu kiện gá xong | Tổ trưởng tổ gá | Nhung | A | Thứ Hai 02/11 chiều → Thứ Ba 03/11 sáng |
| 3 | **Hàn** | Tổ hàn | Nhận việc → báo mét hàn / cấu kiện hàn xong, ảnh | Đốc công hàn | Nhung | A | Thứ Ba 03/11 sáng |
| 4 | **Tổ hợp** | Tổ tổ hợp | Nhận việc → báo cấu kiện tổ hợp xong | Tổ trưởng | Nhung | B | Thứ Hai 02/11 chiều |
| 5 | **Làm sạch** (phun bi) | Tổ làm sạch | Báo diện tích / cấu kiện làm sạch xong | Tổ trưởng | Nhung | B | Thứ Hai 02/11 chiều → Thứ Ba 03/11 sáng |
| 6 | **Sơn** | Tổ sơn | Báo lớp sơn, cấu kiện sơn xong, ảnh | Tổ trưởng tổ sơn | Nhung | B | Thứ Ba 03/11 sáng |
| 7 | **Đóng gói / xuất xưởng** | Tổ đóng gói | Báo cấu kiện đóng gói xong, hoàn thành cụm | Tổ trưởng | Phương | B | Thứ Ba 03/11 sáng |

### Luồng trên MES cho mỗi công đoạn

| Bước | Ai | Thiết bị | Khi nào |
|---|---|---|---|
| Kế hoạch cụm A, B có đủ công đoạn, khối lượng, tổ | Phòng sản xuất (BA, PM ngồi cạnh) | Máy tính | Thứ Hai 02/11 13:30 |
| Giao việc công đoạn hôm nay xuống tổ | Phòng sản xuất | Máy tính | Thứ Hai 02/11 14:00 · Thứ Ba 03/11 08:00 |
| Tổ trưởng thấy việc, làm xong **nhập ngay** sản lượng + ảnh | Tổ trưởng / đốc công | Điện thoại | Ngay sau khi xong, không chờ cuối ca |
| Chuyển tiếp công đoạn sau | Tự động / phòng sản xuất xác nhận | Máy tính | Khi công đoạn trước báo xong |
| Xem tiến độ cụm, đối chiếu sổ | Phòng sản xuất, lãnh đạo, Phương | Máy tính | Cuối mỗi buổi |

---

## 3. Công việc cụ thể từng ngày

### Thứ Hai 02/11 — Thứ Hai 02/11

| Giờ | Việc | Công đoạn chạm tới | Chủ trì | Cùng làm | Kết quả phải có |
|---|---|---|---|---|---|
| 09:00–09:30 | Khai mạc. Trình bày mục tiêu, cách làm 2 ngày. **Chưa chốt gì** | — | PM | A. Thái, phòng sản xuất | Nhà máy hiểu 2 ngày làm gì |
| 09:30–10:50 | Demo và hướng dẫn sử dụng 4 bước trên một cụm mẫu: lập kế hoạch → giao việc tổ cắt → tổ cắt báo trên điện thoại → xem tiến độ | Cắt (demo) | BA | Nhung chiếu điện thoại, Duy trực | Phòng sản xuất và tổ trưởng hiểu luồng |
| 10:50–11:10 | **Nêu kịch bản theo công đoạn** (mục 2): cụm A, cụm B, ai nhập, nhập lúc nào, phát sinh xử lý thế nào | Cả 7 | BA | PM | Nhà máy hình dung được từng tổ phải làm gì |
| 11:10–11:30 | **Chốt sau demo:** dự án, cụm A / B cụ thể, tổ trưởng / đốc công từng công đoạn, khung giờ xuống tổ chiều nay | — | PM | A. Thái, phòng sản xuất | Tên cụm, tên tổ trưởng từng công đoạn ghi lên bảng |
| 13:30–14:30 | **Phòng sản xuất tự lập kế hoạch cụm A, cụm B** vừa chốt trên MES: công đoạn, khối lượng, tổ, lịch. Giao việc các công đoạn làm chiều nay | Cắt, gá, tổ hợp, làm sạch | BA + PM hỗ trợ | Phương kiểm tra việc rơi đúng tổ, Duy nhập bổ sung danh mục | Kế hoạch 2 cụm đã ban hành, việc đã xuống 4 tổ |
| 14:30–16:30 | **Xuống tổ.** Tổ cắt, gá (cụm A) và tổ hợp, làm sạch (cụm B) làm xong phần nào **nhập ngay** phần đó. Nhung đi lần lượt 4 tổ, 15–20 phút/tổ | Cắt, gá, tổ hợp, làm sạch | Nhung | Tổ trưởng 4 tổ, BA đi cùng, PM điều phối, Duy trực | Mỗi tổ có ≥ 1 báo cáo thật kèm ảnh |
| 14:30–16:30 (song song) | Phương ở văn phòng cùng phòng sản xuất: xem báo cáo tổ đổ về, chuyển tiếp công đoạn, so với sổ | — | Phương | Phòng sản xuất | Bảng đối chiếu bản đầu |
| 16:30–17:00 | Tổng hợp: tổ nào báo được, tổ nào chưa, vì sao. Phân loại vướng mắc. Chốt việc sáng mai | — | PM | BA, Nhung, Phương, Duy, A. Thái | Danh sách vướng mắc Thứ Hai 02/11 · lỗi chặn giao Dev sửa tối |

**Phát sinh dự kiến Thứ Hai 02/11 và cách xử lý**

| Tình huống | Xử lý ngay | Ghi nhận |
|---|---|---|
| Danh mục thiếu cấu kiện / công đoạn / tổ | Dev nhập bổ sung tại chỗ | Thiếu gì, vì sao chưa có |
| Tổ chưa xong công đoạn trong chiều | Báo sản lượng **dở dang** (làm được bao nhiêu) | Hệ thống có cho báo dở dang không |
| Tổ trưởng không có điện thoại / không cài được | Dùng điện thoại VCI đã đăng nhập sẵn | Thiết bị tổ đang có |
| Việc ngoài kế hoạch (sửa hàn, bù vật tư, đổi cấu kiện) | Báo bằng chức năng **việc phát sinh** | Loại phát sinh nào hay gặp |
| Sóng yếu tại vị trí tổ | Ra chỗ có sóng nhập, hoặc nhập trên máy Dev | Vị trí sóng yếu cho khảo sát Thứ Ba 03/11 |
| Nhà máy ghi sản lượng theo đơn vị khác MES (tấn ↔ cấu kiện ↔ mét) | Không ép, ghi đơn vị tổ đang dùng | Yêu cầu thay đổi |

### Thứ Ba 03/11 — Thứ Ba 03/11

| Giờ | Việc | Công đoạn chạm tới | Chủ trì | Cùng làm | Kết quả phải có |
|---|---|---|---|---|---|
| 08:00–08:30 | Dự họp đầu giờ các tổ. Nghe tổ trưởng giao việc trong ngày; phòng sản xuất **giao việc hôm nay trên MES** khớp với lời giao | Hàn, gá (A) · sơn, đóng gói (B) | BA | Nhung tại tổ, Phương cùng phòng sản xuất, PM dự 1–2 tổ | Việc hôm nay đã có trên MES trước 08:30 |
| 08:30–11:30 | **Tổ tự nhập, VCI không bấm hộ.** Cụm A: gá xong → hàn. Cụm B: làm sạch xong → sơn → đóng gói. Làm xong công đoạn nào nhập ngay | Gá, hàn · làm sạch, sơn, đóng gói | Nhung (quan sát) | Tổ trưởng, đốc công; Duy hỗ trợ xem log | Cụm B hoàn thành trên MES; tổ tự làm không cần nhắc |
| 08:30–11:30 (song song) | Phương lập **bảng đối chiếu** số MES ↔ sổ tổ, từng công đoạn. Lệch thì hỏi ngay tổ trưởng | — | Phương | BA, phòng sản xuất | Bảng đối chiếu có nguyên nhân từng chỗ lệch |
| 13:30–14:30 | **Khảo sát phòng thiết kế — công đoạn cắt** (theo bảng dưới): file thiết kế → file cắt, **file export báo cáo nhanh cắt**, quy trình từ thiết kế cắt xuống phòng sản xuất | Cắt | Duy | PM, BA, phòng thiết kế | Mẫu file thiết kế, file cắt, file báo cáo cắt · sơ đồ quy trình · ai chuyển, bao lâu |
| 14:30–15:30 | **Khảo sát camera** (theo bảng dưới), mạng, thiết bị tại xưởng; đối chiếu vị trí sóng yếu ghi hôm qua | — | Duy | PM, IT nhà máy | Bảng khảo sát camera + sơ đồ tay + ảnh |
| 13:30–15:30 (song song) | Nhung, Phương ở tổ: re-test lỗi Duy đã sửa; tổ tiếp tục nhập ca chiều | Hàn, sơn | Nhung, Phương | Tổ trưởng | Kết quả re-test đạt / chưa |
| 15:30–17:00 | Tổng kết: kết quả theo từng công đoạn, lỗi, yêu cầu thay đổi, việc cần hoàn thiện có người và hạn, kế hoạch hỗ trợ tiếp | — | PM | A. Thái, phòng sản xuất, cả đội VCI | Hai bên thống nhất việc cần hoàn thiện |

**Nội dung Duy khảo sát phòng thiết kế — công đoạn cắt — 13:30 Thứ Ba 03/11**

| Mục | Cần ghi được | Hỏi ai |
|---|---|---|
| Đầu vào | Bản vẽ thiết kế ở dạng gì (DWG, Tekla, Excel), ai làm, lưu ở đâu | Phòng thiết kế |
| File cắt | Từ bản vẽ ra file cắt (nesting / CNC) bằng phần mềm nào, định dạng gì, có mã cấu kiện và chi tiết trong file không | Phòng thiết kế |
| **File export báo cáo nhanh cắt** | Phần mềm xuất được báo cáo gì sau khi cắt: cột nào (mã chi tiết, số lượng, khối lượng, tấm thép, phế liệu), định dạng (Excel, CSV, PDF), xuất tự động hay thủ công, bao lâu một lần. **Xin 2–3 file mẫu thật** | Phòng thiết kế, tổ cắt |
| Quy trình xuống sản xuất | Từ thiết kế cắt → phòng sản xuất → tổ cắt đi qua ai, bằng kênh gì (in giấy, Zalo, email, mạng nội bộ), mất bao lâu, sửa thiết kế thì báo lại thế nào | Phòng thiết kế, phòng sản xuất |
| Khớp với MES | Mã cấu kiện, mã chi tiết trong file cắt có trùng với danh mục trên MES không; đơn vị khối lượng | Duy đối chiếu với BA |
| Đầu ra | Sơ đồ quy trình thiết kế → cắt → sản xuất · mẫu file · **đề xuất MES nhận file báo cáo cắt để tự tạo sản lượng công đoạn cắt**, gửi trong 3 ngày làm việc | Duy viết, PM duyệt |

**Nội dung Duy khảo sát camera — 14:30 Thứ Ba 03/11**

| Mục | Cần ghi được | Hỏi ai |
|---|---|---|
| Hiện trạng | Số lượng camera, vị trí từng cái, hãng / model, độ phân giải, có hồng ngoại không | IT nhà máy |
| Góc nhìn | Camera nào nhìn được công đoạn nào (cắt, gá, hàn, tổ hợp, làm sạch, sơn, đóng gói); công đoạn nào chưa có camera | Đi thực tế, chụp ảnh từng góc |
| Kết nối | Đầu ghi (NVR) loại gì, lưu bao nhiêu ngày, có cấp được luồng RTSP / API ra ngoài không, mạng camera chung hay tách với mạng văn phòng | IT nhà máy |
| Hạ tầng | Mạng LAN / Wi-Fi tại xưởng, vùng sóng yếu (đối chiếu ghi nhận Thứ Hai 02/11), nguồn điện tại vị trí muốn đặt thêm camera | IT nhà máy, đi thực tế |
| Nhu cầu | Nhà máy muốn dùng camera để làm gì với MES: xác minh báo cáo, xem tiến độ từ xa, đếm tự động | A. Thái, phòng sản xuất |
| Đầu ra | Sơ đồ tay vị trí camera theo công đoạn · bảng hiện trạng · đề xuất bổ sung và cách kết nối MES, gửi trong 3 ngày làm việc | Duy viết, PM duyệt |

**Phát sinh dự kiến Thứ Ba 03/11**

| Tình huống | Xử lý ngay | Ghi nhận |
|---|---|---|
| Cụm B chưa tới được đóng gói trong buổi sáng | Dùng cấu kiện khác đã sơn xong để test công đoạn cuối | Thời gian thực tế mỗi công đoạn |
| Số MES lệch sổ | Truy tại chỗ: nhập sai, thiếu báo cáo, hay định nghĩa sản lượng khác | Nguyên nhân từng chỗ |
| Tổ trưởng vẫn cần nhắc mới nhập | Ghi tổ nào, bước nào vướng | Đề xuất hướng dẫn thêm hoặc sửa giao diện |

---

## 4. Chuẩn bị trước Thứ Hai 02/11

### VCI

| Việc | Ai | Hạn | Kiểm tra |
|---|---|---|---|
| Nhận từ nhà máy: dự án, 2 cụm cấu kiện dự kiến, danh mục cấu kiện, công đoạn, tổ, thợ, kế hoạch hiện tại | PM | 29/10 | Có file |
| Nhập danh mục và kế hoạch 2 cụm lên môi trường UAT | BA | 30/10 | Mở MES thấy đủ công đoạn 1–7, đúng tổ |
| Tài khoản: phòng sản xuất, lãnh đạo, **mỗi tổ trưởng / đốc công một tài khoản** | Duy | 30/10 | Đăng nhập thử từng tài khoản |
| Chạy trước toàn bộ luồng bằng tài khoản tổ trưởng trên điện thoại: nhận việc, báo sản lượng, ảnh, sửa, việc phát sinh, dở dang | Nhung, Phương | 30/10 | Danh sách lỗi đã sửa |
| Thiết bị: 4 điện thoại VCI cài sẵn, đăng nhập sẵn tài khoản tổ; 2 laptop; 4G dự phòng | Duy | 31/10 | Đóng thùng |
| Kịch bản demo trên cụm A · mẫu ghi nhận vướng mắc · bảng đối chiếu theo công đoạn | BA | 31/10 | In 10 bản |
| Công cụ nhập bổ sung danh mục nhanh (Excel) · cách deploy bản vá từ nhà máy | Duy | 31/10 | Deploy thử 1 lần |
| Mẫu bảng khảo sát thiết kế – cắt và camera (theo mục 3) · xin trước phòng thiết kế 1 file cắt và 1 file báo cáo cắt mẫu, xin IT sơ đồ camera | Duy | 31/10 | Có mẫu in, có sơ đồ hoặc câu trả lời chưa có |
| Slide, kịch bản nói, mẫu tổng hợp kết quả | PM | 31/10 | |

### Nhà máy Hạ Long EPC

| Việc | Ai | Hạn | Kiểm tra |
|---|---|---|---|
| Chọn dự án và **dự kiến 2 cụm cấu kiện** (1 mới vào chuyền, 1 sắp xong) để VCI nhập trước; cụm chính thức chốt lúc 11:10 Thứ Hai 02/11 sau demo | A. Thái, phòng sản xuất | 29/10 | VCI xác nhận đã nhận |
| Chốt **tổ trưởng / đốc công từng công đoạn** (cắt, gá, hàn, tổ hợp, làm sạch, sơn, đóng gói) có mặt 14:30 Thứ Hai 02/11 và cả sáng Thứ Ba 03/11, mang điện thoại | A. Thái | 30/10 | Danh sách tên + số điện thoại |
| Phòng sản xuất cử 1–2 người làm trực tiếp trên MES cả 2 ngày; mang sổ / bảng theo dõi sản lượng hiện tại | Phòng sản xuất | 30/10 | |
| Thêm VCI vào **nhóm Zalo báo cáo của các tổ**; báo giờ giao ban và họp đầu giờ | A. Thái | 30/10 | VCI đã vào nhóm |
| Bố trí chỗ ngồi có máy tính, mạng cho phòng sản xuất + VCI; chỗ chiếu demo sáng Thứ Hai 02/11 | IT nhà máy | 31/10 | |
| Bố trí người tiếp khảo sát thiết kế — người làm file cắt và báo cáo cắt (13:30 Thứ Ba 03/11), và IT cho camera, mạng (14:30 Thứ Ba 03/11) | A. Thái | 31/10 | |

---

## 5. Giả định cần nhà máy xác nhận

1. Tên và thứ tự 7 công đoạn ở mục 2 đúng với dây chuyền hiện tại chưa? Có công đoạn nào gộp hoặc tách không?
2. Mỗi công đoạn một tổ, hay một tổ làm nhiều công đoạn (ví dụ gá và hàn cùng tổ)?
3. Đơn vị sản lượng từng công đoạn tổ đang ghi là gì (cấu kiện, tấn, mét hàn, m²)?
4. Có cụm cấu kiện nào đang ở gần cuối chuyền để làm cụm B không? Không có thì chỉ chạy cụm A, công đoạn 6–7 test trên cấu kiện cũ.
