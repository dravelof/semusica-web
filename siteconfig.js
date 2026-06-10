// siteconfig.js — configuración central del sitio Sé Música.
// Plain JS (no Babel): define helpers globales antes de cargar los componentes.
window.SEMUSICA = {
  // ↓↓↓ Enlace de Microsoft Bookings — "Agendar diagnóstico" lo abre en pestaña nueva.
  bookingUrl: "https://goo.su/IOPhGS",

  // Correo al que llegan las consultas del formulario.
  contactEmail: "contacto@semusica.com",

  // ↓↓↓ Google Analytics 4 — pegue aquí su ID de medición (formato "G-XXXXXXXXXX").
  // Déjelo vacío para desactivar la analítica. Solo se carga si el usuario acepta cookies analíticas.
  gaMeasurementId: "G-LRNTY8WZTN",

  // ============================================================
  //  Fotografías del sitio (tratamiento duotono automático)
  // ============================================================
  // PROVISIONAL: material genérico de Unsplash. Cuando tenga fotografía
  // propia, guárdela en assets/photos/ y reemplace aquí la URL por la ruta
  // local (p. ej. "assets/photos/hero.jpg"). El duotono de marca se aplica
  // solo. Si una URL falla, el sitio muestra la gráfica abstracta de siempre.
  photos: {
    // Hero del home — personas en formación / aprendizaje colaborativo.
    hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70",
    // Nuestra historia — equipo trabajando.
    historia: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=70",
    // Acción social (home) — docentes en una capacitación / formación remota.
    // PROVISIONAL (Unsplash). Reemplace por una foto real de sus programas de
    // formación docente durante la pandemia para máximo impacto.
    accionSocial: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=70",
    // Retrato del fundador (página "Nuestra historia") — Daniel Ravelo Franco.
    // VACÍO a propósito: aquí debe ir una FOTO REAL del fundador (no stock).
    // Cuando la tenga, guárdela en assets/photos/ y ponga aquí su ruta,
    // p. ej. "assets/photos/daniel-ravelo.jpg". Mientras tanto se muestra
    // un recuadro rotulado que indica qué foto va ahí.
    fundador: "assets/photos/daniel-ravelo.jpg",
  },
};

// ============================================================
//  Medición de eventos (GA4 / GTM) — "altamente trackeable"
// ============================================================
// semTrack(nombre, params): registra un evento. Siempre lo empuja a dataLayer
// (por si conecta Google Tag Manager) y, si el usuario aceptó cookies analíticas
// (existe window.gtag), lo envía también a GA4. Sin consentimiento, no sale nada
// a Google: solo queda en dataLayer del propio navegador.
window.semTrack = function (name, params) {
  try {
    var p = params || {};
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, p));
    if (typeof window.gtag === "function") window.gtag("event", name, p);
  } catch (e) {}
};

// "Agendar diagnóstico": abre Bookings en pestaña nueva; si no hay enlace, va al formulario.
window.semAgendar = function () {
  window.semTrack("agendar_diagnostico", { ubicacion: location.pathname });
  var url = (window.SEMUSICA && window.SEMUSICA.bookingUrl) || "";
  if (url) {
    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return;
  }
  var el = document.getElementById("contacto");
  if (el) {
    var top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: top, behavior: "smooth" });
  } else {
    window.location.href = "index.html#contacto";
  }
};

// Desplazamiento suave a una sección del home (o navegación desde página interna).
window.semGoToSection = function (id) {
  var el = document.getElementById(id);
  if (el) {
    var top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: top, behavior: "smooth" });
  } else {
    window.location.href = "index.html#" + id;
  }
};

// (El envío del formulario de contacto ahora lo gestiona Netlify Forms vía POST nativo.)

