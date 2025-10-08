<template>
  <div class="fixed top-0 left-0 right-0 h-7 sequoia-topbar z-50 flex items-center justify-between px-4 text-sm">
    <div class="flex items-center gap-4">
      <div class="font-semibold cursor-pointer sequoia-button flex items-center justify-center">
        <Apple class="w-4 h-4" />
      </div>
      <div class="flex gap-3 text-gray-700">
        <button 
          class="sequoia-button"
          @click="store.toggleTerminal()"
        >
          Portfolio
        </button>
        <button class="sequoia-button">
          File
        </button>
        <button class="sequoia-button">
          Edit
        </button>
        <button class="sequoia-button">
          View
        </button>
      </div>
    </div>
    <div class="flex items-center gap-3 text-gray-700">
      <div class="text-xs">{{ currentTime }}</div>
      <button 
        class="sequoia-button flex items-center justify-center"
        @click="store.toggleDarkMode()"
        title="Toggle Dark Mode"
      >
        <Moon v-if="store.isDarkMode" class="w-4 h-4" />
        <Sun v-else class="w-4 h-4" />
      </button>
      <div class="sequoia-button cursor-pointer flex items-center justify-center">
        <Battery class="w-4 h-4" />
      </div>
      <div class="sequoia-button cursor-pointer flex items-center justify-center">
        <Signal class="w-4 h-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from '@/store'
import { Apple, Sun, Moon, Battery, Signal } from '@/utils/icons'

const store = usePortfolioStore()
const currentTime = ref('')

function updateTime() {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })
}

let interval: number

onMounted(() => {
  updateTime()
  interval = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
