<template>
  <section id="home" class="hero">
    <!-- Dynamic Multi-Slide Backgrounds -->
    <div class="hero-slides">
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.id"
        class="hero-slide"
        :class="{ 'active': currentSlide === index }"
      >
        <img 
          :src="slide.image" 
          :alt="slide.title" 
          class="hero-image"
        />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-light-beam"></div>
    </div>

    <!-- Sacred Golden Dust / Ambient Particles -->
    <div class="golden-particles" aria-hidden="true">
      <span v-for="n in 12" :key="n" :class="`mote mote-${n}`"></span>
    </div>

    <div class="hero-content">
      <div class="container">
        <!-- Top Status Pill -->
        <div class="hero-top-badge scale-in" :class="{ 'visible': isMounted }">
          <span class="pulse-dot"></span>
          <span class="badge-text">
            <strong>UNESCO World Heritage #18</strong> • Lalibela, Ethiopia
          </span>
          <span class="badge-divider">|</span>
          <span class="badge-accent">Private & Small Group Tours</span>
        </div>

        <div class="hero-main-grid">
          <!-- Left / Center: Headline & Story -->
          <div class="hero-text-block fade-in" :class="{ 'visible': isMounted }">
            <h1 class="hero-title">
              Where Sacred Stone<br />
              <span class="gold-gradient">Tells 900 Years</span><br />
              of Living Faith
            </h1>
            
            <p class="hero-subtitle">
              Walk through 11 monumental rock-hewn churches carved deep into volcanic earth. 
              Discover Ethiopia's sacred jewel with certified native guide 
              <strong>Estifanos Mesganaw</strong>.
            </p>

            <!-- Guide Mini Badge & Contact Quick Link -->
            <div class="guide-trust-pill glass-card">
              <img :src="estifanosImg" alt="Estifanos Mesganaw" class="guide-avatar" />
              <div class="guide-info">
                <span class="guide-role">Your Certified Native Guide</span>
                <strong class="guide-name">Estifanos Mesganaw</strong>
                <span class="guide-contacts">
                  <a href="https://wa.me/251945141773" target="_blank" rel="noopener noreferrer" class="contact-pill-link">
                    <i class="fab fa-whatsapp"></i> +251 945141773
                  </a>
                  <a href="https://t.me/Estifanos4" target="_blank" rel="noopener noreferrer" class="contact-pill-link">
                    <i class="fab fa-telegram"></i> @Estifanos4
                  </a>
                </span>
              </div>
            </div>

            <!-- Call to Actions -->
            <div class="hero-cta-buttons">
              <button class="btn btn-primary btn-lg" @click="scrollToSection('tours')">
                <i class="fas fa-compass"></i>
                Explore Curated Tours
              </button>
              <a 
                href="https://wa.me/251945141773?text=Hi%20Estifanos!%20I'm%20planning%20a%20trip%20to%20Lalibela%20and%20would%20love%20more%20information." 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp-hero btn-lg"
              >
                <i class="fab fa-whatsapp"></i>
                Chat on WhatsApp
              </a>
              <button class="btn btn-glass btn-lg" @click="scrollToSection('contact')">
                <i class="fas fa-calendar-check"></i>
                Book Custom Tour
              </button>
            </div>
          </div>

          <!-- Right: Interactive Landmark Preview Card -->
          <div class="hero-landmark-card glass-card slide-in-right" :class="{ 'visible': isMounted }">
            <div class="card-eyebrow">
              <span class="live-indicator"><i class="fas fa-camera"></i> Featured Landmark</span>
              <span class="slide-count">{{ currentSlide + 1 }} / {{ slides.length }}</span>
            </div>
            
            <h3 class="landmark-name">{{ slides[currentSlide].title }}</h3>
            <span class="landmark-badge">{{ slides[currentSlide].badge }}</span>
            <p class="landmark-desc">{{ slides[currentSlide].tagline }}</p>

            <!-- Landmark Slide Switchers -->
            <div class="landmark-switchers">
              <button 
                v-for="(slide, idx) in slides" 
                :key="slide.id"
                class="switcher-tab"
                :class="{ 'active': currentSlide === idx }"
                @click="setSlide(idx)"
                :title="`Switch to ${slide.title}`"
              >
                <span class="tab-index">0{{ idx + 1 }}</span>
                <span class="tab-label">{{ slide.shortTitle }}</span>
                <span class="tab-progress" :style="{ width: currentSlide === idx ? `${slideProgress}%` : '0%' }"></span>
              </button>
            </div>
          </div>
        </div>



        <!-- Trust Stats Strip -->
        <div class="hero-stats-strip">
          <div class="stat-pill">
            <span class="stat-number">11</span>
            <span class="stat-label">Monolithic Churches</span>
          </div>
          <div class="stat-separator">•</div>
          <div class="stat-pill">
            <span class="stat-number">3,150m</span>
            <span class="stat-label">Mountain Peaks</span>
          </div>
          <div class="stat-separator">•</div>
          <div class="stat-pill">
            <span class="stat-number">100%</span>
            <span class="stat-label">Local & Native Led</span>
          </div>
          <div class="stat-separator">•</div>
          <div class="stat-pill">
            <span class="stat-number">5.0 ★</span>
            <span class="stat-label">Authentic Experience</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

