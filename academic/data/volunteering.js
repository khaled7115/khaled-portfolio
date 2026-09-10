/* ============================================================
   DATA/VOLUNTEERING.JS
   Pure data — same philosophy as data/certificates.js. No HTML,
   no styling, no logic beyond the array itself.

   ------------------------------------------------------------
   ⚠ SOURCE OF TRUTH: data/events.js
   The live Volunteering page and the CV both render the real
   type:'volunteering' entries from data/events.js (through the
   EventSystem / cv.js). This array is now only a lightweight,
   English-only FALLBACK that cv.js reads if events.js hasn't
   loaded — so keep the two in sync when adding an experience,
   but treat events.js as canonical (it also holds AR/RU, images,
   galleries, video and certificate paths).
   ------------------------------------------------------------ */

const volunteeringData = [];
