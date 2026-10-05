// @ts-nocheck
// ==========================================================================
// META STUDIO — Official Store & Client Engine
// - Grand KeyAuth Scaling & Specular Glare Tracking
// - 3D Levitation & Dynamic Mouse Perspective
// - Live Realtime Key Dispense Stream (Every 3.8s)
// - CheatX Key Generator & Vault Sync
// ==========================================================================

// 1. Language Dictionary (TH / EN)
const i18nDictionary = {
  th: {
    pageTitle: "META STUDIO — ร้านค้าโปร Free Fire อันดับ 1 ปลอดภัย ไร้ไวรัส",
    navStore: "ร้านค้าสินค้า",
    navDocs: "คู่มือการใช้งาน",
    navGenKey: "สร้างคีย์ (CheatX)",
    btnLogin: "เข้าสู่ระบบ",
    btnRegister: "สมัครสมาชิก",
    heroHeadline: `ร้านค้าโปร <br> Free Fire <br> <span class="crimson-highlight">ปลอดภัย โคตรเหนียว!</span>`,
    heroDesc: "ใส่ใจในคุณภาพของสินค้าและบริการ ด้วยระบบรักษาความปลอดภัยที่ทันสมัย พร้อมการบริการที่รวดเร็วและเชื่อถือได้ตลอด 24 ชั่วโมง",
    btnGetStarted: "เลือกซื้อสินค้า",
    btnDocs: "คู่มือ",
    btnOpenStore: "เลือกซื้อสินค้า",
    btnOpenGen: "สร้างคีย์ (CheatX)",
    mKeys: "คีย์พร้อมส่งมอบ",
    mAgents: "ผู้ใช้งานออนไลน์",
    mSpeed: "ความเร็วส่งคีย์",
    thProduct: "สินค้า Free Fire",
    thDuration: "ระยะเวลา",
    thStatus: "สถานะ",
    integrationLabel: "รองรับการเชื่อมต่อทุกระบบและแพลตฟอร์ม",
    modalDocsTitle: "คู่มือการสั่งซื้อ & การใช้งาน (Documentation)",
    docsStep1Title: "การสั่งซื้อและรับคีย์ทันที (Instant Store Delivery)",
    docsStep1Desc: "เลือกซื้อแพ็กเกจโปร Free Fire จากหน้าร้าน ชำระเงินสะดวก และรับ License Key อัตโนมัติจากระบบ Cloud Vault ทันทีใน 5ms",
    docsStep2Title: "การติดตั้ง & ใช้งาน Loader (Android Emulator & PC)",
    docsStep2Desc: "ดาวน์โหลดและใส่ License Key ในโปรแกรม Loader รองรับทั้ง Android Emulator (LDPlayer/BlueStacks) และ PC พร้อมยิงได้ทันที",
    docsStep3Title: "ความปลอดภัย & การันตีไร้ไวรัส (100% Malware-Free)",
    docsStep3Desc: "ไฟล์โหลดเดอร์ทุกตัวผ่านการเข้ารหัสแบบ Native Obfuscation และ Ring-0 Anti-detection ไม่มีการตรวจจับ ปลอดภัย ไม่ทิ้งร่องรอยในเครื่อง",
    btnCloseDocs: "ปิดหน้าต่าง",
    btnOpenStorefront: "ไปยังหน้าร้านค้า",
    modalGenTitle: "สร้างคีย์ใบอนุญาต (License Key Generator)",
    lblPattern: "รูปแบบคีย์ (* คือสุ่มตัวอักษรและตัวเลข)",
    lblPreview: "ตัวอย่างคีย์ที่จะได้รับ (Live Preview)",
    lblCategory: "หมวดหมู่สินค้า",
    lblCount: "จำนวนคีย์",
    lblDuration: "ระยะเวลาใช้งาน (ชั่วโมง)",
    unitHours: "ชั่วโมง",
    dur6h: "6 ชม.",
    dur12h: "12 ชม.",
    dur1d: "1 วัน",
    dur3d: "3 วัน",
    dur7d: "7 วัน",
    dur30d: "30 วัน",
    durLife: "ถาวร",
    durLifetime: "ตลอดชีพ",
    chkSyncVault: "ซิงค์คีย์เข้าสู่คลังสต็อกทันที (พร้อมให้หน้าร้านเบิก)",
    btnCancel: "ยกเลิก",
    btnPreview: "ดูตัวอย่าง",
    btnCreateNow: "สร้างคีย์ทันที",
    authModalTitleLogin: "เข้าสู่ระบบ Meta Studio",
    authModalTitleRegister: "สมัครสมาชิก Meta Studio",
    authModalSubLogin: "เข้าถึงร้านค้า คลังคีย์ และคำสั่งซื้อของคุณ",
    authModalSubRegister: "สร้างบัญชีใหม่เพื่อเริ่มสั่งซื้อและรับคีย์ทันที",
    tabLogin: "เข้าสู่ระบบ",
    tabRegister: "สมัครสมาชิก",
    btnGoogle: "Google",
    btnDiscord: "Discord",
    orEmail: "หรือกรอกข้อมูลบัญชี",
    lblUsername: "ชื่อผู้ใช้งาน",
    lblEmail: "อีเมล",
    lblPassword: "รหัสผ่าน",
    lblConfirmPass: "ยืนยันรหัสผ่าน",
    btnSubmitLogin: "เข้าสู่ระบบ",
    btnSubmitRegister: "สร้างบัญชีใหม่",
    switchNoAccount: "ยังไม่มีบัญชี? สมัครสมาชิกที่นี่",
    switchHaveAccount: "มีบัญชีอยู่แล้ว? เข้าสู่ระบบที่นี่",
    toastPassMismatch: "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน",
    toastRegSuccess: "สมัครสมาชิกสำเร็จ! กำลังเข้าสู่ระบบ...",
    toastLoginSuccess: "เข้าสู่ระบบสำเร็จ ยินดีต้อนรับสู่ Meta Studio"
  },
  en: {
    pageTitle: "META STUDIO — #1 Undetected Free Fire Cheats & Store",
    navStore: "Store",
    navDocs: "User Guide",
    navGenKey: "Key Generator",
    btnLogin: "Sign In",
    btnRegister: "Sign Up",
    heroHeadline: `Official Store <br> Free Fire <br> <span class="crimson-highlight">Undetected & Safe!</span>`,
    heroDesc: "Committed to product and service excellence with modern high-grade security, rapid delivery, and dependable 24/7 support.",
    btnGetStarted: "Shop Now",
    btnDocs: "Documentation",
    btnOpenStore: "Shop Now",
    btnOpenGen: "Generate (CheatX)",
    mKeys: "Keys in Vault",
    mAgents: "Active Users",
    mSpeed: "Delivery Latency",
    thProduct: "Free Fire Product",
    thDuration: "Duration",
    thStatus: "Status",
    integrationLabel: "Compatible across all competitive platforms & frameworks",
    modalDocsTitle: "Documentation & SDK Integration Guide",
    docsStep1Title: "Instant Checkout & License Dispatch",
    docsStep1Desc: "Select your Free Fire cheat package in the store, complete checkout seamlessly, and receive your License Key instantly from Cloud Vault in 5ms.",
    docsStep2Title: "Loader Setup & Verification (Android & PC)",
    docsStep2Desc: "Download the loader, paste your license key, and launch. Fully optimized for Android emulators (LDPlayer, BlueStacks) and PC.",
    docsStep3Title: "Security & Zero Virus Guarantee (100% Clean)",
    docsStep3Desc: "All cheat binaries and loaders are ring-0 kernel protected, native obfuscated, and verified 100% clean malware-free.",
    btnCloseDocs: "Close",
    btnOpenStorefront: "Open Store",
    modalGenTitle: "License Key Generator (CheatX Engine)",
    lblPattern: "Key Mask Pattern (* is random alphanumeric)",
    lblPreview: "Live Preview",
    lblCategory: "Product Category",
    lblCount: "Quantity",
    lblDuration: "License Duration (Hours)",
    unitHours: "Hours",
    dur6h: "6h",
    dur12h: "12h",
    dur1d: "1 Day",
    dur3d: "3 Days",
    dur7d: "7 Days",
    dur30d: "30 Days",
    durLife: "Lifetime",
    durLifetime: "Lifetime",
    chkSyncVault: "Sync generated keys to Cloud Vault instantly",
    btnCancel: "Cancel",
    btnPreview: "Preview",
    btnCreateNow: "Generate Now",
    authModalTitleLogin: "Sign In to Meta Studio",
    authModalTitleRegister: "Create Meta Studio Account",
    authModalSubLogin: "Access your store items, license keys and orders",
    authModalSubRegister: "Sign up to start purchasing and receiving instant keys",
    tabLogin: "Sign In",
    tabRegister: "Sign Up",
    btnGoogle: "Google",
    btnDiscord: "Discord",
    orEmail: "Or continue with email",
    lblUsername: "Username",
    lblEmail: "Email",
    lblPassword: "Password",
    lblConfirmPass: "Confirm Password",
    btnSubmitLogin: "Sign In",
    btnSubmitRegister: "Create Account",
    switchNoAccount: "Don't have an account? Sign up here",
    switchHaveAccount: "Already have an account? Sign in here",
    toastPassMismatch: "Passwords do not match",
    toastRegSuccess: "Account created! Logging you in...",
    toastLoginSuccess: "Signed in successfully. Welcome to Meta Studio!"
  },
  pt: {
    pageTitle: "META STUDIO — Loja Oficial de Cheats Free Fire Indetectáveis",
    navStore: "Loja",
    navDocs: "Guia",
    navGenKey: "Gerador de Keys",
    btnLogin: "Entrar",
    btnRegister: "Cadastre-se",
    heroHeadline: `Loja Oficial <br> Free Fire <br> <span class="crimson-highlight">Seguro e Indetectável!</span>`,
    heroDesc: "Compromisso com a qualidade dos produtos e serviços, com segurança moderna, entrega rápida e suporte confiável 24 horas por dia.",
    btnGetStarted: "Comprar Agora",
    btnDocs: "Documentação",
    btnOpenStore: "Comprar Agora",
    btnOpenGen: "Gerar (CheatX)",
    mKeys: "Keys no Cofre",
    mAgents: "Usuários Online",
    mSpeed: "Latência",
    thProduct: "Produto Free Fire",
    thDuration: "Duração",
    thStatus: "Status",
    integrationLabel: "Compatível com todas as plataformas e sistemas",
    modalDocsTitle: "Documentação e Guia de Integração",
    docsStep1Title: "Compra Rápida e Entrega Imediata",
    docsStep1Desc: "Escolha seu pacote Free Fire na loja, realize o pagamento com facilidade e receba sua License Key em 5ms diretamente do Cloud Vault.",
    docsStep2Title: "Configuração do Loader (Android & PC)",
    docsStep2Desc: "Baixe o loader, insira sua key de ativação e inicie o jogo. Suporte completo para emuladores Android e PC.",
    docsStep3Title: "Segurança e Garantia Sem Vírus (100% Limpo)",
    docsStep3Desc: "Todos os loaders usam ofuscação nativa e proteção Ring-0, 100% livres de malware e sem deixar rastros.",
    btnCloseDocs: "Fechar",
    btnOpenStorefront: "Abrir Loja",
    modalGenTitle: "Gerador de License Key (CheatX)",
    lblPattern: "Padrão da Key (* = caractere aleatório)",
    lblPreview: "Pré-visualização",
    lblCategory: "Categoria do Produto",
    lblCount: "Quantidade",
    lblDuration: "Duração da Licença (Horas)",
    unitHours: "Horas",
    dur6h: "6h",
    dur12h: "12h",
    dur1d: "1 Dia",
    dur3d: "3 Dias",
    dur7d: "7 Dias",
    dur30d: "30 Dias",
    durLife: "Vitalício",
    durLifetime: "Vitalício",
    chkSyncVault: "Sincronizar keys com o Cloud Vault imediatamente",
    btnCancel: "Cancelar",
    btnPreview: "Pré-visualizar",
    btnCreateNow: "Gerar Agora",
    authModalTitleLogin: "Entrar no Meta Studio",
    authModalTitleRegister: "Criar Conta no Meta Studio",
    authModalSubLogin: "Acesse seus produtos, keys de licença e pedidos",
    authModalSubRegister: "Cadastre-se para comprar e receber keys na hora",
    tabLogin: "Entrar",
    tabRegister: "Cadastrar",
    btnGoogle: "Google",
    btnDiscord: "Discord",
    orEmail: "Ou preencha seus dados",
    lblUsername: "Usuário",
    lblEmail: "E-mail",
    lblPassword: "Senha",
    lblConfirmPass: "Confirmar Senha",
    btnSubmitLogin: "Entrar",
    btnSubmitRegister: "Criar Conta",
    switchNoAccount: "Não tem conta? Cadastre-se aqui",
    switchHaveAccount: "Já tem uma conta? Entre aqui",
    toastPassMismatch: "As senhas não coincidem",
    toastRegSuccess: "Conta criada com sucesso! Entrando...",
    toastLoginSuccess: "Login realizado com sucesso no Meta Studio!"
  }
};

