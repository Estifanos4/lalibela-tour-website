<template>
  <section id="tours" class="tours-section section">
    <div class="container">
      <div class="section-header fade-in" :class="{ 'visible': isVisible }">
        <span class="section-eyebrow">Sacred Journeys & Cultural Trails</span>
        <h2 class="section-title">Curated <em>Tour Packages</em></h2>
        <p class="section-subtitle">
          Authentic, privately guided experiences crafted to immerse you in Lalibela's living faith, ancient architecture, and warm highland traditions.
        </p>
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
            <img :src="tour.image" :alt="tour.name" loading="lazy" />
            <span v-if="tour.badge" class="tour-badge" :class="tour.badgeClass">{{ tour.badge }}</span>
          </div>
          <div class="tour-body">
            <div class="tour-meta">
              <span><i :class="tour.durationIcon"></i> {{ tour.duration }}</span>
              <span><i :class="tour.difficultyIcon"></i> {{ tour.difficulty }}</span>
            </div>
            <h3 class="tour-name">{{ tour.name }}</h3>
            <p class="tour-desc">{{ tour.description }}</p>

            <div class="tour-highlights-box">
              <span class="highlights-title">Highlights:</span>
              <ul class="tour-highlights">
                <li v-for="(h, hi) in tour.highlights" :key="hi">
                  <i class="fas fa-check-circle"></i>
                  <span>{{ h }}</span>
                </li>
              </ul>
            </div>

            <div class="tour-footer">
              <div class="tour-price-box">
                <span class="price-from">From</span>
                <span class="price-val"><strong>${{ tour.price }}</strong> <small>/ person</small></span>
              </div>
              <div class="tour-cta-group">
                <a 
                  :href="getWhatsAppUrl(tour)" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-icon-whatsapp"
                  title="Ask on WhatsApp"
                  aria-label="Ask about this tour on WhatsApp"
                >
                  <i class="fab fa-whatsapp"></i>
                </a>
                <button class="btn btn-sm btn-primary" @click="bookTour(tour)">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

import beteGiyorgisImg from '../assets/tours/bete-giyorgis.jpg'
import yemrehannaImg from '../assets/tours/yemrehanna-kristos.jpg'
import ashetenHikeImg from '../assets/tours/asheten-hike.jpg'
import coffeeCeremonyImg from '../assets/tours/coffee-ceremony.jpg'
import lalibelaVillageImg from '../assets/tours/lalibela-village.jpg'
import lalibelaSunsetImg from '../assets/tours/lalibela-sunset.jpg'

