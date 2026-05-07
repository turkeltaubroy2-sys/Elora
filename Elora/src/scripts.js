/* ===============================================================
   ELORA — page scripts.
   Wired to the rendered DOM by App.jsx via useEffect. Returns a
   teardown fn so React can unbind on unmount / hot-reload.
   =============================================================== */

export function initScripts() {
  const cleanups = [];

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));
  }

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
  const mm = document.getElementById('mobileMenu');
  if (burger && mm) {
    const toggle = () => mm.classList.toggle('open');
    burger.addEventListener('click', toggle);
    const closers = [...mm.querySelectorAll('a')];
    const close = () => mm.classList.remove('open');
    closers.forEach((a) => a.addEventListener('click', close));
    cleanups.push(() => {
      burger.removeEventListener('click', toggle);
      closers.forEach((a) => a.removeEventListener('click', close));
    });
  }

  /* ---------- Marquee — duplicate items for a seamless loop ---------- */
  const marqueeWords = [
    'Skin Treatments',
    'Body Contouring',
    'Laser',
    'Apothecary',
    'Microneedling',
    'Lymphatic',
    'Bespoke Facials',
    'Rituals',
  ];
  const track = document.getElementById('marqueeTrack');
  if (track) {
    const buildSet = () =>
      marqueeWords.map((w) => `<span>${w}<i>·</i></span>`).join('');
    track.innerHTML = buildSet() + buildSet() + buildSet() + buildSet();
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());

  /* ---------- FAQ accordion ---------- */
  const faqHandlers = [];
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    const onClick = () => {
      const wasOpen = item.classList.contains('open');
      document
        .querySelectorAll('.faq-item')
        .forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    };
    q.addEventListener('click', onClick);
    faqHandlers.push(() => q.removeEventListener('click', onClick));
  });
  cleanups.push(() => faqHandlers.forEach((fn) => fn()));

  /* ---------- Testimonials carousel ---------- */
  const slides = [...document.querySelectorAll('#testiStage .testi-slide')];
  const dots = [...document.querySelectorAll('#testiNav .dot')];
  if (slides.length && dots.length) {
    let idx = 0;
    const show = (i) => {
      idx = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('active', k === idx));
      dots.forEach((d, k) => d.classList.toggle('active', k === idx));
    };
    const dotHandlers = dots.map((d, i) => {
      const fn = () => show(i);
      d.addEventListener('click', fn);
      return () => d.removeEventListener('click', fn);
    });
    const tick = setInterval(() => show(idx + 1), 7000);
    cleanups.push(() => {
      clearInterval(tick);
      dotHandlers.forEach((fn) => fn());
    });
  }

  /* ============= TWEAKS PANEL ============= */
  const TWEAKS = /*EDITMODE-BEGIN*/ {
    accent: '#B89968',
    displayFont: "'Cormorant Garamond', serif",
    headline: 'A quieter kind of luxury, made for skin.',
    ctaLabel: 'Book Consultation',
    showMarquee: true,
    showStorefront: true,
    showGallery: true,
    showStats: true,
    darkCta: true,
  } /*EDITMODE-END*/;

  const ACCENTS = [
    { name: 'Muted Gold', val: '#B89968', soft: '#C9AC7F' },
    { name: 'Champagne', val: '#C9A87C', soft: '#D8BB91' },
    { name: 'Rose Gold', val: '#B98A7B', soft: '#CFA294' },
    { name: 'Bronze', val: '#8E6B3A', soft: '#A08152' },
    { name: 'Taupe', val: '#8C8074', soft: '#A19589' },
  ];

  const applyTweaks = (t) => {
    const accent =
      ACCENTS.find(
        (a) => a.val.toLowerCase() === (t.accent || '').toLowerCase()
      ) || ACCENTS[0];
    document.documentElement.style.setProperty('--gold', accent.val);
    document.documentElement.style.setProperty('--gold-soft', accent.soft);
    document.documentElement.style.setProperty('--display-font', t.displayFont);
    document
      .querySelectorAll('h1,h2,h3,h4')
      .forEach((h) => (h.style.fontFamily = t.displayFont));
    document
      .querySelectorAll('.lead em, .display em, .h2 em, .cta h2 em')
      .forEach((e) => (e.style.fontFamily = t.displayFont));

    // Hero headline
    const h1 = document.querySelector('.hero-copy h1.display');
    if (h1 && t.headline) {
      const words = t.headline.split(' ');
      h1.innerHTML =
        words.length > 2
          ? words.slice(0, Math.ceil(words.length / 2)).join(' ') +
            '<br>' +
            words
              .slice(Math.ceil(words.length / 2))
              .map((w, i) => (i === 0 ? '<em>' + w + '</em>' : w))
              .join(' ')
          : t.headline;
    }

    // CTA label
    const cta = document.querySelector('.hero-copy .actions .btn');
    if (cta && t.ctaLabel) cta.textContent = t.ctaLabel;

    // Section toggles
    const marqueeEl = document.querySelector('.marquee');
    if (marqueeEl) marqueeEl.style.display = t.showMarquee ? '' : 'none';
    const storefront = document.querySelector(
      'section[data-section="storefront"]'
    );
    if (storefront) storefront.style.display = t.showStorefront ? '' : 'none';
    const gallery = document.querySelector('section[data-section="gallery"]');
    if (gallery) gallery.style.display = t.showGallery ? '' : 'none';
    const stats = document.querySelector('.hero-meta');
    if (stats) stats.style.display = t.showStats ? '' : 'none';

    const ctaSection = document.querySelector('.cta');
    if (ctaSection) {
      ctaSection.style.background = t.darkCta
        ? 'var(--soft-black)'
        : 'var(--warm-beige)';
      ctaSection.style.color = t.darkCta
        ? 'var(--cream)'
        : 'var(--soft-black)';
      ctaSection
        .querySelectorAll('h2')
        .forEach(
          (h) => (h.style.color = t.darkCta ? 'var(--cream)' : 'var(--soft-black)')
        );
      ctaSection
        .querySelectorAll('p')
        .forEach(
          (p) =>
            (p.style.color = t.darkCta
              ? 'rgba(245,238,226,0.7)'
              : 'var(--taupe-deep)')
        );
    }
  };

  const swAccent = document.getElementById('swAccent');
  const swatchHandlers = [];
  if (swAccent) {
    swAccent.innerHTML = '';
    ACCENTS.forEach((a) => {
      const b = document.createElement('button');
      b.className = 'swatch';
      b.style.background = a.val;
      b.title = a.name;
      b.dataset.val = a.val;
      const fn = () => set('accent', a.val);
      b.addEventListener('click', fn);
      swatchHandlers.push(() => b.removeEventListener('click', fn));
      swAccent.appendChild(b);
    });
  }

  const refreshUI = (t) => {
    if (swAccent) {
      [...swAccent.children].forEach((s) =>
        s.classList.toggle(
          'active',
          s.dataset.val.toLowerCase() === t.accent.toLowerCase()
        )
      );
    }
    document
      .querySelectorAll('#segFont button')
      .forEach((b) =>
        b.classList.toggle('active', b.dataset.val === t.displayFont)
      );
    const inH = document.getElementById('inHeadline');
    const inC = document.getElementById('inCta');
    if (inH) inH.value = t.headline;
    if (inC) inC.value = t.ctaLabel;
    const tg = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('on', !!val);
    };
    tg('tgMarquee', t.showMarquee);
    tg('tgStorefront', t.showStorefront);
    tg('tgGallery', t.showGallery);
    tg('tgStats', t.showStats);
    tg('tgDarkCta', t.darkCta);
  };

  let state = { ...TWEAKS };
  const set = (k, v) => {
    state = { ...state, [k]: v };
    applyTweaks(state);
    refreshUI(state);
    try {
      window.parent.postMessage(
        { type: '__edit_mode_set_keys', edits: { [k]: v } },
        '*'
      );
    } catch (e) {
      /* sandboxed parent — ignore */
    }
  };

  const segHandlers = [];
  document.querySelectorAll('#segFont button').forEach((b) => {
    const fn = () => set('displayFont', b.dataset.val);
    b.addEventListener('click', fn);
    segHandlers.push(() => b.removeEventListener('click', fn));
  });

  const inH = document.getElementById('inHeadline');
  const inC = document.getElementById('inCta');
  const onHeadline = (e) => set('headline', e.target.value);
  const onCta = (e) => set('ctaLabel', e.target.value);
  if (inH) inH.addEventListener('input', onHeadline);
  if (inC) inC.addEventListener('input', onCta);

  const toggleHandlers = [];
  const wireToggle = (id, key) => {
    const el = document.getElementById(id);
    if (!el) return;
    const fn = () => set(key, !state[key]);
    el.addEventListener('click', fn);
    toggleHandlers.push(() => el.removeEventListener('click', fn));
  };
  wireToggle('tgMarquee', 'showMarquee');
  wireToggle('tgStorefront', 'showStorefront');
  wireToggle('tgGallery', 'showGallery');
  wireToggle('tgStats', 'showStats');
  wireToggle('tgDarkCta', 'darkCta');

  /* ---------- Tweak panel host protocol ---------- */
  const panel = document.getElementById('tweaks');
  const onMessage = (e) => {
    if (!e.data || !e.data.type || !panel) return;
    if (e.data.type === '__activate_edit_mode') panel.classList.add('open');
    if (e.data.type === '__deactivate_edit_mode')
      panel.classList.remove('open');
  };
  window.addEventListener('message', onMessage);

  const tweaksClose = document.getElementById('tweaksClose');
  const onClose = () => {
    if (panel) panel.classList.remove('open');
    try {
      window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
    } catch (e) {
      /* ignore */
    }
  };
  if (tweaksClose) tweaksClose.addEventListener('click', onClose);

  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (e) {
    /* ignore */
  }

  // Initial paint
  applyTweaks(state);
  refreshUI(state);

  cleanups.push(() => {
    window.removeEventListener('message', onMessage);
    if (tweaksClose) tweaksClose.removeEventListener('click', onClose);
    if (inH) inH.removeEventListener('input', onHeadline);
    if (inC) inC.removeEventListener('input', onCta);
    swatchHandlers.forEach((fn) => fn());
    segHandlers.forEach((fn) => fn());
    toggleHandlers.forEach((fn) => fn());
  });

  return () => cleanups.forEach((fn) => fn());
}
