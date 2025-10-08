<template>
  <div 
    class="relative w-full h-full bg-cover bg-center transition-all duration-300"
    :style="wallpaperStyle"
    :class="{ 'brightness-75': store.isDarkMode }"
  >
    <TopBar />
    
    <!-- Desktop Icons -->
    <div class="absolute top-10 left-4 flex flex-col gap-4 pt-4">
      <Icon 
        label="About Me" 
        :icon="User" 
        @dblclick="store.openWindow('About Me', About)" 
      />
      <Icon 
        label="Projects" 
        :icon="Briefcase" 
        @dblclick="store.openWindow('Projects', Projects)" 
      />
      <Icon 
        label="Contact" 
        :icon="Mail" 
        @dblclick="store.openWindow('Contact', Contact)" 
      />
    </div>

    <!-- Windows -->
    <Window 
      v-for="window in store.visibleWindows" 
      :key="window.id"
      :window-id="window.id"
      :title="window.title"
    />

    <!-- Terminal Easter Egg -->
    <Terminal v-if="store.terminalOpen" />

    <Dock />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from '@/store'
import TopBar from './TopBar.vue'
import Dock from './Dock.vue'
import Icon from './Icon.vue'
import Window from './Window.vue'
import Terminal from '@/components/shared/Terminal.vue'
import About from '@/components/shared/About.vue'
import Projects from '@/components/shared/Projects.vue'
import Contact from '@/components/shared/Contact.vue'
import { User, Briefcase, Mail } from '@/utils/icons'

const store = usePortfolioStore()

const wallpaperStyle = computed(() => ({
  backgroundImage: `url('https://lava.mattmiranda.dev/portfolio/images/mountain.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}))
</script>
