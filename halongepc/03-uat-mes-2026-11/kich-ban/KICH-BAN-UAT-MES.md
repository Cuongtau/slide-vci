# Kịch bản trình bày — Kế hoạch UAT MES Quản lý sản xuất · Nhà máy Hạ Long EPC

**Buổi:** Thống nhất kế hoạch, 08:00–08:30 Thứ Hai 02/11/2026, tại nhà máy  
**Tổng thời lượng:** ~26 phút (trình bày 21 phút + chốt, hỏi đáp 5 phút)  
**Slide:** `halongepc/uat-mes.html` (11 slide)  
**Người nói:**
- **PM** — Bùi Xuân Cương · QLDA VCI: dẫn dắt, mục đích, thành phần, chuẩn bị, tiêu chí, chốt
- **BA** — Cao Thị Trang · BA chủ trì VCI: phạm vi, lịch 2 ngày, cách ghi nhận vấn đề

**Mục tiêu buổi 30 phút:** ra khỏi phòng với 3 thứ đã chốt — *tên dự án chạy thử · danh sách tổ tham gia · khung giờ xuống tổ chiều Ngày 1*.

---

## 🎬 Slide 1 — Cover *(1 phút)*

**PM (Cương):**
> Chào anh/chị đại diện nhà máy, phòng sản xuất và các anh tổ trưởng, đốc công. Tôi là Cương, phụ trách dự án phía VCI. Cùng đi hôm nay có chị Trang là BA chủ trì, hai bạn kiểm thử Nhung và Phương, và bạn Duy kỹ thuật.
>
> Hai ngày hôm nay, thứ Hai và thứ Ba, chúng tôi ở lại nhà máy để chạy thử hệ thống MES, phân hệ Quản lý sản xuất, trên đúng cấu kiện các anh đang làm. Buổi này 30 phút, chỉ để **giới thiệu cách làm 2 ngày**. 08:30 vào demo, xem hệ thống chạy, nghe kịch bản theo công đoạn, rồi **11:00 mới chốt** cụm cấu kiện và tổ, để anh chị chọn sau khi đã thấy hệ thống làm gì.

📌 *Lưu ý:* Nói ngắn, không đọc slide. Nhìn vào tổ trưởng khi nói "chạy trên đúng cấu kiện các anh đang làm".

---

## 📋 Slide 2 — Mục lục *(1 phút)*

**PM (Cương):**
> Tôi đi qua 7 nội dung, mỗi nội dung một slide: mục đích, phạm vi, ai tham gia, lịch 2 ngày, cần chuẩn bị gì, cách ghi nhận vấn đề và tiêu chí đạt, cuối cùng là đầu mối liên hệ. Phần phạm vi và lịch chị Trang sẽ nói, vì chị là người trực tiếp làm với các anh chị.

---

## 🎯 Slide 3 — Phối hợp triển khai cùng nhà máy Hạ Long *(3 phút)*

**PM (Cương):**
> Hai ngày này không phải test trên dữ liệu mẫu. Mình chọn **một dự án, một cấu kiện hoặc một cụm công việc đang làm dở** ở xưởng và chạy thật trên đó. Làm được ba việc này là đạt.
>
> **Một, tổ trưởng báo được sản lượng.** Cuối ca, tổ trưởng cầm điện thoại bấm báo: hôm nay làm xong bao nhiêu. Không cần ghi sổ rồi chờ ai nhập lại. Đây là bước quan trọng nhất, vì tổ không báo được thì phía trên không có gì để nhìn. Nên hai ngày này chúng tôi ở dưới tổ là chính, không ngồi phòng họp.
>
> **Hai, lãnh đạo nhìn được tiến độ thật.** Tổ báo xong là trên màn hình thấy ngay, không phải chờ cuối ngày tổng hợp. Và số trên màn hình phải đúng là số ở xưởng. Lệch thì truy được vì sao lệch.
>
> **Ba, biết từng công đoạn đang ở đâu.** Công đoạn nào đang làm, trạng thái gì, khối lượng tới đâu, nhìn một chỗ là rõ. Không phải gọi điện hỏi từng tổ.

📌 *Lưu ý:* Ý 1 là ý cần nhấn. Nhìn về phía tổ trưởng khi nói "tổ không báo được thì phía trên không có gì để nhìn". Chỗ hệ thống làm khác cách xưởng đang làm sẽ nói ở slide Gặp vướng thì sao, không nói ở đây.

