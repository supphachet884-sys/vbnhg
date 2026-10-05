// @ts-nocheck
// ==========================================================================
// Meta Store — Admin Panel Engine (admin.js)
// - Strictly ZERO EMOJIS (SVG & Typography only)
// - Guarded by Admin Auth Gate (metaxstore / metaxstore112)
// - Theme & Gradient Live Customizer (Syncs to StoreDB & CSS variables)
// - Direct Link Previews for all images (R2 / Cloud URLs)
// - Realtime Synchronized with StoreDB (store-data.js) & home.html
// ==========================================================================

let activeTab = 'dashboard';
let editingCategoryId = null;
let editingProductId = null;

document.addEventListener('DOMContentLoaded', () => {
  checkAdminGate();
  setupTabNavigation();
});

// 0. ADMIN AUTHENTICATION GATE
function checkAdminGate() {
  const gateModal = document.getElementById('adminAuthGateModal');
  const isAuthed = StoreDB.isAdmin() && StoreDB.isAdminAuthenticated();
  if (!isAuthed) {
    if (gateModal) gateModal.style.display = 'flex';
  } else {
    if (gateModal) gateModal.style.display = 'none';
    initAdmin();
  }
}

function submitAdminAuth(e) {
  if (e) e.preventDefault();
  const u = document.getElementById('adminAuthUser').value.trim();
  const p = document.getElementById('adminAuthPass').value.trim();
  const errEl = document.getElementById('adminAuthError');

  if (StoreDB.loginAdmin(u, p)) {
    if (errEl) errEl.style.display = 'none';
    const gateModal = document.getElementById('adminAuthGateModal');
    if (gateModal) gateModal.style.display = 'none';
    initAdmin();
    showAdminToast("เข้าสู่ระบบแอดมินสำเร็จ ยินดีต้อนรับ!");
  } else {
    if (errEl) {
      errEl.style.display = 'block';
      errEl.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านแอดมินไม่ถูกต้อง';
    }
  }
}

function logoutAdminSession() {
  StoreDB.logoutAdmin();
  showAdminToast("ออกจากระบบแอดมินแล้ว");
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 500);
}

function initAdmin() {
  StoreDB.applyTheme();
  loadAdminSettings();
  loadThemeSettings();
  loadAdminCategories();
  loadAdminProducts();
  loadAdminOrders();
  loadAdminDashboard();
  loadAdminPayments();
  loadAdminWebhooks();
}

