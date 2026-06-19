<template>
  <footer>
    <div class="footer-content">
      <div class="footer-brand">🍱 {{ t('title') }}</div>
      <div class="footer-links">
        <router-link to="/">{{ t('home') }}</router-link>
        <router-link to="/menu">{{ t('menu') }}</router-link>
        <router-link to="/about">{{ t('about') }}</router-link>
        <router-link to="/contact">{{ t('contact') }}</router-link>
      </div>
      <p class="footer-copy">© 2026 | Made with ❤️ in Cambodia <br> by Neang Oudom</p>
    </div>
  </footer>
</template>

<script setup>
import { useTranslation } from '../composables/useTranslation'
const { t } = useTranslation()
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, #222, #333);
  color: white;
  padding: 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffe100;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ffe100;
}

.footer-copy {
  opacity: 0.7;
  font-size: 0.9rem;
}
</style>