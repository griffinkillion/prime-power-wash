/* Generates the SEO pages (6 services, 17 areas, 2 hubs) + sitemap.xml.
   Run:  node scripts/build-pages.mjs   (from the repo root)

   The theme is NOT copied by hand — the shared <style> block is read straight
   out of index.html at build time, so these pages can never drift from the
   homepage. Header/footer are re-templated with absolute links so they resolve
   from the /services/<slug>/ and /areas/<slug>/ subdirectories. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { SERVICES, AREAS, ICONS } from './pages-data.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const ORIGIN = 'https://www.primepowerwashstl.com';
const OG = ORIGIN + '/images/og-card.png';

// Single source of truth for the theme: pull the homepage <style> verbatim.
const home = readFileSync(ROOT + 'index.html', 'utf8');
const CSS = home.slice(home.indexOf('<style>') + 7, home.indexOf('</style>'));

// Additive styles for the page types the homepage doesn't have. New class
// names only — nothing here overrides an existing homepage rule.
const EXTRA_CSS = `
.pagehero{position:relative;background:radial-gradient(120% 120% at 0% 0%,var(--deep),var(--ink) 70%);color:#fff;overflow:hidden}
.pagehero::after{content:"";position:absolute;right:-8%;top:-30%;width:55%;height:150%;background:radial-gradient(circle,rgba(34,201,224,.16),transparent 60%);pointer-events:none}
.pagehero .wrap{padding-block:clamp(2.4rem,6vw,4.2rem);position:relative;z-index:1}
.crumbs{font-size:.85rem;color:rgba(255,255,255,.6);margin:0 0 .9rem;font-weight:500}
.crumbs a{color:rgba(255,255,255,.82);text-decoration:none}
.crumbs a:hover{color:#fff}
.pagehero h1{font-family:var(--font-display);font-size:clamp(1.95rem,4.6vw,3rem);line-height:1.04;font-weight:800;margin:.2rem 0 .7rem}
.pagehero h1 em{font-style:normal;color:var(--aqua)}
.pagehero .lede{color:rgba(255,255,255,.86);max-width:56ch;font-size:clamp(1.02rem,1.7vw,1.18rem);line-height:1.55}
.pagehero .hero__actions{margin-top:1.7rem}
.prose{max-width:68ch}
.prose p{color:var(--muted);margin:0 0 1.05rem;line-height:1.75;font-size:1.03rem}
.related{display:flex;flex-wrap:wrap;gap:.55rem}
.related a{display:inline-block;padding:.5rem .95rem;border:1px solid var(--line);border-radius:999px;font-size:.92rem;font-weight:600;color:var(--text);text-decoration:none;background:var(--paper);transition:border-color .15s,color .15s}
.related a:hover{border-color:var(--brand);color:var(--brand)}
a.svc{text-decoration:none;color:inherit}
a.svc:hover{border-color:var(--brand)}
`;

const PHONE_SVG = '<svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const svcMenu = SERVICES.map((s) => `          <a href="/services/${s.slug}/">${s.nav}</a>`).join('\n');
const areaMenu = AREAS.map((a) => `          <a href="/areas/${a.slug}/">${a.name}</a>`).join('\n');
const svcMobile = SERVICES.map((s) => `      <a href="/services/${s.slug}/">${s.nav}</a>`).join('\n');
const areaMobile = AREAS.map((a) => `      <a href="/areas/${a.slug}/">${a.name}</a>`).join('\n');

const HEADER = `<header class="site-header">
  <div class="wrap nav">
    <a class="brand" href="/" aria-label="Prime Power Wash home">
      <img class="brand__logo" src="/images/logo-dark.png" width="119" height="46" alt="Prime Power Wash" />
    </a>
    <nav class="nav__links" aria-label="Primary">
      <div class="has-menu">
        <a href="/services/">Services</a>
        <div class="dropdown">
${svcMenu}
          <a class="dropdown__all" href="/services/">All services &rarr;</a>
        </div>
      </div>
      <a href="/#work">Our Work</a>
      <a href="/#about">About</a>
      <div class="has-menu">
        <a href="/areas/">Areas</a>
        <div class="dropdown dropdown--cols">
${areaMenu}
          <a class="dropdown__all" href="/areas/">All areas &rarr;</a>
        </div>
      </div>
      <a href="/#contact">Contact</a>
    </nav>
    <div class="nav__cta">
      <a class="nav__phone" href="tel:+13142296210">${PHONE_SVG} (314) 229-6210</a>
      <a class="btn btn--primary nav__btn--est" href="/#contact">Free Estimate</a>
      <a class="btn btn--primary nav__btn--call" href="tel:+13142296210">${PHONE_SVG} Call Now</a>
    </div>
    <button class="nav__toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu">
  <div class="m-group">
    <button class="m-acc" type="button" aria-expanded="false">Services</button>
    <div class="m-sub">
      <a href="/services/">All services</a>
${svcMobile}
    </div>
  </div>
  <a href="/#work">Our Work</a>
  <a href="/#about">About</a>
  <div class="m-group">
    <button class="m-acc" type="button" aria-expanded="false">Areas</button>
    <div class="m-sub">
      <a href="/areas/">All areas</a>
${areaMobile}
    </div>
  </div>
  <a href="/#contact">Contact</a>
  <a class="btn btn--primary" href="tel:+13142296210">Call (314) 229-6210</a>
</div>`;

const FOOTER = `<footer class="site-footer">
  <div class="wrap">
    <div class="footer__top">
      <a class="brand" href="/" aria-label="Prime Power Wash home">
        <img class="brand__logo brand__logo--footer" src="/images/logo-white.png" width="103" height="40" loading="lazy" alt="Prime Power Wash" />
      </a>
      <nav class="footer__links" aria-label="Footer">
        <a href="/services/">Services</a><a href="/#work">Our Work</a><a href="/#about">About</a>
        <a href="/areas/">Areas</a><a href="/#contact">Contact</a>
        <a href="https://www.instagram.com/primepowerwashstl/" target="_blank" rel="noopener">Instagram</a>
      </nav>
    </div>
    <div class="footer__bottom">
      <span>&copy; <span id="yr"></span> Prime Power Wash &middot; St. Louis, Missouri &middot; Designed by
        <a href="https://bizblock.io" target="_blank" rel="noopener"
           style="color:rgba(255,255,255,.85);font-weight:600;text-decoration:underline;text-underline-offset:3px">BizBlock</a></span>
      <span>(314) 229-6210 &middot; Jack@primepowerwashstl.com</span>
    </div>
  </div>
</footer>
<a class="callbar" href="tel:+13142296210"><span class="callbar__btn">&#9742;&#xFE0E;  Tap to call — (314) 229-6210</span></a>`;

const SCRIPT = `<script>
const tog=document.getElementById('navToggle'),menu=document.getElementById('mobileMenu');
tog.addEventListener('click',()=>{const o=menu.classList.toggle('open');tog.setAttribute('aria-expanded',o)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');tog.setAttribute('aria-expanded','false')}));
document.querySelectorAll('.mobile-menu .m-acc').forEach(btn=>btn.addEventListener('click',()=>{const sub=btn.nextElementSibling;btn.setAttribute('aria-expanded',sub.classList.toggle('open'))}));
const io=new IntersectionObserver((es)=>{es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
</script>`;

const HEAD_ASSETS = `<link rel="icon" type="image/png" href="/images/favicon.png" />
<link rel="apple-touch-icon" href="/images/favicon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">`;

function page({ url, title, desc, schema, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${desc}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${OG}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="${OG}" />
<meta name="theme-color" content="#ffffff" />
<link rel="canonical" href="${url}" />
<script type="application/ld+json">
${JSON.stringify(schema)}
</script>
${HEAD_ASSETS}
<style>${CSS}${EXTRA_CSS}</style>
</head>
<body>
${HEADER}
${body}
${FOOTER}
${SCRIPT}
</body>
</html>
`;
}

const CTA_BAND = `<section class="section" style="padding-top:0"><div class="wrap reveal"><div class="season">
  <div class="season__txt"><p class="eyebrow" style="color:var(--aqua-soft)">Free estimate</p><h3>See what a Prime clean looks like on your place.</h3><p>Local, insured, and honest about what your property needs. We come out, look at the actual job, and give you a firm quote — no pressure.</p></div>
  <a class="btn btn--primary" href="/#contact">Get a free estimate</a>
</div></div></section>`;

const heroActions = `<div class="hero__actions"><a class="btn btn--primary" href="/#contact">Get a free estimate</a> <a class="btn btn--ghost" href="tel:+13142296210">Call (314) 229-6210</a></div>`;

const crumbCityList = ['Clayton', 'Ladue', 'Kirkwood', 'Webster Groves', 'Chesterfield', 'St. Louis City'];

function svcCrumbLinks(currentSlug) {
  return SERVICES.filter((s) => s.slug !== currentSlug)
    .map((s) => `<a href="/services/${s.slug}/">${s.nav}</a>`).join('');
}
function areaCrumbLinks(pick) {
  return AREAS.filter((a) => pick.includes(a.name)).map((a) => `<a href="/areas/${a.slug}/">${a.name}</a>`).join('');
}

/* ---- service pages ---- */
function servicePage(s) {
  const url = `${ORIGIN}/services/${s.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service', name: s.h1.replace(/&amp;/g, '&'), serviceType: s.serviceType, url,
        provider: { '@type': 'LocalBusiness', name: 'Prime Power Wash', telephone: '+1-314-229-6210', url: ORIGIN },
        areaServed: { '@type': 'City', name: 'St. Louis' },
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: ORIGIN + '/services/' },
        { '@type': 'ListItem', position: 3, name: s.nav.replace(/&amp;/g, '&'), item: url },
      ] },
    ],
  };
  const icon = ICONS[s.icon];
  const body = `
<section class="pagehero">
  <div class="wrap">
    <p class="crumbs"><a href="/">Home</a> / <a href="/services/">Services</a> / ${s.nav}</p>
    <h1>${s.h1}</h1>
    <p class="lede">${s.lede}</p>
    ${heroActions}
  </div>
</section>
<section class="section"><div class="wrap"><div class="prose reveal">
${s.body.map((p) => `  <p>${p}</p>`).join('\n')}
</div></div></section>
<section class="section section--foam"><div class="wrap">
  <div class="section__head reveal"><p class="eyebrow">What's included</p><h2>${s.h1} in St. Louis</h2></div>
  <div class="svc-grid">
${s.included.map((i) => `    <article class="svc reveal"><span class="svc__icon">${icon}</span><h3>${i.t}</h3><p>${i.d}</p></article>`).join('\n')}
  </div>
</div></section>
<section class="section"><div class="wrap">
  <div class="section__head reveal"><p class="eyebrow">Good to know</p><h2>${s.nav} questions</h2></div>
  <div class="faq reveal">
${s.faq.map((f) => `    <details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('\n')}
  </div>
</div></section>
${CTA_BAND}
<section class="section section--foam"><div class="wrap reveal">
  <p class="eyebrow">More services</p>
  <div class="related">${svcCrumbLinks(s.slug)}</div>
  <p class="eyebrow" style="margin-top:1.5rem">Areas we serve</p>
  <div class="related">${areaCrumbLinks(crumbCityList)}<a href="/areas/">All areas &rarr;</a></div>
</div></section>`;
  return page({ url, title: s.title, desc: s.desc, schema, body });
}

/* ---- area pages ---- */
function areaPage(a) {
  const url = `${ORIGIN}/areas/${a.slug}/`;
  const plain = a.name.replace(/&amp;/g, '&');
  const title = `Pressure Washing in ${plain}, MO | Prime Power Wash`;
  const desc = `Pressure washing, house &amp; roof soft washing, concrete cleaning and window cleaning in ${plain}, Missouri. Locally owned, free estimates: (314) 229-6210.`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service', name: `Pressure Washing in ${plain}`, serviceType: 'Pressure washing', url,
        provider: { '@type': 'LocalBusiness', name: 'Prime Power Wash', telephone: '+1-314-229-6210', url: ORIGIN },
        areaServed: { '@type': 'City', name: plain, containedInPlace: { '@type': 'AdministrativeArea', name: 'Missouri' } },
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
        { '@type': 'ListItem', position: 2, name: 'Areas', item: ORIGIN + '/areas/' },
        { '@type': 'ListItem', position: 3, name: plain, item: url },
      ] },
    ],
  };
  const svcCards = SERVICES.map((s) =>
    `    <a class="svc reveal" href="/services/${s.slug}/"><span class="svc__icon">${ICONS[s.icon]}</span><h3>${s.nav}</h3><p>${s.lede}</p></a>`).join('\n');
  const nearby = AREAS.filter((x) => x.slug !== a.slug).slice(0, 8)
    .map((x) => `<a href="/areas/${x.slug}/">${x.name}</a>`).join('');
  const body = `
<section class="pagehero">
  <div class="wrap">
    <p class="crumbs"><a href="/">Home</a> / <a href="/areas/">Areas</a> / ${a.name}</p>
    <h1>Pressure Washing in <em>${a.name}</em></h1>
    <p class="lede">Exterior cleaning done right in ${a.name} — concrete, house and roof soft washing, windows, decks and more. Locally owned, free in-person estimates.</p>
    ${heroActions}
  </div>
</section>
<section class="section"><div class="wrap"><div class="prose reveal">
${a.body.map((p) => `  <p>${p}</p>`).join('\n')}
</div></div></section>
<section class="section section--foam"><div class="wrap">
  <div class="section__head reveal"><p class="eyebrow">What we clean in ${a.name}</p><h2>Our services</h2></div>
  <div class="svc-grid">
${svcCards}
  </div>
</div></section>
${CTA_BAND}
<section class="section section--foam"><div class="wrap reveal">
  <p class="eyebrow">Nearby areas we serve</p>
  <div class="related">${nearby}<a href="/areas/">All areas &rarr;</a></div>
</div></section>`;
  return page({ url, title, desc, schema, body });
}

