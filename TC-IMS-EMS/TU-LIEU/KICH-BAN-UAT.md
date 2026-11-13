# Kịch bản trình bày — Kế hoạch UAT Hệ thống Quản trị Kho TC.IMS

**Tổng thời lượng:** ~35–40 phút (trình bày 25 phút + Q&A 10–15 phút)
**Hình thức:** Online/Offline · Chia sẻ slide
**Vai trò:**
- **PM** — Bùi Xuân Cương · QLDA VCI (chủ trì, dẫn dắt)
- **BA** — Ms. Trang · Khối BA + Design VCI (giải thích nghiệp vụ, phạm vi)
- **TL** — Mrs. Khúc Vân Anh · TL. Hỗ trợ vận hành VCI (vai trò Test Lead, hướng dẫn quy trình test)

---

## 🎬 Slide 1 — Cover *(1 phút)*

**PM (Cương):**
> "Xin chào anh Mậu, anh Chiến, anh Cường và toàn bộ thành viên Phòng Chi Nhánh, Ban CĐS Trung Chính. Hôm nay phía VCI sẽ trình bày **Kế hoạch UAT Đợt 1** cho hệ thống quản trị kho TC.IMS, thời gian dự kiến **từ 11/05 đến 25/05/2026**.
>
> Tham gia buổi hôm nay, ngoài tôi còn có chị Trang phụ trách BA và chị Vân Anh phụ trách Test Lead. Chúng tôi sẽ thay phiên trình bày để cung cấp thông tin chi tiết nhất cho anh chị. Mong anh chị có thể cùng trao đổi và đặt câu hỏi bất cứ lúc nào."

---

## 📋 Slide 2 — Nội dung *(1 phút)*

**PM:**
> "Buổi hôm nay chúng ta sẽ đi qua 6 nội dung chính:
> 1. **Giới thiệu** — vì sao cần UAT, mục tiêu là gì
> 2. **Kế hoạch tổ chức** — quy trình tiếp nhận và xử lý lỗi
> 3. **Thành phần tham gia** — ai làm gì, mô hình trao đổi giữa hai bên
> 4. **Cách thức tổ chức** — timeline cụ thể và phân chia trách nhiệm VCI / TC
> 5. **Phạm vi UAT** — sơ đồ phân rã chức năng kiểm thử đợt này
> 6. **Đầu mối & kênh tiếp nhận** — kèm quy trình báo lỗi chuẩn
>
> Tôi sẽ mở đầu, sau đó chị Trang sẽ làm rõ phạm vi và nghiệp vụ, chị Vân Anh sẽ hướng dẫn cách thực hiện kiểm thử."

---

## 🎯 Slide 3 — 1. Giới thiệu · Mục tiêu UAT *(2 phút)*

**PM:**
> "Trước tiên về mục tiêu — UAT đợt này có 3 mục tiêu chính:
>
> **Một**, **đảm bảo hệ thống đáp ứng đúng yêu cầu nghiệp vụ** mà hai bên đã thống nhất trong giai đoạn phân tích. Đây là cơ hội cuối cùng để Phòng Chi Nhánh xác nhận TC.IMS vận hành đúng cách.
>
> **Hai**, **nâng cao chất lượng trước Go-live** — chúng ta cần phát hiện sớm các sai lệch để có thời gian vá lỗi, tránh phát sinh sự cố sau khi đưa vào vận hành thật.
>
> **Ba**, **ghi nhận và xử lý toàn bộ lỗi/sai lệch nghiệp vụ** — mọi vấn đề đều được log, phân loại, xử lý và xác nhận lại có hệ thống."

**BA (Trang) — bổ sung:**
> "Em xin bổ sung thêm — UAT khác với kiểm thử nội bộ ở chỗ **người dùng cuối** mới là người đánh giá. Hệ thống có thể chạy đúng kỹ thuật nhưng nghiệp vụ không phù hợp thực tế thì vẫn coi là chưa đạt. Vì vậy em rất mong các anh chị thao tác theo đúng workflow hằng ngày của mình, đừng ngại ghi nhận bất cứ điểm nào thấy *"không tự nhiên"* — đó chính là input quý nhất cho UAT."

---

## ⚙️ Slide 4 — 2. Kế hoạch tổ chức · Quy trình tiếp nhận & xử lý lỗi *(3 phút)*

