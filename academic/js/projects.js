/* ============================================================
   JS/PROJECTS.JS
   Renders projectsData into #projects-grid on pages/projects.html
   as small, compact cards (§8 of the redesign brief): short summary
   on the card, full description + all tech + links in a lightweight
   detail modal on click. Shows a clean, honest empty state when the
   array has nothing in it yet — see the comment at the top of
   data/projects.js for why no fake demo entries are used here,
   unlike certificates/volunteering.

   TO ADD A PROJECT: add ONE object to the `projectsData` array in
   data/projects.js. Nothing here needs to change.
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initProjectModal();
});

/**
 * WHAT:  Fills #projects-grid with compact project cards, or shows
 *        the empty-state message if there are none yet.
 * WHERE: Runs once on page load. No-ops if #projects-grid isn't
 *        present (i.e. we're not on pages/projects.html).
 */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const emptyState = document.getElementById('projects-empty-state');
  if (!grid || typeof projectsData === 'undefined') return;

  if (projectsData.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  grid.innerHTML = projectsData.map(buildProjectCard).join('');
}

function escProjAttr(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/**
 * WHAT:  Builds the HTML string for a single COMPACT project card:
 *        small image/icon, name, one-line summary, tech chips, and
 *        the GitHub / Live Demo buttons — nothing else. The card
 *        itself is a <button> so the whole thing is one click target
 *        that opens the detail modal (§8 "click for more details").
 */
function buildProjectCard(project, index) {
  const techChips = (project.technologies || [])
    .slice(0, 3)
    .map((tech) => `<span class="skill-chip">${tech}</span>`)
    .join('');
  const moreCount = (project.technologies || []).length - 3;
  const moreChip = moreCount > 0 ? `<span class="skill-chip skill-chip--muted">+${moreCount}</span>` : '';

  const media = project.image
    ? `<img src="${escProjAttr(project.image)}" alt="" class="project-card-img" loading="lazy" decoding="async">`
    : `<span class="project-card-icon" aria-hidden="true">&lt;/&gt;</span>`;

  return `
    <button type="button" class="project-card reveal" data-project-index="${index}">
      <span class="project-card-media">${media}</span>
      <span class="project-card-body">
        <span class="project-card-title">${project.title}</span>
        <span class="project-card-desc">${project.description}</span>
        <span class="skill-chips">${techChips}${moreChip}</span>
      </span>
    </button>
  `;
}

/**
 * WHAT:  One shared modal, filled in from projectsData[index] and
 *        opened on card click / Enter / Space. Closes on the close
 *        button, backdrop click, or Escape — standard dialog pattern.
 */
function initProjectModal() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof projectsData === 'undefined') return;

  let modal = document.getElementById('project-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.className = 'project-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="project-modal-backdrop" data-project-modal-close></div>
      <div class="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button type="button" class="project-modal-close" data-project-modal-close aria-label="Close">&times;</button>
        <div class="project-modal-media"></div>
        <p class="cert-category" id="project-modal-category"></p>
        <h3 id="project-modal-title"></h3>
        <p class="cert-provider" id="project-modal-date"></p>
        <p class="project-modal-desc"></p>
        <div class="skill-chips" id="project-modal-tech"></div>
        <div class="project-links" id="project-modal-links"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-project-index]');
    if (!card) return;
    const project = projectsData[Number(card.dataset.projectIndex)];
    if (!project) return;
    openProjectModal(project);
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-project-modal-close]')) closeProjectModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeProjectModal();
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  modal.querySelector('.project-modal-media').innerHTML = project.image
    ? `<img src="${escProjAttr(project.image)}" alt="">`
    : `<span class="project-card-icon" aria-hidden="true">&lt;/&gt;</span>`;
  modal.querySelector('#project-modal-category').textContent = project.category || '';
  modal.querySelector('#project-modal-title').textContent = project.title || '';
  modal.querySelector('#project-modal-date').textContent = project.date || '';
  modal.querySelector('.project-modal-desc').textContent = project.description || '';
  modal.querySelector('#project-modal-tech').innerHTML = (project.technologies || [])
    .map((t) => `<span class="skill-chip">${t}</span>`).join('');

  const links = [];
  if (project.github) links.push(`<a href="${escProjAttr(project.github)}" class="btn btn-secondary" target="_blank" rel="noopener">GitHub</a>`);
  if (project.liveDemo) links.push(`<a href="${escProjAttr(project.liveDemo)}" class="btn btn-primary" target="_blank" rel="noopener">Live Demo</a>`);
  modal.querySelector('#project-modal-links').innerHTML = links.join('');

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('project-modal-open');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('project-modal-open');
}