/* ---- hub pages ---- */
function servicesHub() {
  const url = `${ORIGIN}/services/`;
  const cards = SERVICES.map((s) =>
    `    <a class="svc reveal" href="/services/${s.slug}/"><span class="svc__icon">${ICONS[s.icon]}</span><span class="svc__spec">${s.serviceType}</span><h3>${s.nav}</h3><p>${s.lede}</p></a>`).join('\n');
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Services', url,
    about: SERVICES.map((s) => ({ '@type': 'Service', name: s.nav.replace(/&amp;/g, '&'), url: `${ORIGIN}/services/${s.slug}/` })) };
  const body = `
<section class="pagehero"><div class="wrap">
  <p class="crumbs"><a href="/">Home</a> / Services</p>
  <h1>Exterior Cleaning <em>Services</em></h1>
  <p class="lede">From soft washing that protects delicate surfaces to high-output cleaning for concrete, we match the method to the material — every time. Serving the Greater St. Louis area.</p>
  ${heroActions}
</div></section>
<section class="section"><div class="wrap">
  <div class="svc-grid">
${cards}
  </div>
</div></section>
${CTA_BAND}
<section class="section section--foam"><div class="wrap reveal">
  <p class="eyebrow">Areas we serve</p>
  <div class="related">${AREAS.map((a) => `<a href="/areas/${a.slug}/">${a.name}</a>`).join('')}</div>
</div></section>`;
  return page({ url, title: 'Pressure Washing Services in St. Louis | Prime Power Wash', desc: 'Concrete cleaning, house and roof soft washing, window cleaning, deck and fence restoration, and commercial pressure washing across St. Louis. Free estimates: (314) 229-6210.', schema, body });
}

