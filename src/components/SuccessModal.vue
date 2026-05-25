<template>
  <Transition name="fade">
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
      <div class="modal-content glass-card scale-in">
        <div class="modal-header">
          <div class="success-icon">
            <i class="fas fa-check"></i>
          </div>
        </div>
        <div class="modal-body text-center">
          <h3>{{ title }}</h3>
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary btn-full" @click="close">Got it, thanks!</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'SuccessModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Success!'
    },
    message: {
      type: String,
      default: 'Your request has been sent successfully.'
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }
    return { close }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
}

.modal-content {
  background: rgba(31, 41, 55, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-2xl);
  width: 100%;
  max-width: 400px;
  padding: 3rem 2rem 2rem;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.success-icon {
  width: 64px;
  height: 64px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--white);
  box-shadow: 0 0 20px rgba(201, 151, 58, 0.5);
}

.modal-body h3 {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  color: var(--white);
  margin-bottom: 1rem;
}

.modal-body p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-in {
  animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