**TL (Vân Anh):**
> "Quy trình tiếp nhận và xử lý lỗi gồm 6 bước, mỗi vấn đề phát sinh đều đi qua đầy đủ các bước này:
>
> **Bước 1** — Người dùng thực hiện test theo checklist VCI cung cấp, hoặc free-test theo trải nghiệm thực tế.
>
> **Bước 2** — Mark kết quả mỗi case là **Testing / Pass / Fail** trong file checklist, đồng thời ghi nhận vấn đề kèm screenshot làm bằng chứng.
>
> **Bước 3** — Em sẽ phối hợp với chị Trang để **kiểm tra và phân loại** issue: lỗi UI, lỗi logic, hay lỗi nghiệp vụ; mức độ Critical / Major / Minor.
>
> **Bước 4** — Sau phân loại, issue được **giao cho Dev** kèm độ ưu tiên rõ ràng.
>
> **Bước 5** — Khi Dev fix xong, em sẽ **báo lại người dùng để Re-Test** xác nhận đã đạt.
>
> **Bước 6** — Anh Cương ở vai trò PM sẽ **theo dõi mức độ ưu tiên và tiến độ** xuyên suốt 2 tuần UAT."

**BA:**
> "Em chỉ lưu ý thêm với các anh chị — khi log vấn đề, càng chi tiết về **bước thao tác** và **dữ liệu đầu vào** thì Dev sẽ tái hiện và sửa nhanh hơn rất nhiều. Nếu chỉ ghi *"không vào được"* hay *"sai số liệu"* thì chúng em phải mất thêm 1–2 vòng hỏi lại trước khi xử lý được."

**PM:**
> "Cảm ơn hai chị. Anh Mậu, anh Chiến — về quy trình này hai anh có câu hỏi gì không ạ? *(pause)* Tốt, chúng ta đi tiếp."

---

## 👥 Slide 5 — 3. Thành phần tham gia · Mô hình trao đổi liên lạc *(3 phút)*

**PM:**
> "Đây là sơ đồ tổng thể các bên tham gia. Chúng ta chia làm 2 khối:
>
> **Bên trái — Chi nhánh Trung Chính**, đảm nhiệm **kiểm thử và xác nhận**:
> - Anh Mậu, anh Chiến (PP. KSNB)
> - Anh Cường (P. Chi nhánh) — đầu mối liên hệ chính phía TC
> - Đội nhân viên Phòng Chi Nhánh thực hiện kiểm thử
>
> **Bên phải — Khối VCI HTKT**, đảm nhiệm **hỗ trợ kiểm thử và vá lỗi**:
> - Tôi (Cương) — QLDA, điều phối tổng thể
> - Chị Vân Anh — TL Hỗ trợ
> - Chị Trang — BA
> - Khối kỹ thuật (Dev + Test) và Khối BA + Design backstop phía sau
>
> Hai khối kết nối với nhau qua **đầu mối điều phối**: phía TC là anh Cường, phía VCI là tôi. Tất cả issue, request, thay đổi phạm vi đều đi qua hai đầu mối này để tránh thông tin phân mảnh.
>
> Ngoài ra, kênh chính thức ghi nhận vấn đề là **support.vcijsc.com** — mọi issue đều được tracked công khai trên hệ thống đó. Hai chị Trang, Vân Anh có thể bổ sung gì về cách phối hợp không?"

**TL:**
> "Em xác nhận — em sẽ là **người trực tiếp tương tác hằng ngày** với các anh trong Phòng Chi Nhánh: hướng dẫn test, giải đáp thắc mắc, theo dõi tiến độ. Bất cứ lúc nào anh chị cần em hỗ trợ thao tác, gọi hotline em là được."

**BA:**
> "Phần em phụ trách là **làm rõ nghiệp vụ** — nếu trong lúc test có chỗ nào nghi ngờ *"chức năng này có đúng yêu cầu mình từng đề xuất không?"* hay *"trường hợp X chưa có flow thì sao?"* — anh chị mention em vào ticket, em sẽ rà soát lại spec và phản hồi trong vòng 1 ngày làm việc."

---

## 📅 Slide 6 — 4. Cách thức tổ chức · Timeline & Trách nhiệm *(4 phút)*

**PM:**
> "Timeline của UAT đợt 1 gồm 3 mốc:
> - **11/05/2026** — Khởi động UAT
> - **25/05/2026** — Kết thúc giai đoạn kiểm thử của các anh chị
> - **10/06/2026** — Hoàn thành vá lỗi & tổng kết
>
> Như vậy chúng ta có **2 tuần kiểm thử** + **2 tuần vá lỗi**. Trách nhiệm phân chia rõ giữa 2 bên:
>
> **Phía VCI cam kết:**
> - Trình bày kết quả thực hiện và demo từng tính năng trước khi anh chị test
> - Cung cấp **file checklist kịch bản UAT** chi tiết
> - Hướng dẫn cách test, log bug và đặt priority đúng chuẩn
> - Xây dựng và duy trì kênh trao đổi liên lạc
> - Xác định rõ PIC mỗi bên
> - Tổng kết và đánh giá kết quả khi UAT kết thúc"