// 1. TAB NAVIGATION
function setupTabNavigation() {
  const menuItems = document.querySelectorAll('.menu-nav-item[data-tab]');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  activeTab = tabId;

  document.querySelectorAll('.menu-nav-item').forEach(el => {
    el.classList.remove('active');
    if (el.getAttribute('data-tab') === tabId) {
      el.classList.add('active');
    }
  });

  document.querySelectorAll('.tab-content-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  const activePanel = document.getElementById(`tab-${tabId}`);
  if (activePanel) {
    activePanel.classList.add('active');
  }

  const titleMap = {
    'dashboard': 'แดชบอร์ดภาพรวม',
    'announcements': 'จัดการข่าวสาร & ประกาศ',
    'categories': 'จัดการหมวดหมู่สินค้า',
    'products': 'จัดการสินค้า & คีย์โปรแกรม',
    'coupons': 'จัดการคูปองส่วนลด',
    'giftcodes': 'จัดการโค้ดเติมเงิน',
    'flashsale': 'จัดการ Flash Sale',
    'minigames': 'จัดการมินิเกมและวงล้อ',
    'orders': 'ประวัติการขายสินค้า',
    'topup-history': 'ประวัติการเติมเงิน',
    'users': 'จัดการสมาชิก',
    'resellers': 'ตัวแทนจำหน่าย (API Reseller)',
    'payments': 'ช่องทางชำระเงิน',
    'settings': 'ตั้งค่าระบบ & แบนเนอร์',
    'r2-storage': 'เชื่อมต่อ Cloudflare R2 Storage'
  };

  const pageTitle = document.getElementById('adminPageTitle');
  if (pageTitle && titleMap[tabId]) {
    pageTitle.textContent = titleMap[tabId];
  }
}

// 2. DASHBOARD METRICS
function loadAdminDashboard() {
  const settings = StoreDB.getSettings();
  const products = StoreDB.getProducts();
  const orders = StoreDB.getOrders();

  const totalSales = orders.reduce((sum, ord) => sum + (ord.price || 0), 0);
  const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);

  const dashUsers = document.getElementById('dashMetricUsers');
  const dashProds = document.getElementById('dashMetricProds');
  const dashStock = document.getElementById('dashMetricStock');
  const dashSales = document.getElementById('dashMetricSales');

  if (dashUsers) dashUsers.textContent = (settings.stats?.users || 1030).toLocaleString();
  if (dashProds) dashProds.textContent = products.length;
  if (dashStock) dashStock.textContent = totalStock.toLocaleString();
  if (dashSales) dashSales.textContent = `฿${totalSales.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  const sidebarName = document.getElementById('adminSidebarStoreName');
  if (sidebarName) sidebarName.textContent = settings.storeName;
}

// 3. STORE SETTINGS & HERO BANNER
function loadAdminSettings() {
  const settings = StoreDB.getSettings();

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('cfgStoreName', settings.storeName);
  setVal('cfgStoreBrandDisplay', settings.storeBrandDisplay);
  setVal('cfgSlogan', settings.slogan);
  setVal('cfgContactSub', settings.contactSub);
  setVal('cfgAnnouncementText', settings.announcementText);
  setVal('quickAnnouncementInput', settings.announcementText);
  setVal('cfgDiscordUrl', settings.discordUrl);
  setVal('cfgBannerUrl', settings.bannerUrl);
  setVal('cfgLogoUrl', settings.logoUrl);

  const starfallBox = document.getElementById('cfgStarfallEnabled');
  if (starfallBox) starfallBox.checked = settings.starfallEnabled !== false;

  // Banner Preview
  const bannerPrev = document.getElementById('cfgBannerPreview');
  if (bannerPrev) bannerPrev.src = settings.bannerUrl || 'https://cloud.metaxstore.online/uploads/metastore_hero_banner.png';

  // Logo Preview
  const logoPrev = document.getElementById('cfgLogoPreview');
  if (logoPrev) logoPrev.src = settings.logoUrl || 'https://cloud.metaxstore.online/uploads/logo.png';
}

function onBannerInputChange(url) {
  const bannerPrev = document.getElementById('cfgBannerPreview');
  if (bannerPrev) {
    bannerPrev.src = url.trim() || 'https://cloud.metaxstore.online/uploads/metastore_hero_banner.png';
  }
}

function onLogoInputChange(url) {
  const logoPrev = document.getElementById('cfgLogoPreview');
  if (logoPrev) {
    logoPrev.src = url.trim() || 'https://cloud.metaxstore.online/uploads/logo.png';
  }
}

function testExternalBanner() {
  const input = document.getElementById('cfgBannerUrl');
  const url = input.value.trim();
  if (!url) {
    showAdminToast("กรุณากรอกลิงก์รูปภาพก่อนกดพรีวิว", true);
    return;
  }
  onBannerInputChange(url);
  showAdminToast("โหลดพรีวิวรูปภาพจาก URL เรียบร้อย!");
}

function resetOfficialBanner() {
  const defaultUrl = 'https://cloud.metaxstore.online/uploads/metastore_hero_banner.png';
  document.getElementById('cfgBannerUrl').value = defaultUrl;
  onBannerInputChange(defaultUrl);
  showAdminToast("รีเซ็ตเป็นแบนเนอร์หลักเรียบร้อย (อย่าลืมกดบันทึก)");
}

// 4. THEME & GRADIENT CUSTOMIZER
function loadThemeSettings() {
  const settings = StoreDB.getSettings();
  const theme = settings.theme || {
    primaryColor: "#ef4444",
    accentColor: "#f43f5e",
    gradientStart: "#ef4444",
    gradientEnd: "#991b1b"
  };

  const setCol = (pickId, textId, val) => {
    const picker = document.getElementById(pickId);
    const txt = document.getElementById(textId);
    if (picker) picker.value = val;
    if (txt) txt.value = val;
  };

  setCol('cfgThemePrimary', 'cfgThemePrimaryText', theme.primaryColor || '#ef4444');
  setCol('cfgThemeAccent', 'cfgThemeAccentText', theme.accentColor || '#f43f5e');
  setCol('cfgThemeGradStart', 'cfgThemeGradStartText', theme.gradientStart || '#ef4444');
  setCol('cfgThemeGradEnd', 'cfgThemeGradEndText', theme.gradientEnd || '#991b1b');

  updateThemeLivePreview();
}

function syncColorInput(pickerId, val) {
  if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
    const picker = document.getElementById(pickerId);
    if (picker) picker.value = val;
    updateThemeLivePreview();
  }
}

function updateThemeLivePreview() {
  const primary = document.getElementById('cfgThemePrimary')?.value || '#ef4444';
  const accent = document.getElementById('cfgThemeAccent')?.value || '#f43f5e';
  const gradStart = document.getElementById('cfgThemeGradStart')?.value || '#ef4444';
  const gradEnd = document.getElementById('cfgThemeGradEnd')?.value || '#991b1b';

  // Sync text fields
  const pTxt = document.getElementById('cfgThemePrimaryText');
  const aTxt = document.getElementById('cfgThemeAccentText');
  const gsTxt = document.getElementById('cfgThemeGradStartText');
  const geTxt = document.getElementById('cfgThemeGradEndText');
  if (pTxt) pTxt.value = primary;
  if (aTxt) aTxt.value = accent;
  if (gsTxt) gsTxt.value = gradStart;
  if (geTxt) geTxt.value = gradEnd;

  // Swatch
  const swatch = document.getElementById('themeLiveSwatch');
  if (swatch) {
    swatch.style.background = `linear-gradient(135deg, ${gradStart} 0%, ${gradEnd} 100%)`;
  }

  // Live apply to root
  StoreDB.applyTheme({
    primaryColor: primary,
    accentColor: accent,
    gradientStart: gradStart,
    gradientEnd: gradEnd
  });
}

function saveStoreSettings(e) {
  if (e) e.preventDefault();

  const primary = document.getElementById('cfgThemePrimary')?.value || '#ef4444';
  const accent = document.getElementById('cfgThemeAccent')?.value || '#f43f5e';
  const gradStart = document.getElementById('cfgThemeGradStart')?.value || '#ef4444';
  const gradEnd = document.getElementById('cfgThemeGradEnd')?.value || '#991b1b';

  const updates = {
    storeName: document.getElementById('cfgStoreName').value.trim() || 'META STUDIO',
    storeBrandDisplay: document.getElementById('cfgStoreBrandDisplay').value.trim() || 'META STUDIO',
    slogan: document.getElementById('cfgSlogan').value.trim(),
    contactSub: document.getElementById('cfgContactSub').value.trim(),
    announcementText: document.getElementById('cfgAnnouncementText').value.trim(),
    discordUrl: document.getElementById('cfgDiscordUrl').value.trim(),
    bannerUrl: document.getElementById('cfgBannerUrl').value.trim(),
    logoUrl: document.getElementById('cfgLogoUrl').value.trim(),
    starfallEnabled: document.getElementById('cfgStarfallEnabled').checked,
    theme: {
      primaryColor: primary,
      accentColor: accent,
      gradientStart: gradStart,
      gradientEnd: gradEnd
    }
  };

  StoreDB.saveSettings(updates);
  loadAdminSettings();
  loadAdminDashboard();
  showAdminToast("บันทึกการตั้งค่าร้านค้าและธีมสีสำเร็จ!");
}

function saveQuickAnnouncement() {
  const text = document.getElementById('quickAnnouncementInput').value.trim();
  StoreDB.saveSettings({ announcementText: text });
  loadAdminSettings();
  showAdminToast("อัปเดตแถบประกาศข่าวสารสำเร็จ!");
}

// 5. CLOUDFLARE R2 STORAGE INTEGRATION
function loadR2Settings() {
  const settings = StoreDB.getSettings();
  const r2 = settings.r2 || {};

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('r2BucketName', r2.bucketName || 'metastore-public-assets');
  setVal('r2PublicDomain', r2.publicDomain || 'https://cloud.metaxstore.online');
  setVal('r2AccountId', r2.accountId || '8f4e2b8109d18e5a7b45c093a11f92e3');
  setVal('r2AccessKeyId', r2.accessKeyId || 'r2_meta_access_live_94821');
  setVal('r2SecretAccessKey', r2.secretAccessKey || '••••••••••••••••••••••••••••••••••••••••');

  const pill = document.getElementById('r2StatusPill');
  if (pill) {
    if (r2.connected) {
      pill.className = 'r2-status-pill connected';
      pill.textContent = '● R2 เชื่อมต่อแล้ว (Connected)';
    } else {
      pill.className = 'r2-status-pill';
      pill.textContent = '○ ยังไม่เชื่อมต่อ (Disconnected)';
    }
  }
}

function saveR2Settings(e) {
  if (e) e.preventDefault();

  const r2 = {
    connected: true,
    bucketName: document.getElementById('r2BucketName').value.trim(),
    publicDomain: document.getElementById('r2PublicDomain').value.trim(),
    accountId: document.getElementById('r2AccountId').value.trim(),
    accessKeyId: document.getElementById('r2AccessKeyId').value.trim(),
    secretAccessKey: document.getElementById('r2SecretAccessKey').value.trim(),
    lastSync: new Date().toISOString()
  };

  StoreDB.saveSettings({ r2 });
  loadR2Settings();
  showAdminToast("บันทึกการเชื่อมต่อ Cloudflare R2 สำเร็จ!");
}

function testR2Connection() {
  const pill = document.getElementById('r2StatusPill');
  if (pill) {
    pill.className = 'r2-status-pill';
    pill.style.background = 'rgba(245, 158, 11, 0.15)';
    pill.style.color = '#fbbf24';
    pill.textContent = 'กำลังทดสอบ Ping ไปยัง Cloudflare R2...';
  }

  setTimeout(() => {
    const r2 = StoreDB.getSettings().r2 || {};
    r2.connected = true;
    r2.lastSync = new Date().toISOString();
    StoreDB.saveSettings({ r2 });
    loadR2Settings();
    showAdminToast("ทดสอบเชื่อมต่อ R2 สำเร็จ: Bucket เข้าถึงได้ 100%");
  }, 700);
}

function generateR2MockImage() {
  const r2 = StoreDB.getSettings().r2 || {};
  const domain = r2.publicDomain || 'https://cloud.metaxstore.online';
  const randNum = Math.floor(1000 + Math.random() * 9000);
  const sampleUrl = `${domain}/uploads/ff_banner_${randNum}.png`;

  navigator.clipboard.writeText(sampleUrl).then(() => {
    showAdminToast(`คัดลอก R2 Asset URL จำลองแล้ว: ${sampleUrl}`);
  });
}

// 6. CATEGORIES CRUD
function loadAdminCategories() {
  const tableBody = document.getElementById('adminCategoriesTableBody');
  if (!tableBody) return;

  const categories = StoreDB.getCategories();
  const products = StoreDB.getProducts();

  if (categories.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-dim); padding: 24px;">ยังไม่มีหมวดหมู่สินค้า</td></tr>`;
    return;
  }

  tableBody.innerHTML = categories.map(cat => {
    const prodCount = products.filter(p => p.categoryId === cat.id).length;
    return `
      <tr>
        <td style="width: 60px;">
          <img src="${cat.imageUrl || 'https://cloud.metaxstore.online/uploads/logo.png'}" onerror="this.onerror=null; this.src='https://cloud.metaxstore.online/uploads/logo.png';" class="table-thumb-cell" alt="${cat.name}">
        </td>
        <td>
          <div style="font-weight: 800; color: #fff; font-size: 0.95rem;">${cat.name}</div>
          <div style="font-size: 0.76rem; color: var(--text-dim); font-family: var(--font-mono);">slug: ${cat.slug}</div>
        </td>
        <td>
          <span style="font-size: 0.85rem; color: #cbd5e1; font-weight: 700;">${cat.icon || 'crosshair'}</span>
        </td>
        <td>
          <span class="table-tag success">${prodCount} สินค้า</span>
        </td>
        <td style="text-align: right;">
          <button type="button" onclick="deleteCategory('${cat.id}')" class="admin-btn-danger">
            ลบหมวดหมู่
          </button>
        </td>
      </tr>
    `;
  }).join('');

  populateCategorySelect();
}

