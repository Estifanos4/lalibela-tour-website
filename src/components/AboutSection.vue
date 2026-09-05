<template>
  <section id="about" class="about-section section">
    <div class="container">
      <div class="about-grid grid grid-2">
        <div class="about-image-col slide-in-left" :class="{ 'visible': isVisible }">
          <div class="about-img-frame">
            <img 
              :src="estifanosImg" 
              alt="Estifanos Mesganaw - Certified Lalibela Local Guide" 
            />
            <div class="about-img-badge glass-card">
              <i class="fas fa-award"></i>
              <span>Certified<br />Local Guide</span>
            </div>
          </div>
        </div>
        
        <div class="about-text-col slide-in-right" :class="{ 'visible': isVisible }">
          <span class="section-eyebrow">Your Guide</span>
          <h2 class="section-title">Born Here.<br /><em>Passionate About Here.</em></h2>
          <p class="about-lead">
            I'm Estifanos, a Lalibela native and computer science graduate who chose to dedicate my skills to sharing the wonders of my hometown with the world.
          </p>
          <p class="about-body">
            Growing up in the shadow of the magnificent rock-hewn churches, I developed a deep love for Lalibela's history, culture, and hidden corners that no guidebook has ever captured. Every tour I lead is a personal invitation into the real Lalibela — the morning chants echoing through the churches, the mountain air at Asheten, the warmth of a local coffee ceremony.
          </p>
          <p class="about-body">
            My background in technology means I plan every tour with precision, while my roots ensure you experience something genuinely authentic. I speak Amharic, English, and a growing collection of traveler stories.
          </p>
          <div class="about-values">
            <div class="value-chip glass-card">
              <i class="fas fa-heart"></i> 
              Authentic
            </div>
            <div class="value-chip glass-card">
              <i class="fas fa-shield-halved"></i> 
              Trustworthy
            </div>
            <div class="value-chip glass-card">
              <i class="fas fa-compass"></i> 
              Adventurous
            </div>
          </div>

          <div class="about-contact-actions">
            <a href="https://wa.me/251945141773" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp">
              <i class="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="https://t.me/Estifanos4" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-telegram">
              <i class="fab fa-telegram"></i> Telegram @Estifanos4
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import estifanosImg from '../assets/estifanos.jpg'

export default {
  name: 'AboutSection',
  setup() {
    const isVisible = ref(false)

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    }

    onMounted(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3
      })
      
      const section = document.querySelector('#about')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      isVisible,
      estifanosImg
    }
  }
}
</script>

<style scoped>
.about-section {
  background: var(--white);
}

.about-grid {
  align-items: center;
  gap: 3rem;
}

.about-img-frame {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.about-img-frame img {
  height: 450px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.about-img-frame:hover img {
  transform: scale(1.05);
}

.about-img-badge {
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--gray-800);
  border-radius: var(--radius-lg);
  background: var(--white);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-200);
}

.about-img-badge i {
  font-size: 1.5rem;
  color: var(--primary);
}

.about-lead {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  color: var(--gray-700);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 500;
}

.about-body {
  font-size: 0.875rem;
  color: var(--gray-600);
  margin-bottom: 1rem;
  line-height: 1.7;
}

.about-values {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.value-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-700);
  background: var(--gray-100);
  transition: var(--transition);
  border: 1px solid var(--gray-200);
}

.value-chip:hover {
  transform: translateY(-2px);
  background: var(--gray-200);
  box-shadow: var(--shadow-md);
}

.value-chip i {
  color: var(--primary-light);
}

.about-contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-whatsapp {
  background: #25D366;
  color: #ffffff !important;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: var(--radius-full);
  padding: 0.65rem 1.4rem;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.25);
}

.btn-whatsapp:hover {
  background: #1eb956;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

.btn-telegram {
  background: #26A5E4;
  color: #ffffff !important;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: var(--radius-full);
  padding: 0.65rem 1.4rem;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(38, 165, 228, 0.25);
}

.btn-telegram:hover {
  background: #1b8ecc;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(38, 165, 228, 0.4);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-img-frame img {
    height: 400px;
  }
  
  .about-img-badge {
    bottom: -0.5rem;
    right: -0.5rem;
    padding: 1rem;
  }
  
  .about-values {
    justify-content: center;
  }
}
</style>