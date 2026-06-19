<template>
  <div class="register-page">
    <section class="hero-small">
      <h1>ចុះឈ្មោះ</h1>
    </section>

    <section class="section">
      <div class="register-container">
        <form class="register-form" @submit.prevent="handleSubmit">
          <h2>បង្កើតគណនីថ្មី</h2>
          
          <div class="form-group">
            <label>ឈ្មោះពេញ *</label>
            <input v-model="form.fullName" type="text" required />
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label>អ៊ីមែល *</label>
              <input v-model="form.email" type="email" required />
            </div>
            <div class="form-group">
              <label>ទូរស័ព្ទ *</label>
              <input v-model="form.phone" type="tel" required />
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label>អ្នកផ្សះផ្សា *</label>
              <select v-model="form.province" required>
                <option value="">ជ្រើសរើស</option>
                <option value="phnom-penh">ភ្នំពេញ</option>
                <option value="kandal">កណ្ដាល</option>
                <option value="siem-reap">សៀមរាប</option>
                <option value="battambang">បាត់ដំបញ្ញ</option>
              </select>
            </div>
            <div class="form-group">
              <label>ស្រុក/ក្រុង *</label>
              <input v-model="form.district" type="text" required />
            </div>
          </div>
          
          <div class="form-group">
            <label>ផ្លូវ/ផ្ទះ *</label>
            <input v-model="form.address" type="text" required />
          </div>
          
          <div class="form-group">
            <label>ទូទៅសម្រាប់ការដឹកជញ្ជូន</label>
            <textarea v-model="form.deliveryNote" rows="3"></textarea>
          </div>
          
          <div class="form-group checkbox">
            <input v-model="form.agree" type="checkbox" required />
            <label>ខ្ញុំយល់ព្រមនឹងលក្ខខណយនិងប្ដូរយ៉ាងម្ដង *</label>
          </div>
          
          <button type="submit" class="submit-btn">ចុះឈ្មោះ</button>
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
  fullName: '',
  email: '',
  phone: '',
  province: '',
  district: '',
  address: '',
  deliveryNote: '',
  agree: false
})

function handleSubmit() {
  alert('ចុះឈ្មោះជោគជ័យ! អ្នកអាចប្ដូរឥឡូវនេះ។')
}
</script>

<style scoped>
.register-page {
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

.register-container {
  max-width: 600px;
  margin: auto;
}

.register-form {
  background: #fafafa;
  padding: 2rem;
  border-radius: 12px;
}

.register-form h2 {
  color: #ff6600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #ff6600;
  outline: none;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox input {
  width: auto;
}

.checkbox label {
  margin-bottom: 0;
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
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>