---

## 🗂️ Slide 4 — Phạm vi UAT — Phân hệ Quản lý sản xuất *(3 phút)*

**BA (Trang):**
> Đợt này chỉ một phân hệ Quản lý sản xuất, hai chức năng, cộng hai nội dung khảo sát.
>
> **Lập kế hoạch sản xuất**: phòng sản xuất lập kế hoạch cho cấu kiện của dự án mình chọn hôm nay, có danh mục cấu kiện, khối lượng, tiến độ, rồi phân bổ xuống tổ. Phần này làm trên máy tính, chiều nay 13:30 em làm cùng phòng sản xuất.
>
> **Giao việc, báo cáo sản lượng**: từ kế hoạch giao xuống từng tổ, tổ trưởng mở điện thoại hoặc máy tính thấy đúng việc của tổ mình, cuối ca báo sản lượng. Sửa được, bổ sung được, có việc phát sinh ngoài kế hoạch cũng báo được. Sang ngày 2 mình lấy số trên hệ thống đối chiếu với sổ theo dõi hiện tại của nhà máy.
>
> Cột màu cam là **khảo sát, không kiểm thử**: chiều ngày 2 em và anh Cương sang phòng thiết kế xem dữ liệu thiết kế đang chuyển sang sản xuất bằng gì, và xem camera, mạng, thiết bị ở xưởng. Hai cái này để biết cần hoàn thiện gì, chưa test.
>
> Ngoài phạm vi: các phân hệ khác và tích hợp với hệ thống ngoài. Và mình chỉ chạy **một dự án** để tập trung, không nhập hết.

📌 *Lưu ý:* Nếu nhà máy hỏi "sao không chạy hết dự án": trả lời là một dự án đủ để biết luồng có chạy được không, nhập hết sẽ mất thời gian nhập liệu thay vì thời gian test.

---

## 👥 Slide 5 — Thành phần tham gia *(2 phút)*

**PM (Cương):**
> Phía nhà máy cần 4 nhóm người: anh Thái, Tổng Giám đốc, là đại diện nhà máy và đầu mối, quyết các vướng mắc nghiệp vụ tại chỗ; phòng sản xuất cử người làm trực tiếp trên hệ thống; các anh tổ trưởng, đốc công của những tổ mình chọn; và chiều mai có người bên thiết kế và IT nhà máy tiếp khảo sát.
>
> Phía VCI: tôi điều phối và tổng hợp; chị Trang chủ trì demo, hướng dẫn phòng sản xuất lập kế hoạch; Nhung ở dưới xưởng hỗ trợ tổ nhập báo cáo; Phương ở văn phòng đối chiếu số; Duy kỹ thuật, lỗi nào sửa nhanh được thì sửa tại chỗ, và chủ trì khảo sát thiết kế, camera chiều mai. Cả đội có mặt đủ 2 ngày, vướng gì gọi trực tiếp.

---

## 🗓️ Slide 6 — Ngày 1 · Thứ Hai 02/11 *(3 phút)*

**BA (Trang):**
> Hôm nay. **08:30 đến 10:30** em demo, đi hết luồng kế hoạch, giao việc, tổ báo sản lượng, xem tiến độ. **10:30** em nêu kịch bản theo công đoạn: cụm A đi cắt, gá, hàn; cụm B đi tổ hợp, sơn, nghiệm thu; ai nhập, nhập lúc nào. **11:00** anh Cương cùng anh Thái và phòng sản xuất chốt: dự án nào, cụm nào, tổ trưởng công đoạn nào, chiều xuống tổ lúc mấy giờ. Chốt sau demo để anh chị chọn cụm khi đã hiểu hệ thống làm gì. Mời phòng sản xuất và các anh tổ trưởng dự cả buổi sáng, vì chiều là làm thật.
>
> **13:30 đến 14:30** em ngồi với phòng sản xuất đưa kế hoạch của dự án mình chọn lên hệ thống, đúng cấu kiện đang làm, và giao việc xuống tổ.
>
> **14:30 đến 16:30** cả đội xuống tổ. Trước hết là xem các anh đang ghi sản lượng thế nào, rồi hướng dẫn báo cáo trên hệ thống và chạy thử ngay với số thật của ca hôm nay. Mỗi tổ em và QC ở 10 đến 15 phút, không làm gián đoạn sản xuất.
>
> **16:30** họp ngắn 30 phút: tổng hợp vướng mắc, chốt việc ngày mai.
>
> Xuyên suốt hai ngày, ngoài lịch trên, chúng tôi làm 4 việc song song: hỗ trợ tổ báo cáo ngay tại chỗ, hướng dẫn phòng sản xuất lập kế hoạch, ghi nhận mọi yêu cầu và vướng mắc của nhà máy, và xin được **tham gia các nhóm Zalo báo cáo, trao đổi của các tổ** để thấy cách các anh đang làm thật.
>
> Kết quả cần có cuối ngày hôm nay: kế hoạch đã có trên hệ thống, đã giao việc, và **mỗi tổ tham gia có ít nhất một báo cáo sản lượng thật**.