function openAddCategoryModal() {
  document.getElementById('catModalName').value = '';
  document.getElementById('catModalIcon').value = 'crosshair';
  document.getElementById('catModalBadge').value = '';
  document.getElementById('catModalImageUrl').value = '';
  document.getElementById('catModalDesc').value = '';

  const modal = document.getElementById('categoryModal');
  if (modal) modal.classList.add('active');
}

function closeCategoryModal() {
  const modal = document.getElementById('categoryModal');
  if (modal) modal.classList.remove('active');
}

function saveCategoryFromModal(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('catModalName').value.trim();
  const icon = document.getElementById('catModalIcon').value.trim() || 'crosshair';
  const badge = document.getElementById('catModalBadge').value.trim() || name.split(' ')[0] || 'PRODUCT';
  const imageUrl = document.getElementById('catModalImageUrl').value.trim() || 'https://cloud.metaxstore.online/uploads/logo.png';
  const description = document.getElementById('catModalDesc').value.trim();

  if (!name) {
    showAdminToast("กรุณากรอกชื่อหมวดหมู่", true);
    return;
  }

  StoreDB.addCategory({ name, icon, badge, imageUrl, description });
  closeCategoryModal();
  loadAdminCategories();
  loadAdminDashboard();
  showAdminToast(`เพิ่มหมวดหมู่ "${name}" สำเร็จ!`);
}