import lalibelaHeroImg from '../assets/Lalibela-hero.jpg'
import yemrehannaImg from '../assets/tours/yemrehanna-kristos.jpg'
import ashetenHikeImg from '../assets/tours/asheten-hike.jpg'
import estifanosImg from '../assets/estifanos.jpg'

export default {
  name: 'HeroSection',
  setup() {
    const isMounted = ref(false)
    const currentSlide = ref(0)
    const slideProgress = ref(0)
    let slideTimer = null
    let progressTimer = null

    const slides = [
      {
        id: 'giyorgis',
        title: 'Bete Giyorgis (Church of Saint George)',
        shortTitle: 'Bete Giyorgis',
        subtitle: '12th Century Monolithic Wonder',
        badge: 'UNESCO World Heritage #18',
        image: lalibelaHeroImg,
        tagline: 'Carved straight downward out of solid red volcanic scoria rock.'
      },
      {
        id: 'yemrehanna',
        title: 'Yemrehanna Kristos Cave Church',
        shortTitle: 'Yemrehanna',
        subtitle: 'Ancient Aksumite Cavern Sanctuary',
        badge: 'Mount Abuna Yosef',
        image: yemrehannaImg,
        tagline: 'Built inside a basalt cave with alternating stone & ancient cedarwood.'
      },
      {
        id: 'asheten',
        title: 'Asheten Maryam Monastery',
        shortTitle: 'Asheten Hike',
        subtitle: 'Highland Peak Monastery at 3,150m',
        badge: 'Cliffside Ridge Sanctuary',
        image: ashetenHikeImg,
        tagline: 'Perched high in the clouds with breathtaking 360° highland vistas.'
      }
    ]

    const setSlide = (idx) => {
      currentSlide.value = idx
      slideProgress.value = 0
    }

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % slides.length
      slideProgress.value = 0
    }

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    onMounted(() => {
      isMounted.value = true

      // Auto advance slide every 7 seconds
      const slideDuration = 7000
      const intervalStep = 100

      progressTimer = setInterval(() => {
        if (slideProgress.value < 100) {
          slideProgress.value += (intervalStep / slideDuration) * 100
        } else {
          nextSlide()
        }
      }, intervalStep)
    })

    onUnmounted(() => {
      if (slideTimer) clearInterval(slideTimer)
      if (progressTimer) clearInterval(progressTimer)
    })

    return {
      isMounted,
      slides,
      currentSlide,
      slideProgress,
      setSlide,
      scrollToSection,
      estifanosImg
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0B0E14;
  padding: 7.5rem 0 4rem;
}

/* Background Slides */
.hero-slides {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.hero-slide.active {
  opacity: 1;
  pointer-events: auto;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
  animation: gentleDrift 25s ease-in-out infinite alternate;
}

@keyframes gentleDrift {
  0% { transform: scale(1.02) translate(0, 0); }
  50% { transform: scale(1.08) translate(-1%, -1%); }
  100% { transform: scale(1.03) translate(1%, 0); }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(11, 14, 20, 0.72) 0%,
    rgba(11, 14, 20, 0.55) 45%,
    rgba(11, 14, 20, 0.9) 100%
  );
  z-index: 2;
}

.hero-light-beam {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 70vw;
  height: 70vw;
  background: radial-gradient(
    circle,
    rgba(201, 151, 58, 0.22) 0%,
    rgba(201, 151, 58, 0.06) 45%,
    transparent 70%
  );
  filter: blur(50px);
  z-index: 2;
  pointer-events: none;
}

/* Golden Ambient Particles */
.golden-particles {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
}

.mote {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #E8B96A;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 10px #C9973A, 0 0 20px #E8B96A;
  animation: floatUp 14s infinite linear;
}

.mote-1 { left: 10%; bottom: -10px; animation-duration: 12s; animation-delay: 0s; width: 3px; height: 3px; }
.mote-2 { left: 25%; bottom: -10px; animation-duration: 15s; animation-delay: 2s; width: 5px; height: 5px; }
.mote-3 { left: 40%; bottom: -10px; animation-duration: 11s; animation-delay: 4s; width: 4px; height: 4px; }
.mote-4 { left: 55%; bottom: -10px; animation-duration: 16s; animation-delay: 1s; width: 3px; height: 3px; }
.mote-5 { left: 70%; bottom: -10px; animation-duration: 13s; animation-delay: 5s; width: 5px; height: 5px; }
.mote-6 { left: 85%; bottom: -10px; animation-duration: 18s; animation-delay: 3s; width: 4px; height: 4px; }
.mote-7 { left: 18%; bottom: -10px; animation-duration: 14s; animation-delay: 7s; width: 3px; height: 3px; }
.mote-8 { left: 32%; bottom: -10px; animation-duration: 17s; animation-delay: 6s; width: 4px; height: 4px; }
.mote-9 { left: 63%; bottom: -10px; animation-duration: 13s; animation-delay: 8s; width: 4px; height: 4px; }
.mote-10 { left: 78%; bottom: -10px; animation-duration: 15s; animation-delay: 9s; width: 3px; height: 3px; }
.mote-11 { left: 48%; bottom: -10px; animation-duration: 12s; animation-delay: 10s; width: 5px; height: 5px; }
.mote-12 { left: 92%; bottom: -10px; animation-duration: 16s; animation-delay: 11s; width: 4px; height: 4px; }

@keyframes floatUp {
  0% {
    transform: translateY(0) scale(0.6);
    opacity: 0;
  }
  15% {
    opacity: 0.8;
  }
  85% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-110vh) scale(1.2);
    opacity: 0;
  }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  color: var(--white);
}

