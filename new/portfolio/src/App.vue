<template>
  <div class="w-screen h-screen overflow-hidden bg-black dark" :class="{ 'dark': store.isDarkMode }">
    <LoadingScreen />
    <DesktopView v-if="!store.isMobile" />
    <MobileView v-else />
    <NotificationCenter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from './store'
import { setupResponsiveListener } from './utils/device'
import DesktopView from './components/desktop/DesktopView.vue'
import MobileView from './components/mobile/MobileView.vue'
import LoadingScreen from './components/shared/LoadingScreen.vue'
import NotificationCenter from './components/shared/NotificationCenter.vue'

const store = usePortfolioStore()

let cleanup: (() => void) | undefined

onMounted(() => {
  cleanup = setupResponsiveListener((isMobile) => {
    store.setIsMobile(isMobile)
  })

  // Add keyboard shortcuts
  document.addEventListener('keydown', handleKeyboard)

  // Welcome notification (after loading)
  setTimeout(() => {
    store.addNotification(
      'Welcome! 👋',
      'Try Cmd/Ctrl+K to open the terminal',
      '🍎'
    )
  }, 2000)
})

onUnmounted(() => {
  cleanup?.()
  document.removeEventListener('keydown', handleKeyboard)
})

function handleKeyboard(e: KeyboardEvent) {
  // Cmd/Ctrl + K to open terminal
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    store.toggleTerminal()
  }

  // Cmd/Ctrl + T to toggle theme
  if ((e.metaKey || e.ctrlKey) && e.key === 't') {
    e.preventDefault()
    store.toggleDarkMode()
  }

  // Escape to close terminal or active app
  if (e.key === 'Escape') {
    if (store.terminalOpen) {
      store.toggleTerminal()
    } else if (store.activeApp) {
      store.closeApp()
    }
  }
}
</script>

<style>
@import './assets/tailwind.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  overflow: hidden;
}
</style>