**TL — tiếp lời:**
> "**Phía Trung Chính** mong các anh chị hỗ trợ:
> - **Chuẩn bị nguồn lực** — sắp xếp thời gian cho đội kiểm thử trong 2 tuần
> - **Kiểm thử theo checklist** kịch bản UAT chúng em gửi
> - **Free test** thêm theo trải nghiệm thực tế của anh chị — phần này quan trọng vì checklist không thể bao hết mọi tình huống
> - **Log issues kèm evidence** (screenshot, bước tái hiện, dữ liệu mẫu)
> - **Re-test** lại các bug đã được fix để xác nhận đóng issue
>
> Trung bình mỗi ngày em ước tính các anh chị cần dành **2–3 giờ** cho UAT, cao điểm có thể lên đến nửa ngày. Mong các anh sắp xếp công việc thường nhật để đảm bảo tiến độ."

**BA:**
> "Em bổ sung 1 ý — sau khi kết thúc giai đoạn 25/05, **giai đoạn vá lỗi 25/05–10/06** không có nghĩa các anh chị nghỉ. Re-test các bug đã fix sẽ rơi vào giai đoạn này, nên anh chị vẫn cần dành khoảng **1–1.5h/ngày** để xác nhận. Sau ngày 10/06 chúng ta sẽ chính thức **đóng UAT đợt 1** và bước vào quyết định Go-live."

**PM:**
> "Anh Mậu/anh Chiến/anh Cường — về timeline và phân công như vậy có khả thi không ạ? Nếu nguồn lực phía TC có vấn đề, mình điều chỉnh sớm sẽ tốt hơn về sau."
> *(thảo luận)*

---

## 🗂️ Slide 7 — 5. Phạm vi UAT Lần 1 · Sơ đồ phân rã chức năng *(5 phút)*

**BA — vai trò chính ở slide này:**
> "Đây là sơ đồ **phạm vi kiểm thử UAT lần 1** chia thành 5 nhánh chính từ hệ thống IMS – EMS:
>
> **Nhánh 1 — QL Danh mục** (9 chức năng): Đơn vị tính, Nhóm vật tư, Vật tư thi công, Máy thiết bị, Loại giao dịch kho, Dự án, Kho, Thầu phụ, Ký kiểm kê. Đây là **dữ liệu nền** — phải test trước vì các nghiệp vụ sau dùng tới.
>
> **Nhánh 2 — Quản lý giao dịch** (2 chức năng): Nhập kho, Xuất kho. Hai nghiệp vụ cốt lõi nhất.
>
> **Nhánh 3 — Quản lý điều chuyển** (7 chức năng): Đơn đặt hàng, Đề nghị cấp vật tư, Lệnh điều động, Biên bản giao nhận, Lệnh tách gộp, Luân chuyển nội bộ, Hiện trạng bàn giao. Đây là nhóm có **luồng workflow phức tạp nhất**, cần test kỹ.
>
> **Nhánh 4 — Báo cáo** (5 báo cáo): Trạng thái tồn VTTC, Tổng hợp NXT dự án, Tổng hợp NXT công ty, Chi tiết NXT, Báo cáo kiểm kê. Test sau khi đã có dữ liệu giao dịch.
>
> **Nhánh 5 — Thanh lý / Kiểm kê** (2 chức năng): Quản lý thanh lý, Quản lý kiểm kê.
>
> Lưu ý phần đánh dấu **cam** — đó là chức năng thuộc **UAT Lần 2**, lần này chưa test nhưng em đưa lên sơ đồ để anh chị có cái nhìn tổng thể. Cụ thể: *Ký kiểm kê*, *Báo cáo kiểm kê*, và toàn bộ nhánh *Thanh lý / Kiểm kê*."

**TL — bổ sung về thứ tự test:**
> "Em đề xuất thứ tự kiểm thử như sau, dựa trên **độ phụ thuộc dữ liệu**:
>
> **Tuần 1 (11/05–17/05):** QL Danh mục → Quản lý giao dịch (Nhập kho, Xuất kho)
> **Tuần 2 (18/05–25/05):** Quản lý điều chuyển → Báo cáo
>
> Như vậy đảm bảo dữ liệu đầu vào cho từng module được chuẩn bị trước. File checklist em sẽ gửi anh chị **chậm nhất 09/05**, kèm hướng dẫn dữ liệu mẫu."

