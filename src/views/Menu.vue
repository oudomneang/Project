<template>
  <div class="menu-page">
    <section class="hero-small">
      <h1>{{ t('menu') }}</h1>
    </section>

    <section class="section">
      <div class="products-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores'
import ProductCard from '../components/ProductCard.vue'
import { useTranslation } from '../composables/useTranslation'

const cartStore = useCartStore()
const { t } = useTranslation()

const products = [
  { id: 1, name: 'បាយក្ដាំងបំពងគ្រឿង', price: 7000, image: '/src/assets/photo_2025-08-18_11-40-55.jpg', badge: 'Best Seller' },
  { id: 2, name: 'បាញ់ត្រាងគ្រឿង', price: 7000, image: '/src/assets/បគ្រឿង.jpg' },
  { id: 3, name: 'បាញ់ត្រាងសារាយ', price: 7000, image: '/src/assets/សារាយ.jpg' },
  { id: 4, name: 'បាញ់ត្រាងទឹកដោះ', price: 7000, image: '/src/assets/បទឹកដោះ.jpg' },
  { id: 5, name: 'នំឈីស', price: 7000, image: '/src/assets/នំឈីស.jpg' },
  { id: 6, name: 'បាញ់ត្រាងខ្ទឹមហោះ', price: 7000, image: '/src/assets/បខ្ទឹមហោះ.jpg' },
  { id: 7, name: 'នំតុងយ៉ាំ', price: 7000, image: '/src/assets/នំតុងយ៉ាំ.jpg' },
  { id: 8, name: 'បាញ់ត្រាងគ្រឿង (ផ្សេង)', price: 7000, image: '/src/assets/បគ្រឿងធ.jpg' }
]

function addToCart(product) {
  cartStore.addToCart(product)
}
</script>

<style scoped>
.menu-page {
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
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
}

@media (max-width: 768px) {
  .hero-small h1 {
    font-size: 2rem;
  }
}
</style>