// ============================================================
//  Banner de consentimiento de cookies (remarketing)
// ============================================================
(function () {
  var KEY = "sm_cookie_consent"; // JSON: {analytics:bool, remarketing:bool}

  // Hook para activar etiquetas de remarketing (Google Ads / Meta Pixel).
  // Pegue aquí sus scripts; solo corre si el usuario autorizó "remarketing".
  window.semEnableRemarketing = function () {
    // Ejemplo: cargar gtag / fbq aquí.
  };
  // Hook para analítica (Google Analytics 4). Solo corre si el usuario autorizó "analíticas".
  window.semEnableAnalytics = function () {
    var id = (window.SEMUSICA && window.SEMUSICA.gaMeasurementId) || "";
    if (!id || window.__smGaLoaded) return;
    window.__smGaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
  };

  function readConsent() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function applyConsent(c) {
    if (c && c.analytics && typeof window.semEnableAnalytics === "function") window.semEnableAnalytics();
    if (c && c.remarketing && typeof window.semEnableRemarketing === "function") window.semEnableRemarketing();
  }
  function saveConsent(c) {
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
    applyConsent(c);
    var b = document.getElementById("sm-cookie-banner");
    if (b) b.parentNode.removeChild(b);
  }

  function buildBanner() {
    if (document.getElementById("sm-cookie-banner")) return;
    var prev = readConsent() || { analytics: false, remarketing: false };

    var wrap = document.createElement("div");
    wrap.id = "sm-cookie-banner";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-label", "Aviso de cookies");
    wrap.style.cssText = [
      "position:fixed", "left:16px", "right:16px", "bottom:16px", "z-index:9999",
      "max-width:780px", "margin:0 auto", "background:#0F1146", "color:#fff",
      "border:1px solid rgba(255,255,255,.16)", "border-radius:16px",
      "box-shadow:0 18px 40px rgba(17,18,46,.4)", "padding:22px 24px",
      "font-family:var(--font-sans, system-ui, sans-serif)"
    ].join(";");

    // ----- Vista principal -----
    var main = document.createElement("div");
    main.style.cssText = "display:flex; gap:20px; align-items:center; flex-wrap:wrap;";
    var txt = document.createElement("div");
    txt.style.cssText = "flex:1 1 320px; font-size:14px; font-weight:300; line-height:1.55; color:rgba(255,255,255,.88);";
    txt.innerHTML = 'Usamos cookies propias y de terceros para mejorar su experiencia y, con su permiso, para <strong style="font-weight:600;color:#fff">remarketing</strong>. Puede aceptarlas, rechazarlas, gestionarlas o leer más en nuestra <a href="politica-privacidad.html#cookies" style="color:#80D3A6;text-decoration:underline;">política de cookies</a>.';
    var btns = document.createElement("div");
    btns.style.cssText = "display:flex; gap:10px; flex:0 0 auto; flex-wrap:wrap;";

    function mkBtn(label, kind) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = label;
      if (kind === "primary") b.style.cssText = "font:inherit;font-size:14px;font-weight:600;letter-spacing:.02em;padding:11px 22px;border-radius:999px;border:none;cursor:pointer;background:#00A859;color:#fff;";
      else if (kind === "ghost") b.style.cssText = "font:inherit;font-size:14px;font-weight:500;padding:11px 16px;border-radius:999px;cursor:pointer;background:transparent;color:#80D3A6;border:none;text-decoration:underline;";
      else b.style.cssText = "font:inherit;font-size:14px;font-weight:500;padding:11px 20px;border-radius:999px;cursor:pointer;background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4);";
      return b;
    }
    var personalizar = mkBtn("Personalizar", "ghost");
    var rechazar = mkBtn("Rechazar todo", "outline");
    var aceptar = mkBtn("Aceptar todo", "primary");
    btns.appendChild(personalizar); btns.appendChild(rechazar); btns.appendChild(aceptar);
    main.appendChild(txt); main.appendChild(btns);

    // ----- Vista de preferencias -----
    var prefs = document.createElement("div");
    prefs.style.cssText = "display:none; margin-top:4px;";
    function row(titulo, desc, name, checked, locked) {
      var r = document.createElement("label");
      r.style.cssText = "display:flex; gap:14px; align-items:flex-start; padding:14px 0; border-top:1px solid rgba(255,255,255,.14); cursor:" + (locked ? "default" : "pointer") + ";";
      var cb = document.createElement("input");
      cb.type = "checkbox"; cb.name = name; cb.checked = checked; cb.disabled = !!locked;
      cb.style.cssText = "margin-top:3px; width:18px; height:18px; accent-color:#00A859; flex:0 0 auto;" + (locked ? "opacity:.6;" : "");
      var box = document.createElement("div");
      box.innerHTML = '<div style="font-size:14px;font-weight:600;color:#fff">' + titulo + (locked ? ' <span style="font-weight:400;font-size:12px;color:rgba(255,255,255,.6)">(siempre activas)</span>' : '') + '</div><div style="font-size:13px;font-weight:300;line-height:1.5;color:rgba(255,255,255,.72);margin-top:2px">' + desc + '</div>';
      r.appendChild(cb); r.appendChild(box);
      return r;
    }
    var rNec = row("Necesarias", "Imprescindibles para que el sitio funcione.", "necesarias", true, true);
    var rAna = row("Analíticas", "Nos ayudan a entender el uso del sitio de forma anónima.", "analytics", prev.analytics, false);
    var rMkt = row("Remarketing", "Permiten mostrarle nuestros anuncios en otras webs.", "remarketing", prev.remarketing, false);
    var prefsBtns = document.createElement("div");
    prefsBtns.style.cssText = "display:flex; justify-content:flex-end; gap:10px; margin-top:16px; flex-wrap:wrap;";
    var guardar = mkBtn("Guardar preferencias", "primary");
    prefsBtns.appendChild(guardar);
    prefs.appendChild(rNec); prefs.appendChild(rAna); prefs.appendChild(rMkt); prefs.appendChild(prefsBtns);

    wrap.appendChild(main); wrap.appendChild(prefs);
    document.body.appendChild(wrap);

    // ----- Eventos -----
    personalizar.addEventListener("click", function () {
      var showing = prefs.style.display === "block";
      prefs.style.display = showing ? "none" : "block";
      personalizar.textContent = showing ? "Personalizar" : "Ocultar opciones";
    });
    rechazar.addEventListener("click", function () { saveConsent({ analytics: false, remarketing: false }); });
    aceptar.addEventListener("click", function () { saveConsent({ analytics: true, remarketing: true }); });
    guardar.addEventListener("click", function () {
      saveConsent({ analytics: rAna.querySelector("input").checked, remarketing: rMkt.querySelector("input").checked });
    });
  }

  // Reabrir preferencias desde el footer.
  window.semAbrirCookies = function () { buildBanner(); };

  function init() {
    var consent = readConsent();
    if (consent) { applyConsent(consent); return; }
    buildBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

// ============================================================
//  Popup de confirmación tras enviar un formulario (?enviado=...)
// ============================================================
(function () {
  function showPopup(kind) {
    var data = kind === "reclamo"
      ? { t: "\u00a1Reclamaci\u00f3n registrada!", d: "Tu hoja de reclamaci\u00f3n qued\u00f3 registrada en nuestro sistema. Conserva la confirmaci\u00f3n que recibir\u00e1s por correo como constancia. Te responderemos dentro del plazo de ley (15 d\u00edas h\u00e1biles)." }
      : { t: "\u00a1Mensaje recibido!", d: "Gracias por escribirnos. Te responderemos dentro de las pr\u00f3ximas 24 horas h\u00e1biles para coordinar tu diagn\u00f3stico." };

    var ov = document.createElement("div");
    ov.id = "sm-form-popup";
    ov.style.cssText = "position:fixed;inset:0;z-index:10000;background:rgba(15,17,46,.6);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:24px;font-family:var(--font-sans,system-ui,sans-serif);";
    var card = document.createElement("div");
    card.style.cssText = "max-width:460px;width:100%;background:#fff;border-radius:20px;box-shadow:0 24px 60px rgba(15,17,46,.35);padding:40px 36px;text-align:center;";
    card.innerHTML =
      '<div style="width:64px;height:64px;border-radius:999px;background:var(--sm-green,#00A859);display:flex;align-items:center;justify-content:center;margin:0 auto 22px;">' +
      '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<h2 style="font-family:var(--font-display-ext,sans-serif);font-weight:700;font-size:24px;line-height:1.1;letter-spacing:.01em;text-transform:uppercase;color:var(--sm-ink,#16183a);margin:0 0 12px;">' + data.t + '</h2>' +
      '<p style="font-weight:300;font-size:15.5px;line-height:1.6;color:var(--sm-ink-2,#444);margin:0 0 26px;">' + data.d + '</p>' +
      '<button type="button" id="sm-popup-ok" style="font:inherit;font-size:15px;font-weight:600;padding:13px 30px;border-radius:999px;border:none;cursor:pointer;background:var(--sm-blue,#3E4095);color:#fff;">Entendido</button>';
    ov.appendChild(card);
    document.body.appendChild(ov);
    function close() { if (ov.parentNode) ov.parentNode.removeChild(ov); }
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    card.querySelector("#sm-popup-ok").addEventListener("click", close);
  }

  window.semShowFormPopup = showPopup;

  // Envío AJAX a Netlify Forms: manda los datos en segundo plano y muestra el
  // popup al instante, sin recargar ni pasar por la pantalla por defecto de Netlify.
  window.semSubmitForm = function (e, kind) {
    e.preventDefault();
    var form = e.currentTarget || e.target;
    if (!form.reportValidity || form.reportValidity()) {
      var params = new URLSearchParams();
      new FormData(form).forEach(function (v, k) { params.append(k, v); });
      if (!params.has("form-name")) params.append("form-name", form.getAttribute("name") || "");
      var btn = form.querySelector('button[type="submit"], [type="submit"]');
      if (btn) { btn.disabled = true; btn.style.opacity = "0.6"; }
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      }).then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        window.semTrack(kind === "reclamo" ? "reclamo_enviado" : "contacto_enviado", { ubicacion: location.pathname });
        showPopup(kind);
        try { form.reset(); } catch (err) {}
        if (btn) { btn.disabled = false; btn.style.opacity = ""; }
      }).catch(function () {
        // Si el envío en segundo plano falla, recurre al envío nativo del formulario.
        if (btn) { btn.disabled = false; btn.style.opacity = ""; }
        form.submit();
      });
    }
  };

  function initPopup() {
    var params = new URLSearchParams(window.location.search);
    var enviado = params.get("enviado");
    if (!enviado) return;
    showPopup(enviado);
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initPopup);
  else initPopup();
})();

