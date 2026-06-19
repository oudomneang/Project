<template>
  <router-link to="/cart" class="cart-fab" v-if="totalItems > 0">
    🛒 {{ totalItems }}
  </router-link>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores'

const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)
</script>

<style scoped>
.cart-fab {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: #ff6600;
  color: white;
  padding: 15px;
  border-radius: 50%;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 20px;
  transition: all 0.3s;
}

.cart-fab:hover {
  background: #ffe100;
  transform: scale(1.1);
}
</style>