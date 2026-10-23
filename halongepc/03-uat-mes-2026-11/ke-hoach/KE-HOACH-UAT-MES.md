# KẾ HOẠCH UAT — HỆ THỐNG MES QUẢN LÝ SẢN XUẤT · HẠ LONG EPC

> UAT 2 ngày tại nhà máy, chạy trên **đúng cấu kiện đang sản xuất của một dự án thật**. Mục tiêu không phải "bấm thử cho đủ màn hình", mà là xác nhận **tổ trưởng / đốc công báo cáo được sản lượng hàng ngày trên hệ thống** và **phòng kế hoạch nhìn được tiến độ thật** từ số liệu đó.

## 1. Thông tin chung

| Mục | Nội dung |
|---|---|
| **Hệ thống** | MES — Quản lý sản xuất, Hạ Long EPC |
| **Hình thức** | UAT tại nhà máy, 2 ngày liên tiếp, đi theo ca sản xuất thực tế |
| **Thời gian** | Ngày 1 – Ngày 2: *(điền ngày cụ thể)* · 08:00 – 17:00 |
| **Địa điểm** | Nhà máy Hạ Long EPC: phòng họp (demo, tổng kết) + xưởng / các tổ sản xuất (chạy thử báo cáo) |
| **Dự án chạy thử** | 1 dự án đang sản xuất, chọn tại buổi thống nhất đầu Ngày 1 |
| **Tổ tham gia** | Các tổ đang sản xuất cấu kiện của dự án trên — chốt danh sách đầu Ngày 1 |
| **Môi trường** | *(điền địa chỉ UAT)* · tài khoản cấp theo vai trò trước Ngày 1 |

## 2. Mục tiêu UAT

1. **Luồng chính chạy thông trên dữ liệu thật**: kế hoạch sản xuất → giao việc xuống tổ → tổ báo cáo sản lượng → hệ thống tổng hợp tiến độ. Số trên hệ thống khớp số thực tế tại xưởng.
2. **Tổ trưởng / đốc công tự báo cáo được** sau khi được hướng dẫn, không cần VCI đứng cạnh. Đây là điều kiện sống còn của MES: nếu tổ không báo cáo được thì mọi báo cáo phía trên vô nghĩa.
3. **Ghi nhận cách làm thực tế của nhà máy** (cách tổ ghi sản lượng hiện nay, cách thiết kế chuyển dữ liệu sang sản xuất, hạ tầng camera) để chốt những gì hệ thống cần hoàn thiện trước khi vận hành thật.
4. **Chốt danh sách việc cần hoàn thiện** và kế hoạch hỗ trợ tiếp theo, có người chịu trách nhiệm và hạn.

## 3. Phạm vi

### 3.1 Trong phạm vi — kiểm thử trực tiếp

| Phân hệ | Nội dung kiểm thử | Người kiểm thử chính |
|---|---|---|
| **Kế hoạch sản xuất** | Lập kế hoạch cho cấu kiện của dự án chạy thử: danh mục cấu kiện, khối lượng, tiến độ, phân bổ xuống tổ | Phòng kế hoạch |
| **Giao việc** | Giao việc từ kế hoạch xuống từng tổ; tổ trưởng thấy đúng việc của tổ mình, đúng khối lượng, đúng hạn | Phòng kế hoạch · tổ trưởng |
| **Báo cáo sản xuất** | Tổ trưởng / đốc công báo cáo sản lượng theo ca / ngày; sửa, bổ sung báo cáo; báo cáo khi có việc phát sinh ngoài kế hoạch | Tổ trưởng · đốc công |
| **Tổng hợp tiến độ** | Sản lượng và tiến độ trên hệ thống đối chiếu với sổ / bảng theo dõi hiện tại của nhà máy; phát hiện lệch và truy được nguyên nhân | Phòng kế hoạch · QC |

### 3.2 Khảo sát — không kiểm thử, chỉ ghi nhận để hoàn thiện

| Nội dung | Mục đích |
|---|---|
| **Phòng thiết kế → sản xuất** | Nắm dữ liệu thiết kế hiện chuyển sang sản xuất bằng cách nào (bản vẽ, bảng khối lượng, file gì), để xác định đầu vào kế hoạch sản xuất lấy từ đâu |
| **Camera & hạ tầng** | Vị trí camera, mạng tại xưởng, thiết bị tổ trưởng dùng để báo cáo (điện thoại / máy tính / bảng), vùng sóng yếu |

### 3.3 Ngoài phạm vi đợt này

- Các phân hệ chưa demo trong Ngày 1.
- Tích hợp với hệ thống khác của Hạ Long EPC (nếu có).
- Nhập toàn bộ dự án đang sản xuất — chỉ chạy **một dự án** để tập trung.

## 4. Thành phần tham gia