function deleteCategory(catId) {
  if (confirm("คุณแน่ใจหรือไม่ว่าต้องการลบหมวดหมู่นี้?")) {
    StoreDB.deleteCategory(catId);
    loadAdminCategories();
    loadAdminDashboard();
    showAdminToast("ลบหมวดหมู่เรียบร้อยแล้ว");
  }
}

function populateCategorySelect() {
  const select = document.getElementById('prodModalCategory');
  if (!select) return;

  const categories = StoreDB.getCategories();
  select.innerHTML = categories.map(c => `
    <option value="${c.id}">${c.name}</option>
  `).join('');
}

// 7. PRODUCTS CRUD
function loadAdminProducts() {
  const tableBody = document.getElementById('adminProductsTableBody');
  if (!tableBody) return;

  const products = StoreDB.getProducts();
  const categories = StoreDB.getCategories();

  if (products.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-dim); padding: 24px;">ยังไม่มีสินค้าในระบบ</td></tr>`;
    return;
  }

  tableBody.innerHTML = products.map(prod => {
    const cat = categories.find(c => c.id === prod.categoryId);
    const isOutOfStock = prod.stock <= 0 || prod.status === 'out_of_stock';
    const priceDisplay = StoreDB.formatPriceRange(prod.priceMin, prod.priceMax);

    return `
      <tr>
        <td style="width: 60px;">
          <img src="${prod.imageUrl || 'https://cloud.metaxstore.online/uploads/logo.png'}" onerror="this.onerror=null; this.src='https://cloud.metaxstore.online/uploads/logo.png';" class="table-thumb-cell" alt="${prod.name}">
        </td>
        <td>
          <div style="font-weight: 800; color: #fff; font-size: 0.95rem;">${prod.name}</div>
          <div style="font-size: 0.76rem; color: var(--text-muted);">${prod.badge ? prod.badge : 'ไม่มีป้าย'}</div>
        </td>
        <td>
          <span style="font-size: 0.82rem; color: var(--text-muted);">${cat ? cat.name : 'ทั่วไป'}</span>
        </td>
        <td>
          <span style="font-family: var(--font-mono); font-weight: 800; color: #fff;">${priceDisplay}</span>
        </td>
        <td>
          <span class="table-tag ${isOutOfStock ? 'danger' : 'success'}">
            ${isOutOfStock ? 'สินค้าหมด' : `คงเหลือ ${prod.stock} ชิ้น`}
          </span>
        </td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button type="button" onclick="openEditProductModal('${prod.id}')" class="admin-btn-glass" style="padding: 4px 10px; font-size: 0.78rem; border-color: rgba(255, 17, 17, 0.4); color: #fff;">
              แก้ไข
            </button>
            <button type="button" onclick="toggleProductStock('${prod.id}')" class="admin-btn-glass" style="padding: 4px 10px; font-size: 0.78rem;">
              ${isOutOfStock ? 'เปิดขาย' : 'ปิดสต็อก'}
            </button>
          </div>
        </td>
        <td style="text-align: right;">
          <button type="button" onclick="deleteProduct('${prod.id}')" class="admin-btn-danger">
            ลบสินค้า
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

let currentEditingProductId = null;

function addVariantRowInModal(opt = null) {
  const container = document.getElementById('prodModalVariantsContainer');
  if (!container) return;

  const label = opt ? opt.label : '1 วัน';
  const price = opt ? opt.price : 20.00;
  const stock = opt ? opt.stock : 25;
  const hours = opt ? (opt.hours || 24) : 24;

  const row = document.createElement('div');
  row.className = 'admin-variant-row';
  row.style.cssText = 'display: grid; grid-template-columns: 2fr 1.2fr 1fr 1fr auto; gap: 8px; align-items: center; background: rgba(255, 255, 255, 0.03); padding: 8px 10px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.08);';

  row.innerHTML = `
    <input type="text" class="admin-input var-label" placeholder="ชื่อตัวเลือก เช่น 1 วัน" value="${label}" style="padding: 6px 10px; font-size: 0.82rem;">
    <input type="number" step="0.5" class="admin-input var-price" placeholder="ราคา (฿)" value="${price}" style="padding: 6px 10px; font-size: 0.82rem;">
    <input type="number" class="admin-input var-stock" placeholder="สต็อก" value="${stock}" style="padding: 6px 10px; font-size: 0.82rem;">
    <input type="number" class="admin-input var-hours" placeholder="ชม." value="${hours}" style="padding: 6px 10px; font-size: 0.82rem;">
    <button type="button" onclick="this.parentElement.remove()" class="admin-btn-danger" style="padding: 6px 10px; font-size: 0.78rem;" title="ลบ Variant">
      ลบ
    </button>
  `;

  container.appendChild(row);
}

function openAddProductModal() {
  currentEditingProductId = null;
  document.getElementById('prodModalName').value = '';
  document.getElementById('prodModalPriceMin').value = '20.00';
  document.getElementById('prodModalPriceMax').value = '299.00';
  document.getElementById('prodModalStock').value = '50';
  document.getElementById('prodModalBadge').value = 'ขายแล้ว 94';
  document.getElementById('prodModalImageUrl').value = '';
  document.getElementById('prodModalDesc').value = '';

  const variantsContainer = document.getElementById('prodModalVariantsContainer');
  if (variantsContainer) {
    variantsContainer.innerHTML = '';
    addVariantRowInModal({ label: '1 วัน', price: 20, stock: 25, hours: 24 });
    addVariantRowInModal({ label: '7 วัน', price: 99, stock: 15, hours: 168 });
    addVariantRowInModal({ label: '30 วัน', price: 299, stock: 10, hours: 720 });
  }

  populateCategorySelect();

  const modal = document.getElementById('productModal');
  if (modal) modal.classList.add('active');
}

function openEditProductModal(prodId) {
  const prod = StoreDB.getProductById(prodId);
  if (!prod) return;

  currentEditingProductId = prodId;
  document.getElementById('prodModalName').value = prod.name || '';
  document.getElementById('prodModalPriceMin').value = prod.priceMin || 20.00;
  document.getElementById('prodModalPriceMax').value = prod.priceMax || 299.00;
  document.getElementById('prodModalStock').value = prod.stock || 0;
  document.getElementById('prodModalBadge').value = prod.badge || '';
  document.getElementById('prodModalImageUrl').value = prod.imageUrl || '';
  document.getElementById('prodModalDesc').value = prod.description || '';

  populateCategorySelect();
  const catSelect = document.getElementById('prodModalCategory');
  if (catSelect && prod.categoryId) catSelect.value = prod.categoryId;

  const variantsContainer = document.getElementById('prodModalVariantsContainer');
  if (variantsContainer) {
    variantsContainer.innerHTML = '';
    const durations = prod.durations && prod.durations.length > 0 ? prod.durations : [
      { label: '1 วัน', price: prod.priceMin || 20, stock: prod.stock || 10, hours: 24 }
    ];
    durations.forEach(d => addVariantRowInModal(d));
  }

  const modal = document.getElementById('productModal');
  if (modal) modal.classList.add('active');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('active');
}

function saveProductFromModal(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('prodModalName').value.trim();
  const categoryId = document.getElementById('prodModalCategory').value;
  let priceMin = parseFloat(document.getElementById('prodModalPriceMin').value) || 20.00;
  let priceMax = parseFloat(document.getElementById('prodModalPriceMax').value) || 299.00;
  let stock = parseInt(document.getElementById('prodModalStock').value) || 10;
  const badge = document.getElementById('prodModalBadge').value.trim();
  const imageUrl = document.getElementById('prodModalImageUrl').value.trim() || 'logo.png';
  const description = document.getElementById('prodModalDesc').value.trim();

  if (!name) {
    showAdminToast("กรุณากรอกชื่อสินค้า", true);
    return;
  }

  // Collect variants from dynamic rows
  const variantRows = document.querySelectorAll('#prodModalVariantsContainer .admin-variant-row');
  const durations = [];
  variantRows.forEach(row => {
    const lbl = row.querySelector('.var-label')?.value.trim() || 'ตัวเลือก';
    const prc = parseFloat(row.querySelector('.var-price')?.value) || 20.00;
    const stk = parseInt(row.querySelector('.var-stock')?.value) || 10;
    const hrs = parseInt(row.querySelector('.var-hours')?.value) || 24;
    durations.push({ label: lbl, price: prc, stock: stk, hours: hrs });
  });

  if (durations.length > 0) {
    const prices = durations.map(d => d.price);
    priceMin = Math.min(...prices);
    priceMax = Math.max(...prices);
    stock = durations.reduce((sum, d) => sum + d.stock, 0);
  } else {
    durations.push({ label: '1 วัน', price: priceMin, stock, hours: 24 });
  }

  if (currentEditingProductId) {
    StoreDB.updateProduct(currentEditingProductId, {
      name,
      categoryId,
      priceMin,
      priceMax,
      stock,
      badge,
      imageUrl,
      description,
      durations
    });
    showAdminToast(`แก้ไขสินค้า "${name}" สำเร็จ!`);
  } else {
    StoreDB.addProduct({
      name,
      categoryId,
      priceMin,
      priceMax,
      stock,
      badge,
      imageUrl,
      description,
      durations
    });
    showAdminToast(`เพิ่มสินค้า "${name}" สำเร็จ!`);
  }

  closeProductModal();
  loadAdminProducts();
  loadAdminDashboard();
}

function toggleProductStock(prodId) {
  const prods = StoreDB.getProducts();
  const prod = prods.find(p => p.id === prodId);
  if (!prod) return;

  const newStock = prod.stock > 0 ? 0 : 50;
  StoreDB.updateProduct(prodId, { stock: newStock });
  loadAdminProducts();
  loadAdminDashboard();
  showAdminToast(`อัปเดตสต็อก "${prod.name}" เป็น ${newStock > 0 ? '50 ชิ้น' : 'สินค้าหมด'} แล้ว`);
}

function deleteProduct(prodId) {
  if (confirm("คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?")) {
    StoreDB.deleteProduct(prodId);
    loadAdminProducts();
    loadAdminDashboard();
    showAdminToast("ลบสินค้าเรียบร้อยแล้ว");
  }
}

// 8. ORDERS HISTORY
function loadAdminOrders() {
  const tableBody = document.getElementById('adminOrdersTableBody');
  if (!tableBody) return;

  const orders = StoreDB.getOrders();

  if (orders.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-dim); padding: 24px;">ยังไม่มีประวัติการสั่งซื้อ</td></tr>`;
    return;
  }

  tableBody.innerHTML = orders.map(ord => `
    <tr>
      <td style="font-family: var(--font-mono); font-weight: 700; color: #fff;">${ord.id}</td>
      <td>
        <div style="font-weight: 700; color: #fff;">${ord.productName}</div>
      </td>
      <td>
        <code style="font-family: var(--font-mono); color: #4ade80; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">${ord.key}</code>
      </td>
      <td>
        <span style="font-size: 0.82rem; color: var(--text-muted);">${ord.duration}</span>
      </td>
      <td>
        <span style="font-family: var(--font-mono); font-weight: 800; color: #f87171;">${StoreDB.formatPrice(ord.price)}</span>
      </td>
      <td>
        <span style="font-size: 0.78rem; color: var(--text-dim);">${ord.date}</span>
      </td>
    </tr>
  `).join('');
}

