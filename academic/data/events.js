/* ============================================================
   DATA/EVENTS.JS  —  Universal Media & Event Data Model
   ------------------------------------------------------------
   Pure data + schema documentation. This is the ONE shared shape
   for every rich item on the site — certificate, course,
   volunteering experience, volunteer event, competition,
   achievement, project, research, future activity, and every
   volleyball activity (tournament / match / training / team day).
   js/media-system.js (EventSystem) is the only reader.

   IMPORTANT — this file is intentionally EMPTY.
   It ships the SYSTEM, not the content. No fake events, photos,
   people, videos, or results are invented here. Add real items to
   the `eventsData` array below when you have them, and they render
   automatically — with a card, a detail modal, a fullscreen media
   viewer, and a gallery — with zero extra code.

   ------------------------------------------------------------
   THE UNIFIED EVENT SHAPE
   Every field is OPTIONAL except `title`. Anything you omit simply
   doesn't show — no empty rows, no blank galleries, no dead
   buttons. Text fields (title, description, location, …) may be a
   plain string OR a { en, ar, ru } object, exactly like the
   certificate data, so an event reads naturally in all three
   languages.

   {
     id: 'unique-slug',                // optional, for future linking

     // --- identity ---
     type: 'certificate',              // certificate | course | volunteering |
                                       // volunteer-event | competition |
                                       // achievement | project | research |
                                       // volleyball | activity  (free text; shown as a badge)
     title: 'Event title',             // REQUIRED (string or { en, ar, ru })

     // --- when & where ---
     date: 'July 13, 2026',            // string or { en, ar, ru }
     time: '18:00',                    // optional
     location: 'City, Country',        // optional
     organization: 'Organizer / Host', // optional

     // --- narrative (never fabricated; shown only if present) ---
     description: 'Short summary.',
     whatIDid: 'What I actually did / my role.',
     whatILearned: 'What I took away from it.',
     skills: ['Teamwork', 'Python'],   // array of strings or { en, ar, ru }

     // --- media ---
     image: '../assets/events/cover.jpg',   // single cover; string OR
                                             // { src, alt, caption, type } object
     images: [                               // gallery — any length
       { src: '../assets/events/1.jpg', alt: 'Alt text', caption: 'Caption', type: 'image' },
       '../assets/events/2.jpg',             // bare strings are fine too
     ],
     certificate: '../assets/certificates/cert.jpg',  // string OR { image, credentialUrl }
                                             // → adds a "View certificate" button that
                                             //   opens the SAME fullscreen viewer
     videoUrl: 'https://youtu.be/XXXXXXXXXXX',  // YouTube → safe embed; anything else
                                                //   → a "Watch video" link. Button only
                                                //   appears if a URL exists.

     // --- people (build-ready; no real people invented) ---
     people: [
       { name: 'Full Name', role: 'Coach', image: '../assets/people/x.jpg', note: 'Optional note' },
     ],

     // --- links ---
     externalLinks: [
       { label: 'Project repo', url: 'https://…' },
       'https://…',                      // bare URL is fine
     ],

     tags: ['ai', 'community'],          // optional, for future filtering
   }

   ------------------------------------------------------------
   VOLLEYBALL-READY (type: 'volleyball')
   The same shape covers every volleyball activity. Use the fields
   above plus these optional extras (rendered when present, still
   nothing faked):

     team: 'My team',
     opponent: 'Opponent team',
     result: 'Won 3–1',                 // or { en, ar, ru }
     stats: { points: 12, aces: 3, blocks: 2 },   // free-form key/value
     notes: 'Anything else worth noting.'

   The volleyball side may stay "Coming Soon" in its own page — this
   model is ready the moment real matches/trainings are added, using
   the exact same card + viewer + gallery as everything else.
   ------------------------------------------------------------

   HOW TO USE (when a real events page is built):
   1. Add real objects to `eventsData` below.
   2. Give the page a container:  <div data-events-grid></div>
      (optionally a sibling  <p data-events-empty hidden>…</p>).
   3. Include this file, then js/media-system.js — the grid renders
      itself, cards open the detail modal, images open the viewer.
   No per-item HTML, ever.
   ============================================================= */

/* ------------------------------------------------------------
   IMAGE PATHS — write them relative to the academic/ folder
   (e.g. 'assets/volunteering/russian-house/certificate.jpg').
   js/media-system.js resolveMediaPath() adds the right hop for
   whatever page renders them (homepage, pages/, or sports/), so a
   single path works everywhere with no per-page edits.
   ------------------------------------------------------------ */

const eventsData = [];

// Expose for js/media-system.js (which reads window.eventsData).
if (typeof window !== 'undefined') {
  window.eventsData = eventsData;
}
