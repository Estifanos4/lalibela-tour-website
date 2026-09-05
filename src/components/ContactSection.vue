<template>
  <section id="contact" class="contact-section section">
    <div class="container">
      <div class="contact-grid grid grid-2">
        <div class="contact-info slide-in-left" :class="{ 'visible': isVisible }">
          <span class="section-eyebrow">Get in Touch</span>
          <h2 class="section-title white">Start Your <em>Journey</em></h2>
          <p class="contact-description">Ready to explore Lalibela? Fill in the form and I'll get back to you within 24 hours with a custom itinerary.</p>

          <div class="contact-channels">
            <a href="https://wa.me/251945141773" class="contact-channel glass-card" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-whatsapp"></i>
              <div>
                <strong>WhatsApp</strong>
                <span>+251 945141773</span>
              </div>
            </a>
            <a href="https://t.me/Estifanos4" class="contact-channel glass-card" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-telegram"></i>
              <div>
                <strong>Telegram</strong>
                <span>@Estifanos4</span>
              </div>
            </a>
            <a href="mailto:estifanosmesganaw@gmail.com" class="contact-channel glass-card">
              <i class="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <span>estifanosmesganaw@gmail.com</span>
              </div>
            </a>
          </div>

          <div class="social-links">
            <a href="#" aria-label="Instagram" class="glass-card">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" class="glass-card">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="TikTok" class="glass-card">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="#" aria-label="YouTube" class="glass-card">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div class="contact-form-col slide-in-right" :class="{ 'visible': isVisible }">
          <form class="booking-form glass-card" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="Your name" 
                  required 
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="your@email.com" 
                  required 
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="country">Country</label>
                <input 
                  type="text" 
                  id="country" 
                  v-model="form.country" 
                  placeholder="Where are you from?" 
                />
              </div>
              <div class="form-group">
                <label for="tour">Tour of Interest</label>
                <select id="tour" v-model="form.tour">
                  <option value="">Select a tour...</option>
                  <option>Lalibela City Tour</option>
                  <option>Yemrehanna Kristos Day Trip</option>
                  <option>Asheten Hiking Adventure</option>
                  <option>Traditional Coffee Ceremony</option>
                  <option>Village & Cultural Tour</option>
                  <option>Sunset Viewpoint Tour</option>
                  <option>Custom / Multi-Day</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  placeholder="+1 (555) 000-0000" 
                  required 
                />
              </div>
            </div>
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="4" 
                placeholder="Tell me your travel dates, group size, interests..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-full" :disabled="isSubmitting">
              <i class="fas fa-paper-plane"></i>
              {{ isSubmitting ? 'Sending...' : 'Send Booking Request' }}
            </button>
            <p class="form-note">I'll respond within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <SuccessModal 
      :is-visible="isModalVisible" 
      title="Booking Sent!"
      message="Thank you! Your booking request has been sent to me via Telegram. I'll get back to you within 24 hours."
      @close="isModalVisible = false"
    />
  </section>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import SuccessModal from './SuccessModal.vue'

export default {
  name: 'ContactSection',
  components: {
    SuccessModal
  },
  setup() {
    const isVisible = ref(false)
    const isSubmitting = ref(false)
    const isModalVisible = ref(false)
    
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      country: '',
      tour: '',
      message: ''
    })

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    }

    const submitForm = async () => {
      isSubmitting.value = true
      
      try {
        const response = await fetch('/api/send-booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })

        const contentType = response.headers.get('content-type')
        let result = {}
        if (contentType && contentType.includes('application/json')) {
          result = await response.json()
        } else {
          const text = await response.text()
          console.error('Non-JSON response:', text)
          throw new Error(`Server returned non-JSON response (${response.status}). This usually means the API route is missing or misconfigured.`)
        }

        if (response.ok) {
          // Reset form
          Object.keys(form).forEach(key => {
            form[key] = ''
          })
          // Show success modal
          isModalVisible.value = true
          // Show Toast notification
          if (typeof window !== 'undefined' && window.showToast) {
            window.showToast('Booking request sent successfully!')
          }
        } else {
          throw new Error(result.error || 'Failed to send message')
        }
      } catch (error) {
        console.error('Booking error:', error)
        alert(`Booking Error: ${error.message}\n\nPlease try again or contact me directly via WhatsApp/Telegram.`)
      } finally {
        isSubmitting.value = false
      }
    }

    onMounted(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2
      })
      
      const section = document.querySelector('#contact')
      if (section) {
        observer.observe(section)
      }
    })

    return {
      isVisible,
      isSubmitting,
      form,
      submitForm
    }
  }
}
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.contact-grid {
  align-items: start;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.contact-description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  font-size: 1.125rem;
}

.contact-channels {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.contact-channel {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  border-radius: var(--radius-2xl);
  color: var(--white);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.08);
}

.contact-channel:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-8px) scale(1.02);
  border-color: var(--primary-light);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.contact-channel i {
  font-size: 2rem;
  flex-shrink: 0;
  transition: transform 0.4s ease;
}

.contact-channel:hover i {
  transform: scale(1.2) rotate(12deg);
}

.contact-channel i.fa-whatsapp {
  color: #25D366;
}

.contact-channel i.fa-telegram {
  color: #26A5E4;
}

.contact-channel i.fa-envelope {
  color: var(--primary);
}

.contact-channel strong {
  display: block;
  font-size: 0.9375rem;
  margin-bottom: 0.25rem;
}

.contact-channel span {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.7);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  transition: var(--transition);
  text-decoration: none;
}

.social-links a:hover {
  background: rgba(201, 151, 58, 0.3);
  color: var(--white);
  transform: translateY(-2px);
}

/* Booking Form */
.booking-form {
  padding: 3rem;
  border-radius: var(--radius-2xl);
  background: rgba(255, 255, 255, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--white);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: var(--transition);
  outline: none;
}

.form-group select option {
  background-color: #1f2937; /* var(--gray-800) equivalent */
  color: white;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(201, 151, 58, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-note {
  text-align: center;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 1rem;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .booking-form {
    padding: 2rem;
  }
  
  .contact-channels {
    gap: 0.75rem;
  }
  
  .contact-channel {
    padding: 1rem;
  }
}
</style>