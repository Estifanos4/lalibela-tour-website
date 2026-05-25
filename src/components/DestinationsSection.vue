<template>
  <section id="destinations" class="destinations-section section">
    <div class="container">
      <div class="section-header fade-in" :class="{ 'visible': isVisible }">
        <span class="section-eyebrow">Places to Discover</span>
        <h2 class="section-title">Sacred <em>Destinations</em></h2>
        <p class="section-subtitle">From ancient churches to mountain peaks — each place holds a story waiting to be told.</p>
      </div>
      
      <div class="destinations-grid">
        <div 
          v-for="(destination, index) in destinations" 
          :key="index"
          class="dest-card glass-card scale-in"
          :class="[{ 'visible': isVisible }, destination.size]"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
          @click="scrollToContact"
        >
          <img :src="destination.image" :alt="destination.name" />
          <div class="dest-overlay">
            <h3>{{ destination.name }}</h3>
            <p>{{ destination.description }}</p>
            <span class="dest-link">
              Explore <i class="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import lalibelaMainImg from '../assets/lalibela-main.png'

export default {
  name: 'DestinationsSection',
  setup() {
    const isVisible = ref(false)
    
    const destinations = [
      {
        name: 'Lalibela churches',
        description: 'The 8th Wonder of the World — 11 monolithic churches carved from living rock in the 12th century',
        image: lalibelaMainImg,
        size: 'dest-large'
      },
      {
        name: 'Yemrehanna Kristos',
        description: 'Ancient cave church, predating even Lalibela',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
        size: ''
      },
      {
        name: 'Asheten Monastery',
        description: 'Perched at 3,150m above sea level',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
        size: ''
      },
      {
        name: 'Bilbala St. George',
        description: 'Remote hilltop church with panoramic views',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        size: ''
      },
      {
        name: 'Mountain Viewpoints',
        description: 'Sweeping views of the Ethiopian highlands',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        size: ''
      },
      {
        name: 'Traditional Villages',
        description: 'Real highland life, unchanged for centuries',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80',
        size: ''
      }
    ]

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    }

    const scrollToContact = () => {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    onMounted(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2
      })
      
      const section = document.querySelector('#destinations')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      destinations,
      isVisible,
      scrollToContact
    }
  }
}
</script>

<style scoped>
.destinations-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 280px;
  gap: 1.5rem;
}

.dest-card {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
}

.dest-large {
  grid-column: span 2;
  grid-row: span 2;
}

.dest-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.dest-card:hover img {
  transform: scale(1.1);
}

.dest-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(31, 41, 55, 0.9) 0%,
    rgba(31, 41, 55, 0.4) 50%,
    transparent 80%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  transition: background var(--transition);
}

.dest-card:hover .dest-overlay {
  background: linear-gradient(
    to top,
    rgba(31, 41, 55, 0.95) 0%,
    rgba(31, 41, 55, 0.6) 50%,
    rgba(31, 41, 55, 0.2) 80%
  );
}

.dest-overlay h3 {
  font-family: var(--font-serif);
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.dest-large .dest-overlay h3 {
  font-size: 1.75rem;
}

.dest-overlay p {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(10px);
  transition: var(--transition);
}

.dest-card:hover .dest-overlay p {
  opacity: 1;
  transform: translateY(0);
}

.dest-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-light);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(10px);
  transition: var(--transition);
}

.dest-card:hover .dest-link {
  opacity: 1;
  transform: translateY(0);
}

.dest-link i {
  transition: transform 0.3s ease;
}

.dest-card:hover .dest-link i {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .destinations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .dest-large {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 640px) {
  .destinations-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 320px;
  }
  
  .dest-large {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>