# MetaStore — Production Store Platform

แพลตฟอร์มร้านค้าออนไลน์ดิจิทัลสไตล์ Meta Store รองรับ Cloudflare Workers, Cloudflare D1/D2 Database, ระบบเติมเงิน TrueMoney Wallet อัตโนมัติ, ระบบป้องกันสิทธิ์แอดมิน (RBAC), และระบบสลับหมวดหมู่สินค้าพร้อมอนิเมชันแบบสมูท

---

## ฟีเจอร์หลัก (Features)

1. **สถิติ & สัดส่วนตัวเลขจริง (Realistic Production Metrics)**:
   - ผู้ใช้งาน: **1,030** คน
   - สินค้า: **23** รายการ
   - คลังสินค้า: **1,779** ชิ้น
   - ขายแล้ว: **411** ชิ้น
   - การ์ดสถิติข้างแบนเนอร์แสดงไอคอนตามแบบเป๊ะ พร้อมขยายเล็กน้อย (`scale(1.02)`) เมื่อนำเคอร์เซอร์ไปชี้ และไม่มีแสงฟุ้ง

2. **ระบบจัดการราคา & ตัวเลือกสินค้า (Variants & Pricing)**:
   - แสดงราคาแบบจำนวนเต็มไม่มี `.00` กวนใจ (เช่น `฿20`, `฿99`, `฿149`, `฿299`, `฿15 - ฿25`)
   - เมื่อกดเปลี่ยนตัวเลือก (Variant) ราคาหลักจะนิ่งสนิท ไม่สั่นหรือกระตุก โดยจะเล่นอนิเมชันเฉพาะตัวการ์ดตัวเลือกเท่านั้น

3. **อนิเมชันสลับหมวดหมู่ (Category Swap Animation)**:
   - สลับแท็บหมวดหมู่ในหน้า `store.html` พร้อมอนิเมชัน Stagger Fade-Up สวยงาม

4. **ระบบความปลอดภัย & สิทธิ์แอดมิน (Admin Security Gate)**:
   - แอดมิน: บัญชี `metaxstore` / รหัสผ่าน `metaxstore112`
   - เมนูและปุ่ม "จัดการหลังร้าน (Admin)" จะมองเห็นเฉพาะผู้ใช้ที่มีสิทธิ์แอดมินเท่านั้น
   - หน้า `admin.html` มีระบบ Auth Gate ล็อคป้องกันการเข้าถึงจากผู้ใช้ทั่วไป

5. **ระบบเติมเงิน TrueMoney Wallet**:
   - รองรับการกรอกลิงก์ซองของขวัญ เชื่อมต่อ TrueMoney API แบบ Real-time

6. **ระบบฐานข้อมูล Cloudflare D1 / D2**:
   - รองรับการเชื่อมต่อฐานข้อมูล Cloudflare D1 ทันทีเมื่อระบุ `database_id` ใน `wrangler.json`
   - **Standalone Fallback**: หากยังไม่ได้เชื่อมต่อ D1 ระบบจะรันโหมดสแตนด์อโลนด้วยค่าเริ่มต้นที่สมจริง 100%

---

## โครงสร้างไฟล์ในโฟลเดอร์ Metastore

- `index.html` — หน้า Landing Page ทางการ
- `home.html` — หน้าร้านค้าหลักพร้อม Hero Banner, การ์ดสถิติ 4 ตัว, หมวดหมู่ และแคตตาล็อกสินค้า
- `store.html` — หน้ารายการสินค้าพร้อมแถบฟิลเตอร์หมวดหมู่ อนิเมชันการสลับ และค้นหา
- `product.html` — หน้าย่อยสั่งซื้อสินค้า เลือกระยะเวลา คำนวณราคา พร้อมมอบ License Key ทันที
- `topup.html` — หน้าระบบเติมเงินซองของขวัญ TrueMoney Wallet พร้อมประวัติธุรกรรม
- `admin.html` — แดชบอร์ดจัดการหลังบ้าน (ปรับสี, สินค้า, หมวดหมู่, สถิติ, การเงิน, Webhooks)
- `_worker.js` — Cloudflare Worker API & Static Asset Routing
- `schema.sql` — โครงสร้างฐานข้อมูล D1 SQLite และข้อมูลตั้งต้น (Seed Data)
- `wrangler.json` — คอนฟิกการ Deploy Cloudflare Workers & D1 Binding
- `package.json` — คำสั่งรันและ Deploy

---

## วิธีการ Deploy ไปยัง Cloudflare Workers & D1

### 1. ติดตั้ง Wrangler CLI (หากยังไม่มี)
```bash
npm install -g wrangler
```

### 2. ล็อกอินเข้าสู่ Cloudflare
```bash
wrangler login
```

### 3. สร้างฐานข้อมูล D1
```bash
wrangler d1 create metastore-db
```
นำ `database_id` ที่ได้ไปใส่ในไฟล์ `wrangler.json`:
```json
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "metastore-db",
    "database_id": "ใส่_DATABASE_ID_ที่ได้ตรงนี้"
  }
]
```

### 4. รันคำสั่งสร้างตารางและใส่ข้อมูลเริ่มต้น (Schema Migration)
```bash
# บนเซิร์ฟเวอร์ Cloudflare D1
wrangler d1 execute metastore-db --file=./schema.sql

# หรือทดสอบบนเครื่อง Local
wrangler d1 execute metastore-db --local --file=./schema.sql
```

### 5. Deploy สู่ Production
```bash
wrangler deploy
```

---

## R2 File Storage

```bash
wrangler r2 bucket create meta   # ต้องสร้างก่อน deploy
wrangler secret put ADMIN_UPLOAD_KEY        # ตั้งคีย์สำหรับอัปโหลด
wrangler deploy
```

- อ่านไฟล์: `GET /files/<key>`
- อัปโหลด: `curl -X PUT -H "Authorization: Bearer KEY" -H "Content-Type: image/png" --data-binary @a.png https://<domain>/api/files/products/a.png`
- ลบ: `DELETE /api/files/<key>` / ดูรายการ: `GET /api/files`
