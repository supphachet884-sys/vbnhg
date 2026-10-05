// @ts-nocheck
// ==========================================================================
// Meta Store — Storefront Engine & Starfall System (home.js)
// - Strictly ZERO EMOJIS across all text, DOM, and notifications
// - 100% Identical Navbar to index.html (Clean, Uncluttered)
// - Multilingual Switcher: TH (Noto Sans Thai) / EN (Roboto Flex) / PT
// - Wide Category Banner Cards with Hover Animations (media_1791116585693.png)
// - Clicking "ซื้อเลย" navigates to product.html?id=... (media_1791116381417.png)
// - Realtime StoreDB Synchronization & Cloud Vault
// ==========================================================================

// 1. STORE SYSTEM INITIALIZATION

// 2. MULTI-LANGUAGE DICTIONARY (TH / EN / PT)
const homeI18n = {
  th: {
    pageTitle: "META STUDIO — ร้านค้าโปร Free Fire อันดับ 1",
    navStore: "ร้านค้าสินค้า",
    navDocs: "คู่มือการใช้งาน",
    lblBalance: "ยอดเงินคงเหลือ:",
    menuWallet: "เติมเงิน COIN",
    menuOrders: "ประวัติการสั่งซื้อ",
    menuAdmin: "จัดการหลังบ้าน (Admin)",
    menuLogout: "ออกจากระบบ",
    heroWelcomePrefix: "ยินดีต้อนรับสู่ร้าน",
    heroContactSub: "มีปัญหาสามารถติดต่อแอดมินในดิสได้เลย",
    btnGetStarted: "เริ่มต้นใช้งาน",
    btnHowTo: "วิธีการสั่งซื้อ",
    statUsers: "ผู้ใช้งาน",
    unitUsers: "คน",
    statProducts: "สินค้า",
    unitItems: "รายการ",
    statStock: "คลังสินค้า",
    unitPieces: "ชิ้น",
    statSold: "ขายแล้ว",
    whyChooseTitle: "ทำไมต้องเลือก",
    benefit1Title: "ปลอดภัย รวดเร็ว",
    benefit1Desc: "ใส่ใจในคุณภาพของสินค้าและบริการ ด้วยระบบรักษาความปลอดภัยที่ทันสมัย พร้อมการบริการที่รวดเร็วและเชื่อถือได้ตลอด 24 ชั่วโมง",
    benefit2Title: "บริการลูกค้า",
    benefit2Desc: "ทีมงานมืออาชีพพร้อมให้คำปรึกษาและแก้ไขปัญหาตลอด 24 ชั่วโมง ด้วยใจที่ใส่ใจในทุกรายละเอียดของลูกค้า",
    benefit3Title: "จัดส่งอัตโนมัติ 24 ชม.",
    benefit3Desc: "ระบบออโต้ทันใจ ได้รับคีย์ใช้งานพร้อมคู่มือติดตั้งทันทีหลังจากชำระเงินสำเร็จ รองรับทุกอุปกรณ์",
    secCategories: "หมวดหมู่สินค้า",
    categoryPrefix: "หมวดหมู่ :",
    viewAll: "ดูทั้งหมด",
    btnBuyNow: "ซื้อเลย >",
    outOfStock: "สินค้าหมด",
    inStockPrefix: "พร้อมขาย - คลัง",
    footerText: "All Rights Reserved. แพลตฟอร์มโปรแกรมช่วยเล่นอันดับ 1 ของเมืองไทย",
    modalBuyTitle: "สั่งซื้อสินค้า",
    lblDurationChoice: "เลือกระยะเวลาการใช้งาน",
    lblYourBalance: "ยอดเงินคงเหลือของคุณ:",
    lblTotalToPay: "ยอดชำระทั้งหมด:",
    btnConfirmBuy: "ยืนยันการสั่งซื้อ",
    orderCompleteTitle: "การสั่งซื้อเสร็จสมบูรณ์!",
    orderCompleteDesc: "คีย์ของคุณพร้อมใช้งานแล้ว กรุณาคัดลอกและบันทึกไว้",
    btnCopyKey: "คัดลอกคีย์ใบอนุญาต",
    btnClose: "ปิดหน้าต่าง",
    btnViewOrders: "ดูประวัติสั่งซื้อ",
    modalWalletTitle: "เติมเงินเข้าสู่ระบบ (Top Up COIN)",
    lblCurrentCoin: "ยอดเงิน COIN คงเหลือของคุณ",
    lblSelectTopUp: "เลือกจำนวนเงินที่ต้องการเติม",
    lblCustomTopUp: "หรือระบุจำนวนเงินด้วยตนเอง (บาท)",
    btnTopUpPromptPay: "เติมเงินผ่าน QR PromptPay ทันที",
    modalOrdersTitle: "ประวัติการสั่งซื้อ & คลังคีย์ของคุณ",
    modalHowToTitle: "วิธีการสั่งซื้อ & การติดตั้งใช้งาน",
    howToStep1Title: "เลือกซื้อสินค้าและแพ็กเกจที่ต้องการ",
    howToStep1Desc: "เลือกสินค้าจากหน้าร้าน เลือกระยะเวลาที่ต้องการใช้งาน จากนั้นกด สั่งซื้อสินค้า",
    howToStep2Title: "รับคีย์ใบอนุญาตทันทีอัตโนมัติ",
    howToStep2Desc: "ระบบจะส่งมอบ License Key ให้ทันทีใน 5ms หรือตรวจสอบได้ใน ประวัติการสั่งซื้อ ตลอดเวลา",
    howToStep3Title: "เปิดโปรแกรม Run as Administrator",
    howToStep3Desc: "ปิดแอนตี้ไวรัส รันโปรแกรมในฐานะผู้ดูแลระบบ วางคีย์ที่ได้รับ แล้วกด Inject เข้าสู่เกมได้ทันที ปลอดภัย 100%",
    btnUnderstood: "เข้าใจแล้ว",
    toastCopied: "คัดลอกคีย์เรียบร้อยแล้ว!",
    toastTopUpSuccess: "เติมเงินสำเร็จ! ยอดเงินเพิ่มเข้าสู่ระบบแล้ว"
  },
  en: {
    pageTitle: "META STUDIO — #1 Undetected Cheats & Store",
    navStore: "Store",
    navDocs: "User Guide",
    lblBalance: "Coin Balance:",
    menuWallet: "Top Up COIN",
    menuOrders: "Order History",
    menuAdmin: "Admin Panel",
    menuLogout: "Sign Out",
    heroWelcomePrefix: "Welcome to",
    heroContactSub: "Need assistance? Contact our team on Discord anytime.",
    btnGetStarted: "Get Started",
    btnHowTo: "How to Order",
    statUsers: "Active Users",
    unitUsers: "Users",
    statProducts: "Products",
    unitItems: "Items",
    statStock: "Stock Vault",
    unitPieces: "Keys",
    statSold: "Delivered",
    whyChooseTitle: "Why Choose",
    benefit1Title: "Safe & Undetected",
    benefit1Desc: "Committed to product and service excellence with modern high-grade security, rapid delivery, and dependable 24/7 support.",
    benefit2Title: "24/7 Support",
    benefit2Desc: "Professional support team standing by around the clock to ensure seamless game injection and assistance.",
    benefit3Title: "Instant 5ms Dispatch",
    benefit3Desc: "Fully automated dispatch system gives you license keys and loader guides immediately after payment.",
    secCategories: "Product Categories",
    categoryPrefix: "Category :",
    viewAll: "View All",
    btnBuyNow: "Buy Now >",
    outOfStock: "Sold Out",
    inStockPrefix: "In Stock - Vault",
    footerText: "All Rights Reserved. Leading software and game enhancement provider.",
    modalBuyTitle: "Purchase Product",
    lblDurationChoice: "Select License Duration",
    lblYourBalance: "Your Balance:",
    lblTotalToPay: "Total Due:",
    btnConfirmBuy: "Confirm Purchase",
    orderCompleteTitle: "Order Completed Successfully!",
    orderCompleteDesc: "Your license key is ready to use. Copy and keep it safe.",
    btnCopyKey: "Copy License Key",
    btnClose: "Close",
    btnViewOrders: "View Orders",
    modalWalletTitle: "Top Up Account Balance",
    lblCurrentCoin: "Current COIN Balance",
    lblSelectTopUp: "Select Top-Up Package",
    lblCustomTopUp: "Or enter custom amount (THB)",
    btnTopUpPromptPay: "Top Up with QR PromptPay",
    modalOrdersTitle: "Your Orders & Vault Keys",
    modalHowToTitle: "How to Order & Quick Setup",
    howToStep1Title: "Select your desired cheat package",
    howToStep1Desc: "Choose the product and duration tier from our catalog and proceed to checkout.",
    howToStep2Title: "Receive instant license key",
    howToStep2Desc: "The automated Cloud Vault dispenses your key in 5ms, also recorded in your order history.",
    howToStep3Title: "Run Loader as Administrator",
    howToStep3Desc: "Disable antivirus, launch loader as Admin, paste your key, and inject smoothly into your game.",
    btnUnderstood: "Got It",
    toastCopied: "License key copied to clipboard!",
    toastTopUpSuccess: "Top up successful! Coins added to your account."
  },
  pt: {
    pageTitle: "META STUDIO — #1 Loja Oficial de Cheats Indetectáveis",
    navStore: "Loja",
    navDocs: "Guia de Uso",
    lblBalance: "Saldo:",
    menuWallet: "Recarregar COIN",
    menuOrders: "Histórico de Pedidos",
    menuAdmin: "Painel Admin",
    menuLogout: "Sair",
    heroWelcomePrefix: "Bem-vindo à",
    heroContactSub: "Dúvidas ou suporte? Entre em contato no Discord a qualquer momento.",
    btnGetStarted: "Comprar Agora",
    btnHowTo: "Como Comprar",
    statUsers: "Usuários Ativos",
    unitUsers: "Pessoas",
    statProducts: "Produtos",
    unitItems: "Itens",
    statStock: "Estoque",
    unitPieces: "Unid.",
    statSold: "Vendidos",
    whyChooseTitle: "Por Que Escolher a",
    benefit1Title: "Seguro e Rápido",
    benefit1Desc: "Qualidade incomparável com proteção avançada contra banimentos e atendimento 24/7.",
    benefit2Title: "Suporte Total",
    benefit2Desc: "Equipe especializada pronta para ajudar a qualquer momento com sua instalação e dúvidas.",
    benefit3Title: "Entrega Automática",
    benefit3Desc: "Receba sua chave de licença e guia de download na mesma hora após o pagamento.",
    secCategories: "Categorias de Produtos",
    categoryPrefix: "Categoria :",
    viewAll: "Ver Tudo",
    btnBuyNow: "Comprar >",
    outOfStock: "Esgotado",
    inStockPrefix: "Disponível - Estoque",
    footerText: "Todos os direitos reservados. Plataforma número 1 em cheats e software.",
    modalBuyTitle: "Finalizar Pedido",
    lblDurationChoice: "Escolha a Duração",
    lblYourBalance: "Seu Saldo:",
    lblTotalToPay: "Total a Pagar:",
    btnConfirmBuy: "Confirmar Pedido",
    orderCompleteTitle: "Pedido Concluído com Sucesso!",
    orderCompleteDesc: "Sua chave de licença está pronta para uso. Copie e guarde em segurança.",
    btnCopyKey: "Copiar Chave de Licença",
    btnClose: "Fechar",
    btnViewOrders: "Ver Pedidos",
    modalWalletTitle: "Recarregar Saldo COIN",
    lblCurrentCoin: "Seu Saldo Atual",
    lblSelectTopUp: "Selecione o Valor",
    lblCustomTopUp: "Ou digite o valor desejado (BRL)",
    btnTopUpPromptPay: "Pagar via Pix / QR Code",
    modalOrdersTitle: "Seus Pedidos e Chaves",
    modalHowToTitle: "Como Comprar e Instalar",
    howToStep1Title: "Escolha o pacote desejado",
    howToStep1Desc: "Navegue pela loja, selecione o produto e a duração ideal para seu estilo de jogo.",
    howToStep2Title: "Receba a chave instantaneamente",
    howToStep2Desc: "O sistema Cloud Vault entrega sua chave em 5ms, com acesso pelo seu histórico.",
    howToStep3Title: "Execute como Administrador",
    howToStep3Desc: "Desative antivírus, abra o loader como Administrador, insira a chave e injete com segurança.",
    btnUnderstood: "Entendido",
    toastCopied: "Chave copiada para a área de transferência!",
    toastTopUpSuccess: "Recarga concluída com sucesso!"
  }
};

