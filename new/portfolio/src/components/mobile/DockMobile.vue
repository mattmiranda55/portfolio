<template>
  <div class="fixed bottom-0 left-0 right-0 h-24 flex items-center justify-center gap-6 sequoia-mobile-dock px-6">
    <div 
      v-for="(app, index) in dockApps" 
      :key="index"
      class="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer"
      :class="app.bgClass"
      @click="app.action"
    >
      <component :is="app.icon" class="w-7 h-7 text-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DeviceMobile, ChatAlt2, Camera, MusicNote } from '@/utils/icons'

const dockApps = [
  {
    icon: DeviceMobile,
    bgClass: 'from-blue-400 to-blue-600',
    action: () => {},
  },
  {
    icon: ChatAlt2,
    bgClass: 'from-green-400 to-green-600',
    action: () => {},
  },
  {
    icon: Camera,
    bgClass: 'from-purple-400 to-purple-600',
    action: () => {},
  },
  {
    icon: MusicNote,
    bgClass: 'from-red-400 to-red-600',
    action: () => {},
  },
]
</script>

<style scoped>
.sequoia-mobile-dock {
  background: rgba(255, 255, 255, 0.95);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
