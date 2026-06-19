<template>
  <div class="product-card">
    <div class="ribbon" v-if="product.badge">{{ product.badge }}</div>
    <img :src="product.image" :alt="product.name" loading="lazy" />
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }} ៛</p>
    <button @click="showOptions = true" class="add-btn">
      {{ t('addToCart') }}
    </button>

    <div v-if="showOptions" class="options-modal">
      <div class="options-content">
        <button @click="showOptions = false" class="close-options">&times;</button>
        <h4>{{ product.name }}</h4>
        <div class="option-group">
          <label>{{ t('spiceLevel') || 'ស្រួយ' }}:</label>
          <select v-model="selectedSpice">
            <option value="ស្រួយ">{{ t('spicy') || 'ស្រួយ' }}</option>
            <option value="ទាប">{{ t('mild') || 'ទាប' }}</option>
            <option value="គ្មាន">{{ t('noSpice') || 'គ្មាន' }}</option>
          </select>
        </div>
        <div class="option-group">
          <label>{{ t('size') || 'ទំហំ' }}:</label>
          <div class="size-options">
            <button 
              v-for="size in sizes" 
              :key="size"
              :class="{ active: selectedSize === size }"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>
        <button @click="confirmAddToCart" class="confirm-btn">
          {{ t('confirm') || 'បញ្ជាក់' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslation } from '../composables/useTranslation'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['add-to-cart'])

const { t } = useTranslation()

const showOptions = ref(false)
const selectedSpice = ref('ស្រួយ')
const sizes = ['តូច', 'មធ្យម', 'ធំ']
const selectedSize = ref('មធ្យម')

function confirmAddToCart() {
  emit('add-to-cart', {
    ...props.product,
    spiceLevel: selectedSpice.value,
    size: selectedSize.value
  })
  showOptions.value = false
}
</script>

<style scoped>
.product-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: white;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover img {
  transform: scale(1.1);
}

.product-card h3 {
  padding: 1rem;
  font-size: 1.3rem;
  color: #333;
}

.price {
  font-weight: bold;
  color: #555;
}

.ribbon {
  width: 100px;
  height: 30px;
  background: #ff6600;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  position: absolute;
  top: 10px;
  right: -20px;
  transform: rotate(45deg);
  font-size: 0.8rem;
}

.add-btn {
  display: inline-block;
  margin: 1rem 0;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  background: linear-gradient(45deg, #ff6600, #ffe100);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.add-btn:hover {
  background: linear-gradient(45deg, #ffe100, #ff6600);
  transform: scale(1.1);
}

.options-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.options-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 300px;
  position: relative;
}

.close-options {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.options-content h4 {
  margin-bottom: 1rem;
  color: #ff6600;
}

.option-group {
  margin-bottom: 1rem;
  text-align: left;
}

.option-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.option-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.size-options {
  display: flex;
  gap: 0.5rem;
}

.size-options button {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.size-options button.active {
  background: #ff6600;
  color: white;
}

.confirm-btn {
  width: 100%;
  padding: 0.8rem;
  background: #ff6600;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
</style>