let currentSiteLang = localStorage.getItem('meta_lang') || localStorage.getItem('aimbet_lang') || 'th';
let langFirstRun = true;
const HOME_LANG_ANIM_SELECTOR = '.navbar-pill, .nav-lang-segment, .nav-item-link, .btn-nav-ghost, .btn-nav-cta, .coin-balance-pill, .hero-pill-badge, .hero-title-main, .hero-sub-text, .btn-hero-primary, .btn-hero-glass, .stat-metric-card, .stat-label-row, .stat-value-row, .stat-unit-suffix, .section-heading-text, .benefit-card-unit, .benefit-content h4, .benefit-content p, .category-banner-card, .category-card-title, .category-card-count, .category-card-link, .product-card, .card-prod-title, .btn-card-buy, .footer-copy-text';

// FLIP Liquid Animation Engine (100% Identical to index.html & landing.js)
function setSiteLanguage(lang) {
  if (langFirstRun || !document.body.animate) {
    langFirstRun = false;
    applyHomeLanguage(lang);
    return;
  }

  // 1. Measure First (Bounding Rects)
  const els = Array.from(document.querySelectorAll(HOME_LANG_ANIM_SELECTOR));
  const before = els.map(el => {
    const r = el.getBoundingClientRect();
    return { w: r.width, h: r.height };
  });

  // 2. Apply Text and DOM Mutations
  applyHomeLanguage(lang);

  // 3. Play FLIP Transitions
  els.forEach((el, i) => {
    const r = el.getBoundingClientRect();
    const b = before[i];
    const dur = 480, easing = 'cubic-bezier(0.22, 1, 0.36, 1)';
    const isText = el.matches('.hero-title-main, .hero-sub-text, .section-heading-text, .benefit-content h4, .benefit-content p, .card-prod-title, .footer-copy-text');

    if (isText) {
      el.animate(
        [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: dur, easing }
      );
      return;
    }

    const dw = Math.abs(r.width - b.w) > 0.5;
    const dh = Math.abs(r.height - b.h) > 0.5;
    if (dw || dh) {
      const from = {}, to = {};
      if (dw) { from.width = b.w + 'px'; to.width = r.width + 'px'; }
      if (dh) { from.height = b.h + 'px'; to.height = r.height + 'px'; }
      const prevOverflow = el.style.overflow;
      el.style.overflow = 'hidden';
      const a = el.animate([from, to], { duration: dur, easing });
      a.onfinish = a.oncancel = () => { el.style.overflow = prevOverflow; };
    }

    Array.from(el.children).forEach(c => {
      if (c.tagName === 'SPAN' || c.tagName === 'BUTTON' || c.classList.contains('crimson-part') || c.tagName === 'STRONG') {
        c.animate(
          [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: dur, easing }
        );
      }
    });

    if (!el.children.length) {
      el.animate([{ opacity: 0.3 }, { opacity: 1 }], { duration: dur, easing });
    }
  });
}

