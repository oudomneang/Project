<template>
  <div class="cart-sidebar">
    <div class="cart-header">
      <h3>{{ t('cart') }}</h3>
      <button @click="$emit('close')" class="close-btn">&times;</button>
    </div>
    <div class="cart-items" v-if="items.length > 0">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" />
        <div class="item-info">
          <h4>{{ item.name }}</h4>
          <p>{{ item.price }} ៛ × {{ item.quantity }}</p>
          <p v-if="item.spiceLevel" class="item-options">ស្រួយ: {{ item.spiceLevel }}</p>
          <p v-if="item.size" class="item-options">ទំហំ: {{ item.size }}</p>
        </div>
      </div>
    </div>
    <div class="cart-empty" v-else>
      <p>{{ t('emptyCart') }}</p>
    </div>
    <div class="cart-footer">
      <div class="total">
        <strong>{{ t('checkout') }}: {{ formatPrice(totalPrice) }} ៛</strong>
      </div>
      <router-link to="/cart" class="view-cart-btn" @click="$emit('close')">
        {{ t('viewCart') || 'View Cart' }}
      </router-link>
    </div>
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
</script>

<style scoped>
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

.cart-header {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h3 {
  color: #ff6600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.cart-items {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cart-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.item-info h4 {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.item-options {
  font-size: 0.75rem;
  color: #666;
  margin: 0.1rem 0;
}

.cart-empty {
  padding: 2rem;
  text-align: center;
  color: #666;
}

.cart-footer {
  padding: 1rem;
  border-top: 1px solid #eee;
}

.total {
  margin-bottom: 1rem;
  text-align: center;
}

.view-cart-btn {
  display: block;
  text-align: center;
  padding: 0.8rem;
  background: #ff6600;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}
</style>