/* ============================================================
   DATA/SOCIAL.JS  —  Digital Presence & Community data
   ------------------------------------------------------------
   Pure data. js/social.js is the only reader. Editing this one
   file updates the homepage "Digital Presence" panel, the Discord
   community CTA, and every footer's social links at once — nothing
   is hardcoded in the HTML (§41).

   Each platform:
     key   — matches an inline SVG icon in js/social.js
     name  — the platform's own name (proper noun, not translated)
     url   — the profile/channel link ('' → the platform is kept
             here but renders NO active button until a real URL is
             added; see VK below)
     label — a short { en, ar, ru } role/description shown under the
             name; trilingual like the rest of the site.

   TO ADD / CHANGE A LINK later: edit a `url`, add a new platform
   object (and, if new, an icon in js/social.js) — it appears
   everywhere automatically.
   ============================================================ */

const socialData = {
  platforms: [
    {
      key: 'github',
      name: 'GitHub',
      url: 'https://github.com/khaled7115',
      label: { en: 'Projects & Code', ar: 'مشاريع وأكواد', ru: 'Проекты и код' },
    },
    {
      key: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/khaled-ahmed-382a04356/',
      label: { en: 'Professional / Academic', ar: 'مهني / أكاديمي', ru: 'Профессиональное / академическое' },
    },
    {
      key: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/khaled.ahmed.37704',
      label: { en: 'Community / Content', ar: 'مجتمع / محتوى', ru: 'Сообщество / контент' },
    },
    {
      key: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/lord_.san/',
      label: { en: 'Photos & Updates', ar: 'صور وتحديثات', ru: 'Фото и обновления' },
    },
    {
      key: 'telegram',
      name: 'Telegram',
      url: 'https://t.me/lordsense711',
      label: { en: 'Direct Message', ar: 'تواصل مباشر', ru: 'Личные сообщения' },
    },
    {
      key: 'whatsapp',
      name: 'WhatsApp',
      url: 'https://wa.me/201050933480',
      label: { en: 'Quick Chat', ar: 'محادثة سريعة', ru: 'Быстрый чат' },
    },
  ],

  // Premium community call-to-action — a Discord SERVER invite, shown
  // as its own distinct card (not a plain link), yet not bigger than
  // the CV / Journey / Certificates identity (§24/§36).
  // No real Discord server yet — url left empty on purpose so the
  // card stays silent (see js/social.js) until a real invite exists.
  discord: {
    key: 'discord',
    name: 'Discord',
    url: '',
    label: { en: 'Community / Server', ar: 'مجتمع / سيرفر', ru: 'Сообщество / сервер' },
  },
};

// Expose for js/social.js.
if (typeof window !== 'undefined') {
  window.socialData = socialData;
}
