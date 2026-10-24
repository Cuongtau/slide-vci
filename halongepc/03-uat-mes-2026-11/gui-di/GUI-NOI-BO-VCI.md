# UAT MES Hạ Long EPC — Phân công & chuẩn bị nội bộ VCI

**Gửi:** Trang (BA) · Nhung, Phương (Tester) · Duy (Dev)  
**Từ:** Cương (PM)  
**UAT:** Thứ Hai 02/11 – Thứ Ba 03/11/2026 · 08:00–17:00 · tại nhà máy Hạ Long EPC  
**Đầu mối nhà máy:** Anh Thái — Tổng Giám đốc — 0985.961.138  

Mọi người đọc kỹ phần việc của mình và hạn chuẩn bị. Tài liệu đầy đủ (kịch bản theo công đoạn, phát sinh, bảng khảo sát) ở file *NHIEM-VU-THEO-VAI-TRO-UAT-MES.pdf* đính kèm.

## 1. Nguyên tắc 2 ngày

1. **Ở dưới tổ là chính.** Tổ không nhập được thì mọi báo cáo phía trên vô nghĩa.
2. **Làm xong là nhập luôn.** Tổ trưởng, đốc công tự nhập, không chờ cuối ca. Từ Ngày 2, **không bấm hộ**.
3. **Không ép nhà máy làm theo hệ thống.** Khác cách làm của xưởng thì ghi thành yêu cầu thay đổi, không tranh luận tại chỗ.
4. **Ghi ngay tại chỗ:** màn hình, bước, ai làm, tổ nào, ảnh chụp.
5. Nói với nhà máy bằng tiếng Việt: Quản lý dự án · Phân tích nghiệp vụ · Kiểm thử · Kỹ thuật. Không dùng PM, BA, QC, Dev.

## 2. Kịch bản chung

Chốt với nhà máy lúc **11:00 Ngày 1, sau demo**: 1 dự án, 2 cụm cấu kiện.

| Cụm | Công đoạn | Ngày chạy |
|---|---|---|
| **A** — mới vào chuyền | Cắt → gá → hàn | Cắt, gá chiều N1 · hàn sáng N2 |
| **B** — sắp xong | Tổ hợp → làm sạch → sơn → đóng gói | Tổ hợp, làm sạch chiều N1 · sơn, đóng gói sáng N2 |

## 3. Chuẩn bị trước Ngày 1

| Việc | Ai | Hạn |
|---|---|---|
| Nhận từ nhà máy: dự án, 2 cụm dự kiến, danh mục cấu kiện, công đoạn, tổ, thợ, kế hoạch hiện tại | Cương | 29/10 |
| Nhập danh mục và kế hoạch 2 cụm lên môi trường UAT, đủ 7 công đoạn, đúng tổ | Trang | 30/10 |
| Tài khoản: phòng sản xuất, lãnh đạo, **mỗi tổ trưởng / đốc công một tài khoản**; đăng nhập thử từng cái | Duy | 30/10 |
| Chạy trước toàn bộ luồng bằng tài khoản tổ trưởng **trên điện thoại**: nhận việc, báo sản lượng, ảnh, sửa, việc phát sinh, báo dở dang. Lỗi báo Duy sửa trước khi đi | Nhung, Phương | 30/10 |
| Thiết bị: 4 điện thoại cài sẵn, đăng nhập sẵn tài khoản tổ; 2 laptop; 4G dự phòng; sạc, ổ cắm | Duy | 31/10 |
| Kịch bản demo · mẫu ghi nhận vướng mắc · bảng đối chiếu theo công đoạn (in 10 bản) | Trang | 31/10 |
| Công cụ nhập bổ sung danh mục nhanh bằng Excel · cách deploy bản vá từ nhà máy, deploy thử 1 lần | Duy | 31/10 |
| Mẫu bảng khảo sát thiết kế – cắt và camera · xin trước 1 file cắt, 1 file báo cáo cắt mẫu, sơ đồ camera | Duy | 31/10 |
| Slide, kịch bản nói, mẫu biên bản tổng kết | Cương | 31/10 |

## 4. Việc của từng người trong 2 ngày