| Bên | Vai trò | Trách nhiệm trong UAT |
|---|---|---|
| **Hạ Long EPC** | Đại diện nhà máy / đầu mối | Thống nhất kế hoạch, chọn dự án và tổ tham gia, quyết các vướng mắc nghiệp vụ |
| | Phòng kế hoạch | Lập kế hoạch và giao việc trên hệ thống cho dự án chạy thử |
| | Tổ trưởng / đốc công các tổ tham gia | Báo cáo sản lượng trên hệ thống theo ca thực tế |
| | Phòng thiết kế | Tiếp buổi khảo sát Ngày 2 |
| | Phụ trách hạ tầng / IT nhà máy | Tiếp buổi khảo sát camera, mạng |
| **VCI** | PM | Điều phối, tổng hợp kết quả, chốt việc tiếp theo |
| | BA (chủ trì) | Demo, hướng dẫn luồng, triển khai kế hoạch cùng phòng kế hoạch, hướng dẫn tổ |
| | 2 QC | Đi cùng tổ, hướng dẫn và chạy thử báo cáo, ghi nhận lỗi |
| | Dev | Hỗ trợ kỹ thuật tại chỗ, sửa nhanh lỗi chặn luồng nếu có thể |

## 5. Lịch 2 ngày

| Ngày | Thời gian | Nội dung | Phân công |
|---|---|---|---|
| **Ngày 1** | 08:00–08:30 | Thống nhất kế hoạch, dự án và các tổ sản xuất tham gia | PM, đại diện nhà máy |
| | 08:30–11:30 | Demo các phân hệ; hướng dẫn luồng kế hoạch → giao việc → báo cáo sản xuất | BA chủ trì; Dev, QC hỗ trợ |
| | 13:30–14:30 | Triển khai phần kế hoạch trên đúng cấu kiện đang sản xuất của một dự án | BA, phòng kế hoạch; Dev, QC hỗ trợ |
| | 14:30–16:30 | Xuống các tổ, nắm cách báo cáo của tổ trưởng / đốc công; hướng dẫn và chạy thử báo cáo | BA, 2 QC; PM điều phối, Dev hỗ trợ |
| | 16:30–17:00 | Tổng hợp kết quả và vướng mắc; chốt công việc ngày 2 | Toàn đội, đầu mối nhà máy |
| **Ngày 2** | 08:00–11:30 | Tiếp tục hỗ trợ các tổ báo cáo; đối chiếu sản lượng và tiến độ trên hệ thống | BA, 2 QC; Dev hỗ trợ, PM điều phối |
| | 13:30–14:30 | Khảo sát phòng thiết kế, luồng dữ liệu chuyển sang sản xuất | PM, BA; QC tiếp tục hỗ trợ tại tổ |
| | 14:30–15:30 | Khảo sát camera và hạ tầng liên quan tại nhà máy | PM, Dev; BA, QC tiếp tục hỗ trợ tại tổ |
| | 15:30–17:00 | Tổng kết hai ngày; thống nhất các nội dung cần hoàn thiện và kế hoạch hỗ trợ tiếp | Toàn đội, đại diện nhà máy |

**Kết quả cần có sau từng mốc**

| Mốc | Kết quả |
|---|---|
| Hết sáng Ngày 1 | Người dùng hiểu luồng; danh sách dự án + tổ tham gia đã chốt |
| 14:30 Ngày 1 | Kế hoạch của dự án chạy thử đã có trên hệ thống, đã giao việc xuống tổ |
| Hết Ngày 1 | Mỗi tổ tham gia có ít nhất 1 báo cáo sản lượng thật trên hệ thống; danh sách vướng mắc Ngày 1 |
| Trưa Ngày 2 | Tổ tự báo cáo ca sáng không cần hướng dẫn; bảng đối chiếu sản lượng hệ thống ↔ thực tế |
| Hết Ngày 2 | Biên bản tổng kết: kết quả, lỗi, nội dung cần hoàn thiện, kế hoạch hỗ trợ tiếp |

## 6. Chuẩn bị trước Ngày 1

**VCI**
- Môi trường UAT ổn định, dữ liệu nền (danh mục cấu kiện, tổ, nhân sự) đã nhập theo danh sách nhà máy gửi.
- Tài khoản theo vai trò: phòng kế hoạch, từng tổ trưởng / đốc công, quản lý nhà máy. Không dùng chung.
- Kịch bản demo đi theo đúng dự án chạy thử; mẫu ghi nhận lỗi; bảng đối chiếu sản lượng.
- Thiết bị dự phòng mang theo (điện thoại / máy tính bảng) phòng khi tổ không có thiết bị phù hợp.