function applyHomeLanguage(lang) {
  currentSiteLang = lang;
  localStorage.setItem('meta_lang', lang);
  localStorage.setItem('aimbet_lang', lang);

  // Update active pill button
  ['th', 'en', 'pt'].forEach(l => {
    const btn = document.getElementById('btnLang' + l.toUpperCase());
    if (btn) btn.classList.toggle('active', l === lang);
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

  const dict = homeI18n[lang] || homeI18n.th;
  document.title = dict.pageTitle;

  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-render categories & catalog with localized labels
  renderCategoriesShowcase();
  renderCatalog();
}

// 3. STORE INITIALIZATION & STATE
let selectedProduct = null;
let selectedDurationIndex = 0;
let activeCategoryFilter = null;

document.addEventListener('DOMContentLoaded', () => {
  StoreDB.applyTheme();
  checkUrlCategoryFilter();
  loadStoreData();
  setSiteLanguage(currentSiteLang);
  checkUrlAuthHash();

  // Listen for real-time updates from admin
  window.addEventListener('meta_store_settings_updated', () => loadStoreData());
  window.addEventListener('meta_store_products_updated', () => {
    renderCategoriesShowcase();
    renderCatalog();
  });
  window.addEventListener('meta_store_categories_updated', () => {
    renderCategoriesShowcase();
    renderCatalog();
  });
  window.addEventListener('meta_user_updated', (e) => updateWalletDisplay(e.detail));
});

function checkUrlCategoryFilter() {
  const params = new URLSearchParams(window.location.search);
  const c = params.get('c') || params.get('cat');
  if (c) {
    const categories = StoreDB.getCategories();
    const found = categories.find(cat => cat.slug === c || cat.id === c || (cat.slug && cat.slug.toLowerCase() === c.toLowerCase()));
    if (found) {
      activeCategoryFilter = found.id;
    }
  }
}

function loadStoreData() {
  const settings = StoreDB.getSettings();
  const user = StoreDB.getUser();

  // Branding (Matching media_1791189088357.png)
  const brandName = document.getElementById('navbarBrandName');
  if (brandName) brandName.textContent = settings.storeName || "MetaStore";

  const heroBrand = document.getElementById('heroBrandHighlight');
  if (heroBrand) heroBrand.textContent = settings.storeBrandDisplay || "Meta Store";

  const benefitsBrand = document.getElementById('benefitsBrandSpan');
  if (benefitsBrand) benefitsBrand.textContent = settings.storeName || "MetaStore";

  const footerBrand = document.getElementById('footerBrandName');
  if (footerBrand) footerBrand.textContent = settings.storeName || "MetaStore";

  const pillText = document.getElementById('heroPillText');
  if (pillText) pillText.textContent = settings.storeName || "MetaStore";

  // Logo images (fallbacks to local logo.png)
  document.querySelectorAll('.store-dynamic-logo').forEach(img => {
    img.src = settings.logoUrl || 'logo.png';
    img.onerror = () => { img.onerror = null; img.src = 'logo.png'; };
  });

  // Ticker marquee (Clean SVG flame, NO emoji)
  renderMarquee(settings.announcementText);

  // Hero Banner image (managed from admin via URL, fallback to local banner_default.png)
  const heroBanner = document.getElementById('heroBannerImg');
  if (heroBanner) {
    heroBanner.src = settings.bannerUrl || 'banner_default.png';
    heroBanner.onerror = () => { heroBanner.onerror = null; heroBanner.src = 'banner_default.png'; };
  }

  // Stats Counters with smooth roll-up
  if (settings.stats) {
    animateStatCounter('statCountUsers', settings.stats.users || 1030);
    animateStatCounter('statCountProds', settings.stats.products || 23);
    animateStatCounter('statCountStock', settings.stats.stock || 1779);
    animateStatCounter('statCountSales', settings.stats.salesCount || 411);
  }

  // Update user display
  updateWalletDisplay(user);

  // Render Category Cards & Catalog
  renderCategoriesShowcase();
  renderCatalog();
}

function animateStatCounter(elementId, targetValue, duration = 1000) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const start = 0;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const val = Math.floor(start + (targetValue - start) * easeProgress);
    el.textContent = val.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = targetValue.toLocaleString();
    }
  }
  requestAnimationFrame(step);
}

