<template>
  <div id="app">
    <!-- Preloader -->
    <Preloader v-if="isLoading" />
    
    <!-- Navigation -->
    <Navigation />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Stats Section -->
    <StatsSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Tours Section -->
    <ToursSection />
    
    <!-- Destinations Section -->
    <DestinationsSection />
    
    <!-- Gallery Section -->
    <GallerySection />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Testimonials Section -->
    <TestimonialsSection />
    
    <!-- Contact Section -->
    <ContactSection />
    
    <!-- Footer -->
    <FooterSection />
    
    <!-- Scroll to Top Button -->
    <ScrollToTop />
    
    <!-- Toast Notification -->
    <Toast />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Preloader from './components/Preloader.vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ToursSection from './components/ToursSection.vue'
import DestinationsSection from './components/DestinationsSection.vue'
import GallerySection from './components/GallerySection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AntigravityControl from './components/AntigravityControl.vue'
import FooterSection from './components/FooterSection.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import Toast from './components/Toast.vue'

export default {
  name: 'App',
  components: {
    Preloader,
    Navigation,
    HeroSection,
    StatsSection,
    AboutSection,
    ToursSection,
    DestinationsSection,
    GallerySection,
    ServicesSection,
    TestimonialsSection,
    ContactSection,
    AntigravityControl,
    FooterSection,
    ScrollToTop,
    Toast
  },
  setup() {
    const isLoading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false
      }, 1500)
    })

    return {
      isLoading
    }
  }
}
</script>