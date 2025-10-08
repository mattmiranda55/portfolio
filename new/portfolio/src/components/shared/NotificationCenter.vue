<template>
  <div class="fixed top-20 right-4 z-[9999] space-y-2 max-w-sm">
    <TransitionGroup name="notification">
      <div 
        v-for="notification in store.notifications" 
        :key="notification.id"
        class="sequoia-panel rounded-xl shadow-2xl p-4 cursor-pointer hover:scale-105 transition-transform"
        @click="removeNotification(notification.id)"
      >
        <div class="flex items-start gap-3">
          <div class="text-2xl">{{ notification.icon }}</div>
          <div class="flex-1">
            <h4 class="font-semibold text-apple-gray-900">{{ notification.title }}</h4>
            <p class="text-sm text-apple-gray-600 mt-1">{{ notification.message }}</p>
          </div>
          <button 
            class="text-apple-gray-400 hover:text-apple-gray-600"
            @click.stop="removeNotification(notification.id)"
          >
            ✕
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/store'

const store = usePortfolioStore()

function removeNotification(id: number) {
  store.removeNotification(id)
}
</script>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
