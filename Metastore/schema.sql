-- ==========================================================================
-- MetaStore — Cloudflare D1 / SQLite Database Schema
-- Production Ready Schema for Categories, Products, Users, Orders & Vouchers
-- Execute: wrangler d1 execute metastore-db --file=./schema.sql
-- ==========================================================================

-- 1. Store Settings Table
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  store_name TEXT NOT NULL DEFAULT 'MetaStore',
  slogan TEXT DEFAULT 'เราจำหน่ายโปรแกรมช่วยเล่นและอื่นๆ สินค้าของเราปลอดภัยต่อผู้ใช้ 100%',
  contact_sub TEXT DEFAULT 'มีปัญหาสามารถติดต่อแอดมินในดิสได้เลย',
  announcement_text TEXT DEFAULT 'ว่างตอนบ่ายครับมีปัญหาทัก ticket',
  logo_url TEXT DEFAULT 'logo.png',
  banner_url TEXT DEFAULT 'banner_default.png',
  primary_color TEXT DEFAULT '#ff1111',
  accent_color TEXT DEFAULT '#ff2b2b',
  truemoney_phone TEXT DEFAULT '0953976456',
  stat_users INTEGER DEFAULT 1030,
  stat_products INTEGER DEFAULT 23,
  stat_stock INTEGER DEFAULT 1779,
  stat_sales INTEGER DEFAULT 411,
  discord_url TEXT DEFAULT 'https://discord.gg/metastore',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Users Table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  email TEXT,
  role TEXT NOT NULL DEFAULT 'customer', -- 'admin' or 'customer'
  balance REAL NOT NULL DEFAULT 0.00,
  avatar TEXT DEFAULT 'logo.png',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  badge TEXT,
  icon TEXT DEFAULT 'crosshair',
  image_url TEXT,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Products Table
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  category_id TEXT NOT NULL,
  name TEXT NOT NULL,
  badge TEXT,
  price_min REAL NOT NULL,
  price_max REAL NOT NULL,
  stock INTEGER NOT NULL DEFAULT 10,
  status TEXT NOT NULL DEFAULT 'in_stock', -- 'in_stock' or 'out_of_stock'
  image_url TEXT,
  description TEXT,
  durations_json TEXT, -- JSON array of duration packages
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 5. Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  product_name TEXT NOT NULL,
  license_key TEXT NOT NULL,
  duration TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  price REAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'DELIVERED',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Transactions Table (TrueMoney / Wallet Topups)
CREATE TABLE IF NOT EXISTS transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  method TEXT NOT NULL DEFAULT 'TrueMoney Wallet',
  amount REAL NOT NULL,
  detail TEXT,
  voucher_hash TEXT,
  status TEXT NOT NULL DEFAULT 'SUCCESS',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================================================
-- INITIAL PRODUCTION SEED DATA
-- ==========================================================================

-- Seed Settings (Exact metrics matching workstation: 1,030 users, 23 products, 1,779 stock, 411 sales)
INSERT OR REPLACE INTO settings (id, store_name, slogan, contact_sub, announcement_text, logo_url, banner_url, primary_color, accent_color, truemoney_phone, stat_users, stat_products, stat_stock, stat_sales, discord_url)
VALUES (
  1,
  'MetaStore',
  'เราจำหน่ายโปรแกรมช่วยเล่นและอื่นๆ สินค้าของเราปลอดภัยต่อผู้ใช้ 100%',
  'มีปัญหาสามารถติดต่อแอดมินในดิสได้เลย',
  'ว่างตอนบ่ายครับมีปัญหาทัก ticket',
  'logo.png',
  'banner_default.png',
  '#ff1111',
  '#ff2b2b',
  '0953976456',
  1030,
  23,
  1779,
  411,
  'https://discord.gg/metastore'
);

-- Seed Admin User (metaxstore / metaxstore112)
INSERT OR REPLACE INTO users (id, username, password_hash, email, role, balance, avatar)
VALUES (
  'usr_admin_001',
  'metaxstore',
  'metaxstore112',
  'admin@metaxstore.online',
  'admin',
  97042.00,
  'https://cloud.metaxstore.online/uploads/logo.png'
);

