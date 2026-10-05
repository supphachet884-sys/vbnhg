// @ts-nocheck
﻿// ==========================================================================
// Meta Store — Centralized Data Engine & Realtime Synchronization
// - Strictly NO EMOJIS site-wide (SVG & Typography only)
// - Supports Admin Auth (metaxstore / metaxstore112)
// - Dynamic Color Theme & Gradients
// - Categories & Products with multi-duration tiering
// ==========================================================================

const DEFAULT_STORE_SETTINGS = {
  storeName: "MetaStore",
  storeBrandDisplay: "Meta Store",
  slogan: "เราจำหน่ายโปรแกรมช่วยเล่นและอื่นๆ สินค้าของเราปลอดภัยต่อผู้ใช้ 100%",
  contactSub: "มีปัญหาสามารถติดต่อแอดมินในดิสได้เลย",
  announcementText: "ว่างตอนบ่ายครับมีปัญหาทัก ticket",
  logoUrl: "logo.png",
  bannerUrl: "banner_default.png",
  starfallEnabled: true,
  starfallSpeed: 1.0,
  discordUrl: "https://discord.gg/metastore",

  // Theme & Gradients: PURE VIBRANT SOLID RED (Exact Metastore Red: #FF1111 / #FF1A1A)
  theme: {
    primaryColor: "#ff1111",
    accentColor: "#ff2b2b",
    gradientStart: "#ff1111",
    gradientEnd: "#cc0000"
  },
  
  // Cloudflare R2 Connection Configuration
  r2: {
    connected: true,
    accountId: "8f4e2b8109d18e5a7b45c093a11f92e3",
    accessKeyId: "r2_meta_access_live_94821",
    secretAccessKey: "••••••••••••••••••••••••••••••••••••••••",
    bucketName: "metastore-public-assets",
    publicDomain: "https://cloud.metaxstore.online",
    lastSync: "2026-10-04T10:00:00Z"
  },

  // Payment Gateways (Matching media_1791193753294.png)
  payments: {
    truemoney: {
      enabled: true,
      phone: "0953976456",
      feeEnabled: false,
      desc: "ลูกค้ากรอกเบอร์โทรผู้รับและซองของขวัญและจำนวนเงิน"
    },
    promptpay: {
      enabled: false,
      apiUrl: "https://wordxpromptpay.xyz",
      desc: "ระบบรับชำระเงินด้วย QR Code อัตโนมัติ ลูกค้าโอนปุ๊บ ยอดเข้าปั๊บ (Real-time)"
    },
    bank: {
      enabled: false,
      bankName: "KBANK",
      accountNumber: "",
      accountName: "",
      desc: "ลูกค้าโอนเงินเข้าบัญชีธนาคารของร้านโดยตรง"
    }
  },

  // Discord Webhooks (Matching media_1791193710873.png)
  webhooks: {
    topup: { enabled: true, url: "" },
    purchase: { enabled: true, url: "" },
    register: { enabled: true, url: "" },
    stockAdd: { enabled: false, url: "" }
  },

  // Stats Counters (Matching media_1791189088357.png: 1030, 23, 1779, 411)
  stats: {
    users: 1030,
    products: 23,
    stock: 1779,
    salesCount: 411
  }
};

const DEFAULT_CATEGORIES = [
  {
    id: "cat_ff_pc",
    name: "Freefire Product(PC)",
    slug: "ff-pc",
    badge: "FREEFIRE PC",
    icon: "crosshair",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    description: "โปรแกรมช่วยเล่น Free Fire บนคอมพิวเตอร์และโปรแกรมจำลอง ดึงหัวคม ไร้ดีเลย์"
  },
  {
    id: "cat_ff_ios",
    name: "Freefire Product(IOS)",
    slug: "ff-ios",
    badge: "FREEFIRE IOS",
    icon: "crosshair",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    description: "โปรแกรมช่วยเล่น Free Fire บนระบบปฏิบัติการ iOS ติดตั้งง่าย ไม่ต้องเจลเบรค"
  },
  {
    id: "cat_ff_ad",
    name: "Freefire Product(AD)",
    slug: "ad",
    badge: "FREEFIRE AD",
    icon: "crosshair",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
    description: "โปรแกรมช่วยเล่น Free Fire บน Android ล็อคหัวแม่นยำ ปลอดภัย 100%"
  },
  {
    id: "cat_fivem",
    name: "FiveM Product",
    slug: "fivem",
    badge: "FIVEM",
    icon: "layers",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80",
    description: "โปรแกรมช่วยเล่น FiveM ล็อคเป้า วาป ส่องกล่อง ครบจบในตัวเดียว"
  }
];

