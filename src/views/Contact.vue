<template>
  <div class="contact-page">
    <section class="hero-small">
      <h1>{{ t('contact') }}</h1>
    </section>

    <section class="section">
      <div class="contact-container">
        <div class="contact-info">
          <h2>ព័ត៌មានទំនាក់ទំនង</h2>
          <div class="info-item">
            <span class="info-icon">📞</span>
            <span>ទូរស័ព្ទ: 093611931</span>
          </div>
          <div class="info-item">
            <span class="info-icon">📍</span>
            <span>ទីតាំង: ភ្នំពេញ, កម្ពុជា</span>
          </div>
          <div class="info-item">
            <span class="info-icon">⏰</span>
            <span>ម៉ោងបើកដឹកកាន់: 7:00 AM - 7:00 PM</span>
          </div>
          <div class="social-links">
            <a href="https://t.me/Oudom_Neang" class="social-btn telegram">Telegram</a>
            <a href="https://www.facebook.com/makoundy168mpll" class="social-btn facebook">Facebook</a>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <h2>ផ្ញើសារមកយើង</h2>
          <div class="form-group">
            <input v-model="form.name" type="text" placeholder="ឈ្មោះ" required />
          </div>
          <div class="form-group">
            <input v-model="form.email" type="email" placeholder="អ៊ីមែល" required />
          </div>
          <div class="form-group">
            <textarea v-model="form.message" placeholder="សារ" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">ផ្ញើសារ</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()
const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  alert('សូមអរគុណ! សាររបស់អ្នកត្រូវបានផ្ញើរួចរាល់។')
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.hero-small {
  height: 40vh;
  background: linear-gradient(135deg, #ff6600, #ffe100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-small h1 {
  color: white;
  font-size: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1100px;
  margin: auto;
}

.contact-info h2,
.contact-form h2 {
  color: #ff6600;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.info-icon {
  font-size: 1.5rem;
}

.social-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.social-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.telegram {
  background: #0088cc;
  color: white;
}

.facebook {
  background: #3b5998;
  color: white;
}

.social-btn:hover {
  transform: scale(1.05);
}

.contact-form {
  background: #fafafa;
  padding: 2rem;
  border-radius: 12px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #ff6600;
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #ff6600;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:hover {
  background: #ffe100;
}

@media (max-width: 768px) {
  .hero-small h1 {
    font-size: 2rem;
  }
  
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>