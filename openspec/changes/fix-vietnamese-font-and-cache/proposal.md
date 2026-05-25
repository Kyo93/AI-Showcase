# Proposal: Fix Vietnamese Font Rendering & Browser Cache

Được tạo bởi: cm-brainstorm-idea  
Ngày: 25-05-2026

## Why we're doing this

### Qualified Problem
**For:** Khán giả và người thuyết trình của buổi chia sẻ Sea Tech/Ops  
**Who:** Bị lỗi hiển thị font tiếng Việt (vỡ chữ, lệch ký tự có dấu) và không nhìn thấy bất kỳ thay đổi thiết kế mới nào  
**The:** Trang slide deck web Reveal.js  
**That:** Cần phải hiển thị mượt mà, đồng nhất với thiết kế Sea Group và không bị lưu cache CSS cũ  
**Unlike:** Hiện tại, trình duyệt đang lưu cache file `style.css` cũ khiến giao diện không đổi mới, đồng thời việc thiếu font hệ thống fallback tốt làm tiếng Việt bị lỗi hiển thị khi Google Fonts không load kịp.  
**Our approach:** Áp dụng cơ chế phá cache (Cache Busting) qua HTML và thiết lập hệ thống font fallback cực kỳ an toàn cho tiếng Việt.

### Root Causes:
1. **Browser Cache (Technical):** Trình duyệt web lưu cache file `style.css` và `index.html` của localhost rất lâu. Khi thay đổi file CSS trên đĩa cứng, trình duyệt vẫn chạy file cũ trong cache, dẫn đến giao diện "y hệt như cũ" và vỡ layout Slide 10 do thiếu class CSS mới.
2. **Web Font Fallback (Design/Technical):** Font `Outfit` và `Inter` load qua Google Fonts trực tuyến. Nếu đường truyền mạng bị chậm, bị tường lửa công ty chặn, hoặc trình duyệt chưa kịp tải xong thì các ký tự tiếng Việt có dấu sẽ bị fallback sang font hệ thống mặc định (nhiều lúc là Times New Roman hoặc font không tương thích), gây lỗi font tiếng Việt.

---

## 9 Windows Analysis (TRIZ)

| | PAST | PRESENT | FUTURE |
|---|---|---|---|
| **SUPER-SYSTEM** | Trình duyệt load web tĩnh thông thường | Trình duyệt tối ưu cache rất mạnh cho localhost | Hỗ trợ service worker hoặc offline-first |
| **SYSTEM** | Slide deck dùng font Open Sans | Slide deck dùng Outfit và Inter nhưng load chậm | Slide deck chạy mượt mà, không phụ thuộc internet |
| **SUB-SYSTEM** | CSS link trực tiếp `<link href="style.css">` | CSS bị lưu cache; thiếu font fallback tiếng Việt chuẩn | Có query parameter phá cache; font fallback Segoe UI |

---

## Proposed Solution Options

### Option A: Cache Busting + Robust Fallback Fonts (Recommended)
- **Cách làm:**
  1. Thêm query string phiên bản vào liên kết CSS trong `index.html`: `style.css?v=20260525.1745` (mỗi lần sửa đổi sẽ tăng số này lên).
  2. Bổ sung các font hệ thống chất lượng cao vào danh sách fallback trong `style.css`:
     `--font-heading: "Outfit", "Segoe UI", -apple-system, Arial, sans-serif;`
     `--font-body: "Inter", "Segoe UI", -apple-system, Arial, sans-serif;`
- **Effort:** S (Thời gian làm khoảng 10-15 phút)
- **Risk level:** Cực kỳ thấp
- **Pros:** Đơn giản, giữ được kiến trúc file CSS riêng biệt, giải quyết triệt để lỗi cache và lỗi hiển thị chữ tiếng Việt kể cả khi offline.
- **Cons:** Cần tăng số phiên bản `?v=...` thủ công hoặc tự động khi deploy.

### Option B: Inline CSS directly in HTML
- **Cách làm:** Copy toàn bộ nội dung của file `style.css` (35KB) và dán trực tiếp vào thẻ `<style>` trong `<head>` của `index.html`, loại bỏ hoàn toàn file `style.css` rời.
- **Effort:** S (Khoan, dễ copy pass nhưng khó bảo trì)
- **Risk level:** Thấp
- **Pros:** Giải quyết 100% lỗi cache CSS (vì HTML thay đổi là CSS chạy ngay lập tức).
- **Cons:** Làm file HTML phình to, rất khó đọc, khó bảo trì code CSS và không đúng chuẩn tách biệt mã nguồn.

### Option C: Local Font Hosting (Web Fonts Offline)
- **Cách làm:** Tải toàn bộ font `Outfit` và `Inter` định dạng `.woff2` về local project (trong `assets/fonts`), sau đó định nghĩa bằng `@font-face` để slide deck chạy hoàn toàn offline không cần internet.
- **Effort:** M (Mất thời gian tải file font, cấu hình `@font-face` cho từng font-weight)
- **Risk level:** Thấp
- **Pros:** Slide chạy cực kỳ ổn định, không lo lỗi mạng, font tiếng Việt hiển thị 100% chuẩn xác.
- **Cons:** Làm tăng kích thước repo và thời gian triển khai.

---

## 🎯 Recommendation

**Chọn Option A: Cache Busting + Robust Fallback Fonts**
Vì đây là phương án tối ưu nhất, xử lý nhanh chóng cả 2 vấn đề lớn (lỗi cache của trình duyệt và lỗi hiển thị tiếng Việt do kết nối mạng tải font chậm) mà vẫn giữ mã nguồn sạch sẽ, dễ bảo trì.