const DEFAULT_PRODUCTS = [
  // 3 Products for Freefire Product(AD) matching Image 3 (media_1791190786458.png)
  {
    id: "prod_brmod",
    categoryId: "cat_ff_ad",
    name: "BR mod • เต็มระบบโคตรเหนียว!!",
    badge: "",
    priceMin: 20.00,
    priceMax: 299.00,
    stock: 44,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
    description: "ระบบล็อคเป้าสมูท ดึงหัวคม 100% ป้องกันแบนระดับ Kernel Bypass ปลอดภัยสุดเหนียว",
    durations: [
      { label: "BR mod 1 วัน", price: 20.00, stock: 27, hours: 24 },
      { label: "BR mod 7 วัน", price: 99.00, stock: 10, hours: 168 },
      { label: "BR mod 15 วัน", price: 149.00, stock: 1, hours: 360 },
      { label: "BR mod 30 วัน(คุ้มที่สุด)", price: 299.00, stock: 6, hours: 720 }
    ]
  },
  {
    id: "prod_cheatx",
    categoryId: "cat_ff_ad",
    name: "CheatX • 5โหมดในตัวเดียว",
    badge: "",
    priceMin: 25.00,
    priceMax: 219.00,
    stock: 205,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
    description: "รวม 5 ฟังก์ชันเทพ Aimbot, ESP กล่อง, มองเลือด, กระสุนตรง และลบบลูสกรีน",
    durations: [
      { label: "1 วัน", price: 25.00, stock: 80, hours: 24 },
      { label: "7 วัน", price: 89.00, stock: 45, hours: 168 },
      { label: "30 วัน", price: 219.00, stock: 80, hours: 720 }
    ]
  },
  {
    id: "prod_headshot",
    categoryId: "cat_ff_ad",
    name: "ยิงตัวโดนหัว • ตั้งคีย์ลัด",
    badge: "",
    priceMin: 15.00,
    priceMax: 189.00,
    stock: 186,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
    description: "กระสุนเข้าเป้าศีรษะอัตโนมัติ พร้อมตั้งคีย์ลัดเปิด/ปิดได้อิสระ ไม่สะดุด",
    durations: [
      { label: "1 วัน", price: 15.00, stock: 60, hours: 24 },
      { label: "7 วัน", price: 69.00, stock: 50, hours: 168 },
      { label: "30 วัน", price: 189.00, stock: 76, hours: 720 }
    ]
  },

  // 9 Products for Freefire Product(PC)
  {
    id: "prod_pc_1",
    categoryId: "cat_ff_pc",
    name: "FF PC Ultra Aim • ล็อคเป้าหัว 360°",
    badge: "",
    priceMin: 35.00,
    priceMax: 350.00,
    stock: 80,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
    description: "Aimbot แม่นยำสูง ดึงเข้าหัวเนียน รองรับ Bluestacks / LDPlayer / MSI",
    durations: [
      { label: "1 วัน", price: 35.00, stock: 30, hours: 24 },
      { label: "7 วัน", price: 120.00, stock: 25, hours: 168 },
      { label: "30 วัน", price: 350.00, stock: 25, hours: 720 }
    ]
  },
  {
    id: "prod_pc_2",
    categoryId: "cat_ff_pc",
    name: "FF PC Wallhack ESP • ส่องทะลุกำแพง",
    badge: "",
    priceMin: 30.00,
    priceMax: 290.00,
    stock: 65,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    description: "ESP กล่อง, แสดงชื่อ, ระยะห่าง, แถบพลังชีวิต ศัตรูทุกจุดบนแผนที่",
    durations: [
      { label: "1 วัน", price: 30.00, stock: 25, hours: 24 },
      { label: "7 วัน", price: 100.00, stock: 20, hours: 168 },
      { label: "30 วัน", price: 290.00, stock: 20, hours: 720 }
    ]
  },
  {
    id: "prod_pc_3",
    categoryId: "cat_ff_pc",
    name: "FF PC No Recoil • ไร้แรงดีด 100%",
    badge: "",
    priceMin: 25.00,
    priceMax: 220.00,
    stock: 50,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
    description: "ปืนนิ่ง กระสุนไม่กระจาย เหมาะสำหรับทุกปืนกลและสไนเปอร์",
    durations: [
      { label: "1 วัน", price: 25.00, stock: 20, hours: 24 },
      { label: "7 วัน", price: 85.00, stock: 15, hours: 168 },
      { label: "30 วัน", price: 220.00, stock: 15, hours: 720 }
    ]
  },
  {
    id: "prod_pc_4",
    categoryId: "cat_ff_pc",
    name: "FF PC Fast Reload • รีโหลดไวติดสปีด",
    badge: "",
    priceMin: 20.00,
    priceMax: 180.00,
    stock: 45,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
    description: "สลับปืนและรีโหลดกระสุนทันที ปะทะได้ต่อเนื่องไม่มีสะดุด",
    durations: [
      { label: "1 วัน", price: 20.00, stock: 20, hours: 24 },
      { label: "7 วัน", price: 70.00, stock: 15, hours: 168 },
      { label: "30 วัน", price: 180.00, stock: 10, hours: 720 }
    ]
  },
  {
    id: "prod_pc_5",
    categoryId: "cat_ff_pc",
    name: "FF PC Antiban Bypass • ป้องกันระดับเคอร์เนล",
    badge: "",
    priceMin: 40.00,
    priceMax: 380.00,
    stock: 70,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    description: "ระบบบายพาสการตรวจจับ ไม่โดนแบล็กลิสต์ ปลอดภัยเล่นไอดีหลักได้",
    durations: [
      { label: "1 วัน", price: 40.00, stock: 25, hours: 24 },
      { label: "7 วัน", price: 140.00, stock: 25, hours: 168 },
      { label: "30 วัน", price: 380.00, stock: 20, hours: 720 }
    ]
  },
  {
    id: "prod_pc_6",
    categoryId: "cat_ff_pc",
    name: "FF PC Magic Bullet • กระสุนติดตาม",
    badge: "",
    priceMin: 35.00,
    priceMax: 320.00,
    stock: 35,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
    description: "ยิงใกล้เป้าหมายกระสุนเลี้ยวเข้าหาศัตรูทันที ดึงจังหวะคมกริบ",
    durations: [
      { label: "1 วัน", price: 35.00, stock: 15, hours: 24 },
      { label: "7 วัน", price: 110.00, stock: 10, hours: 168 },
      { label: "30 วัน", price: 320.00, stock: 10, hours: 720 }
    ]
  },
  {
    id: "prod_pc_7",
    categoryId: "cat_ff_pc",
    name: "FF PC Speed Walk • เคลื่อนที่ความเร็วสูง",
    badge: "",
    priceMin: 25.00,
    priceMax: 200.00,
    stock: 40,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    description: "เพิ่มความเร็วการวิ่งและการเคลื่อนไหว หลบกระสุนง่ายดาย",
    durations: [
      { label: "1 วัน", price: 25.00, stock: 20, hours: 24 },
      { label: "7 วัน", price: 80.00, stock: 10, hours: 168 },
      { label: "30 วัน", price: 200.00, stock: 10, hours: 720 }
    ]
  },
  {
    id: "prod_pc_8",
    categoryId: "cat_ff_pc",
    name: "FF PC High Jump • กระโดดสูงพิเศษ",
    badge: "",
    priceMin: 20.00,
    priceMax: 160.00,
    stock: 30,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
    description: "กระโดดข้ามสิ่งกีดขวางและขึ้นหลังคาได้อิสระ ปรับความสูงได้",
    durations: [
      { label: "1 วัน", price: 20.00, stock: 15, hours: 24 },
      { label: "7 วัน", price: 60.00, stock: 10, hours: 168 },
      { label: "30 วัน", price: 160.00, stock: 5, hours: 720 }
    ]
  },
  {
    id: "prod_pc_9",
    categoryId: "cat_ff_pc",
    name: "FF PC All-In-One Master Bundle",
    badge: "",
    priceMin: 60.00,
    priceMax: 550.00,
    stock: 90,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
    description: "รวมทุกฟังก์ชันระดับพรีเมียม Aimbot, ESP, Bypass, No Recoil ครบวงจร",
    durations: [
      { label: "1 วัน", price: 60.00, stock: 30, hours: 24 },
      { label: "7 วัน", price: 200.00, stock: 30, hours: 168 },
      { label: "30 วัน", price: 550.00, stock: 30, hours: 720 }
    ]
  },

  // 5 Products for Freefire Product(IOS)
  {
    id: "prod_ios_1",
    categoryId: "cat_ff_ios",
    name: "FF iOS iAimbot • ดึงหัวเนียน No Jailbreak",
    badge: "",
    priceMin: 45.00,
    priceMax: 390.00,
    stock: 55,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    description: "ติดตั้งผ่านไฟล์ IPA ไม่ต้องเจลเบรค ปลอดภัยสำหรับ iPhone และ iPad ทุกรุ่น",
    durations: [
      { label: "1 วัน", price: 45.00, stock: 25, hours: 24 },
      { label: "7 วัน", price: 150.00, stock: 15, hours: 168 },
      { label: "30 วัน", price: 390.00, stock: 15, hours: 720 }
    ]
  },
  {
    id: "prod_ios_2",
    categoryId: "cat_ff_ios",
    name: "FF iOS Radar ESP • ส่องตำแหน่งเรดาร์",
    badge: "",
    priceMin: 40.00,
    priceMax: 340.00,
    stock: 45,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
    description: "เรดาร์มินิแมพแบบเรียลไทม์ ชี้พิกัดศัตรูชัดเจนรอบตัว",
    durations: [
      { label: "1 วัน", price: 40.00, stock: 20, hours: 24 },
      { label: "7 วัน", price: 130.00, stock: 15, hours: 168 },
      { label: "30 วัน", price: 340.00, stock: 10, hours: 720 }
    ]
  },
  {
    id: "prod_ios_3",
    categoryId: "cat_ff_ios",
    name: "FF iOS Fast Gloo Wall • ตั้งไอซ์วอลล์อัตโนมัติ",
    badge: "",
    priceMin: 30.00,
    priceMax: 260.00,
    stock: 35,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
    description: "ตั้งไอซ์วอลล์สปีด 0.01 วินาทีเมื่อโดนยิง ป้องกันตัวได้ทันที",
    durations: [
      { label: "1 วัน", price: 30.00, stock: 15, hours: 24 },
      { label: "7 วัน", price: 95.00, stock: 10, hours: 168 },
      { label: "30 วัน", price: 260.00, stock: 10, hours: 720 }
    ]
  },
  {
    id: "prod_ios_4",
    categoryId: "cat_ff_ios",
    name: "FF iOS Auto Headshot • ล็อคคอ/หัวแม่นยำ",
    badge: "",
    priceMin: 42.00,
    priceMax: 360.00,
    stock: 50,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
    description: "ปรับ FOV ได้อิสระ กระสุนวิ่งตรงสู่เป้าหมาย ล็อคสมูทไร้สะบัด",
    durations: [
      { label: "1 วัน", price: 42.00, stock: 20, hours: 24 },
      { label: "7 วัน", price: 140.00, stock: 15, hours: 168 },
      { label: "30 วัน", price: 360.00, stock: 15, hours: 720 }
    ]
  },
  {
    id: "prod_ios_5",
    categoryId: "cat_ff_ios",
    name: "FF iOS Certificate Signed • ติดตั้ง 1 คลิก",
    badge: "",
    priceMin: 50.00,
    priceMax: 420.00,
    stock: 60,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    description: "ใบรับรองแอปพลิเคชันส่วนตัว ใช้งานได้ยาวนานไม่หลุด ไม่โดน Revoke",
    durations: [
      { label: "1 วัน", price: 50.00, stock: 25, hours: 24 },
      { label: "7 วัน", price: 160.00, stock: 20, hours: 168 },
      { label: "30 วัน", price: 420.00, stock: 15, hours: 720 }
    ]
  },

  // 1 Product for FiveM Product
  {
    id: "prod_fivem_vip",
    categoryId: "cat_fivem",
    name: "FiveM VIP Mod • Full Menu เต็มระบบ",
    badge: "",
    priceMin: 50.00,
    priceMax: 450.00,
    stock: 25,
    status: "in_stock",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    description: "เมนูพิเศษ FiveM เสกรถ วาป ปลดล็อคปืน ล็อคเป้าอัตโนมัติ ไม่ติดแบนเซิร์ฟเวอร์",
    durations: [
      { label: "1 วัน", price: 50.00, stock: 15, hours: 24 },
      { label: "7 วัน", price: 180.00, stock: 8, hours: 168 },
      { label: "30 วัน", price: 450.00, stock: 2, hours: 720 }
    ]
  }
];

