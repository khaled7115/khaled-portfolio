/* ============================================================
   JS/RESEARCH.JS
   Renders researchData into #research-grid on pages/research.html,
   and a short preview into #research-preview-grid on the homepage.

   Supports multilingual research entries:
   - English: en
   - Arabic: ar
   - Russian: ru
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  renderResearch();
  renderResearchPreview();
});

document.addEventListener('i18n:languagechange', () => {
  renderResearch();
  renderResearchPreview();
});


/* ============================================================
   MAIN RESEARCH GRID
   ============================================================ */

function renderResearch() {
  const grid = document.getElementById('research-grid');
  const emptyState = document.getElementById('research-empty-state');

  if (!grid || typeof researchData === 'undefined') return;

  if (researchData.length === 0) {
    grid.innerHTML = '';

    if (emptyState) {
      emptyState.hidden = false;
    }

    return;
  }

  if (emptyState) {
    emptyState.hidden = true;
  }

  grid.innerHTML = researchData
    .map(buildResearchCard)
    .join('');
}


/* ============================================================
   HOMEPAGE RESEARCH PREVIEW
   Shows only the first 2 research entries.
   ============================================================ */

function renderResearchPreview() {
  const grid = document.getElementById('research-preview-grid');
  const emptyState = document.getElementById('research-preview-empty');

  if (!grid || typeof researchData === 'undefined') return;

  const PREVIEW_COUNT = 2;

  if (researchData.length === 0) {
    grid.innerHTML = '';

    if (emptyState) {
      emptyState.hidden = false;
    }

    return;
  }

  if (emptyState) {
    emptyState.hidden = true;
  }

  grid.innerHTML = researchData
    .slice(0, PREVIEW_COUNT)
    .map(buildResearchCard)
    .join('');
}


/* ============================================================
   GET CURRENT LANGUAGE
   ============================================================ */

function getResearchLanguage() {
  const lang = document.documentElement.lang;

  if (lang === 'ar' || lang === 'ru' || lang === 'en') {
    return lang;
  }

  return 'en';
}


/* ============================================================
   GET TRANSLATED TEXT
   Supports both:
   1. Old format:
      title: 'Some title'

   2. Multilingual format:
      title: {
        en: 'English',
        ar: 'Arabic',
        ru: 'Russian'
      }
   ============================================================ */

function getResearchText(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (!value || typeof value !== 'object') {
    return '';
  }

  const lang = getResearchLanguage();

  return (
    value[lang] ||
    value.en ||
    value.ar ||
    value.ru ||
    ''
  );
}


/* ============================================================
   BUILD RESEARCH CARD
   ============================================================ */

function buildResearchCard(entry) {
  const title = getResearchText(entry.title);
  const abstract = getResearchText(entry.abstract);

  const journal = entry.journal || 'Unpublished';

  const authors = Array.isArray(entry.authors)
    ? entry.authors.join(', ')
    : '';

  const date = entry.date || '';

  const image = entry.image
    ? `
      <div class="research-image">
        <img
          src="${entry.image}"
          alt="${title}"
          loading="lazy"
        >
      </div>
    `
    : '';

  const linkBtn = entry.link
    ? `
      <a
        href="${entry.link}"
        class="btn btn-secondary"
        target="_blank"
        rel="noopener"
      >
        View Publication
      </a>
    `
    : '';

  const pdfBtn = entry.pdf
    ? `
      <a
        href="${entry.pdf}"
        class="btn btn-secondary"
        target="_blank"
        rel="noopener"
      >
        PDF
      </a>
    `
    : '';

  return `
    <article class="cert-card reveal">

      ${image}

      <p class="cert-category">
        ${journal}
      </p>

      <h3 class="cert-title">
        ${title}
      </h3>

      <p class="cert-provider">
        ${authors}${authors && date ? ' &middot; ' : ''}${date}
      </p>

      <p class="cert-description">
        ${abstract}
      </p>

      <div class="project-links">
        ${linkBtn}
        ${pdfBtn}
      </div>

    </article>
  `;
}