-- Seed Categories (4 categories matching UI)
INSERT OR REPLACE INTO categories (id, name, slug, badge, icon, image_url, description, sort_order) VALUES
('cat_ff_pc', 'Freefire Product(PC)', 'ff-pc', 'FREEFIRE PC', 'crosshair', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80', 'โปรแกรมช่วยเล่น Free Fire บนคอมพิวเตอร์และโปรแกรมจำลอง ดึงหัวคม ไร้ดีเลย์', 1),
('cat_ff_ios', 'Freefire Product(IOS)', 'ff-ios', 'FREEFIRE IOS', 'crosshair', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80', 'โปรแกรมช่วยเล่น Free Fire บนระบบปฏิบัติการ iOS ติดตั้งง่าย ไม่ต้องเจลเบรค', 2),
('cat_ff_ad', 'Freefire Product(AD)', 'ad', 'FREEFIRE AD', 'crosshair', 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80', 'โปรแกรมช่วยเล่น Free Fire บน Android ล็อคหัวแม่นยำ ปลอดภัย 100%', 3),
('cat_fivem', 'FiveM Product', 'fivem', 'FIVEM', 'layers', 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80', 'โปรแกรมช่วยเล่น FiveM ล็อคเป้า วาป ส่องกล่อง ครบจบในตัวเดียว', 4);

-- Seed Initial Products (Total 23 Products)
INSERT OR REPLACE INTO products (id, category_id, name, badge, price_min, price_max, stock, status, image_url, description, durations_json, sort_order) VALUES
('prod_brmod', 'cat_ff_ad', 'BR mod • เต็มระบบโคตรเหนียว!!', 'ขายแล้ว 94', 20, 299, 44, 'in_stock', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80', 'ระบบล็อคเป้าสมูท ดึงหัวคม 100% ป้องกันแบนระดับ Kernel Bypass ปลอดภัยสุดเหนียว', '[{"label":"BR mod 1 วัน","price":20,"stock":27},{"label":"BR mod 7 วัน","price":99,"stock":10},{"label":"BR mod 15 วัน","price":149,"stock":1},{"label":"BR mod 30 วัน(คุ้มที่สุด)","price":299,"stock":6}]', 1),
('prod_cheatx', 'cat_ff_ad', 'CheatX FreeFire AD • VIP', 'ขายแล้ว 72', 25, 250, 30, 'in_stock', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80', 'ฟังค์ชันดึงหัวเนียน ส่องตำแหน่งกล่อง ESP ดูเลือดระยะศัตรู', '[{"label":"1 วัน","price":25,"stock":15},{"label":"7 วัน","price":90,"stock":10},{"label":"30 วัน","price":250,"stock":5}]', 2),
('prod_proxysiam', 'cat_ff_ad', 'Proxy Siam • ลงโคตรง่าย', '', 10, 299, 0, 'out_of_stock', 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80', 'บายพาสระบบตรวจจับตัวเกม รองรับทั้งมือถือและอีมูเลเตอร์', '[{"label":"1 วัน","price":10,"stock":0},{"label":"7 วัน","price":60,"stock":0},{"label":"30 วัน","price":299,"stock":0}]', 3),
('prod_nabeehex', 'cat_ff_ios', 'Nabee Hex • รับรอง IOS 17-27', 'ขายแล้ว 38', 15, 25, 8, 'in_stock', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80', 'ตัวช่วยดึงหัวสมูทสำหรับ iPhone และ iPad ทุกเวอร์ชัน', '[{"label":"1 วัน","price":15,"stock":5},{"label":"7 วัน","price":25,"stock":3}]', 4),
('prod_proxyuid', 'cat_ff_ios', 'PROXY UID • ใช้แค่ UID ในเกม', 'ขายแล้ว 11', 20, 350, 3, 'in_stock', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80', 'ระบบบายพาสผ่าน UID ไม่ต้องแก้ไขไฟล์ตัวเกม ปลอดภัยสูงสุด', '[{"label":"1 วัน","price":20,"stock":2},{"label":"30 วัน","price":350,"stock":1}]', 5),
('prod_proxyrm', 'cat_ff_ios', 'PROXY RM • โคตรคุ้ม', 'ขายแล้ว 26', 10, 699, 63, 'in_stock', 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80', 'สูตรโกงครบเซ็ต ล็อคเป้า ดึงหัว ส่องระยะ ยิงทะลุกำแพง', '[{"label":"1 วัน","price":10,"stock":30},{"label":"30 วัน","price":699,"stock":33}]', 6),
('prod_proxyrcnm', 'cat_ff_ios', 'PROXY RCNM • ไม่ง้อGBOX', 'ขายแล้ว 17', 10, 1000, 197, 'in_stock', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80', 'ติดตั้งโดยตรงผ่านใบรับรอง ไม่ต้องใช้โปรแกรมเสริม GBOX หรือ Scarlet', '[{"label":"1 วัน","price":10,"stock":100},{"label":"30 วัน","price":1000,"stock":97}]', 7),
('prod_fivem_1', 'cat_fivem', 'FiveM Ring-0 Internal VIP', 'ขายแล้ว 112', 80, 850, 48, 'in_stock', 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80', 'เมนูโปร FiveM ระดับไฮเอนด์ บายพาสทุกแอนตี้ชีต ล็อคเนียนไร้เสียงกระสุน', '[{"label":"1 วัน","price":80,"stock":20},{"label":"7 วัน","price":300,"stock":18},{"label":"30 วัน","price":850,"stock":10}]', 8);

-- Seed Sample Completed Orders
INSERT OR REPLACE INTO orders (id, user_id, product_name, license_key, duration, quantity, price, status) VALUES
('ORD-94812', 'usr_admin_001', 'BRmod • เต็มระบบโคตรเหนียว!!', 'META-BRM-8492-99FA-1002', 'BR mod 30 วัน(คุ้มที่สุด)', 1, 299, 'DELIVERED'),
('ORD-94801', 'usr_admin_001', 'FiveM VIP Mod • Full Menu', 'META-FVM-3910-182C-44F1', '1 วัน', 1, 50, 'DELIVERED');

-- Seed Sample Topup Transactions
INSERT OR REPLACE INTO transactions (id, user_id, method, amount, detail, status) VALUES
('TX-94821', 'usr_admin_001', 'TrueMoney Wallet', 300, 'ซองของขวัญ TrueMoney Wallet สำเร็จ', 'SUCCESS'),
('TX-94819', 'usr_admin_001', 'TrueMoney Wallet', 500, 'ซองของขวัญ TrueMoney Wallet สำเร็จ', 'SUCCESS');