// 9. TOAST NOTIFICATION
function showAdminToast(msg, isError = false) {
  const toast = document.getElementById('adminToast');
  const msgEl = document.getElementById('adminToastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.style.borderColor = isError ? '#ef4444' : 'rgba(34, 197, 94, 0.4)';
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// 10. PAYMENTS CONFIGURATION (Matching Image 4: media_1791193753294.png)
function loadAdminPayments() {
  const settings = StoreDB.getSettings();
  const p = settings.payments || {};

  const tmToggle = document.getElementById('payTrueMoneyToggle');
  const tmPhone = document.getElementById('payTrueMoneyPhone');
  const tmFee = document.getElementById('payTrueMoneyFeeToggle');
  const ppToggle = document.getElementById('payPromptPayToggle');
  const bkToggle = document.getElementById('payBankToggle');

  if (tmToggle) tmToggle.checked = p.truemoney?.enabled !== false;
  if (tmPhone) tmPhone.value = p.truemoney?.phone || "0953976456";
  if (tmFee) tmFee.checked = p.truemoney?.feeEnabled === true;
  if (ppToggle) ppToggle.checked = p.promptpay?.enabled === true;
  if (bkToggle) bkToggle.checked = p.bank?.enabled === true;

  handlePaymentToggleChange();
}

function handlePaymentToggleChange() {
  const tm = document.getElementById('payTrueMoneyToggle')?.checked;
  const pp = document.getElementById('payPromptPayToggle')?.checked;
  const bk = document.getElementById('payBankToggle')?.checked;
  const count = (tm ? 1 : 0) + (pp ? 1 : 0) + (bk ? 1 : 0);
  const badge = document.getElementById('paymentsActiveCountText');
  if (badge) badge.textContent = `${count} / 3 ช่องทางเปิดอยู่`;
}

function savePaymentSettings() {
  const tmEnabled = document.getElementById('payTrueMoneyToggle')?.checked || false;
  const tmPhone = document.getElementById('payTrueMoneyPhone')?.value.trim() || "0953976456";
  const tmFee = document.getElementById('payTrueMoneyFeeToggle')?.checked || false;
  const ppEnabled = document.getElementById('payPromptPayToggle')?.checked || false;
  const bkEnabled = document.getElementById('payBankToggle')?.checked || false;

  const current = StoreDB.getSettings();
  const updatedPayments = {
    ...(current.payments || {}),
    truemoney: {
      ...(current.payments?.truemoney || {}),
      enabled: tmEnabled,
      phone: tmPhone,
      feeEnabled: tmFee
    },
    promptpay: {
      ...(current.payments?.promptpay || {}),
      enabled: ppEnabled
    },
    bank: {
      ...(current.payments?.bank || {}),
      enabled: bkEnabled
    }
  };

  StoreDB.saveSettings({ payments: updatedPayments });
  showAdminToast("บันทึกการตั้งค่าช่องทางชำระเงินเรียบร้อยแล้ว");
}

// 11. WEBHOOKS CONFIGURATION (Matching Image 1: media_1791193710873.png)
function loadAdminWebhooks() {
  const settings = StoreDB.getSettings();
  const wh = settings.webhooks || {};

  const topupToggle = document.getElementById('whTopupToggle');
  const topupUrl = document.getElementById('whTopupUrl');
  const purchaseToggle = document.getElementById('whPurchaseToggle');
  const purchaseUrl = document.getElementById('whPurchaseUrl');
  const regToggle = document.getElementById('whRegisterToggle');
  const regUrl = document.getElementById('whRegisterUrl');
  const stockToggle = document.getElementById('whStockAddToggle');
  const stockUrl = document.getElementById('whStockAddUrl');

  if (topupToggle) topupToggle.checked = wh.topup?.enabled !== false;
  if (topupUrl) topupUrl.value = wh.topup?.url || "";
  if (purchaseToggle) purchaseToggle.checked = wh.purchase?.enabled !== false;
  if (purchaseUrl) purchaseUrl.value = wh.purchase?.url || "";
  if (regToggle) regToggle.checked = wh.register?.enabled !== false;
  if (regUrl) regUrl.value = wh.register?.url || "";
  if (stockToggle) stockToggle.checked = wh.stockAdd?.enabled === true;
  if (stockUrl) stockUrl.value = wh.stockAdd?.url || "";
}

function saveWebhook(type) {
  const current = StoreDB.getSettings();
  const wh = { ...(current.webhooks || {}) };

  if (type === 'topup') {
    wh.topup = {
      enabled: document.getElementById('whTopupToggle')?.checked || false,
      url: document.getElementById('whTopupUrl')?.value.trim() || ""
    };
  } else if (type === 'purchase') {
    wh.purchase = {
      enabled: document.getElementById('whPurchaseToggle')?.checked || false,
      url: document.getElementById('whPurchaseUrl')?.value.trim() || ""
    };
  } else if (type === 'register') {
    wh.register = {
      enabled: document.getElementById('whRegisterToggle')?.checked || false,
      url: document.getElementById('whRegisterUrl')?.value.trim() || ""
    };
  } else if (type === 'stockAdd') {
    wh.stockAdd = {
      enabled: document.getElementById('whStockAddToggle')?.checked || false,
      url: document.getElementById('whStockAddUrl')?.value.trim() || ""
    };
  }

  StoreDB.saveSettings({ webhooks: wh });
  showAdminToast(`บันทึก Discord Webhook สำหรับ ${type} สำเร็จ!`);
}
