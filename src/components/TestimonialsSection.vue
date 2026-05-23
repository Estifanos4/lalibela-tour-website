<template>
  <section id="testimonials" class="testimonials-section section">
    <div class="container">
      <div class="section-header fade-in" :class="{ 'visible': isVisible }">
        <span class="section-eyebrow">Traveler Stories</span>
        <h2 class="section-title">What Our <em>Guests Say</em></h2>
      </div>
      
      <div class="testimonials-grid grid grid-3">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="testi-card glass-card scale-in"
          :class="[{ 'visible': isVisible }, testimonial.featured ? 'testi-featured' : '']"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <div class="testi-stars">{{ testimonial.stars }}</div>
          <p class="testi-text">"{{ testimonial.text }}"</p>
          <div class="testi-author">
            <img :src="testimonial.avatar" :alt="testimonial.name" />
            <div>
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.country }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'TestimonialsSection',
  setup() {
    const isVisible = ref(false)
    
    const testimonials = [
      {
        stars: '★★★★★',
        text: 'Estifanos gave us the most incredible day of our entire Ethiopia trip. His knowledge of the churches goes far beyond what any guidebook can offer. We felt like insiders, not tourists.',
        name: 'James T.',
        country: 'United Kingdom',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        featured: false
      },
      {
        stars: '★★★★★',
        text: 'The Asheten hike was challenging but absolutely worth every step. Watching the sun rise over Lalibela from the monastery at 3,150 meters — I will never forget it as long as I live.',
        name: 'Sofia M.',
        country: 'Germany',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        featured: true
      },
      {
        stars: '★★★★★',
        text: 'The coffee ceremony with the local family was the highlight of my whole trip to Africa. Genuine hospitality, beautiful culture, and a guide who truly cares.',
        name: 'Marco R.',
        country: 'Italy',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        featured: false
      },
      {
        stars: '★★★★★',
        text: 'I was nervous traveling solo in Ethiopia but Estifanos made everything seamless. Airport pickup, hotel recommendation, tour — he thought of everything. 10/10 recommend.',
        name: 'Priya K.',
        country: 'United States',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
        featured: false
      },
      {
        stars: '★★★★★',
        text: 'Yemrehanna Kristos blew my mind. It\'s one of the most mysterious and beautiful places I\'ve ever been. The drive through the mountains alone was worth the trip.',
        name: 'Luc B.',
        country: 'France',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        featured: false
      },
      {
        stars: '★★★★★',
        text: 'We came as a family with young children and Estifanos adjusted the entire experience perfectly. The kids still talk about Ethiopia months later. A gift of a trip.',
        name: 'Anna S.',
        country: 'Australia',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
        featured: false
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
      
      const section = document.querySelector('#testimonials')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      testimonials,
      isVisible
    }
  }
}
</script>

<style scoped>
.testimonials-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.testimonials-grid {
  gap: 2rem;
}

.testi-card {
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.testi-card::before {
  content: '"';
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-family: var(--font-serif);
  font-size: 3rem;
  color: rgba(201, 151, 58, 0.1);
  line-height: 1;
  pointer-events: none;
}

.testi-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.testi-featured {
  background: rgba(201, 151, 58, 0.08);
  border: 1px solid rgba(201, 151, 58, 0.2);
}

.testi-featured:hover {
  background: rgba(201, 151, 58, 0.12);
}

.testi-stars {
  color: var(--primary);
  font-size: 1.125rem;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.testi-featured .testi-stars {
  color: var(--primary-light);
}

.testi-text {
  font-size: 0.9375rem;
  color: var(--gray-700);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  z-index: 1;
}

.testi-featured .testi-text {
  color: var(--gray-800);
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testi-author img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.testi-author strong {
  display: block;
  font-size: 0.875rem;
  color: var(--gray-900);
  font-weight: 600;
  margin-bottom: 0.125rem;
}

.testi-author span {
  font-size: 0.75rem;
  color: var(--gray-500);
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .testi-card {
    padding: 2rem;
  }
  
  .testi-card::before {
    font-size: 3rem;
    top: 1rem;
    right: 1.5rem;
  }
}
</style>