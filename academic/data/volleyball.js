/* ============================================================
   DATA/VOLLEYBALL.JS  —  Volleyball activity data (sports side)
   ------------------------------------------------------------
   Same unified shape as data/events.js (see that file for the full
   schema: title/date/location/description/whatIDid/whatILearned/
   skills/image/images/certificate/videoUrl/people/links, plus the
   volleyball extras team/opponent/result/stats/notes). One reader:
   js/media-system.js. The sports page grid points at this array via
   data-events-source="volleyballData".

   INTENTIONALLY EMPTY (§28 / GOLDEN RULE — never invent progress).
   Hussein hasn't started training or matches yet; that begins after
   the move to Russia. No fake matches, scores, teams, photos, or
   stats live here. Add real activities (type: 'volleyball') and each
   one renders automatically — same premium card, detail modal,
   fullscreen viewer and gallery used everywhere else — with zero
   markup changes. Until then the page shows an honest empty state.

   IMAGE PATHS: write them relative to the academic/ folder
   (e.g. 'assets/volleyball/first-training.jpg'). media-system.js
   resolveMediaPath() adds the right hop for the sports/ page
   automatically, so the same path works everywhere.

   Example (add only when real):
   {
     id: 'first-training',
     type: 'volleyball',
     title:  { en: '…', ar: '…', ru: '…' },
     date:   { en: '…', ar: '…', ru: '…' },
     location: { en: 'City, Country', ar: '…', ru: '…' },
     description:  { en: '…', ar: '…', ru: '…' },
     whatILearned: { en: '…', ar: '…', ru: '…' },
     team: 'My team', opponent: 'Opponent', result: 'Won 3–1',
     image: 'assets/volleyball/first-training.jpg',
     images: [ { src: 'assets/volleyball/1.jpg', caption: { en: '…', ar: '…', ru: '…' } } ],
   }
   ============================================================ */

const volleyballData = [];

// Expose for js/media-system.js (read via data-events-source="volleyballData").
if (typeof window !== 'undefined') {
  window.volleyballData = volleyballData;
}
