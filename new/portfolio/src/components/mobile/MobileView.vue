<template>
  <div 
    class="relative w-full h-full bg-cover bg-center"
    :style="wallpaperStyle"
  >
    <StatusBar />
    
    <!-- App Icons Grid -->
    <div class="grid grid-cols-4 gap-6 p-6 pt-20">
      <AppIcon 
        name="About" 
        :icon="User" 
        bg-class="from-purple-400 to-purple-600"
        @click="openApp('about')" 
      />
      <AppIcon 
        name="Projects" 
        :icon="Briefcase" 
        bg-class="from-green-400 to-green-600"
        @click="openApp('projects')" 
      />
      <AppIcon 
        name="Contact" 
        :icon="Mail" 
        bg-class="from-red-400 to-red-600"
        @click="openApp('contact')" 
      />
    </div>

    <DockMobile />
    
    <!-- App Window -->
    <AppWindow 
      v-if="store.activeApp" 
      :name="store.activeApp.name" 
      @close="store.closeApp()"
    >
      <component :is="store.activeApp.component" />
    </AppWindow>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from '@/store'
import StatusBar from './StatusBar.vue'
import DockMobile from './DockMobile.vue'
import AppIcon from './AppIcon.vue'
import AppWindow from './AppWindow.vue'
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

function openApp(name: string) {
  const appMap: Record<string, any> = {
    about: { name: 'About Me', icon: User, component: About },
    projects: { name: 'Projects', icon: Briefcase, component: Projects },
    contact: { name: 'Contact', icon: Mail, component: Contact },
  }
  
  store.openApp(appMap[name])
}
</script>