**PM:**
> "Anh Mậu/anh Chiến — phạm vi này có khớp với mong đợi của các anh không? Có chức năng nào các anh nghĩ cần đưa vào lần này nhưng đang ở UAT Lần 2 không?"
> *(thảo luận, ghi nhận điều chỉnh nếu có)*

---

## 📞 Slide 8 — 6. Đầu mối & Kênh tiếp nhận yêu cầu *(3 phút)*

**PM:**
> "Slide này tóm tắt **kênh chính thức** để báo lỗi và đầu mối liên hệ:
>
> **Quy trình 4 bước (đường ống):**
> 1. **End user** phát sinh vấn đề khi sử dụng
> 2. Truy cập **support.vcijsc.com** để ghi nhận lên hệ thống ticket
> 3. **Ban CĐS Trung Chính** tiếp nhận, phân loại, xử lý sơ bộ — nếu không xử lý được thì chuyển trạng thái *"Chờ VCI Xử lý"*
> 4. **VCI** tiếp nhận các issue đã được Ban CĐS review, xử lý và báo cáo định kỳ
>
> Lưu ý quan trọng — **VCI chỉ tiếp nhận issue đã được Ban CĐS review và chuyển sang**. Điều này tránh trùng lặp, đảm bảo các vấn đề thuộc thao tác/cấu hình được xử lý ngay tại Ban CĐS, còn VCI tập trung vào issue thực sự cần code fix.
>
> **2 đầu mối phía VCI** anh chị lưu lại:
> - **Khúc Vân Anh** — Vận hành hỗ trợ — *0376.513.402* — gọi cho các vấn đề kỹ thuật, hướng dẫn test
> - **Bùi Xuân Cương** — QLDA — *033.5055.068* — gọi cho các vấn đề về tiến độ, phạm vi, escalation"

**TL:**
> "Em xin nói thêm cách dùng support.vcijsc.com — anh chị sẽ được cấp tài khoản trước ngày 11/05. Em sẽ làm 1 video hướng dẫn 5 phút **cách tạo ticket đúng chuẩn** — ai chưa quen có thể xem lại bất cứ lúc nào. Mỗi ticket nên có:
> - Tiêu đề rõ ràng (chức năng + hành động)
> - Mô tả các bước tái hiện
> - Screenshot/video
> - Mức độ ưu tiên đề xuất
>
> Em cam kết mọi ticket đều **có phản hồi đầu tiên trong vòng 4 tiếng làm việc**."

---

## 🔄 Slide 9 — Quy trình báo lỗi (Swimlane chi tiết) *(3 phút)*

**TL — chủ trì slide này:**
> "Đây là **swimlane chi tiết** quy trình báo lỗi với 9 bước, chia ra 3 lane:
>
> **Lane 1 — Người dùng cuối** (Phòng Chi Nhánh):
> 1. Phát sinh vấn đề khi sử dụng
> 2. Gửi thông tin lỗi (mô tả + screenshot)
> *(... chuyển sang Ban CĐS xử lý ...)*
> 8. Tiếp nhận phản hồi từ Key user
> 9. Tiếp tục sử dụng — kết thúc
>
> **Lane 2 — Ban CĐS Trung Chính:**
> 3. Tiếp nhận & kiểm tra sơ bộ (thao tác — dữ liệu)
> 4. Tổng hợp list issues, chuyển sang VCI
> *(... chờ VCI xử lý ...)*
> 7. Tiếp nhận phản hồi từ VCI, kiểm tra lại trước khi gửi user
>
> **Lane 3 — VCI:**
> 5. Tiếp nhận, phân tích, đánh giá issue
> 6. **Xử lý và phản hồi lại Key user** — vá lỗi hoặc gửi hướng dẫn (nếu là vấn đề thao tác)
>
> Ý nghĩa của mô hình này — Ban CĐS đóng vai **bộ lọc trung gian**, đảm bảo VCI chỉ tập trung vào lỗi thực sự cần Dev xử lý. Đồng thời người dùng cuối có **single point of contact** là Ban CĐS, không phải nhớ nhiều đầu mối."

**BA:**
> "Bổ sung — bước 6 *(Xử lý và phản hồi)* có **hai output**:
> - Nếu là **bug** → Dev fix → triển khai bản vá → ghi note vào ticket → chuyển trạng thái *"Đã xử lý"*
> - Nếu là **vấn đề sử dụng/cấu hình** → em viết hướng dẫn ngắn → đính kèm vào ticket → người dùng đọc và làm theo
>
> Trong nhiều trường hợp, **không phải lỗi** mà là chưa biết cách dùng — em mong anh chị bình tĩnh đợi phản hồi trước khi kết luận hệ thống bị lỗi."

