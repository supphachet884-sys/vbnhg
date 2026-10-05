// ==========================================================================
// MetaStore — Cloudflare Worker Engine (_worker.js)
// - Connects to Cloudflare D1 / D2 Database (when env.DB is bound)
// - Realistic standalone fallback with production defaults when DB is unbound
// - TrueMoney Wallet Gift Voucher Redemption API
// - Clean URL Rewriting for subpages (/store, /topup, /product, /admin, /home)
// ==========================================================================

const STANDALONE_DEFAULTS = {
  settings: {
    storeName: "MetaStore",
    storeBrandDisplay: "Meta Store",
    slogan: "เราจำหน่ายโปรแกรมช่วยเล่นและอื่นๆ สินค้าของเราปลอดภัยต่อผู้ใช้ 100%",
    contactSub: "มีปัญหาสามารถติดต่อแอดมินในดิสได้เลย",
    announcementText: "ว่างตอนบ่ายครับมีปัญหาทัก ticket",
    logoUrl: "logo.png",
    bannerUrl: "banner_default.png",
    theme: {
      primaryColor: "#ff1111",
      accentColor: "#ff2b2b"
    },
    payments: {
      truemoney: {
        enabled: true,
        phone: "0953976456"
      }
    },
    stats: {
      users: 1030,
      products: 23,
      stock: 1779,
      salesCount: 411
    }
  }
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ========================================================================
    // 1. API: System Health & D1 Connection Status
    // ========================================================================
    if (url.pathname === '/api/health') {
      let d1Connected = false;
      let d1Error = null;

      if (env && env.DB) {
        try {
          const res = await env.DB.prepare("SELECT 1 as test").first();
          if (res && res.test === 1) d1Connected = true;
        } catch(e) {
          d1Error = e.message;
        }
      }

      return new Response(JSON.stringify({
        status: "ok",
        platform: "Cloudflare Workers",
        database_connected: d1Connected,
        database_binding: env && env.DB ? "DB_BOUND" : "UNBOUND_STANDALONE",
        d1_error: d1Error,
        r2_binding: env && env.BUCKET ? "BUCKET_BOUND" : "UNBOUND",
        mode: d1Connected ? "D1_LIVE" : "REALISTIC_STANDALONE_FALLBACK"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // ========================================================================
    // ========================================================================
    // 2. API: Settings Fetch (D1 or Standalone Fallback)
    // ========================================================================
    if (url.pathname === '/api/settings' && request.method === 'GET') {
      if (env && env.DB) {
        try {
          const row = await env.DB.prepare("SELECT * FROM settings WHERE id = 1").first();
          if (row) {
            return new Response(JSON.stringify({
              success: true,
              source: "D1",
              data: {
                storeName: row.store_name,
                slogan: row.slogan,
                contactSub: row.contact_sub,
                announcementText: row.announcement_text,
                logoUrl: row.logo_url,
                bannerUrl: row.banner_url,
                theme: { primaryColor: row.primary_color, accentColor: row.accent_color },
                payments: { truemoney: { enabled: true, phone: row.truemoney_phone } },
                stats: {
                  users: row.stat_users || 1030,
                  products: row.stat_products || 23,
                  stock: row.stat_stock || 1779,
                  salesCount: row.stat_sales || 411
                }
              }
            }), { headers: { "Content-Type": "application/json" } });
          }
        } catch(e) {}
      }

      // Standalone fallback: empty or default
      return new Response(JSON.stringify({
        success: true,
        source: "STANDALONE_FALLBACK",
        data: STANDALONE_DEFAULTS.settings
      }), { headers: { "Content-Type": "application/json" } });
    }

    // ========================================================================
    // 2.1 API: Categories (D1 Live Database or Fallback)
    // ========================================================================
    if (url.pathname === '/api/categories') {
      if (request.method === 'GET') {
        if (env && env.DB) {
          try {
            const { results } = await env.DB.prepare("SELECT * FROM categories ORDER BY sort_order ASC, created_at ASC").all();
            return new Response(JSON.stringify({
              success: true,
              source: "D1",
              data: results || []
            }), { headers: { "Content-Type": "application/json" } });
          } catch(e) {}
        }
        return new Response(JSON.stringify({
          success: true,
          source: "STANDALONE_FALLBACK",
          data: []
        }), { headers: { "Content-Type": "application/json" } });
      }
    }

    // ========================================================================
    // 2.2 API: Products (D1 Live Database or Fallback)
    // ========================================================================
    if (url.pathname === '/api/products') {
      if (request.method === 'GET') {
        const catId = url.searchParams.get('categoryId');
        if (env && env.DB) {
          try {
            let query = "SELECT * FROM products ORDER BY sort_order ASC, created_at ASC";
            let stmt = env.DB.prepare(query);
            if (catId) {
              stmt = env.DB.prepare("SELECT * FROM products WHERE category_id = ? ORDER BY sort_order ASC, created_at ASC").bind(catId);
            }
            const { results } = await stmt.all();
            const formatted = (results || []).map(r => ({
              id: r.id,
              categoryId: r.category_id,
              name: r.name,
              badge: r.badge,
              priceMin: r.price_min,
              priceMax: r.price_max,
              stock: r.stock,
              status: r.status,
              imageUrl: r.image_url,
              description: r.description,
              durations: r.durations_json ? JSON.parse(r.durations_json) : []
            }));
            return new Response(JSON.stringify({
              success: true,
              source: "D1",
              data: formatted
            }), { headers: { "Content-Type": "application/json" } });
          } catch(e) {}
        }
        return new Response(JSON.stringify({
          success: true,
          source: "STANDALONE_FALLBACK",
          data: []
        }), { headers: { "Content-Type": "application/json" } });
      }
    }

    // ========================================================================
    // 3. API: TrueMoney Voucher Redemption
    // ========================================================================
    if (url.pathname === '/api/topup/truemoney' && request.method === 'POST') {
      try {
        const body = await request.json();
        const voucherUrl = body.voucher_link || body.voucherUrl || '';
        const phone = body.phone || '0953976456';

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
          return new Response(JSON.stringify({
            success: false,
            message: 'ลิงก์ซองของขวัญไม่ถูกต้อง กรุณาใช้ลิงก์จากแอป TrueMoney Wallet'
          }), { headers: { 'Content-Type': 'application/json' } });
        }

        // Call TrueMoney Gateway API
        const tmRes = await fetch(`https://gift.truemoney.com/campaign/vouchers/${hash}/redeem`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          },
          body: JSON.stringify({
            mobile: phone,
            voucher_hash: hash
          })
        });

        const tmData = await tmRes.json();
        if (tmData && tmData.status && tmData.status.code === 'SUCCESS') {
          const amount = parseFloat(tmData.data.voucher.redeemed_amount_baht || tmData.data.voucher.amount_baht);

          // If D1 is connected, record transaction
          if (env && env.DB) {
            try {
              const txId = 'TX-' + Math.floor(10000 + Math.random() * 90000);
              await env.DB.prepare(
                "INSERT INTO transactions (id, user_id, method, amount, detail, voucher_hash, status) VALUES (?, ?, ?, ?, ?, ?, ?)"
              ).bind(txId, 'usr_customer', 'TrueMoney Wallet', amount, 'ซองของขวัญ TrueMoney', hash, 'SUCCESS').run();
            } catch(dbErr) {}
          }

          return new Response(JSON.stringify({
            success: true,
            amount: amount,
            message: `เติมเงินสำเร็จเรียบร้อย ได้รับ ฿${amount.toLocaleString('en-US')} บาท`,
            owner: tmData.data.owner_profile?.full_name || 'TrueMoney Customer',
            hash: hash
          }), { headers: { 'Content-Type': 'application/json' } });
        } else {
          let errMsg = 'ซองของขวัญไม่ถูกต้องหรือถูกรับไปแล้ว';
          if (tmData && tmData.status) {
            if (tmData.status.code === 'VOUCHER_OUT_OF_STOCK') errMsg = 'ซองของขวัญนี้ถูกรับไปจนหมดแล้ว';
            else if (tmData.status.code === 'VOUCHER_EXPIRED') errMsg = 'ซองของขวัญหมดอายุแล้ว';
            else if (tmData.status.code === 'CANNOT_GET_ENVELOPE') errMsg = 'ไม่พบข้อมูลซองของขวัญ กรุณาตรวจสอบลิงก์';
            else if (tmData.status.message) errMsg = tmData.status.message;
          }
          return new Response(JSON.stringify({
            success: false,
            message: errMsg,
            code: tmData?.status?.code || 'ERROR'
          }), { headers: { 'Content-Type': 'application/json' } });
        }
      } catch (err) {
        return new Response(JSON.stringify({
          success: false,
          message: 'เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์ TrueMoney: ' + err.message
        }), { headers: { 'Content-Type': 'application/json' } });
      }
    }

    // ========================================================================
    // 4. API: Admin Auth Gate (metaxstore / metaxstore112)
    // ========================================================================
    if (url.pathname === '/api/auth/login' && request.method === 'POST') {
      try {
        const { username, password } = await request.json();
        if (username.trim() === 'metaxstore' && password.trim() === 'metaxstore112') {
          return new Response(JSON.stringify({
            success: true,
            role: "admin",
            user: { username: "metaxstore", role: "admin", balance: 97042 }
          }), { headers: { "Content-Type": "application/json" } });
        }
        return new Response(JSON.stringify({
          success: false,
          message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
        }), { status: 401, headers: { "Content-Type": "application/json" } });
      } catch(e) {
        return new Response(JSON.stringify({ success: false, message: "Invalid request" }), { status: 400 });
      }
    }

    // ========================================================================
    // 4.5 R2 File Storage (binding: BUCKET)
    //   GET/HEAD /files/<key>        -> public read
    //   GET      /api/files          -> list   (admin key)
    //   PUT      /api/files/<key>    -> upload (admin key)
    //   DELETE   /api/files/<key>    -> delete (admin key)
    //   Admin key = secret ADMIN_UPLOAD_KEY, sent as "Authorization: Bearer <key>"
    // ========================================================================
    const jsonRes = (obj, status = 200) => new Response(JSON.stringify(obj), {
      status, headers: { "Content-Type": "application/json" }
    });
    const safeKey = (k) => {
      try { k = decodeURIComponent(k); } catch (e) { return null; }
      if (!k || k.length > 500 || k.includes('..') || k.startsWith('/') || k.includes('\\')) return null;
      return k;
    };

    if (url.pathname.startsWith('/files/') && (request.method === 'GET' || request.method === 'HEAD')) {
      if (!env || !env.BUCKET) return new Response("R2 not configured", { status: 503 });
      const key = safeKey(url.pathname.slice('/files/'.length));
      if (!key) return new Response("Bad key", { status: 400 });
      const obj = await env.BUCKET.get(key);
      if (!obj) return new Response("Not found", { status: 404 });
      const headers = new Headers();
      obj.writeHttpMetadata(headers);
      headers.set('etag', obj.httpEtag);
      if (!headers.has('Cache-Control')) headers.set('Cache-Control', 'public, max-age=3600');
      return new Response(request.method === 'HEAD' ? null : obj.body, { headers });
    }

    if (url.pathname === '/api/files' || url.pathname.startsWith('/api/files/')) {
      if (!env || !env.BUCKET) return jsonRes({ success: false, message: "R2 not configured" }, 503);
      const auth = request.headers.get('Authorization') || '';
      if (!env.ADMIN_UPLOAD_KEY || auth !== 'Bearer ' + env.ADMIN_UPLOAD_KEY) {
        return jsonRes({ success: false, message: "Unauthorized" }, 401);
      }
      if (url.pathname === '/api/files' && request.method === 'GET') {
        const list = await env.BUCKET.list({ limit: 200, prefix: url.searchParams.get('prefix') || undefined });
        return jsonRes({
          success: true,
          data: list.objects.map(o => ({ key: o.key, size: o.size, uploaded: o.uploaded, url: '/files/' + encodeURIComponent(o.key).replace(/%2F/g, '/') }))
        });
      }
      const key = safeKey(url.pathname.slice('/api/files/'.length));
      if (!key) return jsonRes({ success: false, message: "Bad key" }, 400);
      if (request.method === 'PUT') {
        await env.BUCKET.put(key, request.body, {
          httpMetadata: { contentType: request.headers.get('Content-Type') || 'application/octet-stream' }
        });
        return jsonRes({ success: true, key, url: '/files/' + encodeURIComponent(key).replace(/%2F/g, '/') });
      }
      if (request.method === 'DELETE') {
        await env.BUCKET.delete(key);
        return jsonRes({ success: true, key });
      }
      return jsonRes({ success: false, message: "Method not allowed" }, 405);
    }

    // ========================================================================
    // 5. Static Assets & Clean URL Rewrites
    // ========================================================================
    if (env && env.ASSETS) {
      if (url.pathname === '/' || url.pathname === '') {
        url.pathname = '/index.html';
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }
      if (url.pathname === '/store') {
        url.pathname = '/store.html';
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }
      if (url.pathname === '/topup') {
        url.pathname = '/topup.html';
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }
      if (url.pathname === '/home') {
        url.pathname = '/home.html';
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }
      if (url.pathname === '/product') {
        url.pathname = '/product.html';
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }
      if (url.pathname === '/admin') {
        url.pathname = '/admin.html';
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }

      const res = await env.ASSETS.fetch(request);
      if (res.status === 404 && !url.pathname.includes('.')) {
        url.pathname = url.pathname + '.html';
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }
      return res;
    }

    return new Response("MetaStore Worker Running", {
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
};
