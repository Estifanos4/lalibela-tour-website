<template>
  <button 
    v-if="isVisible"
    class="scroll-top glass-card"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ScrollToTop',
  setup() {
    const isVisible = ref(false)

    const handleScroll = () => {
      isVisible.value = window.scrollY > 500
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isVisible,
      scrollToTop
    }
  }
}
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(201, 151, 58, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 151, 58, 0.3);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  box-shadow: var(--shadow-lg);
  z-index: 999;
  transition: var(--transition);
  cursor: pointer;
  animation: fadeInUp 0.3s ease;
}

.scroll-top:hover {
  background: rgba(201, 151, 58, 1);
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .scroll-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
  }
}
</style>