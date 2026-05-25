<template>
  <section id="tours" class="tours-section section">
    <div class="container">
      <div class="section-header fade-in" :class="{ 'visible': isVisible }">
        <span class="section-eyebrow">Our Experiences</span>
        <h2 class="section-title">Curated <em>Tour Packages</em></h2>
        <p class="section-subtitle">Each tour is designed to reveal a different layer of Lalibela's extraordinary character.</p>
      </div>
      
      <div class="tours-grid grid grid-3">
        <div 
          v-for="(tour, index) in tours" 
          :key="index"
          class="tour-card glass-card scale-in"
          :class="{ 'visible': isVisible }"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <div class="tour-img">
            <img :src="tour.image" :alt="tour.name" />
            <span v-if="tour.badge" class="tour-badge" :class="tour.badgeClass">{{ tour.badge }}</span>
          </div>
          <div class="tour-body">
            <div class="tour-meta">
              <span><i :class="tour.durationIcon"></i> {{ tour.duration }}</span>
              <span><i :class="tour.difficultyIcon"></i> {{ tour.difficulty }}</span>
            </div>
            <h3 class="tour-name">{{ tour.name }}</h3>
            <p class="tour-desc">{{ tour.description }}</p>
            <div class="tour-footer">
              <span class="tour-price">From <strong>${{ tour.price }}</strong> / person</span>
              <button class="btn btn-sm btn-primary" @click="scrollToContact">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import lalibelaCityTourImg from '../assets/lalibela-city-tour.png'

export default {
  name: 'ToursSection',
  setup() {
    const isVisible = ref(false)
    
    const tours = [
      {
        name: 'Lalibela City Tour',
        description: 'Explore all 11 rock-hewn churches, ancient tunnels, and sacred courtyards with an expert local guide. Includes traditional lunch.',
        price: 45,
        duration: 'Full Day',
        difficulty: 'Easy–Moderate',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-person-hiking',
        image: lalibelaCityTourImg,
        badge: 'Most Popular',
        badgeClass: 'badge-popular'
      },
      {
        name: 'Yemrehanna Kristos',
        description: 'Journey to this pre-Lalibela cave church built inside a natural cave, one of the most extraordinary sacred sites in all of Africa.',
        price: 65,
        duration: 'Full Day',
        difficulty: 'Moderate',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-person-hiking',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80'
      },
      {
        name: 'Asheten Hiking Adventure',
        description: 'Hike above the clouds to Asheten Mariam monastery at 3,150m. Breathtaking mountain panoramas and an ancient hilltop church await.',
        price: 35,
        duration: 'Half Day',
        difficulty: 'Challenging',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-person-hiking',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
        badge: 'Adventure',
        badgeClass: 'badge-adventure'
      },
      {
        name: 'Traditional Coffee Ceremony',
        description: 'Join a local family for an intimate Ethiopian coffee ceremony — roasting, grinding, brewing — with incense, popcorn, and conversation.',
        price: 20,
        duration: '2–3 Hours',
        difficulty: 'Cultural',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-mug-hot',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80'
      },
      {
        name: 'Village & Cultural Tour',
        description: 'Step into everyday Ethiopian highland life — visit local markets, traditional homes, artisan workshops, and a village school.',
        price: 40,
        duration: 'Full Day',
        difficulty: 'Cultural',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-people-group',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80'
      },
      {
        name: 'Sunset Viewpoint Tour',
        description: 'Watch the golden hour transform the Lalibela mountains into a canvas of amber and crimson. Perfect for photographers and romantics.',
        price: 25,
        duration: '3 Hours',
        difficulty: 'Easy',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-mountain-sun',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        badge: 'Romantic',
        badgeClass: 'badge-romantic'
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
      
      const section = document.querySelector('#tours')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      tours,
      isVisible,
      scrollToContact
    }
  }
}
</script>

<style scoped>
.tours-section {
  background: var(--gray-50);
}

.tours-grid {
  gap: 2rem;
}

.tour-card {
  overflow: hidden;
  transition: var(--transition);
  border-radius: var(--radius-2xl);
  background: var(--white);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-200);
}

.tour-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.tour-img {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.tour-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.tour-card:hover .tour-img img {
  transform: scale(1.1);
}

.tour-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  color: var(--white);
}

.badge-popular {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
}

.badge-adventure {
  background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%);
}

.badge-romantic {
  background: linear-gradient(135deg, #8B5A2B 0%, #A0672F 100%);
}

.tour-body {
  padding: 2rem;
  color: var(--gray-800);
}

.tour-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--gray-500);
}

.tour-meta i {
  color: var(--primary-light);
  margin-right: 0.5rem;
}

.tour-name {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.tour-desc {
  font-size: 0.9375rem;
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.tour-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--gray-200);
  padding-top: 1.5rem;
}

.tour-price {
  font-size: 0.9375rem;
  color: var(--gray-500);
}

.tour-price strong {
  font-size: 1.25rem;
  color: var(--gray-900);
  font-weight: 700;
}

@media (max-width: 1024px) {
  .tours-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .tours-grid {
    grid-template-columns: 1fr;
  }
  
  .tour-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
}
</style>