function areasHub() {
  const url = `${ORIGIN}/areas/`;
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Service Area', url,
    about: AREAS.map((a) => ({ '@type': 'City', name: a.name.replace(/&amp;/g, '&'), url: `${ORIGIN}/areas/${a.slug}/` })) };
  const body = `
<section class="pagehero"><div class="wrap">
  <p class="crumbs"><a href="/">Home</a> / Areas</p>
  <h1>Proudly Serving <em>Greater St. Louis</em></h1>
  <p class="lede">Residential and commercial exterior cleaning across the metro. Find your community below — and if you don't see it, reach out, we likely cover it.</p>
  ${heroActions}
</div></section>
<section class="section"><div class="wrap reveal">
  <div class="related" style="gap:.7rem">${AREAS.map((a) => `<a href="/areas/${a.slug}/" style="font-size:1rem;padding:.65rem 1.1rem">${a.name}</a>`).join('')}</div>
</div></section>
${CTA_BAND}
<section class="section section--foam"><div class="wrap reveal">
  <p class="eyebrow">Our services</p>
  <div class="related">${SERVICES.map((s) => `<a href="/services/${s.slug}/">${s.nav}</a>`).join('')}</div>
</div></section>`;
  return page({ url, title: 'Pressure Washing Service Area — Greater St. Louis | Prime Power Wash', desc: 'Prime Power Wash serves the Greater St. Louis area including Clayton, Ladue, Kirkwood, Webster Groves, Chesterfield, Creve Coeur and more. Free estimates: (314) 229-6210.', schema, body });
}

/* ---- write everything ---- */
const written = [];
function emit(dir, html) {
  mkdirSync(ROOT + dir, { recursive: true });
  writeFileSync(ROOT + dir + '/index.html', html);
  written.push(dir + '/');
}

emit('services', servicesHub());
emit('areas', areasHub());
SERVICES.forEach((s) => emit(`services/${s.slug}`, servicePage(s)));
AREAS.forEach((a) => emit(`areas/${a.slug}`, areaPage(a)));

/* ---- sitemap ---- */
const urls = [
  ORIGIN + '/',
  ORIGIN + '/services/',
  ORIGIN + '/areas/',
  ...SERVICES.map((s) => `${ORIGIN}/services/${s.slug}/`),
  ...AREAS.map((a) => `${ORIGIN}/areas/${a.slug}/`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
writeFileSync(ROOT + 'sitemap.xml', sitemap);

console.log(`Generated ${written.length} pages + sitemap (${urls.length} URLs):`);
written.forEach((w) => console.log('  /' + w));
