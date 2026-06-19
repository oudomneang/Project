<template>
  <div class="about-page">
    <section class="hero-small">
      <h1>{{ t('about') }}</h1>
    </section>

    <section class="section about-content">
      <div class="about-text">
        <h2>សិប្បកម្មបាយក្ដាំង ប្រេន ម៉ាក់អូនឌី</h2>
        <p>
          ស្វាគមន៍មកកាន់ "សិប្បកម្មបាយក្ដាំង ប្រេន ម៉ាក់អូនឌី" 🍱 — យើងគឺជាសិប្បកម្មដែលផលិត​​ និងចែកចាយអាហារសម្រន់ខ្មែរឆ្ងាញ់ដូចជា បាយក្ដាំង បាញ់ត្រាង នំបំពងស្រួយ​ នំមឹកស្រួយ​ ពោតលីង ស្បែកជ្រូកបំពង និងនំឈីសផ្សេងៗ។
        </p>
        <p>
          យើងផ្ដល់ជូននូវទំនិកចិត្តលើគុណភាព រសជាតិ និងតម្លៃសមរម្យ។ 
        </p>
      </div>
      <div class="about-image">
        <img src="/src/assets/logo.png" :alt="t('title')" />
      </div>
    </section>

    <section class="section values">
      <h2 class="section-title">{{ t('ourValues') }}</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">🌟</div>
          <h3>{{ t('quality') }}</h3>
          <p>{{ t('qualityDesc') }}</p>
        </div>
        <div class="value-card">
          <div class="value-icon">💰</div>
          <h3>{{ t('price') }}</h3>
          <p>{{ t('priceDesc') }}</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🚚</div>
          <h3>{{ t('delivery') }}</h3>
          <p>{{ t('deliveryDesc') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useTranslation } from '../composables/useTranslation'
const { t } = useTranslation()
</script>

<style scoped>
.about-page {
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1100px;
  margin: auto;
}

.about-text h2 {
  color: #ff6600;
  margin-bottom: 1rem;
}

.about-text p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.about-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
}

.value-card {
  text-align: center;
  padding: 2rem;
  background: #fafafa;
  border-radius: 12px;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: #ff6600;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .hero-small h1 {
    font-size: 2rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>