📌 *Lưu ý:* Khung 14:30–16:30 có trùng giờ giao ca hay nghỉ của tổ không — hỏi và chốt lúc 11:00 cùng cụm và tổ.

---

## 🗓️ Slide 7 — Ngày 2 · Thứ Ba 03/11 *(2 phút)*

**BA (Trang):**
> Sáng mai **07:30** em và QC xin dự họp đầu giờ của từng tổ: nghe tổ trưởng giao việc trong ngày, rồi đối chiếu xem việc đó đã có trên MES chưa. **08:00 đến 11:30** các tổ tự báo cáo ca, QC đi kèm nhưng để tổ trưởng tự làm. Song song, em lấy số trên hệ thống đối chiếu với sổ theo dõi của nhà máy; lệch chỗ nào truy ngay tại chỗ.
>
> Chiều: **13:30** bạn Duy chủ trì khảo sát phòng thiết kế, tập trung công đoạn cắt: file thiết kế chuyển thành file cắt thế nào, phần mềm xuất được **báo cáo nhanh cắt** dạng gì, và quy trình từ thiết kế cắt xuống phòng sản xuất đi qua ai, mất bao lâu. Mục tiêu là sau này MES lấy được số cắt từ file đó, không phải nhập tay. **14:30** Duy tiếp tục khảo sát camera: camera nào nhìn công đoạn nào, đầu ghi có lấy hình ra ngoài không, mạng ở xưởng ra sao. Nhờ phòng thiết kế và IT nhà máy đi cùng. Nhung, Phương vẫn ở tổ.
>
> **15:30 đến 17:00** tổng kết hai ngày, có đại diện nhà máy. Ra biên bản: kết quả, lỗi, nội dung cần hoàn thiện, và kế hoạch VCI hỗ trợ tiếp sau khi rời nhà máy.

**PM (Cương):**
> Tôi bổ sung một ý: kết quả quan trọng nhất của ngày mai là **tổ trưởng tự báo cáo được ca sáng mà không cần hướng dẫn**. Đó là bằng chứng hệ thống dùng được ở xưởng.

---

## ✅ Slide 8 — Chuẩn bị trước Ngày 1 *(2 phút)*

**PM (Cương):**
> Slide này để đối chiếu nhanh ba thứ phải có trước ngày mai: dữ liệu kế hoạch, tài khoản, thiết bị.
>
> Phía VCI: dữ liệu kế hoạch của dự án chạy thử đã nhập, gồm danh mục cấu kiện, công đoạn, tổ và kế hoạch hiện tại. Tài khoản cấp theo từng vai trò, mỗi tổ trưởng một tài khoản riêng. Thiết bị thì điện thoại, máy tính đã cài sẵn, dùng máy của VCI hay máy của nhà máy đều được.
>
> Phía nhà máy, xin anh/chị xác nhận luôn tại đây: dự án và các tổ tham gia; phòng sản xuất khối văn phòng có người làm trực tiếp và mang sổ theo dõi sản lượng; tổ trưởng có mặt đúng khung 14:30, mang điện thoại, chưa có thì dùng máy VCI; và xin anh/chị **thêm chúng tôi vào nhóm Zalo báo cáo của các tổ**, báo lịch giao ban, họp đầu giờ để chúng tôi cùng dự.

📌 *Lưu ý:* Chỉ đối chiếu chuẩn bị, chưa chốt dự án và tổ ở đây — việc đó làm lúc 11:00 sau demo.

---

## ⚠️ Slide 9 — Ghi nhận vấn đề & tiêu chí đạt *(3 phút)*

