<template>
  <section id="gallery" class="gallery-section section">
    <div class="container">
      <div class="section-header fade-in" :class="{ 'visible': isVisible }">
        <span class="section-eyebrow">Through the Lens</span>
        <h2 class="section-title white">A Visual <em>Journey</em></h2>
      </div>
      
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in galleryImages" 
          :key="index"
          class="gallery-item glass-card scale-in"
          :class="[{ 'visible': isVisible }, image.size]"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
          @click="openLightbox(image)"
        >
          <img :src="image.src" :alt="image.alt" />
          <div class="gallery-hover">
            <i class="fas fa-magnifying-glass-plus"></i>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Lightbox -->
    <div v-if="lightboxImage" class="lightbox" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">
        <i class="fas fa-xmark"></i>
      </button>
      <img :src="lightboxImage.src" :alt="lightboxImage.alt" />
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'GallerySection',
  setup() {
    const isVisible = ref(false)
    const lightboxImage = ref(null)
    
    const galleryImages = [
      {
        src: '/src/assets/lalibela-main.png',
        alt: 'Lalibela churches',
        size: ''
      },
      {
        src: 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?w=500&q=80',
        alt: 'Ethiopian guide',
        size: 'gallery-tall'
      },
      {
        src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80',
        alt: 'Coffee ceremony',
        size: ''
      },
      {
        src: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=700&q=80',
        alt: 'Mountain hike',
        size: ''
      },
      {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80',
        alt: 'Mountain panorama',
        size: 'gallery-wide'
      },
      {
        src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80',
        alt: 'Yemrehanna cave',
        size: ''
      },
      {
        src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=700&q=80',
        alt: 'Village life',
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

    const openLightbox = (image) => {
      lightboxImage.value = image
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      lightboxImage.value = null
      document.body.style.overflow = ''
    }

    onMounted(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2
      })
      
      const section = document.querySelector('#gallery')
      if (section) {
        observer.observe(section)
      }

      // Handle escape key
      const handleKeydown = (e) => {
        if (e.key === 'Escape') {
          closeLightbox()
        }
      }
      document.addEventListener('keydown', handleKeydown)
      
      return () => {
        document.removeEventListener('keydown', handleKeydown)
      }
    })

    return {
      galleryImages,
      isVisible,
      lightboxImage,
      openLightbox,
      closeLightbox
    }
  }
}
</script>

<style scoped>
.gallery-section {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(55, 65, 81, 0.8) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 280px;
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
}

.gallery-tall {
  grid-row: span 2;
}

.gallery-wide {
  grid-column: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item:hover {
  transform: translateY(-4px);
}

.gallery-hover {
  position: absolute;
  inset: 0;
  background: rgba(201, 151, 58, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.gallery-item:hover .gallery-hover {
  opacity: 1;
}

.gallery-hover i {
  color: var(--white);
  font-size: 2rem;
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-hover i {
  transform: scale(1);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

.lightbox img {
  max-width: 90vw;
  max-height: 85vh;
  width: auto;
  height: auto;
  border-radius: var(--radius-xl);
  object-fit: contain;
  box-shadow: var(--shadow-xl);
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: var(--white);
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  cursor: pointer;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gallery-wide {
    grid-column: span 1;
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 320px;
  }
  
  .gallery-tall,
  .gallery-wide {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>