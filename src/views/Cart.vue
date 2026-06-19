<template>
  <div class="cart-page">
    <section class="hero-small">
      <h1>{{ t('cart') }}</h1>
    </section>

    <section class="section" v-if="items.length === 0">
      <div class="empty-cart">
        <h2>{{ t('emptyCart') }}</h2>
        <router-link to="/menu" class="shop-btn">{{ t('shopMenu') }}</router-link>
      </div>
    </section>

    <section class="section" v-else>
      <div class="cart-container">
        <div class="cart-items">
          <div v-for="item in items" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name" />
            <div class="item-details">
              <h3>{{ item.name }}</h3>
              <p class="item-price">{{ item.price }} ៛</p>
              <p v-if="item.spiceLevel" class="item-options">ស្រួយ: {{ item.spiceLevel }}</p>
              <p v-if="item.size" class="item-options">ទំហំ: {{ item.size }}</p>
            </div>
            <div class="quantity-controls">
              <button @click="decreaseQty(item.id)" class="qty-btn">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="increaseQty(item.id)" class="qty-btn">+</button>
            </div>
            <button @click="removeItem(item.id)" class="remove-btn">❌</button>
          </div>
        </div>

        <div class="cart-summary">
          <h2>{{ t('checkout') }}</h2>
          <div class="summary-row">
            <span>{{ t('subtotal') || 'Subtotal:' }}</span>
            <span>{{ formatPrice(totalPrice) }} ៛</span>
          </div>
          <div class="summary-row total">
            <span>{{ t('total') || 'Total:' }}</span>
            <span>{{ formatPrice(totalPrice) }} ៛</span>
          </div>
          <button @click="checkout" class="checkout-btn">{{ t('checkout') }}</button>
          <button @click="clearCart" class="clear-btn">{{ t('clearCart') }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores'
import { useTranslation } from '../composables/useTranslation'

const cartStore = useCartStore()
const { items, totalPrice } = storeToRefs(cartStore)
const { t } = useTranslation()

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function increaseQty(id) {
  const item = items.value.find(item => item.id === id)
  if (item) cartStore.updateQuantity(id, item.quantity + 1)
}

function decreaseQty(id) {
  const item = items.value.find(item => item.id === id)
  if (item && item.quantity > 1) cartStore.updateQuantity(id, item.quantity - 1)
}

function removeItem(id) {
  cartStore.removeFromCart(id)
}

function clearCart() {
  cartStore.clearCart()
}

function checkout() {
  window.open('https://t.me/Oudom_Neang', '_blank')
}
</script>

<style scoped>
.cart-page {
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

.empty-cart {
  text-align: center;
  padding: 3rem;
}

.empty-cart h2 {
  color: #333;
  margin-bottom: 1rem;
}

.shop-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #ff6600;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
}

.cart-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
}

.cart-items {
  background: #fafafa;
  padding: 2rem;
  border-radius: 12px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  margin-bottom: 0.5rem;
}

.item-price {
  color: #ff6600;
  font-weight: bold;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.qty-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: #ff6600;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
}

.quantity {
  font-weight: bold;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.cart-summary {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.cart-summary h2 {
  color: #ff6600;
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
}

.summary-row.total {
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: none;
  color: #ff6600;
}

.checkout-btn {
  width: 100%;
  padding: 1rem;
  background: #ff6600;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
}

.clear-btn {
  width: 100%;
  padding: 0.8rem;
  background: #ddd;
  color: #333;
  border: none;
  border-radius: 6px;
  margin-top: 0.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hero-small h1 {
    font-size: 2rem;
  }
  
  .cart-container {
    grid-template-columns: 1fr;
  }
}
</style>