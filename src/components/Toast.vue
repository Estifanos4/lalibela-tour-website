<template>
  <div v-if="isVisible" class="toast glass-card">
    <i class="fas fa-check-circle"></i>
    <span>{{ message }}</span>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Toast',
  setup() {
    const isVisible = ref(false)
    const message = ref('')

    const show = (msg, duration = 4000) => {
      message.value = msg
      isVisible.value = true
      
      setTimeout(() => {
        isVisible.value = false
      }, duration)
    }

    // Expose the show method globally if needed
    window.showToast = show

    return {
      isVisible,
      message,
      show
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 6rem;
  right: 2rem;
  background: rgba(16, 185, 129, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--white);
  padding: 1rem 1.5rem;
  border-radius: var(--radius-xl);
  font-size: 0.9375rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: var(--shadow-lg);
  z-index: 9000;
  animation: slideInRight 0.3s ease;
}

.toast i {
  color: var(--white);
  font-size: 1.125rem;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 640px) {
  .toast {
    right: 1rem;
    left: 1rem;
    bottom: 5rem;
  }
}
</style>