let currentSiteLang = localStorage.getItem('meta_lang') || localStorage.getItem('aimbet_lang') || 'th';

// Pick text by current language: L(thai, english, portuguese)
function L(th, en, pt) {
  return currentSiteLang === 'en' ? en : (currentSiteLang === 'pt' ? pt : th);
}

let langFirstRun = true;
const LANG_ANIM_SELECTOR = '.navbar-pill, .nav-lang-segment, .nav-item-link, .btn-nav-ghost, .btn-nav-cta, .btn-primary-crimson, .btn-secondary-glass, .hero-headline, .hero-description, .integration-caption-label';

// Wrapper: measure -> swap text -> animate each box from old size to new size
function setSiteLanguage(lang) {
  if (langFirstRun || !document.body.animate) {
    langFirstRun = false;
    applySiteLanguage(lang);
    return;
  }
  const els = Array.from(document.querySelectorAll(LANG_ANIM_SELECTOR));
  const before = els.map(el => {
    const r = el.getBoundingClientRect();
    return { w: r.width, h: r.height };
  });

  applySiteLanguage(lang);

  els.forEach((el, i) => {
    const r = el.getBoundingClientRect();
    const b = before[i];
    const dur = 480, easing = 'cubic-bezier(0.22, 1, 0.36, 1)';
    const isText = el.matches('.hero-headline, .hero-description, .integration-caption-label');

    // Text blocks: soft fade/slide-in
    if (isText) {
      el.animate(
        [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: dur, easing }
      );
      return;
    }

    // Boxes: grow/shrink smoothly from old size to new size
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
    // Inner text pops in
    Array.from(el.children).forEach(c => {
      if (c.tagName === 'SPAN' || c.tagName === 'BUTTON') {
        c.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: dur, easing });
      }
    });
    if (!el.children.length) {
      el.animate([{ opacity: 0.2 }, { opacity: 1 }], { duration: dur, easing });
    }
  });
}

