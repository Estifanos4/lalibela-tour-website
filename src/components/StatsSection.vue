<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-container glass-card">
        <div class="stats-grid">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="stat-item fade-in"
            :class="{ 'visible': isVisible }"
            :style="{ 'animation-delay': `${index * 0.1}s` }"
          >
            <div class="stat-content">
              <div class="stat-number-wrapper">
                <span class="stat-number">{{ animatedNumbers[index] }}</span>
                <span class="stat-plus">+</span>
              </div>
              <p class="stat-label">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* setup block remains largely the same, but adding visibility tracking */
import { ref, reactive, onMounted } from 'vue'

export default {
  name: 'StatsSection',
  setup() {
    const isVisible = ref(false)
    const animatedNumbers = reactive([0, 0, 0, 0])
    
    const stats = [
      { target: 850, label: 'Happy Travelers' },
      { target: 18, label: 'Unique Experiences' },
      { target: 12, label: 'Destinations' },
      { target: 7, label: 'Years of Local Knowledge' }
    ]

    const animateNumber = (index, target, duration = 2000) => {
      const start = 0
      const step = target / (duration / 16)
      let current = start

      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        animatedNumbers[index] = Math.floor(current)
      }, 16)
    }

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateNumber(index, stat.target)
            }, index * 200)
          })
        }
      })
    }

    onMounted(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3
      })
      
      const section = document.querySelector('.stats-section')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      stats,
      animatedNumbers,
      isVisible
    }
  }
}
</script>

<style scoped>
.stats-section {
  padding: 0;
  margin-top: -4rem; /* Overlap with hero for seamless feel */
  position: relative;
  z-index: 20;
}

.stats-container {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-xl);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  padding: 1.5rem 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  text-align: center;
}

.stat-item {
  padding: 1.5rem 1rem;
  border-right: 1px solid var(--gray-100);
  transition: all 0.4s ease;
}

.stat-item:last-child {
  border-right: none;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.stat-number {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1;
}

.stat-plus {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  color: var(--primary);
  margin-left: 2px;
  font-weight: 700;
}

.stat-label {
  color: var(--gray-500);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-item:nth-child(even) {
    border-right: none;
  }
  
  .stat-item:nth-child(1),
  .stat-item:nth-child(2) {
    border-bottom: 1px solid var(--gray-100);
  }
}

@media (max-width: 640px) {
  .stats-section {
    margin-top: -2rem;
  }
  
  .stats-container {
    padding: 2rem 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-item {
    border-right: none;
    border-bottom: 1px solid var(--gray-100);
    padding: 1.5rem;
  }
  
  .stat-item:last-child {
    border-bottom: none;
  }
}
</style>