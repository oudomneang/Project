<template>
  <div class="home">
    <section class="hero" id="home">
      <div class="hero-overlay"></div>
      <div class="hero-particles">
        <div v-for="i in 20" :key="i" class="particle"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="emoji"><br><br></span>🔥Khmer🔥<br>Fast<span class="emoji">🍱</span>Food<br />
          <span class="khmer-text">អាហារសម្រន់​ឆ្ងាញ់​ <br>ញ៉ាំជក់មាត់</span>
        </h1>
        <p class="hero-subtitle">{{ t('heroSubtitle') }}</p>
        <div class="hero-actions">
          <router-link to="/menu" class="hero-btn primary">{{ t('menu') }}</router-link>
          <router-link to="/about" class="hero-btn secondary">{{ t('about') }}</router-link>
        </div>
        <div class="scroll-indicator">
          <span>{{ t('scrollDown') }}</span>
          <div class="scroll-arrow">↓</div>
        </div>
      </div>
    </section>

    <section id="quick-menu" class="section">
      <h2 class="section-title">{{ t('featuredMenu') }}</h2>
      <div class="menu-preview">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          class="menu-item"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
      <router-link to="/menu" class="view-all-btn">{{ t('viewAll') }}</router-link>
    </section>

    <section id="features" class="section features-section">
      <h2 class="section-title">{{ t('whyChooseUs') }}</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>{{ t('fastDelivery') }}</h3>
          <p>{{ t('fastDeliveryDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌿</div>
          <h3>{{ t('freshIngredients') }}</h3>
          <p>{{ t('freshIngredientsDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💰</div>
          <h3>{{ t('affordable') }}</h3>
          <p>{{ t('affordableDesc') }}</p>
        </div>
      </div>
    </section>

    <section id="about-section" class="section about-section">
      <div class="about-content">
        <h2>{{ t('aboutUs') }}</h2>
        <p>
          ស្វាគមន៍មកកាន់ "សិប្បកម្មបាយក្ដាំង ប្រេន ម៉ាក់អូនឌី" 🍱។ យើងផលិត​​ និងចែកចាយអាហារសម្រន់ខ្មែរ​ ឆ្ងាញ់ មានគុណភាព និងតម្លៃសមរម្យ។
        </p>
        <router-link to="/about" class="learn-more">{{ t('learnMore') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useTranslation } from '../composables/useTranslation'
import ProductCard from '../components/ProductCard.vue'
import { featuredProducts } from '../data/products'
import { useCartStore } from '../stores'

const { t } = useTranslation()
const cartStore = useCartStore()

function addToCart(product) {
  cartStore.addToCart(product)
}
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.hero-overlay {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff6600, #ffe100, #ff6600);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  z-index: -1;
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

.particle:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { top: 20%; left: 80%; animation-delay: 1s; }
.particle:nth-child(3) { top: 60%; left: 30%; animation-delay: 2s; }
.particle:nth-child(4) { top: 80%; left: 70%; animation-delay: 3s; }
.particle:nth-child(5) { top: 40%; left: 50%; animation-delay: 4s; }
.particle:nth-child(6) { top: 70%; left: 15%; animation-delay: 5s; }
.particle:nth-child(7) { top: 30%; left: 60%; animation-delay: 6s; }
.particle:nth-child(8) { top: 90%; left: 25%; animation-delay: 7s; }
.particle:nth-child(9) { top: 50%; left: 90%; animation-delay: 8s; }
.particle:nth-child(10) { top: 15%; left: 40%; animation-delay: 9s; }
.particle:nth-child(11) { top: 5%; left: 65%; animation-delay: 10s; }
.particle:nth-child(12) { top: 35%; left: 5%; animation-delay: 11s; }
.particle:nth-child(13) { top: 45%; left: 45%; animation-delay: 12s; }
.particle:nth-child(14) { top: 85%; left: 55%; animation-delay: 13s; }
.particle:nth-child(15) { top: 25%; left: 20%; animation-delay: 14s; }
.particle:nth-child(16) { top: 55%; left: 75%; animation-delay: 15s; }
.particle:nth-child(17) { top: 65%; left: 85%; animation-delay: 16s; }
.particle:nth-child(18) { top: 75%; left: 5%; animation-delay: 17s; }
.particle:nth-child(19) { top: 95%; left: 95%; animation-delay: 18s; }
.particle:nth-child(20) { top: 5%; left: 95%; animation-delay: 19s; }

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 2rem;
  animation: slideUp 1s ease;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes slideUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}

.hero-title {
  font-size: 4rem;
  color: white;
  padding: 1.5rem 2.5rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-title .emoji {
  font-size: 4.5rem;
  display: inline-block;
  animation: pulse 2s infinite;
}

.hero-title .khmer-text {
  font-size: 2.5rem;
  display: block;
  margin-top: 0.5rem;
  color: #fff9e6;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #fff9e6;
  margin-bottom: 2rem;
  font-weight: 300;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero-btn {
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.hero-btn.primary {
  background: linear-gradient(45deg, #ffffff, #fff9e6);
  color: #ff6600;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.hero-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.hero-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.8;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  font-size: 2rem;
  margin-top: 0.5rem;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

.section {
  padding: 6rem 2rem;
  max-width: 1400px;
  margin: auto;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  color: #ff6600;
  font-size: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff6600, #ffe100);
  border-radius: 2px;
}

.menu-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.menu-item {
  text-align: center;
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
}

.menu-item:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 30px rgba(255, 102, 0, 0.2);
  border-color: #ffe100;
}

.menu-item-img-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.menu-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s;
}

.menu-item:hover img {
  transform: scale(1.05);
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff6600;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.menu-item h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.price {
  color: #ff6600;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.add-to-cart-btn {
  padding: 0.6rem 1.5rem;
  background: #ff6600;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.add-to-cart-btn:hover {
  background: #e65c00;
  transform: scale(1.05);
}

.view-all-btn {
  display: block;
  width: fit-content;
  margin: 3rem auto 0;
  padding: 1rem 2.5rem;
  background: linear-gradient(45deg, #ff6600, #ff8800);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
  transition: all 0.3s;
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 102, 0, 0.4);
}

.features-section {
  background: linear-gradient(135deg, #fff8f0, #fff);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 4px solid #ffe100;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(255, 102, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

.about-section {
  background: linear-gradient(135deg, #fff8f0, #fff);
  border-radius: 20px;
  padding: 5rem;
  text-align: center;
}

.about-content h2 {
  color: #ff6600;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

.about-content p {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
}

.learn-more {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff6600, #ff8800);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s;
}

.learn-more:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 102, 0, 0.3);
}

@media (max-width: 768px) {
  .hero {
    height: 80vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
    padding: 1rem 1.5rem;
  }
  
  .hero-title .emoji {
    font-size: 3rem;
  }
  
  .hero-title .khmer-text {
    font-size: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  .section {
    padding: 4rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-section {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .menu-preview {
    grid-template-columns: 1fr;
  }
}
</style>