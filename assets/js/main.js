/**
 * 龙猫云机场 - Main JavaScript
 * Longmao Cloud - Main JS
 */

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      disable: window.innerWidth < 768 ? 'mobile' : false
    });
  }

  // GSAP Animations
  initGSAPAnimations();

  // Reading time calculator
  initReadingTime();

  // Smooth scroll for anchor links
  initSmoothScroll();

  // Number counter animation
  initCounters();

  // TOC generator
  initTOC();
});

function initGSAPAnimations() {
  if (typeof gsap === 'undefined') return;

  // Hero section entrance
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroButtons = document.querySelector('.hero-buttons');
  const heroStats = document.querySelector('.hero-stats');

  if (heroTitle) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(heroTitle, { y: 60, opacity: 0, duration: 1 });
    tl.from(heroSubtitle, { y: 30, opacity: 0, duration: 0.8 }, '-=0.4');
    tl.from(heroButtons?.children || [], { y: 20, opacity: 0, duration: 0.5, stagger: 0.15 }, '-=0.3');
    tl.from(heroStats?.children || [], { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.2');
  }

  // Counter animation for stats
  gsap.utils.toArray('.counter-number').forEach(counter => {
    gsap.from(counter, {
      scrollTrigger: {
        trigger: counter,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      textContent: 0,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      onUpdate: function() {
        const target = parseInt(counter.getAttribute('data-target'));
        const current = Math.round(this.targets()[0].textContent);
        if (counter.getAttribute('data-prefix')) {
          counter.textContent = counter.getAttribute('data-prefix') + current.toLocaleString();
        } else {
          counter.textContent = current.toLocaleString();
        }
        if (counter.getAttribute('data-suffix')) {
          counter.textContent += counter.getAttribute('data-suffix');
        }
      }
    });
  });

  // Glass card reveal
  gsap.utils.toArray('.glass-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out'
    });
  });
}

function initReadingTime() {
  document.querySelectorAll('[data-reading-time]').forEach(el => {
    const text = el.getAttribute('data-reading-time') || el.textContent || '';
    const wpm = 300; // Chinese reading speed
    const wordCount = text.replace(/\s/g, '').length;
    const minutes = Math.max(1, Math.ceil(wordCount / wpm));
    el.textContent = minutes + ' 分钟阅读';
  });
}

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

function initCounters() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || '0');
        const duration = parseInt(el.getAttribute('data-duration') || '2000');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
          const current = Math.round(eased * target);
          el.textContent = prefix + current.toLocaleString() + suffix;
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = prefix + target.toLocaleString() + suffix;
          }
        }
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter-number').forEach(el => counterObserver.observe(el));
}

function initTOC() {
  const tocContainer = document.getElementById('toc');
  if (!tocContainer) return;

  const content = document.querySelector('.post-content, .wiki-content, .prose');
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
    a.className = 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors';
    if (heading.tagName === 'H3') {
      a.className += ' pl-4 text-xs';
    }
    li.appendChild(a);
    toc.appendChild(li);
  });

  tocContainer.appendChild(toc);
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
});
