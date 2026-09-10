/* ============================================================
   TRANSITION.JS — Cinematic, world-specific page transitions
   ------------------------------------------------------------
   Chooses the transition by DESTINATION world and plays it in
   two phases across the navigation:

     1. COVER   — on the source page, when a cross-world link is
                  clicked: build a themed overlay, play the "close"
                  animation, then navigate.
     2. REVEAL  — on the destination page, on arrival: rebuild the
                  same themed overlay already covered, play the
                  "open" animation, then remove it.

   The chosen theme is handed to the destination through
   sessionStorage ('he-transition'). All three transition targets
   are index pages (portal / academic / sports), so those three
   pages also carry a tiny inline <head> pre-cover that paints an
   opaque curtain before first paint — the reveal then has no white
   flash to fight. Styling + keyframes live in transition.css.

   The /sports/ ("Interests & Activities") world uses the 'chess'
   theme: a checkerboard gate closes over the page and a rook piece
   rises into view, then the board splits open on arrival.
   ============================================================= */

(function () {
  'use strict';

  var FLAG = 'he-transition';

  // Per-theme durations (ms). cover = source close, reveal = dest open.
  var TIMING = {
    academic: { cover: 1000, reveal: 900 },
    chess:    { cover: 950,  reveal: 950 },
    portal:   { cover: 900,  reveal: 850 }
  };

  function prefersReduced() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* Resolve the destination world from a URL's path. Every transition
     target is a world index page, so path segments are enough. */
  function themeFor(url) {
    try {
      var path = new URL(url, window.location.href).pathname.toLowerCase();
      if (path.indexOf('/sports/') !== -1) return 'chess';
      if (path.indexOf('/academic/') !== -1) return 'academic';
      return 'portal';
    } catch (e) {
      return 'portal';
    }
  }

  /* Clean line-art CHESS ROOK (ivory strokes) — a crenellated tower on a
     tapered base, drawn as simple strokes so it reads instantly as a piece
     at a glance. Deliberately not a king/cross piece. */
  function chessPieceSvg() {
    return '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9D2" stroke-width="3.4"' +
      ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M36 40 L36 22 L44 22 L44 30 L56 30 L56 22 L64 22 L64 40"/>' +
      '<path d="M36 40 C34 48 34 54 37 60 L63 60 C66 54 66 48 64 40 Z"/>' +
      '<path d="M30 78 C30 72 34 68 40 68 L60 68 C66 68 70 72 70 78 L74 88 L26 88 Z"/>' +
      '<path d="M22 92 L78 92"/>' +
      '</svg>';
  }

  /* Small flying CHECKER TILE — a simple rotated square, standing in for
     the pieces/squares that scatter across the board as it's swept clear. */
  function tileSvg() {
    return '<svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">' +
      '<rect x="8" y="8" width="24" height="24" rx="3" transform="rotate(45 20 20)"/>' +
      '</svg>';
  }

  function markupFor(theme) {
    if (theme === 'academic') {
      return '<div class="th th--academic">' +
        '<div class="th-space"></div>' +
        '<div class="th-warp"></div>' +
        '<div class="th-hole"><div class="th-hole-disk"></div><div class="th-hole-core"></div></div>' +
        '<div class="th-flash"></div>' +
      '</div>';
    }
    if (theme === 'chess') {
      return '<div class="th th--chess">' +
        '<div class="th-panel th-panel--a"></div>' +
        '<div class="th-panel th-panel--b"></div>' +
        '<div class="th-halftone"></div>' +
        '<div class="th-speed"></div>' +
        '<div class="th-flock" aria-hidden="true">' +
          '<span class="th-tile th-tile--1">' + tileSvg() + '</span>' +
          '<span class="th-tile th-tile--2">' + tileSvg() + '</span>' +
          '<span class="th-tile th-tile--3">' + tileSvg() + '</span>' +
        '</div>' +
        '<div class="th-piece">' + chessPieceSvg() + '</div>' +
        '<div class="th-flash"></div>' +
      '</div>';
    }
    return '<div class="th th--portal">' +
      '<div class="th-space"></div>' +
      '<div class="th-streaks"></div>' +
      '<div class="th-gate">' +
        '<div class="th-gate-halo"></div>' +
        '<div class="th-gate-ring th-gate-ring--outer"></div>' +
        '<div class="th-gate-ring th-gate-ring--inner"></div>' +
        '<div class="th-gate-core"></div>' +
        '<div class="th-orbit" aria-hidden="true">' +
          '<span class="th-orbit-dot th-orbit-dot--1"></span>' +
          '<span class="th-orbit-dot th-orbit-dot--2"></span>' +
        '</div>' +
      '</div>' +
      '<div class="th-flash"></div>' +
    '</div>';
  }

  function buildOverlay(theme) {
    var overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('data-transition-theme', theme);
    overlay.innerHTML = markupFor(theme);
    return overlay;
  }

  function removePrecover() {
    var pre = document.getElementById('he-transition-precover');
    if (pre && pre.parentNode) pre.parentNode.removeChild(pre);
  }

  /* ---------- OUTGOING: cover the current page, then navigate ---------- */
  function bindTriggers() {
    var links = document.querySelectorAll('.site-switch-link, .portal-card');
    if (!links.length) return;

    var overlay = null;   // built lazily on first qualifying click
    var navigating = false;

    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener('click', function (event) {
        // Let the browser handle new-tab / modified / non-primary clicks.
        if (event.defaultPrevented) return;
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        var href = link.getAttribute('href');
        if (!href || href.charAt(0) === '#' || href.toLowerCase().indexOf('javascript:') === 0) return;
        if (link.target && link.target !== '' && link.target !== '_self') return;

        // Already leaving — swallow further clicks so overlays can't stack.
        if (navigating) { event.preventDefault(); return; }

        var dest = link.href; // absolute URL
        var theme = themeFor(dest);

        event.preventDefault();
        navigating = true;

        if (!overlay) {
          overlay = buildOverlay(theme);
          document.body.appendChild(overlay);
        }

        // Hand the theme to the destination page for its reveal.
        try { sessionStorage.setItem(FLAG, theme); } catch (e) {}

        // Flush styles so the cover animation runs from its start pose.
        void overlay.offsetWidth;
        overlay.classList.add('is-active');

        var dur = prefersReduced() ? 240 : (TIMING[theme] ? TIMING[theme].cover : 600);
        window.setTimeout(function () { window.location.href = dest; }, dur);
      });
    });
  }

  /* ---------- INCOMING: reveal (open) on arrival ---------- */
  function playReveal() {
    var theme = null;
    try { theme = sessionStorage.getItem(FLAG); } catch (e) {}
    if (!theme) { removePrecover(); return; }

    // Consume the flag so a manual refresh doesn't replay the reveal.
    try { sessionStorage.removeItem(FLAG); } catch (e) {}
    if (!TIMING[theme]) theme = 'portal';

    var overlay = buildOverlay(theme);
    document.body.appendChild(overlay);

    // Prime the covered pose, then open. Drop the plain pre-cover only
    // once the animated overlay is in place and already covering.
    void overlay.offsetWidth;
    overlay.classList.add('is-revealing');
    removePrecover();

    var dur = prefersReduced() ? 60 : (TIMING[theme].reveal || 600);
    window.setTimeout(function () {
      if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, dur + 80);
  }

  /* ---------- bfcache / back-forward cleanup ---------- */
  function handlePageShow(event) {
    if (!event.persisted) return;
    // Page restored from bfcache: clear any frozen overlay + stale flag.
    try { sessionStorage.removeItem(FLAG); } catch (e) {}
    removePrecover();
    var stuck = document.querySelectorAll('.page-transition-overlay');
    Array.prototype.forEach.call(stuck, function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

  function init() {
    playReveal();
    bindTriggers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('pageshow', handlePageShow);
})();
