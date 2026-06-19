import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  
  const totalItems = computed(() => 
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )
  
  const totalPrice = computed(() => 
    items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  )
  
  function addToCart(product) {
    const existing = items.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }
  
  function removeFromCart(productId) {
    items.value = items.value.filter(item => item.id !== productId)
  }
  
  function updateQuantity(productId, quantity) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity = Math.max(1, quantity)
    }
  }
  
  function clearCart() {
    items.value = []
  }
  
  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
})

export const useLanguageStore = defineStore('language', () => {
  const currentLang = ref('km')
  
  const translations = {
    km: {
      home: 'ទំព័រដើម',
      menu: 'ម៉ឺនុយ',
      about: 'អំពីយើង',
      order: 'បញ្ជាទិញ',
      contact: 'ទំនាក់ទំនង',
      cart: 'កន្ត្រក់',
      register: 'ចុះឈ្មោះ',
      switchToEn: 'EN',
      switchToKm: 'KH'
    },
    en: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      order: 'Order',
      contact: 'Contact',
      cart: 'Cart',
      register: 'Register',
      switchToEn: 'EN',
      switchToKm: 'KH'
    }
  }
  
  function toggleLang() {
    currentLang.value = currentLang.value === 'km' ? 'en' : 'km'
  }
  
  const t = (key) => translations[currentLang.value][key] || key
  
  return { currentLang, toggleLang, t }
})