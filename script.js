/* ===================================================
   LALIBELA SOUL TOURS — script.js
   Interactions: preloader, nav, counters, lightbox,
   scroll animations, booking form
   =================================================== */

'use strict';

/* =============================================
   PRELOADER
   ============================================= */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add('hidden');
    // Trigger initial scroll animations after preloader hides
    checkScrollAnimations();
  }, 1400);
});


/* =============================================
   NAVBAR — sticky + scroll style
   ============================================= */
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();


/* =============================================
   MOBILE HAMBURGER MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

// Close menu when any nav link is clicked
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});


/* =============================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================= */
function checkScrollAnimations() {
  const elements = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on position within parent
        const siblings = Array.from(entry.target.parentElement.children)
          .filter(el => el.hasAttribute('data-aos'));
        const index = siblings.indexOf(entry.target);
        const delay  = Math.min(index * 80, 400);

        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', checkScrollAnimations);


/* =============================================
   ANIMATED COUNTERS
   ============================================= */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);

  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start);
  }, 16);
}

// Trigger counters when stats section enters view
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-number').forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          animateCounter(el, target);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counterObserver.observe(statsSection);
}


/* =============================================
   LIGHTBOX
   ============================================= */
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(card) {
  const src = card.querySelector('img').src;
  const alt = card.querySelector('img').alt;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  // Clear src after transition
  setTimeout(() => { lightboxImg.src = ''; }, 300);
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Expose globally (called from HTML onclick)
window.openLightbox  = openLightbox;
window.closeLightbox = closeLightbox;


/* =============================================
   SCROLL TO TOP BUTTON
   ============================================= */
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* =============================================
   BOOKING FORM — toast feedback
   ============================================= */
const bookingForm = document.getElementById('bookingForm');
const toast       = document.getElementById('toast');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = bookingForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate async send (replace with real fetch to PHP backend)
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Booking Request';
      btn.disabled = false;
      bookingForm.reset();

      // Show toast
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
    }, 1400);
  });
}


/* =============================================
   SMOOTH ACTIVE NAV LINK HIGHLIGHT
   ============================================= */
const sections  = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.nav-link:not(.nav-cta)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active-nav');
        }
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(sec => sectionObserver.observe(sec));

// Add active style dynamically
const style = document.createElement('style');
style.textContent = '.active-nav { color: #fff !important; } .active-nav::after { width: 100% !important; }';
document.head.appendChild(style);


/* =============================================
   PARALLAX HERO (subtle)
   ============================================= */
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroImg.style.transform = `scale(1.06) translateY(${scrolled * 0.18}px)`;
    }
  }, { passive: true });
}