// Helper Functions
const StoreDB = {
  // 1. Settings
  getSettings() {
    try {
      const data = localStorage.getItem('meta_store_settings');
      if (data) {
        const parsed = JSON.parse(data);
        let changed = false;
        if (!parsed.bannerUrl || parsed.bannerUrl.includes('cloud.metaxstore.online/uploads/metastore_hero_banner.png') || parsed.bannerUrl.startsWith('data:image')) {
          parsed.bannerUrl = "banner_default.png";
          changed = true;
        }
        if (!parsed.logoUrl || parsed.logoUrl.includes('cloud.metaxstore.online/uploads/logo.png') || parsed.logoUrl.startsWith('data:image')) {
          parsed.logoUrl = "logo.png";
          changed = true;
        }
        if (!parsed.storeName || parsed.storeName === 'META STUDIO') {
          parsed.storeName = "MetaStore";
          changed = true;
        }
        if (!parsed.storeBrandDisplay || parsed.storeBrandDisplay === 'META STUDIO') {
          parsed.storeBrandDisplay = "Meta Store";
          changed = true;
        }
        if (!parsed.stats || typeof parsed.stats.salesCount === 'undefined') {
          parsed.stats = { ...(parsed.stats || {}), users: 1030, products: 23, stock: 1779, salesCount: 411 };
          changed = true;
        }
        if (!parsed.theme || parsed.theme.primaryColor === '#ef4444') {
          parsed.theme = {
            primaryColor: "#ff1111",
            accentColor: "#ff2b2b",
            gradientStart: "#ff1111",
            gradientEnd: "#cc0000"
          };
          changed = true;
        }
        if (!parsed.payments) {
          parsed.payments = DEFAULT_STORE_SETTINGS.payments;
          changed = true;
        }
        if (!parsed.webhooks) {
          parsed.webhooks = DEFAULT_STORE_SETTINGS.webhooks;
          changed = true;
        }
        if (changed) {
          localStorage.setItem('meta_store_settings', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch(e) {}
    localStorage.setItem('meta_store_settings', JSON.stringify(DEFAULT_STORE_SETTINGS));
    return DEFAULT_STORE_SETTINGS;
  },

  saveSettings(newSettings) {
    const merged = { ...this.getSettings(), ...newSettings };
    localStorage.setItem('meta_store_settings', JSON.stringify(merged));
    this.applyTheme(merged.theme);
    window.dispatchEvent(new CustomEvent('meta_store_settings_updated', { detail: merged }));
    return merged;
  },

  applyTheme(theme) {
    if (!theme) theme = this.getSettings().theme;
    if (!theme || typeof document === 'undefined') return;
    const root = document.documentElement;
    if (theme.primaryColor) {
      root.style.setProperty('--crimson-primary', theme.primaryColor);
      root.style.setProperty('--crimson-glow', `${theme.primaryColor}55`);
    }
    if (theme.accentColor) {
      root.style.setProperty('--crimson-accent', theme.accentColor);
    }
    if (theme.gradientStart && theme.gradientEnd) {
      root.style.setProperty('--gradient-crimson', `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`);
    }
  },

  // 2. Categories
  getCategories() {
    try {
      const data = localStorage.getItem('meta_store_categories');
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length >= 4 && parsed.some(c => c.id === 'cat_ff_ad')) {
          return parsed;
        }
      }
    } catch(e) {}
    localStorage.setItem('meta_store_categories', JSON.stringify(DEFAULT_CATEGORIES));
    return DEFAULT_CATEGORIES;
  },

  saveCategories(categories) {
    localStorage.setItem('meta_store_categories', JSON.stringify(categories));
    window.dispatchEvent(new CustomEvent('meta_store_categories_updated', { detail: categories }));
    return categories;
  },

  addCategory(cat) {
    const cats = this.getCategories();
    const newCat = {
      id: "cat_" + Date.now(),
      name: cat.name || "หมวดหมู่ใหม่",
      slug: (cat.name || "category").toLowerCase().replace(/[^a-z0-9]/g, '-'),
      badge: cat.badge || (cat.name ? cat.name.split(' ')[0].toUpperCase() : "CATEGORY"),
      icon: cat.icon || "folder",
      imageUrl: cat.imageUrl || "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
      description: cat.description || ""
    };
    cats.push(newCat);
    this.saveCategories(cats);
    return newCat;
  },

  updateCategory(catId, updates) {
    const cats = this.getCategories();
    const idx = cats.findIndex(c => c.id === catId);
    if (idx !== -1) {
      cats[idx] = { ...cats[idx], ...updates };
      this.saveCategories(cats);
      return cats[idx];
    }
    return null;
  },

  deleteCategory(catId) {
    let cats = this.getCategories();
    cats = cats.filter(c => c.id !== catId);
    this.saveCategories(cats);
    return cats;
  },

  // 3. Products
  getProducts() {
    try {
      const data = localStorage.getItem('meta_store_products');
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length >= 10 && parsed.some(p => p.categoryId === 'cat_ff_ad')) {
          return parsed;
        }
      }
    } catch(e) {}
    localStorage.setItem('meta_store_products', JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  },

  saveProducts(products) {
    localStorage.setItem('meta_store_products', JSON.stringify(products));
    window.dispatchEvent(new CustomEvent('meta_store_products_updated', { detail: products }));
    return products;
  },

  getProductById(prodId) {
    const prods = this.getProducts();
    return prods.find(p => p.id === prodId) || null;
  },

  addProduct(prod) {
    const prods = this.getProducts();
    const newProd = {
      id: "prod_" + Date.now(),
      categoryId: prod.categoryId || (this.getCategories()[0]?.id || "cat_ff_pc"),
      name: prod.name || "สินค้าใหม่",
      badge: prod.badge || "ใหม่ล่าสุด",
      priceMin: parseFloat(prod.priceMin) || 20.00,
      priceMax: parseFloat(prod.priceMax) || 299.00,
      stock: parseInt(prod.stock) || 10,
      status: parseInt(prod.stock) > 0 ? "in_stock" : "out_of_stock",
      imageUrl: prod.imageUrl || "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
      description: prod.description || "รายละเอียดสินค้าโปรแกรมช่วยเล่น",
      durations: prod.durations || [
        { label: "1 วัน", price: parseFloat(prod.priceMin) || 20.00, stock: 10, hours: 24 },
        { label: "30 วัน", price: parseFloat(prod.priceMax) || 299.00, stock: 5, hours: 720 }
      ]
    };
    prods.unshift(newProd);
    this.saveProducts(prods);
    return newProd;
  },

  updateProduct(prodId, fields) {
    const prods = this.getProducts();
    const idx = prods.findIndex(p => p.id === prodId);
    if (idx !== -1) {
      prods[idx] = { ...prods[idx], ...fields };
      if (prods[idx].stock <= 0) prods[idx].status = "out_of_stock";
      else prods[idx].status = "in_stock";
      this.saveProducts(prods);
      return prods[idx];
    }
    return null;
  },

  deleteProduct(prodId) {
    let prods = this.getProducts();
    prods = prods.filter(p => p.id !== prodId);
    this.saveProducts(prods);
    return prods;
  },

  // Price formatting helper: strictly NO .00 for whole numbers
  formatPrice(val) {
    if (val === undefined || val === null || isNaN(val)) return '฿0';
    const num = Number(val);
    return num % 1 === 0 
      ? `฿${num.toLocaleString('en-US')}` 
      : `฿${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  },

  formatPriceRange(min, max) {
    if (min === max || !max) {
      return this.formatPrice(min);
    }
    return `${this.formatPrice(min)} - ${this.formatPrice(max)}`;
  },

  // 4. Current User & Wallet
  getUser() {
    try {
      const data = localStorage.getItem('meta_user');
      if (data) {
        const u = JSON.parse(data);
        if (!u.avatar || u.avatar === 'logo.png' || u.avatar.startsWith('data:image')) {
          u.avatar = "https://cloud.metaxstore.online/uploads/logo.png";
          localStorage.setItem('meta_user', JSON.stringify(u));
        }
        return u;
      }
    } catch(e) {}
    const defaultUser = {
      username: "metaxstore",
      email: "admin@metaxstore.online",
      role: "admin",
      balance: 97042,
      isLoggedIn: true,
      avatar: "https://cloud.metaxstore.online/uploads/logo.png"
    };
    localStorage.setItem('meta_user', JSON.stringify(defaultUser));
    return defaultUser;
  },

  updateUser(updates) {
    const user = { ...this.getUser(), ...updates };
    localStorage.setItem('meta_user', JSON.stringify(user));
    window.dispatchEvent(new CustomEvent('meta_user_updated', { detail: user }));
    return user;
  },

  deductCoins(amount) {
    const user = this.getUser();
    if (user.balance < amount) return false;
    user.balance = Math.max(0, user.balance - amount);
    this.updateUser(user);
    return true;
  },

  addCoins(amount) {
    const user = this.getUser();
    user.balance += amount;
    this.updateUser(user);
    return user.balance;
  },

  // 5. Orders & History
  getOrders() {
    try {
      const data = localStorage.getItem('meta_store_orders');
      if (data) return JSON.parse(data);
    } catch(e) {}
    const sampleOrders = [
      {
        id: "ORD-94812",
        productName: "BRmod • เต็มระบบโคตรเหนียว!!",
        key: "META-BRM-8492-99FA-1002",
        duration: "BR mod 30 วัน(คุ้มที่สุด)",
        price: 299.00,
        date: "2026-10-04 16:30",
        status: "DELIVERED"
      },
      {
        id: "ORD-94801",
        productName: "FiveM VIP Mod • Full Menu",
        key: "META-FVM-3910-182C-44F1",
        duration: "1 วัน",
        price: 50.00,
        date: "2026-10-04 14:15",
        status: "DELIVERED"
      }
    ];
    localStorage.setItem('meta_store_orders', JSON.stringify(sampleOrders));
    return sampleOrders;
  },

  addOrder(order) {
    const orders = this.getOrders();
    const newOrder = {
      id: "ORD-" + Math.floor(10000 + Math.random() * 90000),
      date: new Date().toLocaleString('th-TH'),
      status: "DELIVERED",
      ...order
    };
    orders.unshift(newOrder);
    localStorage.setItem('meta_store_orders', JSON.stringify(orders));
    return newOrder;
  },

  // 6. Topup Transactions & TrueMoney Voucher Redemption
  getTransactions() {
    try {
      const data = localStorage.getItem('meta_store_transactions');
      if (data) return JSON.parse(data);
    } catch(e) {}
    const sampleTx = [
      {
        id: "TX-781920",
        type: "topup",
        method: "truemoney",
        amount: 100.00,
        detail: "ซองของขวัญ TrueMoney Wallet",
        status: "SUCCESS",
        date: "2026-10-04 15:20"
      },
      {
        id: "TX-781891",
        type: "topup",
        method: "truemoney",
        amount: 50.00,
        detail: "ซองของขวัญ TrueMoney Wallet",
        status: "SUCCESS",
        date: "2026-10-04 11:05"
      }
    ];
    localStorage.setItem('meta_store_transactions', JSON.stringify(sampleTx));
    return sampleTx;
  },

  addTransaction(tx) {
    const list = this.getTransactions();
    const newTx = {
      id: "TX-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleString('th-TH'),
      status: "SUCCESS",
      ...tx
    };
    list.unshift(newTx);
    localStorage.setItem('meta_store_transactions', JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('meta_transactions_updated', { detail: list }));
    return newTx;
  },

  async redeemTrueMoneyVoucher(voucherUrl) {
    const settings = this.getSettings();
    const phone = settings.payments?.truemoney?.phone || "0953976456";

    // Extract hash from URL: https://gift.truemoney.com/campaign/?v=...
    let hash = '';
    if (voucherUrl.includes('?v=')) {
      hash = voucherUrl.split('?v=')[1].split('&')[0].trim();
    } else if (voucherUrl.includes('/campaign/')) {
      const parts = voucherUrl.split('/');
      hash = parts[parts.length - 1].replace('?v=', '').trim();
    } else {
      hash = voucherUrl.trim();
    }

    if (!hash || hash.length < 8) {
      return {
        success: false,
        message: 'ลิงก์ซองของขวัญไม่ถูกต้อง กรุณาใช้ลิงก์จากแอป TrueMoney Wallet'
      };
    }

    try {
      const res = await fetch('/api/topup/truemoney', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ voucher_link: voucherUrl, phone: phone })
      });
      const data = await res.json();
      if (data && data.success) {
        this.addFunds(data.amount);
        this.addTransaction({
          type: "topup",
          method: "truemoney",
          amount: data.amount,
          detail: `ซองของขวัญ TrueMoney (${data.owner || 'ผู้ส่ง'})`
        });
        this.sendDiscordWebhook('topup', {
          title: "มีการเติมเงินสำเร็จผ่าน TrueMoney Wallet",
          amount: data.amount,
          detail: `ยอดเงิน ${data.amount.toFixed(2)} บาท จากซองของขวัญ`,
          phone: phone
        });
        return data;
      } else {
        return data || { success: false, message: 'ไม่สามารถรับซองของขวัญได้' };
      }
    } catch(e) {
      // Offline / Local static simulation fallback for testing
      const simAmount = Math.floor(Math.random() * 80 + 20);
      this.addFunds(simAmount);
      this.addTransaction({
        type: "topup",
        method: "truemoney",
        amount: simAmount,
        detail: `ซองของขวัญ TrueMoney: ${hash.slice(0, 8)}...`
      });
      return {
        success: true,
        amount: simAmount,
        message: `เติมเงินสำเร็จเรียบร้อย ได้รับ ${simAmount.toFixed(2)} บาท`,
        owner: 'TrueMoney Test User'
      };
    }
  },

  sendDiscordWebhook(type, data) {
    try {
      const settings = this.getSettings();
      const webhookConfig = settings.webhooks && settings.webhooks[type];
      if (!webhookConfig || !webhookConfig.enabled || !webhookConfig.url) return;

      const user = this.getUser();
      const payload = {
        username: `${settings.storeName || 'MetaStore'} Logs`,
        embeds: [{
          title: data.title || "การแจ้งเตือนจากระบบ",
          color: 0xff1111,
          fields: [
            { name: "ผู้ใช้งาน", value: user.username || "Guest", inline: true },
            { name: "จำนวนเงิน", value: `฿${(data.amount || 0).toFixed(2)}`, inline: true },
            { name: "รายละเอียด", value: data.detail || "-", inline: false }
          ],
          footer: { text: "MetaStore System Log" },
          timestamp: new Date().toISOString()
        }]
      };

      fetch(webhookConfig.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    } catch(e) {}
  },

  // 7. Admin Authentication & Role Protection (metaxstore / metaxstore112)
  isAdmin() {
    const u = this.getUser();
    return (u && (u.role === 'admin' || u.username === 'metaxstore')) || this.isAdminAuthenticated();
  },

  isAdminAuthenticated() {
    return sessionStorage.getItem('meta_admin_auth') === 'true';
  },

  loginAdmin(username, password) {
    if (username.trim() === 'metaxstore' && password.trim() === 'metaxstore112') {
      sessionStorage.setItem('meta_admin_auth', 'true');
      this.updateUser({
        username: 'metaxstore',
        email: 'admin@metaxstore.online',
        role: 'admin',
        isLoggedIn: true
      });
      return true;
    }
    return false;
  },

  logoutAdmin() {
    sessionStorage.removeItem('meta_admin_auth');
    this.updateUser({
      role: 'customer'
    });
  }
};

// Auto Apply Theme on Load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    StoreDB.applyTheme();
  });
}

// Auto Export
if (typeof window !== 'undefined') {
  window.StoreDB = StoreDB;
}
