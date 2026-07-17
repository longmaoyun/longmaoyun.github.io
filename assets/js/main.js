/**
 * 龙猫云机场 - Main JavaScript
 * Simple vanilla JS for core functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  initSmoothScroll();
  initTOC();
  initReadingTime();
});

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initTOC() {
  const tocContainer = document.getElementById('toc');
  if (!tocContainer) return;

  const content = document.querySelector('.post-content, .wiki-content, .page-content, #article-content');
  if (!content) return;

  const headings = content.querySelectorAll('h2, h3');
  if (headings.length < 2) {
    tocContainer.style.display = 'none';
    return;
  }

  const toc = document.createElement('ul');
  toc.className = 'space-y-1 text-sm';

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = 'section-' + index;
    }
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    a.className = 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors';
    if (heading.tagName === 'H3') {
      a.className += ' pl-4 text-xs';
    }
    li.appendChild(a);
    toc.appendChild(li);
  });

  tocContainer.appendChild(toc);
}

function initReadingTime() {
  document.querySelectorAll('[data-reading-time]').forEach(el => {
    const text = el.getAttribute('data-reading-time') || el.textContent || '';
    const wpm = 300;
    const charCount = text.replace(/\s/g, '').length;
    const minutes = Math.max(1, Math.ceil(charCount / wpm));
    el.textContent = minutes + ' 分钟阅读';
  });
}
