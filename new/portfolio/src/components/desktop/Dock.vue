<template>
  <div class="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
    <div class="sequoia-panel rounded-2xl px-3 py-2 flex items-end gap-2">
      <!-- Finder -->
      <div 
        v-for="(app, index) in dockApps" 
        :key="index"
        class="dock-item"
        :style="getDockItemStyle(index)"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        @click="app.action"
      >
        <div 
          class="rounded-xl overflow-hidden bg-gradient-to-br flex items-center justify-center cursor-pointer transition-all duration-200"
          :class="app.bgClass"
          :style="{ width: `${getSize(index)}px`, height: `${getSize(index)}px` }"
        >
          <component :is="app.icon" class="text-white" :style="{ width: `${getSize(index) * 0.5}px`, height: `${getSize(index) * 0.5}px` }" />
        </div>
        <!-- Active indicator -->
        <div 
          v-if="app.active"
          class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-apple-gray-700 rounded-full"
        ></div>
      </div>

      <!-- Divider -->
      <div class="w-px h-12 bg-apple-gray-300 mx-1"></div>

      <!-- Minimized windows -->
      <div 
        v-for="window in store.minimizedWindows" 
        :key="window.id"
        class="dock-item"
        @click="store.restoreWindow(window.id)"
      >
        <div 
          class="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-apple-blue to-apple-purple flex items-center justify-center text-white text-xs cursor-pointer hover:scale-110 transition-transform"
        >
          {{ window.title.slice(0, 2) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePortfolioStore } from '@/store'
import About from '@/components/shared/About.vue'
import Projects from '@/components/shared/Projects.vue'
import Contact from '@/components/shared/Contact.vue'
import { Folder, User, Briefcase, Mail } from '@/utils/icons'

const store = usePortfolioStore()
const hoveredIndex = ref<number | null>(null)

const dockApps = computed(() => [
  {
    icon: Folder,
    label: 'Finder',
    bgClass: 'from-blue-400 to-blue-600',
    active: false,
    action: () => {},
  },
  {
    icon: User,
    label: 'About',
    bgClass: 'from-purple-400 to-purple-600',
    active: store.windows.some(w => w.title === 'About Me'),
    action: () => store.openWindow('About Me', About),
  },
  {
    icon: Briefcase,
    label: 'Projects',
    bgClass: 'from-green-400 to-green-600',
    active: store.windows.some(w => w.title === 'Projects'),
    action: () => store.openWindow('Projects', Projects),
  },
  {
    icon: Mail,
    label: 'Contact',
    bgClass: 'from-red-400 to-red-600',
    active: store.windows.some(w => w.title === 'Contact'),
    action: () => store.openWindow('Contact', Contact),
  },
])

function getSize(index: number): number {
  if (hoveredIndex.value === null) return 48
  
  const distance = Math.abs(hoveredIndex.value - index)
  
  if (distance === 0) return 64
  if (distance === 1) return 56
  return 48
}

function getDockItemStyle(index: number) {
  if (hoveredIndex.value === null) return {}
  
  const distance = Math.abs(hoveredIndex.value - index)
  
  return {
    transform: `translateY(-${distance === 0 ? 8 : distance === 1 ? 4 : 0}px)`,
  }
}
</script>
