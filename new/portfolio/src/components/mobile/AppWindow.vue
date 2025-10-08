<template>
  <div 
    v-if="visible"
    class="fixed inset-0 bg-white z-50 flex flex-col animate-slide-up"
  >
    <!-- Top Bar -->
    <div class="h-16 flex items-center justify-between px-4 pt-12 pb-2">
      <button 
        class="text-apple-blue font-semibold"
        @click="close"
      >
        ← Back
      </button>
      <div class="font-semibold text-apple-gray-700">
        {{ name }}
      </div>
      <div class="w-16"></div>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-auto px-4 py-6">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  name: string
}>()

const emit = defineEmits<{
  close: []
}>()

const visible = ref(true)

function close() {
  visible.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}
</script>