export default {
  name: 'ToursSection',
  setup() {
    const isVisible = ref(false)
    
    const tours = [
      {
        name: 'Lalibela Rock-Hewn Churches Circuit',
        shortName: 'Lalibela City Tour',
        description: 'Explore all 11 world-famous monolithic rock churches carved in the 12th century, from the iconic cross-shaped Bete Giyorgis to interconnected subterranean catacombs.',
        highlights: [
          'Bete Giyorgis (Church of Saint George)',
          'Northern & Southern Church Clusters',
          'Ancient tunnels, ceremonies & local lunch'
        ],
        price: 45,
        duration: 'Full Day',
        difficulty: 'Easy–Moderate',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-person-hiking',
        image: beteGiyorgisImg,
        badge: 'UNESCO Icon',
        badgeClass: 'badge-popular'
      },
      {
        name: 'Yemrehanna Kristos Cave Church',
        shortName: 'Yemrehanna Kristos Day Trip',
        description: 'Journey north to an extraordinary 11th-century Aksumite church built inside a giant natural basalt cavern on Mount Abuna Yosef, featuring ancient cedarwood murals and relics.',
        highlights: [
          'Built inside a dramatic natural cave',
          'Aksumite stone & cedarwood architecture',
          'Century-old frescoes predating Lalibela'
        ],
        price: 65,
        duration: 'Full Day',
        difficulty: 'Moderate',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-car-side',
        image: yemrehannaImg,
        badge: 'Sacred Marvel',
        badgeClass: 'badge-popular'
      },
      {
        name: 'Asheten Maryam Monastery Hike',
        shortName: 'Asheten Hiking Adventure',
        description: 'Ascend to 3,150m (10,300ft) above sea level on foot or by mule. Discover a cliffside monastery carved into the mountain ridge with breathtaking 360° panoramas across the Lasta highlands.',
        highlights: [
          '3,150m High-altitude mountain trek',
          'Ancient King Lalibela processional crosses',
          'Option for traditional mule ride'
        ],
        price: 35,
        duration: 'Half Day',
        difficulty: 'Challenging',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-mountain',
        image: ashetenHikeImg,
        badge: 'Highland Trek',
        badgeClass: 'badge-adventure'
      },
      {
        name: 'Traditional Ethiopian Coffee Ceremony',
        shortName: 'Traditional Coffee Ceremony',
        description: 'Join a welcoming local family for Ethiopia’s soulful buna ritual. Watch green beans roasted over hot charcoal, hand-ground, and brewed in a clay jebena with frankincense smoke and popcorn.',
        highlights: [
          'Authentic 3-round tasting (Abol, Tona, Bereka)',
          'Fresh roasting & clay jebena brewing',
          'Heartwarming local hospitality & culture'
        ],
        price: 20,
        duration: '2–3 Hours',
        difficulty: 'Cultural',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-mug-hot',
        image: coffeeCeremonyImg,
        badge: 'Cultural Taste',
        badgeClass: 'badge-romantic'
      },
      {
        name: 'Highland Village & Cultural Immersion',
        shortName: 'Village & Cultural Tour',
        description: 'Step into traditional highland life among round stone tukuls. Experience authentic injera baking on clay mitad hearths, taste golden tej (honey wine), and meet artisan weavers and farmers.',
        highlights: [
          'Stone tukul architecture & homesteads',
          'Injera baking & traditional tej tasting',
          'Local craftsmen, farmers & community life'
        ],
        price: 40,
        duration: 'Full Day',
        difficulty: 'Cultural',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-people-group',
        image: lalibelaVillageImg,
        badge: 'Heritage Life',
        badgeClass: 'badge-adventure'
      },
      {
        name: 'Sunset Viewpoint & Golden Hour',
        shortName: 'Sunset Viewpoint Tour',
        description: 'Ascend to Lalibela’s highest vantage points as the golden hour bathes the jagged Lasta mountain ranges in amber and violet glow. Relax with mountain tea or tej as stars emerge.',
        highlights: [
          'Spectacular golden hour escarpment view',
          'Panoramic vistas over the Ethiopian rift',
          'Unforgettable sunset photography moments'
        ],
        price: 25,
        duration: '3 Hours',
        difficulty: 'Easy',
        durationIcon: 'far fa-clock',
        difficultyIcon: 'fas fa-mountain-sun',
        image: lalibelaSunsetImg,
        badge: 'Golden Hour',
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

    const bookTour = (tour) => {
      const tourSelect = document.getElementById('tour')
      if (tourSelect) {
        for (let i = 0; i < tourSelect.options.length; i++) {
          const optText = tourSelect.options[i].text.toLowerCase()
          if (optText.includes(tour.shortName.toLowerCase()) || tour.name.toLowerCase().includes(optText)) {
            tourSelect.selectedIndex = i
            tourSelect.dispatchEvent(new Event('change'))
            break
          }
        }
      }
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const getWhatsAppUrl = (tour) => {
      const text = encodeURIComponent(`Hello Estifanos! I am interested in booking the "${tour.name}" tour package. Please share availability and details.`)
      return `https://wa.me/251945141773?text=${text}`
    }

    onMounted(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.15
      })
      
      const section = document.querySelector('#tours')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      tours,
      isVisible,
      bookTour,
      getWhatsAppUrl
    }
  }
}
</script>

<style scoped>
.tours-section {
  background: var(--gray-50);
  position: relative;
}

.tours-grid {
  gap: 2rem;
}

.tour-card {
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: var(--radius-2xl);
  background: var(--white);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}

.tour-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(201, 151, 58, 0.3);
}

.tour-img {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.tour-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.tour-card:hover .tour-img img {
  transform: scale(1.08);
}

.tour-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-full);
  color: var(--white);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.badge-popular {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
}

.badge-adventure {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.badge-romantic {
  background: linear-gradient(135deg, #8B5A2B 0%, #A0672F 100%);
}

.tour-body {
  padding: 1.75rem 2rem 2rem;
  color: var(--gray-800);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.tour-meta {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 0.85rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--gray-500);
}

.tour-meta i {
  color: var(--primary);
  margin-right: 0.4rem;
}

.tour-name {
  font-family: var(--font-serif);
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.tour-desc {
  font-size: 0.9rem;
  color: var(--gray-600);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.tour-highlights-box {
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: 1rem 1.15rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--gray-200);
  flex-grow: 1;
}

.highlights-title {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-500);
  margin-bottom: 0.5rem;
}

.tour-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.tour-highlights li {
  font-size: 0.8125rem;
  color: var(--gray-700);
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1.4;
}

.tour-highlights i {
  color: var(--primary);
  font-size: 0.75rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.tour-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--gray-200);
  padding-top: 1.25rem;
  margin-top: auto;
}

.tour-price-box {
  display: flex;
  flex-direction: column;
}

.price-from {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-400);
}

.price-val {
  font-size: 0.875rem;
  color: var(--gray-600);
}

.price-val strong {
  font-size: 1.35rem;
  color: var(--gray-900);
  font-weight: 700;
}

.tour-cta-group {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.btn-icon-whatsapp {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: #25D366;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  transition: var(--transition);
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
  text-decoration: none;
}

.btn-icon-whatsapp:hover {
  background: #1eb956;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 15px rgba(37, 211, 102, 0.45);
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
    flex-direction: row;
    align-items: center;
  }
}
</style>