function renderMarquee(text) {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const safeText = text || 'ยินดีต้อนรับสู่ร้านค้า META STUDIO บริการปลอดภัย 100% สอบถามทีมงานได้ตลอด 24 ชั่วโมง';
  
  let html = '';
  for (let i = 0; i < 8; i++) {
    html += `
      <div class="ticker-item">
        <svg class="fire-icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="#ff1111"><path d="M12 23c6.075 0 8-5 8-10 0-4.97-4-8.5-4-8.5s-.5 3-2 3.5c-1.5.5-2.5-1.5-2.5-3.5 0-2.5-3-4.5-3-4.5s1 4-1 6.5C6 8.5 5 11 5 13c0 5 1.925 10 7 10z"/></svg>
        <span>${safeText}</span>
      </div>
    `;
  }
  track.innerHTML = html;
}

function updateWalletDisplay(user) {
  const balNum = (user && user.balance) || 0;
  const formattedBal = StoreDB.formatPrice(balNum).replace('฿', '');

  const balanceEl = document.getElementById('coinBalanceDisplay');
  if (balanceEl) {
    balanceEl.textContent = formattedBal;
  }

  const dropdownBalEl = document.getElementById('dropdownCoinDisplay');
  if (dropdownBalEl) {
    dropdownBalEl.textContent = `${formattedBal} ฿`;
  }

  const dropdownName = document.getElementById('dropdownUserName');
  const dropdownRole = document.getElementById('dropdownUserRole');
  if (dropdownName) dropdownName.textContent = user.username || 'meta_user';
  if (dropdownRole) dropdownRole.textContent = StoreDB.isAdmin() ? 'Administrator' : (user.role || 'VIP Member');

  // Strict role gate: hide admin buttons if not admin
  document.querySelectorAll('.admin-btn').forEach(b => {
    b.style.display = StoreDB.isAdmin() ? 'flex' : 'none';
  });

  const guestGroup = document.getElementById('navGuestActions');
  const userGroup = document.getElementById('userMenuWrapper');
  const coinPill = document.getElementById('navCoinPill');

  const isLoggedIn = user && user.isLoggedIn;

  if (isLoggedIn) {
    if (guestGroup) guestGroup.style.display = 'none';
    if (userGroup) userGroup.style.display = 'block';
    if (coinPill) coinPill.style.display = 'flex';

    const balFormatted = (user.balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2 });
    const coinEl = document.getElementById('coinBalanceDisplay');
    if (coinEl) coinEl.textContent = balFormatted;

    const dropCoinEl = document.getElementById('dropdownCoinDisplay');
    if (dropCoinEl) dropCoinEl.textContent = `${balFormatted} ฿`;

    const nameEl = document.getElementById('dropdownUserName');
    if (nameEl) nameEl.textContent = user.username || 'meta_customer';

    const roleEl = document.getElementById('dropdownUserRole');
    const isAdmin = StoreDB.isAdmin();
    if (roleEl) roleEl.textContent = isAdmin ? 'Administrator' : (user.role || 'VIP Member');

    const adminBtn = document.querySelector('.dropdown-link.admin-btn') || document.getElementById('dropdownAdminLink');
    if (adminBtn) adminBtn.style.display = isAdmin ? 'flex' : 'none';
  } else {
    if (guestGroup) guestGroup.style.display = 'inline-flex';
    if (userGroup) userGroup.style.display = 'none';
    if (coinPill) coinPill.style.display = 'none';
  }
}