// ============================================================
//  Auto-tracking: profundidad de scroll + clics a enlaces externos
//  (se apoya en semTrack → respeta el consentimiento analítico)
// ============================================================
(function () {
  function init() {
    // Clics a enlaces salientes (otros dominios)
    document.addEventListener("click", function (e) {
      var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!a) return;
      var href = a.getAttribute("href") || "";
      if (/^https?:\/\//i.test(href) && href.indexOf(location.host) === -1) {
        window.semTrack("clic_saliente", { url: href, texto: (a.textContent || "").trim().slice(0, 80) });
      } else if (/(^|\/)blog-[a-z0-9-]+\.html(#|$)/i.test(href)) {
        window.semTrack("blog_entrada_click", { destino: href });
      }
    }, true);

    // Hitos de profundidad de lectura
    var marks = [25, 50, 75, 100], hit = {};
    function onScroll() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      if (max <= 0) return;
      var pct = Math.round(((h.scrollTop || window.pageYOffset) / max) * 100);
      for (var i = 0; i < marks.length; i++) {
        if (pct >= marks[i] && !hit[marks[i]]) {
          hit[marks[i]] = 1;
          window.semTrack("scroll_profundidad", { porcentaje: marks[i], pagina: location.pathname });
        }
      }
    }
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return; ticking = true;
      window.requestAnimationFrame(function () { onScroll(); ticking = false; });
    }, { passive: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
