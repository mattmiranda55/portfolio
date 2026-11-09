<script setup lang="ts">
import { sections } from '@/sections'

defineProps<{ active: number }>()
defineEmits<{ navigate: [index: number] }>()
</script>

<template>
  <!-- Content scrolls underneath, so the bar gets a backdrop once you leave the intro. -->
  <header
    class="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 text-sm transition-colors duration-300 md:px-12 md:text-base"
    :class="active === 0 ? 'bg-transparent' : 'bg-black/70 backdrop-blur'"
  >
    <!-- Home link: hidden on the intro, where the big greeting already says it. -->
    <button
      type="button"
      class="cursor-pointer font-semibold transition-opacity duration-300"
      :class="active === 0 ? 'pointer-events-none opacity-0' : 'opacity-100'"
      :inert="active === 0"
      @click="$emit('navigate', 0)"
    >
      Matt
    </button>

    <!-- Breadcrumbs, top right on every section including the intro. -->
    <nav aria-label="Sections">
      <ol class="flex items-center gap-x-3">
        <template v-for="(s, k) in sections" :key="s.id">
          <li v-if="k > 0" class="flex items-center gap-x-3">
            <span v-if="k > 1" aria-hidden="true" class="text-white/30">/</span>
            <button
              type="button"
              class="cursor-pointer underline-offset-4 hover:text-white hover:underline"
              :class="active === k ? 'font-semibold text-white' : 'text-white/60'"
              :aria-current="active === k ? 'step' : undefined"
              @click="$emit('navigate', k)"
            >
              {{ s.label }}
            </button>
          </li>
        </template>
      </ol>
    </nav>
  </header>
</template>