// 4. CLEAN CATEGORY CARDS (Image 1 Matching: Hover overlay badge with name & product count)
function renderCategoriesShowcase() {
  const container = document.getElementById('categoryCardsGrid');
  if (!container) return;

  const categories = StoreDB.getCategories();
  const products = StoreDB.getProducts();

  container.innerHTML = categories.map((cat) => {
    const isSelected = activeCategoryFilter === cat.id;
    const catProducts = products.filter(p => p.categoryId === cat.id);
    const count = catProducts.length;

    return `
      <div class="category-banner-card clean-image-card ${isSelected ? 'active-selected' : ''}" 
           onclick="goToCategorySubpage('${cat.slug || cat.id}')"
           title="${cat.name}">
        <img src="${cat.imageUrl}" alt="${cat.name}" class="category-banner-clean-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80';">
        <div class="category-hover-meta">
          <span class="category-hover-title">
            <span>${cat.name}</span>
            <span class="accent-excl">!</span>
          </span>
          <span class="category-hover-count-pill">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span>${count}</span>
          </span>
        </div>
      </div>
    `;
  }).join('');
}

function goToCategorySubpage(catSlugOrId) {
  window.location.href = 'store.html?c=' + encodeURIComponent(catSlugOrId);
}

function filterByCategory(catId) {
  goToCategorySubpage(catId);
}