**PM:**
> "Quy trình này nhìn dài nhưng thực tế **mỗi vòng chỉ mất 1–2 ngày làm việc** với issue thông thường, 4–5 ngày với issue phức tạp. Anh chị thấy có cần điều chỉnh gì không ạ?"

---

## 🙏 Slide 10 — Cảm ơn & Q&A *(10–15 phút)*

**PM — kết:**
> "Trên đây là toàn bộ **Kế hoạch UAT Đợt 1** cho TC.IMS. Tóm tắt nhanh:
> - **Thời gian**: 11/05 – 25/05 (test) + 25/05 – 10/06 (vá lỗi)
> - **Phạm vi**: 5 nhánh chính, 25+ chức năng UAT Lần 1
> - **Kênh chính thức**: support.vcijsc.com
> - **Đầu mối**: chị Vân Anh (kỹ thuật), tôi (dự án)
>
> Mục tiêu cuối cùng vẫn là **Go-live an toàn** — vì vậy chúng tôi xem các anh chị Phòng Chi Nhánh là **đối tác** chứ không chỉ là tester. Mỗi feedback của các anh chị đều được ghi nhận và đối chiếu trước khi đưa ra quyết định cuối cùng.
>
> Trước khi kết thúc, mời anh chị đặt câu hỏi. Chị Trang, chị Vân Anh sẵn sàng hỗ trợ."

**Câu hỏi gợi ý chuẩn bị sẵn (PM/BA/TL phân chia trả lời):**

| # | Câu hỏi tiềm ẩn | Người chính trả lời |
|---|---|---|
| 1 | "Nếu phát hiện lỗi nghiêm trọng giữa kỳ UAT, có dừng test không?" | **PM** |
| 2 | "Dữ liệu test có dùng dữ liệu thật của TC không?" | **BA** |
| 3 | "Tài khoản test có giới hạn quyền không?" | **TL** |
| 4 | "Nếu sau 25/05 vẫn còn nhiều bug Major thì sao?" | **PM** (escalation) |
| 5 | "Có training cho user mới trước khi test không?" | **TL** |
| 6 | "Báo cáo tiến độ sẽ gửi cho ai và bao lâu một lần?" | **PM** (đề xuất hằng tuần thứ 6) |
| 7 | "Trường hợp 1 issue đã fix nhưng re-test lại fail thì sao?" | **TL** + **BA** |
| 8 | "Tài liệu hướng dẫn nghiệp vụ có bản tiếng Việt đầy đủ không?" | **BA** |

---

## 📌 Lưu ý điều phối cho PM

- **Kỹ thuật mở đầu**: Bắt đầu đúng giờ, giới thiệu đủ cast → tạo sự chuyên nghiệp.
- **Khi BA/TL nói**: PM nên **giữ im lặng tích cực**, không cắt ngang; chỉ chốt lại sau khi BA/TL kết thúc.
- **Khi khách hàng đặt câu hỏi**: PM **lặp lại câu hỏi** (cho cả phòng nghe rõ) → mời đúng người trả lời → chốt lại bằng câu khẳng định.
- **Khi gặp câu hỏi chưa có đáp án**: nói rõ *"Em ghi nhận và phản hồi anh trong vòng 1 ngày làm việc"* — tuyệt đối không trả lời mơ hồ.
- **Cuối buổi**: chốt **3 cam kết** rõ ràng:
  1. Gửi file checklist UAT trước **09/05**
  2. Cấp tài khoản support.vcijsc.com trước **10/05**
  3. Báo cáo tiến độ hằng tuần thứ 6

---

## 🕐 Bảng phân bổ thời lượng tham khảo

| Slide | Nội dung | Người dẫn chính | Thời lượng |
|-------|----------|-----------------|------------|
| 1 | Cover · Mở đầu | PM | 1' |
| 2 | Mục lục | PM | 1' |
| 3 | Mục tiêu UAT | PM + BA | 2' |
| 4 | Quy trình tiếp nhận lỗi | TL + BA | 3' |
| 5 | Thành phần & Mô hình | PM + TL + BA | 3' |
| 6 | Timeline & Trách nhiệm | PM + TL + BA | 4' |
| 7 | Phạm vi UAT (IMS-EMS) | BA + TL | 5' |
| 8 | Đầu mối & Kênh | PM + TL | 3' |
| 9 | Quy trình báo lỗi swimlane | TL + BA | 3' |
| 10 | Q&A | PM (điều phối) | 10–15' |
| **Tổng** | | | **~35–40'** |