| Giờ | Cương (PM) | Trang (BA) | Nhung (Tester) | Phương (Tester) | Duy (Dev) |
|---|---|---|---|---|---|
| **N1 08:00** Giao ban | Trình bày cách làm, chưa chốt | Nghe cách xưởng giao việc, báo cáo | Dự | Dự | Dự |
| **N1 08:30** Demo | Quan sát, ghi câu hỏi | **Chủ trì demo** | Chiếu màn điện thoại | Hỗ trợ | Trực kỹ thuật |
| **N1 10:30** Nêu kịch bản | Bổ sung | **Nêu kịch bản theo công đoạn** | Nghe | Nghe | Nghe |
| **N1 11:00** Chốt | **Chốt cụm A/B, tổ trưởng, giờ xuống tổ** | Ghi lên bảng | Ghi tên tổ trưởng | Ghi tên tổ trưởng | — |
| **N1 13:30** Lập kế hoạch | Ngồi cùng phòng sản xuất | **Hướng dẫn phòng sản xuất tự lập, không nhập hộ** | Chuẩn bị xuống tổ | Kiểm tra việc rơi đúng tổ | Nhập bổ sung danh mục nếu thiếu |
| **N1 14:30** Xuống tổ | Điều phối | Đi tổ cùng Nhung | **Đi 4 tổ: tổ trưởng nhập ngay khi xong, ≥ 1 báo cáo/tổ** | Ở văn phòng xem báo cáo đổ về, đối chiếu sổ | Trực giữa xưởng, sửa lỗi chặn < 30 phút |
| **N1 16:30** Tổng hợp | **Chủ trì** | Phân loại vướng mắc 3 nhóm | Báo tổ nào chưa nhập được, vì sao | Bảng đối chiếu bản đầu | Nhận lỗi chặn, sửa tối |
| **N2 07:30** Họp đầu giờ | Dự 1–2 tổ | Đối chiếu việc giao với MES | Dự tổ, ghi việc giao | Cùng phòng sản xuất giao việc trên MES | Deploy bản vá |
| **N2 08:00** Tổ tự nhập | Điều phối | Truy nguyên nhân số lệch | **Đứng cạnh, không bấm hộ**, ghi tự làm được / cần nhắc | **Bảng đối chiếu MES ↔ sổ** từng công đoạn | Hỗ trợ xem log |
| **N2 13:30** Thiết kế – cắt | Đi cùng | Đi cùng, đối chiếu mã cấu kiện | Ở tổ, re-test | Ở tổ, re-test | **Chủ trì khảo sát** |
| **N2 14:30** Camera | Đi cùng, hỏi nhu cầu | Ở tổ | Ở tổ | Ở tổ | **Chủ trì khảo sát** |
| **N2 15:30** Tổng kết | **Biên bản 2 bên ký** | Danh sách lỗi, yêu cầu thay đổi | Kết quả re-test | Nộp bảng đối chiếu | Ước lượng thời gian sửa |

## 5. Duy — nội dung 2 buổi khảo sát

**Phòng thiết kế, công đoạn cắt (13:30 N2):** bản vẽ dạng gì · từ bản vẽ ra file cắt bằng phần mềm nào, định dạng gì · **file export báo cáo nhanh cắt** có cột gì, xuất tự động hay thủ công, **xin 2–3 file mẫu thật** · quy trình từ thiết kế cắt xuống phòng sản xuất đi qua ai, bằng kênh gì, mất bao lâu · mã cấu kiện có khớp danh mục MES không.

**Camera (14:30 N2):** số lượng, vị trí, model · camera nào nhìn công đoạn nào · đầu ghi lưu bao lâu, có lấy được luồng ra ngoài không · mạng LAN/Wi-Fi tại xưởng, vùng sóng yếu · nhà máy muốn dùng camera với MES để làm gì.

**Đầu ra:** sơ đồ quy trình + mẫu file + đề xuất MES nhận file báo cáo cắt; bảng hiện trạng camera + đề xuất kết nối. Gửi Cương trong 3 ngày làm việc.

## 6. Sau UAT

| Việc | Ai | Hạn |
|---|---|---|
| Gửi biên bản, danh sách việc cho nhà máy | Cương | +1 ngày làm việc |
| File vướng mắc hoàn chỉnh (màn hình, bước, tổ, ảnh, phân loại, trạng thái) | Nhung, Phương | +2 ngày làm việc |
| Danh sách lỗi có ưu tiên, hạn · danh sách yêu cầu thay đổi | Trang | +2 ngày làm việc |
| Báo cáo khảo sát thiết kế – cắt và camera, kèm đề xuất | Duy | +3 ngày làm việc |
| Sửa lỗi theo ưu tiên, chặn luồng trước | Duy | theo danh sách |
| Re-test toàn bộ trước khi báo nhà máy | Nhung, Phương | sau khi sửa |
