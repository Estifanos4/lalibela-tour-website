<template>
  <section id="services" class="services-section section">
    <div class="container">
      <div class="section-header fade-in" :class="{ 'visible': isVisible }">
        <span class="section-eyebrow">What We Offer</span>
        <h2 class="section-title">Our <em>Services</em></h2>
      </div>
      
      <div class="services-grid grid grid-4">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card glass-card scale-in"
          :class="{ 'visible': isVisible }"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ServicesSection',
  setup() {
    const isVisible = ref(false)
    
    const services = [
      {
        icon: 'fas fa-map-location-dot',
        title: 'Local Guiding',
        description: 'Private and group tours led by a born-and-raised Lalibela local with deep cultural knowledge.'
      },
      {
        icon: 'fas fa-person-hiking',
        title: 'Hiking Tours',
        description: 'Guided mountain treks to Asheten, Abune Yosef, and other highland trails with safety equipment.'
      },
      {
        icon: 'fas fa-van-shuttle',
        title: 'Day Trips',
        description: 'Comfortable full-day excursions to Yemrehanna Kristos, Bilbala, Nakuto Leab, and beyond.'
      },
      {
        icon: 'fas fa-plane-arrival',
        title: 'Airport Pickup',
        description: 'Meet and greet at Lalibela Airport with comfortable transfer to your hotel.'
      },
      {
        icon: 'fas fa-car',
        title: 'Transport Arrangement',
        description: 'Reliable vehicle and driver arrangements for all destinations around Lalibela.'
      },
      {
        icon: 'fas fa-camera',
        title: 'Photography Assistance',
        description: 'Know the best golden-hour spots and sacred sites where extraordinary photos are made.'
      },
      {
        icon: 'fas fa-mug-hot',
        title: 'Cultural Experiences',
        description: 'Coffee ceremonies, traditional meals, local music, and authentic community interactions.'
      },
      {
        icon: 'fas fa-hotel',
        title: 'Accommodation Advice',
        description: 'Honest recommendations for every budget — from cozy guesthouses to boutique lodges.'
      }
    ]

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    }

    onMounted(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2
      })
      
      const section = document.querySelector('#services')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      services,
      isVisible
    }
  }
}
</script>

<style scoped>
.services-section {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.services-grid {
  gap: 2rem;
}

.service-card {
  padding: 1.5rem;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 3px solid transparent;
}

.service-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.9);
  border-bottom-color: var(--primary);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 4rem;
  height: 4rem;
  background: rgba(201, 151, 58, 0.1);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
  color: var(--primary-light);
  transition: var(--transition);
}

.service-card:hover .service-icon {
  background: var(--primary);
  color: var(--white);
  transform: scale(1.1);
}

.service-card h3 {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  color: var(--gray-900);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.service-card p {
  font-size: 0.875rem;
  color: var(--gray-600);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: 2rem 1.5rem;
  }
}
</style>