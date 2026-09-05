<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid grid grid-4">
        <div class="footer-brand">
          <a href="#home" class="footer-logo" @click="scrollToTop">
            <span class="logo-icon">✦</span>
            <span class="logo-text">Lalibela Soul</span>
          </a>
          <p>Authentic Ethiopian experiences with a passionate local guide. Discover the soul of Lalibela through the eyes of someone who calls it home.</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram" class="glass-card">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" class="glass-card">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="TikTok" class="glass-card">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="#" aria-label="YouTube" class="glass-card">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" @click="scrollToSection('home')">Home</a></li>
            <li><a href="#about" @click="scrollToSection('about')">About</a></li>
            <li><a href="#tours" @click="scrollToSection('tours')">Tours</a></li>
            <li><a href="#destinations" @click="scrollToSection('destinations')">Destinations</a></li>
            <li><a href="#gallery" @click="scrollToSection('gallery')">Gallery</a></li>
            <li><a href="#contact" @click="scrollToSection('contact')">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-links">
          <h4>Popular Tours</h4>
          <ul>
            <li><a href="#tours">Lalibela City Tour</a></li>
            <li><a href="#tours">Yemrehanna Kristos</a></li>
            <li><a href="#tours">Asheten Hiking</a></li>
            <li><a href="#tours">Coffee Ceremony</a></li>
            <li><a href="#tours">Village Cultural Tour</a></li>
            <li><a href="#tours">Sunset Viewpoint</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>Contact Info</h4>
          <div class="contact-info">
            <p>
              <i class="fas fa-map-marker-alt"></i>
              Lalibela, Ethiopia
            </p>
            <p>
              <i class="fas fa-phone"></i>
              <a href="tel:+251945141773" class="footer-contact-link">+251 945141773</a>
            </p>
            <p>
              <i class="fas fa-envelope"></i>
              <a href="mailto:estifanosmesganaw@gmail.com" class="footer-contact-link">estifanosmesganaw@gmail.com</a>
            </p>
            <p>
              <i class="fab fa-whatsapp"></i>
              <a href="https://wa.me/251945141773" target="_blank" rel="noopener noreferrer" class="footer-contact-link">WhatsApp: +251 945141773</a>
            </p>
            <p>
              <i class="fab fa-telegram"></i>
              <a href="https://t.me/Estifanos4" target="_blank" rel="noopener noreferrer" class="footer-contact-link">Telegram: @Estifanos4</a>
            </p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Lalibela Soul Tours. All rights reserved.</p>
        <p class="footer-slogan">
          <em>Where every journey tells a story</em>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FooterSection',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return {
      currentYear,
      scrollToSection,
      scrollToTop
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.98) 0%, rgba(17, 24, 39, 0.95) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 5rem 0 0;
  color: var(--white);
}

.footer-grid {
  gap: 3rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  text-decoration: none;
  margin-bottom: 1.5rem;
}

.logo-icon {
  color: var(--primary-light);
  font-size: 1.25rem;
}

.footer-brand p {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social a {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  transition: var(--transition);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.05);
}

.footer-social a:hover {
  background: rgba(201, 151, 58, 0.3);
  color: var(--white);
  transform: translateY(-2px);
}

.footer-links h4,
.footer-contact h4 {
  color: var(--white);
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links ul li {
  margin-bottom: 0.75rem;
}

.footer-links ul a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9375rem;
  text-decoration: none;
  transition: var(--transition);
}

.footer-links ul a:hover {
  color: var(--primary-light);
  transform: translateX(4px);
}

.contact-info p {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9375rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.contact-info i {
  color: var(--primary-light);
  margin-top: 0.125rem;
  flex-shrink: 0;
  width: 1rem;
}

.footer-contact-link {
  color: rgba(255, 255, 255, 0.8);
  transition: var(--transition);
  text-decoration: none;
}

.footer-contact-link:hover {
  color: var(--primary-light);
  text-decoration: underline;
}

.footer-bottom {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}

.footer-slogan em {
  color: var(--primary-light);
  font-style: italic;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .footer {
    padding: 3rem 0 0;
  }
}
</style>