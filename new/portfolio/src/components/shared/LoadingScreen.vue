<template>
  <Transition name="fade">
    <div 
      v-if="isLoading"
      class="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
    >
      <div class="text-center">
        <!-- Apple Logo Animation -->
        <div class="text-8xl mb-8 animate-pulse">
          🍎
        </div>
        
        <!-- Progress Bar -->
        <div class="w-64 h-1 bg-apple-gray-700 rounded-full overflow-hidden">
          <div 
            class="h-full bg-white rounded-full transition-all duration-300"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>

        <p class="text-white text-opacity-70 mt-4 text-sm">
          Loading Portfolio...
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const progress = ref(0)

onMounted(() => {
  // Simulate loading progress
  const interval = setInterval(() => {
    progress.value += Math.random() * 15
    
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      
      // Hide loading screen after brief delay
      setTimeout(() => {
        isLoading.value = false
      }, 300)
    }
  }, 100)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
