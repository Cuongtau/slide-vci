# BẢN GỐC FILE DEMO — dùng để khôi phục sau mỗi lần demo

Sinh ngày **20/08/2026**, đã đối chiếu khớp toàn bộ đáp án trong `../HUONG-DAN-DEMO-V2.md`.

Sau khi demo (file bị sửa, bị điền đáp án, bị Word/Excel lưu đè), chép đè từ thư mục này về là sạch:

**PowerShell / CMD** — đứng tại `demo-v2`:

```
copy _goc\*.docx . /Y
copy _goc\*.xlsx . /Y
copy _goc\*.pptx . /Y
```

**Git Bash:**

```
cp _goc/demo-* .
```

> Đóng hết Word/Excel trước khi chép đè, nếu không file đang mở sẽ khoá.

## Vân tay file gốc

| File | Kích thước | SHA-1 (8 ký tự đầu) |
|---|---|---|
| demo-an-toan-lao-dong.docx | 37 KB | 1f0ef379 |
| demo-bao-cao-thang.docx | 37 KB | 6fc62f5a |
| demo-hsmt.docx | 39 KB | 36df2107 |
| demo-slide-tho.pptx | 35 KB | e3d8f304 |
| demo-tien-do.xlsx | 8 KB | b76435e9 |
| demo-van-ban-loi.docx | 37 KB | d523fda7 |
| demo-vattu.xlsx | 28 KB | 6381808e |
| demo-yeu-cau.docx | 37 KB | 002ecb1d |

Muốn biết file hiện tại còn nguyên bản gốc hay đã bị sửa, chạy trong PowerShell tại `demo-v2`:

```
Get-FileHash demo-*.docx, demo-*.xlsx, demo-*.pptx -Algorithm SHA1 |
  ForEach-Object { "{0}  {1}" -f $_.Hash.Substring(0,8).ToLower(), (Split-Path $_.Path -Leaf) }
```

Mã nào khác bảng trên nghĩa là file đó đã bị thay đổi — chép lại từ `_goc`.