/* Top Status Badge */
.hero-top-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  backdrop-filter: blur(16px);
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  animation: pulseBeacon 2s infinite;
}

@keyframes pulseBeacon {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.badge-divider {
  color: rgba(255, 255, 255, 0.3);
}

.badge-accent {
  color: var(--primary-light);
  font-weight: 600;
}

/* Hero Main Grid */
.hero-main-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.75rem, 5.2vw, 4.75rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.gold-gradient {
  background: linear-gradient(135deg, #FCE8A6 0%, #E8B96A 40%, #C9973A 80%, #A07528 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  font-weight: 500;
  display: inline-block;
  filter: drop-shadow(0 2px 12px rgba(201, 151, 58, 0.3));
}

.hero-subtitle {
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  max-width: 620px;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.hero-subtitle strong {
  color: var(--primary-light);
}

/* Guide Trust Card */
.guide-trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius-2xl);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(15px);
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.guide-avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary-light);
  box-shadow: 0 0 15px rgba(201, 151, 58, 0.4);
}

.guide-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.guide-role {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 600;
}

.guide-name {
  font-size: 1.05rem;
  color: var(--white);
}

.guide-contacts {
  display: flex;
  gap: 1rem;
  margin-top: 0.2rem;
}

.contact-pill-link {
  font-size: 0.78rem;
  color: var(--primary-light);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: var(--transition);
}

.contact-pill-link:hover {
  color: var(--white);
  transform: translateY(-1px);
}

/* Hero CTA Buttons */
.hero-cta-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.btn-whatsapp-hero {
  background: #25D366;
  color: white !important;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
  transition: var(--transition);
  text-decoration: none;
}

.btn-whatsapp-hero:hover {
  background: #1eb956;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.5);
}

/* Right Landmark Card */
.hero-landmark-card {
  padding: 2.25rem;
  border-radius: var(--radius-2xl);
  background: rgba(18, 22, 31, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(25px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.hero-landmark-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--primary-light));
}

.card-eyebrow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
}

.live-indicator i {
  color: var(--primary-light);
  margin-right: 0.4rem;
}

.slide-count {
  font-weight: 700;
  color: var(--primary-light);
  background: rgba(201, 151, 58, 0.15);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
}

.landmark-name {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--white);
  margin-bottom: 0.5rem;
}

.landmark-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-light);
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.landmark-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.75rem;
}

.landmark-switchers {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.switcher-tab {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  text-align: left;
}

.switcher-tab:hover {
  background: rgba(255, 255, 255, 0.12);
  color: var(--white);
}

.switcher-tab.active {
  background: rgba(201, 151, 58, 0.15);
  border-color: rgba(201, 151, 58, 0.5);
  color: var(--white);
}

.tab-index {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-light);
  margin-right: 0.75rem;
}

.tab-label {
  font-size: 0.85rem;
  font-weight: 600;
  flex-grow: 1;
}

.tab-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: var(--primary-light);
  transition: width 0.1s linear;
}

/* Trust Stats Strip */
.hero-stats-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
}

.stat-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--primary-light);
  font-family: var(--font-serif);
}

.stat-label {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.stat-separator {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-main-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6.5rem 0 3rem;
  }

  /* Hide landmark card in mobile view as requested */
  .hero-landmark-card {
    display: none !important;
  }

  /* Hide CTA action buttons in mobile view as requested */
  .hero-cta-buttons {
    display: none !important;
  }

  .hero-stats-strip {
    gap: 0.85rem;
  }
}
</style>