**BA (Trang):**
> Khi test, các anh chị cứ làm, vướng gì nói ngay, QC ghi tại chỗ: màn hình nào, bước nào, ai làm, tổ nào, chụp ảnh. Các anh chị không phải viết gì cả.
>
> Cuối mỗi buổi em phân làm 3 loại. **Chặn luồng**: không giao được việc, không báo cáo được, số sai. Dev sửa ngay tại chỗ nếu được, không được thì là ưu tiên số 1 sau UAT. **Lỗi thường**: vào danh sách hoàn thiện, có người làm, có hạn. **Khác cách làm của nhà máy**: đây không phải lỗi. Hệ thống làm một kiểu, nhà máy quen làm kiểu khác, em ghi thành yêu cầu thay đổi, không ép các anh chị làm theo hệ thống trong 2 ngày này, mình bàn ở buổi tổng kết.

**PM (Cương):**
> Tiêu chí đạt có 4 ý, tôi đọc nhanh: kế hoạch lập và giao việc được, đúng cấu kiện, đúng tổ. 100% tổ tham gia báo cáo được, ngày 2 tự báo cáo. Số trên hệ thống khớp sổ nhà máy, hoặc lệch mà giải thích được. Không còn lỗi chặn luồng chưa có phương án, và biên bản tổng kết hai bên cùng ký.

📌 *Lưu ý:* Nhấn ý "khác cách làm không phải lỗi" để tổ trưởng yên tâm nói thật.

---

## 📞 Slide 10 — Đầu mối liên hệ *(1 phút)*

**PM (Cương):**
> Hai ngày này không cần gửi ticket, vướng ở đâu gọi tôi hoặc chị Trang, nhắn nhóm Zalo, hoặc nói với QC đang ở tổ. Phía nhà máy, đầu mối tiếp nhận là **anh Thái, Tổng Giám đốc, 0985 961 138** — mọi vướng mắc nghiệp vụ, bố trí người, bố trí tổ, chúng tôi làm việc qua anh Thái.
>
> Sau UAT, hỗ trợ từ xa hay quay lại tại chỗ, tần suất thế nào, mình chốt ở buổi tổng kết chiều mai.

---

## ❓ Slide 11 — Q&A · Chốt và bắt đầu *(5 phút)*

**PM (Cương):**
> Anh/chị có câu hỏi gì về cách làm 2 ngày không ạ? Ba việc **tên dự án và cụm cấu kiện**, **tổ trưởng từng công đoạn**, **khung giờ xuống tổ chiều nay** mình để 11:00 chốt, sau khi anh chị đã xem demo và nghe kịch bản.
>
> Cảm ơn anh chị. 08:30 chị Trang bắt đầu demo. Hai ngày này chúng tôi mong nhất một điều: các anh tổ trưởng, phòng sản xuất **làm thật trên hệ thống và nói thẳng chỗ nào chưa hợp**. Chỗ chưa hợp hôm nay là việc chúng tôi phải sửa, không phải lỗi của người dùng.

📌 *Lưu ý:* Không để Q&A kéo quá 08:30. Câu hỏi chi tiết về màn hình để sang phần demo. Nhớ quay lại 3 việc cần chốt lúc 11:00, ghi lên bảng.

---

## Bảng thời gian

| Slide | Nội dung | Người nói | Phút | Cộng dồn |
|---|---|---|---|---|
| 1 | Cover | PM | 1 | 1 |
| 2 | Mục lục | PM | 1 | 2 |
| 3 | Phối hợp triển khai cùng nhà máy Hạ Long | PM | 3 | 5 |
| 4 | Phạm vi UAT — Phân hệ Quản lý sản xuất | BA | 3 | 8 |
| 5 | Thành phần tham gia | PM | 2 | 10 |
| 6 | Ngày 1 · Thứ Hai 02/11 | BA | 3 | 13 |
| 7 | Ngày 2 · Thứ Ba 03/11 | BA + PM | 2 | 15 |
| 8 | Chuẩn bị trước Ngày 1 | PM | 2 | 17 |
| 9 | Ghi nhận vấn đề & tiêu chí đạt | BA + PM | 3 | 20 |
| 10 | Đầu mối liên hệ | PM | 1 | 21 |
| 11 | Q&A · Chốt và bắt đầu | PM | 5 | 26 |
