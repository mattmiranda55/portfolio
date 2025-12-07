<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const route = useRoute()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Resume', to: '/resume' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const isActive = (to: string) => {
  if (to === '/resume') return route.path === '/resume'
  if (to === '/') return route.path === '/' && !route.hash
  return route.hash === to.replace('/', '')
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <RouterLink to="/" class="text-xl font-bold text-ecu-purple">Matt Miranda</RouterLink>
        
        <!-- Desktop nav -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-gray-700 hover:text-ecu-purple transition-colors font-medium"
            :class="{ 'text-ecu-purple': isActive(link.to) }"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 text-gray-700"
          @click="toggleMobileMenu"
        >
          <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-xl"></i>
        </button>
      </div>

      <!-- Mobile nav -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4">
        <div class="flex flex-col space-y-3">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-gray-700 hover:text-ecu-purple transition-colors font-medium py-2"
            :class="{ 'text-ecu-purple': isActive(link.to) }"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
