<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <a href="#home" class="nav-logo" @click="scrollToSection('home')">
          <span class="logo-icon">✦</span>
          <span class="logo-text">Lalibela Soul</span>
        </a>
        
        <ul class="nav-menu" :class="{ 'open': isMobileMenuOpen }">
          <li><a href="#home" class="nav-link" @click="scrollToSection('home')">Home</a></li>
          <li><a href="#about" class="nav-link" @click="scrollToSection('about')">About</a></li>
          <li><a href="#tours" class="nav-link" @click="scrollToSection('tours')">Tours</a></li>
          <li><a href="#destinations" class="nav-link" @click="scrollToSection('destinations')">Destinations</a></li>
          <li><a href="#gallery" class="nav-link" @click="scrollToSection('gallery')">Gallery</a></li>
          <li><a href="#testimonials" class="nav-link" @click="scrollToSection('testimonials')">Stories</a></li>
          <li><a href="#contact" class="nav-link nav-cta" @click="scrollToSection('contact')">Book a Tour</a></li>
        </ul>
        
        <button 
          class="hamburger" 
          :class="{ 'active': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Navigation',
  setup() {
    const isScrolled = ref(false)
    const isMobileMenuOpen = ref(false)

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      isMobileMenuOpen.value = false
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      isMobileMenuOpen,
      toggleMobileMenu,
      scrollToSection
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  min-width: min(900px, 92vw);
  z-index: 1000;
  padding: 0.25rem 2.5rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px; /* Force highly rounded */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.navbar.scrolled {
  top: 1rem;
  background: rgba(255, 255, 255, 0.92);
  border-color: rgba(201, 151, 58, 0.3);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  min-width: min(950px, 94vw);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--white);
  text-decoration: none;
  transition: var(--transition);
}

.navbar.scrolled .nav-logo {
  color: var(--gray-900);
}

.logo-icon {
  color: var(--primary-light);
  font-size: 1.15rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: var(--transition);
  position: relative;
  padding: 0.5rem 0.25rem;
}

.navbar.scrolled .nav-link {
  color: var(--gray-700);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--white);
}

.navbar.scrolled .nav-link:hover {
  color: var(--primary);
}

.nav-cta {
  background: var(--primary);
  color: var(--white) !important;
  padding: 0.625rem 1.25rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.75rem;
  box-shadow: 0 4px 15px rgba(201, 151, 58, 0.3);
}

.nav-cta::after {
  display: none;
}

.nav-cta:hover {
  background: var(--primary-dark);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 20px rgba(201, 151, 58, 0.4);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  cursor: pointer;
  background: none;
  border: none;
}

.hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: var(--transition);
}

.navbar.scrolled .hamburger span {
  background: var(--gray-900);
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 991px) {
  .nav-menu {
    display: none;
  }
  
  .hamburger {
    display: flex;
  }
  
  .navbar {
    width: min(600px, 92vw);
    padding: 0.25rem 1.5rem;
  }
  
  .nav-menu.open {
    display: flex;
    position: fixed;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: min(400px, 90vw);
    height: auto;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: var(--radius-2xl);
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  
  .nav-menu.open .nav-link {
    color: var(--gray-800);
    font-size: 1rem;
  }
}
</style>