// 5. RENDER PRODUCT CATALOG
function renderCatalog() {
  const container = document.getElementById('catalogCategoriesContainer');
  if (!container) return;

  const categories = StoreDB.getCategories();
  const products = StoreDB.getProducts();
  const dict = homeI18n[currentSiteLang] || homeI18n.th;

  const filteredCategories = activeCategoryFilter 
    ? categories.filter(c => c.id === activeCategoryFilter)
    : categories;

  let html = '';

  filteredCategories.forEach(cat => {
    const catProducts = products.filter(p => p.categoryId === cat.id);
    if (catProducts.length === 0) return;

    html += `
      <div class="category-block" id="${cat.slug}">
        <div class="category-header-row">
          <h3 class="category-title">${dict.categoryPrefix} <span>${cat.name}</span></h3>
          <a href="javascript:void(0)" onclick="filterByCategory('${cat.id}')" class="category-view-all">
            ${dict.viewAll}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <div class="products-cards-grid">
          ${catProducts.map(prod => renderProductCard(prod, dict)).join('')}
        </div>
      </div>
    `;
  });

  if (html === '') {
    html = `<div style="text-align: center; padding: 40px; color: var(--text-muted);">ไม่มีสินค้าในหมวดหมู่นี้</div>`;
  }

  container.innerHTML = html;
}

function renderProductCard(prod, dict) {
  const isOutOfStock = prod.stock <= 0 || prod.status === 'out_of_stock';
  const priceDisplay = StoreDB.formatPriceRange(prod.priceMin, prod.priceMax);

  return `
    <a href="product.html?id=${encodeURIComponent(prod.id)}" class="product-card ${isOutOfStock ? 'out-of-stock' : ''}">
      <div class="card-thumb-wrap">
        <img src="${prod.imageUrl || 'https://cloud.metaxstore.online/uploads/logo.png'}" onerror="this.onerror=null; this.src='https://cloud.metaxstore.online/uploads/logo.png';" alt="${prod.name}" class="card-thumb-img">
      </div>

      <div class="card-body-meta">
        <div>
          <h4 class="card-prod-title" title="${prod.name}">${prod.name}</h4>
          <div class="card-price-row">
            <span class="card-price-value">${priceDisplay}</span>
          </div>
          <div class="card-stock-status">
            <span class="stock-indicator-dot ${isOutOfStock ? 'out' : ''}"></span>
            <span>${isOutOfStock ? dict.outOfStock : `${dict.inStockPrefix} ${prod.stock}`}</span>
          </div>
        </div>

        <div class="btn-card-buy ${isOutOfStock ? 'disabled' : ''}">
          ${isOutOfStock 
            ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>' 
            : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'}
          <span>${isOutOfStock ? dict.outOfStock : dict.btnBuyNow}</span>
        </div>
      </div>
    </a>
  `;
}

// Navigate to Product Subpage (media_1791116381417.png)
function goToProduct(productId) {
  window.location.href = 'product.html?id=' + encodeURIComponent(productId);
}

// 6. MODALS MANAGEMENT
function toggleUserDropdown() {
  const card = document.getElementById('userDropdownCard');
  if (card) card.classList.toggle('active');
}

document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('userMenuWrapper');
  const card = document.getElementById('userDropdownCard');
  if (wrapper && card && !wrapper.contains(e.target)) {
    card.classList.remove('active');
  }
});

function logoutUser() {
  StoreDB.updateUser({ isLoggedIn: false });
  showToast("ออกจากระบบเรียบร้อยแล้ว");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 600);
}

