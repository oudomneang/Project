<template>
  <header id="header" :class="{ scrolled: isScrolled }">
    <div class="header-container">
      <router-link to="/" class="logo">{{ t('title') }}</router-link>
      <div class="nav-container">
        <nav id="navLinks" :class="{ show: isMenuOpen }">
          <router-link to="/">{{ t('home') }}</router-link>
          <router-link to="/menu">{{ t('menu') }}</router-link>
          <router-link to="/about">{{ t('about') }}</router-link>
          <router-link to="/contact">{{ t('contact') }}</router-link>
          <router-link to="/register">{{ t('register') }}</router-link>
          <router-link to="/cart">{{ t('cart') }}</router-link>
        </nav>
        <button class="lang-switch" @click="toggleLanguage">
          {{ isKhmer ? 'EN 🇬🇧' : 'KM 🇰🇭' }}
        </button>
        <button id="menuToggle" @click="toggleMenu">&#9776;</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLanguageStore } from '../stores'
import { useTranslation } from '../composables/useTranslation'

const languageStore = useLanguageStore()
const isKhmer = computed(() => languageStore.currentLang === 'km')
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const { t } = useTranslation()

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function toggleLanguage() {
  languageStore.toggleLang()
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

#header.scrolled {
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s;
}

.logo:hover {
  background: rgba(255, 102, 0, 0.1);
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

#navLinks {
  display: flex;
  gap: 1.5rem;
}

#navLinks a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
}

#navLinks a:hover,
#navLinks a.router-link-active {
  color: #ff6600;
  background: rgba(255, 102, 0, 0.05);
}

#navLinks a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ff6600;
}

.lang-switch {
  padding: 0.5rem 1rem;
  border: 2px solid #ff6600;
  background: transparent;
  color: #ff6600;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.lang-switch:hover {
  background: #ff6600;
  color: white;
}

#menuToggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;
  padding: 0.3rem 0.8rem;
}

@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
  }
  
  #menuToggle {
    display: block;
  }
  
  #navLinks {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 0.3s ease;
  }
  
  #navLinks.show {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  
  #navLinks a {
    padding: 0.8rem 1rem;
    background: #f8f8f8;
    border-radius: 8px;
  }
}
</style>