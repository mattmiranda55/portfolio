<template>
  <div class="fixed top-0 left-0 right-0 h-12 z-50 flex items-center justify-between px-6 text-white text-sm">
    <div class="font-semibold">{{ currentTime }}</div>
    <div class="flex items-center gap-2">
      <span>📶</span>
      <span>📱</span>
      <span>🔋</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')

function updateTime() {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', { 
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
