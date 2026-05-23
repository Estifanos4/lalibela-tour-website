<template>
  <div class="preloader">
    <div class="preloader-content">
      <div class="preloader-spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <h2 class="preloader-text">Lalibela Soul Tours</h2>
      <p class="preloader-subtitle">Discover Ethiopia's Sacred City</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader'
}
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease-in-out 1.2s forwards;
}

.preloader-content {
  text-align: center;
  color: var(--gray-800);
}

.preloader-spinner {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid var(--primary);
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

.spinner-ring:nth-child(2) {
  width: 60px;
  height: 60px;
  top: 10px;
  left: 10px;
  animation-delay: -0.5s;
  border-top-color: var(--primary-light);
}

.spinner-ring:nth-child(3) {
  width: 40px;
  height: 40px;
  top: 20px;
  left: 20px;
  animation-delay: -1s;
  border-top-color: var(--primary-dark);
}

.preloader-text {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
}

.preloader-subtitle {
  font-size: 1rem;
  opacity: 0.8;
  letter-spacing: 0.05em;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>