function openHowToModal() {
  const modal = document.getElementById('howToModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeHowToModal() {
  const modal = document.getElementById('howToModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openWalletModal() {
  const user = StoreDB.getUser();
  const balEl = document.getElementById('walletModalBalance');
  if (balEl) balEl.textContent = `${(user.balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })} ฿`;

  const modal = document.getElementById('walletModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeWalletModal() {
  const modal = document.getElementById('walletModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Auth Modal Logic (Image 1 / media_1791195829111.png)
let currentHomeAuthMode = 'login';

function openHomeAuth(mode = 'login') {
  const modal = document.getElementById('homeAuthModal');
  if (!modal) return;
  switchHomeAuthMode(mode);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeHomeAuth() {
  const modal = document.getElementById('homeAuthModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleHomeAuthOverlayClick(e) {
  const modal = document.getElementById('homeAuthModal');
  if (e.target === modal) {
    closeHomeAuth();
  }
}

function switchHomeAuthMode(mode) {
  currentHomeAuthMode = mode === 'register' ? 'register' : 'login';
  const card = document.getElementById('homeAuthDialogCard');
  const tabs = document.getElementById('homeAuthTabsSegment');
  const tabLogin = document.getElementById('homeTabBtnLogin');
  const tabRegister = document.getElementById('homeTabBtnRegister');
  const headTitle = document.getElementById('homeAuthHeadTitle');
  const headSub = document.getElementById('homeAuthHeadSub');
  const btnSubmit = document.getElementById('homeBtnAuthSubmit');
  const switchPrompt = document.getElementById('homeAuthSwitchPrompt');
  const passConfirm = document.getElementById('homeAuthPassConfirm');
  const groupEmail = document.getElementById('homeGroupEmail');
  const groupConfirm = document.getElementById('homeGroupConfirmPass');

  const isReg = currentHomeAuthMode === 'register';

  if (card) card.setAttribute('data-mode', currentHomeAuthMode);
  if (tabs) tabs.setAttribute('data-mode', isReg ? 'signup' : 'login');
  if (tabLogin) tabLogin.classList.toggle('active', !isReg);
  if (tabRegister) tabRegister.classList.toggle('active', isReg);

  if (groupEmail) groupEmail.style.display = isReg ? 'block' : 'none';
  if (groupConfirm) groupConfirm.style.display = isReg ? 'block' : 'none';

  if (passConfirm) {
    passConfirm.required = isReg;
    passConfirm.disabled = !isReg;
  }

  const dict = homeI18n[currentSiteLang] || homeI18n.th;

  if (headTitle) {
    headTitle.textContent = isReg
      ? (dict.authModalTitleRegister || "สมัครสมาชิก Meta Studio")
      : (dict.authModalTitleLogin || "เข้าสู่ระบบ Meta Studio");
  }
  if (headSub) {
    headSub.textContent = isReg
      ? (dict.authModalSubRegister || "สร้างบัญชีใหม่เพื่อเริ่มสั่งซื้อและรับคีย์ทันที")
      : (dict.authModalSubLogin || "เข้าถึงร้านค้า คลังคีย์ และคำสั่งซื้อของคุณ");
  }
  if (btnSubmit) {
    btnSubmit.textContent = isReg
      ? (dict.btnSubmitRegister || "สร้างบัญชีใหม่")
      : (dict.btnSubmitLogin || "เข้าสู่ระบบ");
  }
  if (switchPrompt) {
    switchPrompt.textContent = isReg
      ? (dict.switchHaveAccount || "มีบัญชีอยู่แล้ว? เข้าสู่ระบบที่นี่")
      : (dict.switchNoAccount || "ยังไม่มีบัญชี? สมัครสมาชิกที่นี่");
  }
}

function toggleHomeAuthMode() {
  switchHomeAuthMode(currentHomeAuthMode === 'login' ? 'register' : 'login');
}

function submitHomeAuth(e) {
  e.preventDefault();
  const userInput = document.getElementById('homeAuthUser');
  const emailInput = document.getElementById('homeAuthEmail');
  const passInput = document.getElementById('homeAuthPass');
  const confirmInput = document.getElementById('homeAuthPassConfirm');

  const username = (userInput && userInput.value.trim()) || '';
  const pass = (passInput && passInput.value) || '';

  if (!username || !pass) {
    showToast("กรุณากรอกชื่อผู้ใช้งานและรหัสผ่าน", true);
    return;
  }

  if (currentHomeAuthMode === 'register') {
    const confirmPass = (confirmInput && confirmInput.value) || '';
    if (pass !== confirmPass) {
      showToast("รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน", true);
      if (confirmInput) confirmInput.focus();
      return;
    }

    const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : `${username}@meta.store`;
    const isAdmin = (username === 'metaxstore' && pass === 'metaxstore112');
    const newUser = {
      username: username,
      email: email,
      role: isAdmin ? 'admin' : 'customer',
      balance: isAdmin ? 97042.00 : 0,
      isLoggedIn: true,
      avatar: 'logo.png'
    };

    if (isAdmin) {
      sessionStorage.setItem('meta_admin_auth', 'true');
    } else {
      sessionStorage.removeItem('meta_admin_auth');
    }

    StoreDB.updateUser(newUser);
    closeHomeAuth();
    updateWalletDisplay(newUser);
    showToast(`สมัครสมาชิกสำเร็จ! ยินดีต้อนรับ ${username}`);
    return;
  }

  // Login Mode
  if (username === 'metaxstore' && pass === 'metaxstore112') {
    StoreDB.loginAdmin(username, pass);
    closeHomeAuth();
    updateWalletDisplay(StoreDB.getUser());
    showToast("เข้าสู่ระบบแอดมินสำเร็จ (Admin Mode Active)");
    return;
  }

  // Regular user login
  const prevUser = StoreDB.getUser();
  const balance = (prevUser && prevUser.username === username && prevUser.balance !== undefined)
    ? prevUser.balance
    : 0.00;

  const loggedUser = {
    username: username,
    email: `${username}@meta.store`,
    role: 'customer',
    balance: balance,
    isLoggedIn: true,
    avatar: 'logo.png'
  };

  sessionStorage.removeItem('meta_admin_auth');
  StoreDB.updateUser(loggedUser);
  closeHomeAuth();
  updateWalletDisplay(loggedUser);
  showToast(`เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ ${username}`);
}

function checkUrlAuthHash() {
  const hash = window.location.hash;
  if (hash === '#login') {
    openHomeAuth('login');
  } else if (hash === '#register') {
    openHomeAuth('register');
  } else if (hash === '#topup' || hash === '#wallet') {
    openWalletModal();
  } else if (hash === '#howto' || hash === '#guide') {
    openHowToModal();
  } else if (hash === '#orders') {
    openOrderHistoryModal();
  }
}
window.addEventListener('hashchange', checkUrlAuthHash);

function handleWalletOverlayClick(e) {
  const modal = document.getElementById('walletModal');
  if (e.target === modal) {
    closeWalletModal();
  }
}

async function submitHomeVoucherTopup(e) {
  e.preventDefault();
  const input = document.getElementById('homeVoucherInput');
  const btn = document.getElementById('btnHomeVoucherSubmit');
  const btnText = document.getElementById('btnHomeVoucherText');
  const voucherUrl = input ? input.value.trim() : '';

  if (!voucherUrl) {
    showToast("กรุณากรอกลิงก์ซองของขวัญ", true);
    return;
  }

  btn.disabled = true;
  btnText.textContent = "กำลังตรวจสอบซอง...";

  try {
    const result = await StoreDB.redeemTrueMoneyVoucher(voucherUrl);
    btn.disabled = false;
    btnText.textContent = "ยืนยันการเติมเงิน";

    if (result && result.success) {
      input.value = '';
      closeWalletModal();
      updateWalletDisplay(StoreDB.getUser());
      showToast(`เติมเงินสำเร็จ ${StoreDB.formatPrice(result.amount)}! ยอดเงินเข้ากระเป๋าแล้ว`);
    } else {
      showToast(result.message || "ซองของขวัญไม่ถูกต้องหรือถูกรับไปแล้ว", true);
    }
  } catch (err) {
    btn.disabled = false;
    btnText.textContent = "ยืนยันการเติมเงิน";
    showToast("เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์", true);
  }
}


function openOrderHistoryModal() {
  const container = document.getElementById('orderHistoryListContainer');
  if (!container) return;

  const orders = StoreDB.getOrders();
  if (orders.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px;">ยังไม่มีประวัติการสั่งซื้อ</div>`;
  } else {
    container.innerHTML = orders.map(ord => `
      <div class="order-item-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <strong style="color: #fff; font-size: 0.95rem; display: block;">${ord.productName}</strong>
            <span style="font-size: 0.78rem; color: var(--text-dim);">${ord.date} • ${ord.duration}</span>
          </div>
          <span style="font-family: var(--font-mono); font-weight: 800; color: #f87171;">฿${ord.price.toFixed(2)}</span>
        </div>
        <div style="background: rgba(0,0,0,0.4); padding: 8px 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
          <code style="font-family: var(--font-mono); color: #4ade80; font-size: 0.85rem;">${ord.key}</code>
          <button onclick="navigator.clipboard.writeText('${ord.key}'); showToast('คัดลอกคีย์เรียบร้อย!');" style="background: none; border: none; color: #94a3b8; cursor: pointer; display: flex; align-items: center; gap: 4px; font-size: 0.75rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            คัดลอก
          </button>
        </div>
      </div>
    `).join('');
  }

  const modal = document.getElementById('orderHistoryModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeOrderHistoryModal() {
  const modal = document.getElementById('orderHistoryModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showToast(msg, isError = false) {
  const toast = document.getElementById('storeToast');
  const msgEl = document.getElementById('storeToastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.style.borderColor = isError ? '#ff1111' : 'rgba(255, 17, 17, 0.4)';
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
