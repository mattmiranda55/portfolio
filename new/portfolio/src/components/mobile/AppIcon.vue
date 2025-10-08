<template>
  <div 
    class="app-icon"
    @click="$emit('click')"
  >
    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg" :class="bgClass">
      <component :is="icon" class="w-8 h-8 text-white" />
    </div>
    <div class="text-white text-xs mt-1 text-center drop-shadow-lg">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  name: string
  icon: Component
  bgClass?: string
}>()

defineEmits<{
  click: []
}>()
</script>
