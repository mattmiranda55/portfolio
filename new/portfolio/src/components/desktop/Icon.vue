<template>
  <div 
    class="flex flex-col items-center gap-1 cursor-pointer select-none w-20 group"
    @click="$emit('click')"
    @dblclick="$emit('dblclick')"
  >
    <div class="w-16 h-16 flex items-center justify-center transform transition-transform group-hover:scale-110">
      <component :is="icon" class="w-10 h-10 text-white drop-shadow-lg" />
    </div>
    <div class="text-white text-xs text-center px-2 py-0.5 rounded bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-colors">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  label: string
  icon: Component
}>()

defineEmits<{
  click: []
  dblclick: []
}>()
</script>
