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
import { products as productList } from '../data/products'
import { useTranslation } from '../composables/useTranslation'

const cartStore = useCartStore()
const { t } = useTranslation()

const products = productList

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