<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <img 
        src="/src/assets/Lalibela-hero.jpg" 
        alt="Lalibela rock-hewn churches" 
        class="hero-image"
      />
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
      <div class="container text-center">
        <div class="hero-text">
          <h1 class="hero-title">
            Where Stone<br />
            <em>Tells Stories</em><br />
            of Faith
          </h1>
          <p class="hero-subtitle">
            Walk through living churches carved from a single rock 900 years ago. 
            Experience the sacred wonders of Ethiopia with an expert local guide.
          </p>
          
          <div class="hero-scroll-hint-mid">
            <span>Scroll to Discover</span>
          </div>

          <div class="hero-buttons">
            <button class="btn btn-primary btn-lg" @click="scrollToSection('contact')">
              <i class="fas fa-calendar-alt"></i>
              Book Your Experience
            </button>
            <button class="btn btn-glass btn-lg" @click="scrollToSection('tours')">
              <i class="fas fa-compass"></i>
              View Tour Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--gray-900);
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: subtleZoom 30s ease-out infinite alternate;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, 
    rgba(0, 0, 0, 0.4) 0%, 
    rgba(0, 0, 0, 0.2) 60%, 
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  color: var(--white);
  padding-top: 6rem; /* Space for floating navbar */
}

.hero-text {
  animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 10vw, 5.5rem);
  font-weight: 600;
  line-height: 1.05;
  margin-bottom: 2rem;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.hero-title em {
  color: var(--primary-light);
  font-style: italic;
  font-weight: 400;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.95);
  margin: 0 auto 3rem;
  line-height: 1.6;
  max-width: 600px;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}

.hero-scroll-hint-mid {
  margin-bottom: 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

@keyframes subtleZoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding-top: 5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    gap: 1rem;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 14vw, 4rem);
  }
}
</style>