function applySiteLanguage(lang) {
  currentSiteLang = lang;
  localStorage.setItem('aimbet_lang', lang);

  const langBtnIds = { th: 'btnLangTH', en: 'btnLangEN', pt: 'btnLangPT' };
  Object.keys(langBtnIds).forEach(k => {
    const b = document.getElementById(langBtnIds[k]);
    if (b) b.classList.toggle('active', k === lang);
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

  const dict = i18nDictionary[lang] || i18nDictionary.th;
  document.title = dict.pageTitle;

  const heroHeadline = document.getElementById('heroHeadline');
  if (heroHeadline) heroHeadline.innerHTML = dict.heroHeadline;

  const heroDescription = document.getElementById('heroDescription');
  if (heroDescription) heroDescription.textContent = dict.heroDesc;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const btnHeroLeft = document.getElementById('btnHeroLeftText');
  if (btnHeroLeft && dict.btnGetStarted) {
    btnHeroLeft.textContent = dict.btnGetStarted;
  }

  const btnHeroRight = document.getElementById('btnHeroRightText');
  if (btnHeroRight && dict.btnDocs) {
    btnHeroRight.textContent = dict.btnDocs;
  }

  // Dynamically update console table duration badges
  document.querySelectorAll('.row-type-badge[data-hours]').forEach(badge => {
    const h = parseInt(badge.getAttribute('data-hours'));
    badge.textContent = h === 0 ? L('ตลอดชีพ', 'Lifetime', 'Vitalício')
      : (h >= 24 ? L(`${Math.floor(h / 24)} วัน`, `${Math.floor(h / 24)} Days`, `${Math.floor(h / 24)} Dias`)
                 : L(`${h} ชม.`, `${h}h`, `${h}h`));
  });

  updateDurationLabel();
  if (typeof updateAuthModalText === 'function') {
    updateAuthModalText();
  }
}

// 2. High-Precision 3D Perspective Mouse Tilt & Specular Light Reflection
const metaUiStage = document.getElementById('metaUiStage');
const metaUiGlare = document.getElementById('metaUiGlare');
const metaUiAnchor = document.getElementById('metaUiFloatAnchor');
const metaUiWrapper = document.getElementById('heroMockupWrapper');

if (metaUiStage && metaUiAnchor && metaUiWrapper) {
  // Resting pose + smoothed state (lerp) to avoid jitter
  const REST_Y = -7, REST_X = 3;
  let targetY = REST_Y, targetX = REST_X, targetS = 1;
  let curY = REST_Y, curX = REST_X, curS = 1;
  let glareX = 50, glareY = 50, glareOn = 0, curGlare = 0;
  let rafId = null;

  metaUiStage.style.transition = 'none'; // rAF handles smoothing

  function tick() {
    curY += (targetY - curY) * 0.12;
    curX += (targetX - curX) * 0.12;
    curS += (targetS - curS) * 0.12;
    curGlare += (glareOn - curGlare) * 0.15;

    metaUiStage.style.transform = `rotateY(${curY.toFixed(3)}deg) rotateX(${curX.toFixed(3)}deg) scale(${curS.toFixed(4)})`;

    if (metaUiGlare) {
      metaUiGlare.style.opacity = curGlare.toFixed(3);
      metaUiGlare.style.background = `radial-gradient(circle 340px at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255,255,255,0.8) 0%, rgba(255,210,210,0.45) 22%, rgba(239,68,68,0.2) 48%, transparent 75%)`;
    }

    const settled = Math.abs(targetY - curY) < 0.01 && Math.abs(targetX - curX) < 0.01 &&
                    Math.abs(targetS - curS) < 0.0005 && Math.abs(glareOn - curGlare) < 0.01;
    rafId = settled ? null : requestAnimationFrame(tick);
  }
  function kick() { if (!rafId) rafId = requestAnimationFrame(tick); }

  // Listen on the NON-rotating wrapper and measure the NON-rotating anchor,
  // so rotation never changes the coordinates it is computed from (no feedback loop).
  metaUiWrapper.addEventListener('mousemove', (e) => {
    const rect = metaUiAnchor.getBoundingClientRect();
    let nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    let ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    nx = Math.max(-1, Math.min(1, nx));
    ny = Math.max(-1, Math.min(1, ny));

    targetY = nx * 12;
    targetX = -ny * 10;
    targetS = 1.03;
    glareX = (nx * 0.5 + 0.5) * 100;
    glareY = (ny * 0.5 + 0.5) * 100;
    glareOn = 0;
    curGlare = 0;
    kick();
  });

  metaUiWrapper.addEventListener('mouseleave', () => {
    targetY = REST_Y; targetX = REST_X; targetS = 1; glareOn = 0;
    kick();
  });
}

// 3. Static Console Data & Metrics (ไม่ออโต้เจนคีย์เอง)
const consoleLiveTableBody = document.getElementById('consoleLiveTableBody');
const metricTotalKeys = document.getElementById('metricTotalKeys');
const metricOnlineAgents = document.getElementById('metricOnlineAgents');

// 4. Crimson Toast System
const crimsonToast = document.getElementById('crimsonToast');
const crimsonToastMsg = document.getElementById('crimsonToastMsg');
let toastTimer = null;

function showCrimsonToast(msg, isError = false) {
  if (!crimsonToast || !crimsonToastMsg) return;
  if (toastTimer) clearTimeout(toastTimer);

  crimsonToastMsg.textContent = msg;
  crimsonToast.style.borderColor = isError ? 'rgba(239, 68, 68, 0.7)' : 'rgba(239, 68, 68, 0.4)';
  crimsonToast.classList.add('visible');

  toastTimer = setTimeout(() => {
    crimsonToast.classList.remove('visible');
  }, 2800);
}

// 5. CheatX Style Key Generator Modal
const cheatxModal = document.getElementById('cheatxModal');
const cxPrefix = document.getElementById('cxPrefix');
const cxPreviewBox = document.getElementById('cxPreviewBox');
const cxHours = document.getElementById('cxHours');
const cxDurLabel = document.getElementById('cxDurLabel');

function openCheatXGenModal() {
  if (!cheatxModal) return;
  cheatxModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  updateCheatxPreview();
}

function closeCheatXGenModal() {
  if (!cheatxModal) return;
  cheatxModal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleCheatxOverlayClick(e) {
  if (e.target === cheatxModal) {
    closeCheatXGenModal();
  }
}

// Pattern Parser
function generateKeyFromPattern(pattern) {
  const chars = '0123456789ABCDEF';
  return pattern.replace(/\*/g, () => chars[Math.floor(Math.random() * chars.length)]);
}

function updateCheatxPreview() {
  if (!cxPrefix || !cxPreviewBox) return;
  const pattern = cxPrefix.value.trim() || 'AIM-****-****-****';
  cxPreviewBox.textContent = generateKeyFromPattern(pattern);
}

// Quick Duration Setter
function setCheatxDuration(hours) {
  if (!cxHours) return;
  cxHours.value = hours;

  const buttons = document.querySelectorAll('.btn-dur-quick');
  buttons.forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    if (onclickAttr.includes(`setCheatxDuration(${hours})`)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  updateDurationLabel();
}

function updateDurationLabel() {
  if (!cxHours || !cxDurLabel) return;
  const h = parseInt(cxHours.value);

  if (isNaN(h) || h === 0) {
    cxDurLabel.textContent = L('(ถาวร ตลอดชีพ)', '(Lifetime)', '(Vitalício)');
    return;
  }
  if (h < 24) {
    cxDurLabel.textContent = L(`(${h} ชม.)`, `(${h} Hours)`, `(${h} Horas)`);
  } else {
    const days = Math.floor(h / 24);
    const rem = h % 24;
    cxDurLabel.textContent = rem > 0
      ? L(`(${days} วัน ${rem} ชม.)`, `(${days}d ${rem}h)`, `(${days}d ${rem}h)`)
      : L(`(${days} วัน)`, `(${days} Days)`, `(${days} Dias)`);
  }
}

function previewCheatxKeys() {
  const pattern = (cxPrefix && cxPrefix.value.trim()) || 'AIM-****-****-****';
  const sample1 = generateKeyFromPattern(pattern);
  const sample2 = generateKeyFromPattern(pattern);
  showCrimsonToast(L(`ตัวอย่าง: ${sample1} | ${sample2}`, `Sample: ${sample1} | ${sample2}`, `Exemplo: ${sample1} | ${sample2}`));
}

// Handle Key Generation & Sync
function handleCheatxSubmit(e) {
  e.preventDefault();
  const pattern = (cxPrefix && cxPrefix.value.trim()) || 'AIM-****-****-****';
  const count = parseInt(document.getElementById('cxCount').value) || 1;
  const category = document.getElementById('cxCategory').value;
  const hours = parseInt(cxHours.value) || 0;
  const syncVault = document.getElementById('cxSyncVault') ? document.getElementById('cxSyncVault').checked : true;

  const generatedKeys = [];
  for (let i = 0; i < count; i++) {
    generatedKeys.push(generateKeyFromPattern(pattern));
  }

  // ซิงค์เข้า LocalStorage
  if (syncVault) {
    try {
      const stored = localStorage.getItem('aimbet_reseller_vault');
      let vault = stored ? JSON.parse(stored) : {};

      let targetCatPath = 'vault/ff_aimlock/30d.txt';
      if (category.includes('Bypass')) targetCatPath = 'vault/ff_bypass/30d.txt';
      if (category.includes('Headshot')) targetCatPath = 'vault/ff_headshot/30d.txt';
      if (category.includes('Streamer')) targetCatPath = 'vault/ff_streamer/30d.txt';

      if (!vault[targetCatPath]) {
        vault[targetCatPath] = [];
      }

      generatedKeys.forEach(k => {
        vault[targetCatPath].push(k);
      });

      localStorage.setItem('aimbet_reseller_vault', JSON.stringify(vault));
    } catch (err) {
      console.warn('Vault storage warning:', err);
    }
  }

  // แทรกแถวใหม่ลงใน Table บน Mockup
  if (consoleLiveTableBody && generatedKeys.length > 0) {
    const firstKey = generatedKeys[0];
    const row = document.createElement('div');
    row.className = 'console-table-row';
    row.style.animation = 'rowStreamIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    const durLabel = hours === 0 ? L('ตลอดชีพ', 'Lifetime', 'Vitalício')
      : (hours >= 24 ? L(`${Math.floor(hours/24)} วัน`, `${Math.floor(hours/24)} Days`, `${Math.floor(hours/24)} Dias`)
                     : L(`${hours} ชม.`, `${hours}h`, `${hours}h`));
    row.innerHTML = `
      <div class="row-product-name">${category.split('(')[0].trim()}</div>
      <div><span class="row-key-code">${firstKey}</span></div>
      <div class="row-type-badge" data-hours="${hours}">${durLabel}</div>
      <div><span class="row-status-pill">● DELIVERED</span></div>
    `;
    consoleLiveTableBody.insertBefore(row, consoleLiveTableBody.firstChild);
    if (consoleLiveTableBody.children.length > 4) {
      consoleLiveTableBody.removeChild(consoleLiveTableBody.lastChild);
    }
  }

  // อัปเดต Metric
  if (metricTotalKeys) {
    const current = parseInt(metricTotalKeys.textContent.replace(/,/g, '')) || 14290;
    metricTotalKeys.textContent = (current + count).toLocaleString();
  }

  closeCheatXGenModal();
  showCrimsonToast(L(
    `สร้างคีย์สำเร็จ ${count} รายการ ${syncVault ? 'และซิงค์เข้าคลังแล้ว!' : ''}`,
    `Created ${count} key(s)! ${syncVault ? 'Synced to Vault.' : ''}`,
    `${count} key(s) criada(s)! ${syncVault ? 'Sincronizado com o Cofre.' : ''}`
  ));
}

// 6. Auth Modal (Login & Register Engine)
const landingAuthModal = document.getElementById('landingAuthModal');
const authDialogCard = document.getElementById('authDialogCard');
const authTabsSegment = document.getElementById('authTabsSegment');
const tabBtnLogin = document.getElementById('tabBtnLogin');
const tabBtnRegister = document.getElementById('tabBtnRegister');
const authHeadTitle = document.getElementById('authHeadTitle');
const authHeadSub = document.getElementById('authHeadSub');
const btnAuthSubmit = document.getElementById('btnAuthSubmit');
const authSwitchPrompt = document.getElementById('authSwitchPrompt');
const regPassConfirm = document.getElementById('regPassConfirm');

let currentAuthMode = 'login'; // 'login' or 'register'

function switchAuthMode(mode) {
  currentAuthMode = mode === 'register' ? 'register' : 'login';

  if (authDialogCard) {
    authDialogCard.setAttribute('data-mode', currentAuthMode);
  }
  if (authTabsSegment) {
    authTabsSegment.setAttribute('data-mode', currentAuthMode === 'register' ? 'signup' : 'login');
  }

  if (tabBtnLogin) tabBtnLogin.classList.toggle('active', currentAuthMode === 'login');
  if (tabBtnRegister) tabBtnRegister.classList.toggle('active', currentAuthMode === 'register');

  const groupEmail = document.getElementById('groupEmail');
  const groupConfirmPass = document.getElementById('groupConfirmPass');
  if (groupEmail) groupEmail.style.display = (currentAuthMode === 'register') ? 'block' : 'none';
  if (groupConfirmPass) groupConfirmPass.style.display = (currentAuthMode === 'register') ? 'block' : 'none';

  if (regPassConfirm) {
    regPassConfirm.required = (currentAuthMode === 'register');
    regPassConfirm.disabled = (currentAuthMode !== 'register');
  }

  updateAuthModalText();
}

function toggleAuthMode() {
  switchAuthMode(currentAuthMode === 'login' ? 'register' : 'login');
}

function updateAuthModalText() {
  const dict = i18nDictionary[currentSiteLang] || i18nDictionary.th;
  const isReg = currentAuthMode === 'register';

  if (authHeadTitle) {
    authHeadTitle.textContent = isReg
      ? (dict.authModalTitleRegister || "สมัครสมาชิก Meta Studio")
      : (dict.authModalTitleLogin || "เข้าสู่ระบบ Meta Studio");
  }
  if (authHeadSub) {
    authHeadSub.textContent = isReg
      ? (dict.authModalSubRegister || "สร้างบัญชีใหม่เพื่อเริ่มสั่งซื้อและรับคีย์ทันที")
      : (dict.authModalSubLogin || "เข้าถึงร้านค้า คลังคีย์ และคำสั่งซื้อของคุณ");
  }
  if (btnAuthSubmit) {
    btnAuthSubmit.textContent = isReg
      ? (dict.btnSubmitRegister || "สร้างบัญชีใหม่")
      : (dict.btnSubmitLogin || "เข้าสู่ระบบ");
  }
  if (authSwitchPrompt) {
    authSwitchPrompt.textContent = isReg
      ? (dict.switchHaveAccount || "มีบัญชีอยู่แล้ว? เข้าสู่ระบบที่นี่")
      : (dict.switchNoAccount || "ยังไม่มีบัญชี? สมัครสมาชิกที่นี่");
  }
}

function openLandingAuth(mode = 'login') {
  if (!landingAuthModal) return;
  switchAuthMode(mode);
  landingAuthModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLandingAuth() {
  if (!landingAuthModal) return;
  landingAuthModal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleAuthOverlayClick(e) {
  if (e.target === landingAuthModal) {
    closeLandingAuth();
  }
}

// 6. Documentation Modal Handlers
const docsModal = document.getElementById('docsModal');

function openDocsModal() {
  if (!docsModal) return;
  docsModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDocsModal() {
  if (!docsModal) return;
  docsModal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleDocsOverlayClick(e) {
  if (e.target === docsModal) {
    closeDocsModal();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCheatXGenModal();
    closeLandingAuth();
    closeDocsModal();
  }
});

function landingSocialAuth(provider) {
  showCrimsonToast(L(`กำลังเชื่อมต่อ ${provider}...`, `Connecting to ${provider}...`, `Conectando ao ${provider}...`));
  setTimeout(() => {
    try {
      localStorage.setItem('meta_user', JSON.stringify({
        username: `${provider.toLowerCase()}_user`,
        email: `user@${provider.toLowerCase()}.meta`,
        role: 'Meta Member',
        provider: provider,
        balance: 97042.00
      }));
    } catch(err) {}

    setTimeout(() => {
      window.location.href = 'home.html';
    }, 600);
  }, 700);
}

function handleAuthStandardSubmit(e) {
  e.preventDefault();
  const dict = i18nDictionary[currentSiteLang] || i18nDictionary.th;
  const user = (document.getElementById('regUser') && document.getElementById('regUser').value.trim()) || 'meta_user';
  const emailInput = document.getElementById('regMail');
  const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : `${user}@meta.store`;
  const pass = (document.getElementById('regPass') && document.getElementById('regPass').value) || '';

  if (currentAuthMode === 'register') {
    const confirmPass = (regPassConfirm && regPassConfirm.value) || '';
    if (pass !== confirmPass) {
      showCrimsonToast(dict.toastPassMismatch || "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน", true);
      if (regPassConfirm) regPassConfirm.focus();
      return;
    }

    const isAdmin = (user === 'metaxstore' && pass === 'metaxstore112');
    if (isAdmin) {
      sessionStorage.setItem('meta_admin_auth', 'true');
    } else {
      sessionStorage.removeItem('meta_admin_auth');
    }

    try {
      localStorage.setItem('meta_user', JSON.stringify({
        username: user,
        email: email,
        role: isAdmin ? 'admin' : 'customer',
        provider: 'Standard',
        balance: isAdmin ? 97042.00 : 0.00,
        isLoggedIn: true,
        avatar: 'logo.png'
      }));
    } catch(err) {}

    showCrimsonToast(dict.toastRegSuccess || "สมัครสมาชิกสำเร็จ! กำลังเข้าสู่ระบบ...");
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 700);
    return;
  }

  // Login Mode: No email required, only username & password
  const isAdmin = (user === 'metaxstore' && pass === 'metaxstore112');
  if (isAdmin) {
    sessionStorage.setItem('meta_admin_auth', 'true');
  } else {
    sessionStorage.removeItem('meta_admin_auth');
  }

  try {
    const prevUser = localStorage.getItem('meta_user');
    let balance = isAdmin ? 97042.00 : 0.00;
    if (prevUser) {
      try {
        const parsed = JSON.parse(prevUser);
        if (parsed.username === user && parsed.balance !== undefined) {
          balance = parsed.balance;
        }
      } catch(e) {}
    }
    localStorage.setItem('meta_user', JSON.stringify({
      username: user,
      email: email,
      role: isAdmin ? 'admin' : 'customer',
      provider: 'Standard',
      balance: balance,
      isLoggedIn: true,
      avatar: 'logo.png'
    }));
  } catch(err) {}

  showCrimsonToast(dict.toastLoginSuccess || "เข้าสู่ระบบสำเร็จ ยินดีต้อนรับสู่ Meta Store");
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 600);
}

// 7. Initialize on DOM Ready
function updateIndexNavbarUserState() {
  let user = null;
  try {
    const raw = localStorage.getItem('meta_user');
    if (raw) user = JSON.parse(raw);
  } catch(e) {}

  const guestGroup = document.getElementById('navGuestGroup');
  const userGroup = document.getElementById('navUserGroup');
  const coinPill = document.getElementById('navCoinPill');

  const isLoggedIn = user && user.isLoggedIn;

  if (guestGroup) guestGroup.style.display = isLoggedIn ? 'none' : 'flex';
  if (userGroup) userGroup.style.display = isLoggedIn ? 'block' : 'none';
  if (coinPill) coinPill.style.display = isLoggedIn ? 'flex' : 'none';

  if (isLoggedIn) {
    const bal = (user.balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2 });
    const coinEl = document.getElementById('coinBalanceDisplay');
    if (coinEl) coinEl.textContent = bal;

    const dropCoin = document.getElementById('dropdownCoinDisplay');
    if (dropCoin) dropCoin.textContent = `${bal} ฿`;

    const nameEl = document.getElementById('dropdownUserName');
    if (nameEl) nameEl.textContent = user.username || 'meta_customer';

    const roleEl = document.getElementById('dropdownUserRole');
    const isAdmin = (user.role === 'admin' || user.username === 'metaxstore' || sessionStorage.getItem('meta_admin_auth') === 'true');
    if (roleEl) roleEl.textContent = isAdmin ? 'Administrator' : (user.role || 'VIP Member');

    const adminBtn = document.getElementById('dropdownAdminLink');
    if (adminBtn) adminBtn.style.display = isAdmin ? 'flex' : 'none';
  }
}

function toggleIndexUserDropdown() {
  const card = document.getElementById('userDropdownCard');
  if (card) card.classList.toggle('active');
}

function handleIndexLogout() {
  try {
    const raw = localStorage.getItem('meta_user');
    if (raw) {
      const u = JSON.parse(raw);
      u.isLoggedIn = false;
      localStorage.setItem('meta_user', JSON.stringify(u));
    }
  } catch(e) {}
  sessionStorage.removeItem('meta_admin_auth');
  updateIndexNavbarUserState();
  showCrimsonToast("ออกจากระบบเรียบร้อยแล้ว");
}

document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('navUserGroup');
  const card = document.getElementById('userDropdownCard');
  if (wrapper && card && !wrapper.contains(e.target)) {
    card.classList.remove('active');
  }
});

// 7. Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setSiteLanguage(currentSiteLang);
  updateCheatxPreview();
  updateIndexNavbarUserState();

  // URL Hash check for #login and #register
  if (window.location.hash === '#login') openLandingAuth('login');
  if (window.location.hash === '#register') openLandingAuth('register');
});
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#login') openLandingAuth('login');
  if (window.location.hash === '#register') openLandingAuth('register');
});