**Hạ Long EPC**
- Chọn trước dự án và các tổ tham gia; gửi VCI danh mục cấu kiện và kế hoạch hiện tại của dự án đó.
- Bố trí tổ trưởng / đốc công có mặt đúng khung giờ; phòng kế hoạch cử người làm trực tiếp trên hệ thống.
- Sổ / bảng theo dõi sản lượng hiện tại để đối chiếu.
- Bố trí người tiếp khảo sát thiết kế và hạ tầng Ngày 2.

## 7. Cách ghi nhận và xử lý vấn đề

1. QC / BA ghi nhận ngay tại chỗ: màn hình, bước thao tác, người thao tác, tổ, ảnh chụp.
2. Phân loại cuối mỗi buổi:
   - **Chặn luồng** (không giao được việc, không báo cáo được, số sai): Dev sửa tại chỗ nếu được, chưa sửa được thì ưu tiên số 1 sau UAT.
   - **Lỗi thường**: đưa vào danh sách hoàn thiện, có hạn.
   - **Khác cách làm của nhà máy**: không phải lỗi, ghi thành yêu cầu thay đổi, nhà máy và VCI thống nhất ở buổi tổng kết.
3. Tất cả được tổng hợp vào biên bản tổng kết Ngày 2, mỗi mục có người phụ trách và hạn.

## 8. Tiêu chí UAT đạt

- Kế hoạch dự án chạy thử lập và giao việc được trên hệ thống, đúng cấu kiện, đúng tổ.
- **100% tổ tham gia** báo cáo được sản lượng trên hệ thống; sang Ngày 2 tổ trưởng tự báo cáo không cần hướng dẫn.
- Sản lượng và tiến độ trên hệ thống **khớp** với sổ theo dõi của nhà máy, hoặc lệch có giải thích được nguyên nhân.
- Không còn lỗi chặn luồng chưa có phương án.
- Biên bản tổng kết được hai bên thống nhất.

## 9. Sản phẩm bàn giao sau UAT

| Sản phẩm | Người làm | Hạn |
|---|---|---|
| Biên bản tổng kết 2 ngày (kết quả, lỗi, yêu cầu thay đổi, kế hoạch hỗ trợ) | PM VCI, đầu mối nhà máy ký | Cuối Ngày 2 |
| Danh sách lỗi và nội dung cần hoàn thiện, có ưu tiên và hạn | BA, QC | +2 ngày làm việc |
| Ghi nhận khảo sát thiết kế → sản xuất và hạ tầng camera, kèm đề xuất | PM, BA, Dev | +3 ngày làm việc |
| Kế hoạch hỗ trợ tiếp (hỗ trợ từ xa / tại chỗ, tần suất, đầu mối) | PM | Cuối Ngày 2 |

## 10. Rủi ro và cách xử lý

| Rủi ro | Xử lý |
|---|---|
| Tổ trưởng bận sản xuất, không dành được thời gian | Chốt khung giờ từng tổ ngay đầu Ngày 1; QC đi theo ca, hướng dẫn ngay tại vị trí làm việc, mỗi lần 10–15 phút |
| Dữ liệu nền chưa đủ (cấu kiện, tổ) nên không lập được kế hoạch | Nhà máy gửi danh mục trước Ngày 1; Dev nhập bổ sung tại chỗ trong buổi sáng |
| Mạng / thiết bị tại xưởng không dùng được | VCI mang thiết bị dự phòng; ghi nhận vùng sóng yếu vào khảo sát hạ tầng |
| Số trên hệ thống lệch số thực tế | Đối chiếu ngay trưa Ngày 2 để truy nguyên nhân (nhập sai, định nghĩa sản lượng khác nhau, thiếu báo cáo), không để dồn đến cuối |
| Nhà máy có cách ghi nhận khác với luồng hệ thống | Ghi thành yêu cầu thay đổi, không ép làm theo hệ thống ngay trong UAT |

## 11. Đầu mối

| Bên | Người | Vai trò | Liên hệ |
|---|---|---|---|
| VCI | Bùi Xuân Cương | PM — đầu mối chính | 033.5055.068 |
| VCI | *(điền)* | BA chủ trì | |
| Hạ Long EPC | *(điền)* | Đầu mối nhà máy | |

---

**Cần anh xác nhận trước khi gửi nhà máy**
1. Ngày cụ thể của Ngày 1 – Ngày 2 và địa chỉ môi trường UAT.
2. Tên các phân hệ MES đúng theo hệ thống (tôi đang gọi theo luồng: Kế hoạch sản xuất · Giao việc · Báo cáo sản xuất · Tổng hợp tiến độ).
3. Tên BA chủ trì và đầu mối phía nhà máy.
4. Tổ trưởng báo cáo bằng thiết bị gì (điện thoại cá nhân / máy tính bảng của tổ / máy tính tại xưởng) để chuẩn bị đúng.
