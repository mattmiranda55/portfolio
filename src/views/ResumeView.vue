<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import VuePdfEmbed from 'vue-pdf-embed'

const resumePath = '/Matt-Miranda-Resume.pdf'
const isLoading = ref(true)

const onLoaded = () => {
  isLoading.value = false
}
</script>

<template>
  <div class="min-h-screen pt-20 pb-8 bg-gradient-to-br from-white via-purple-50 to-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-900">Resume</h1>
        <a :href="resumePath" download>
          <Button
            label="Download PDF"
            icon="pi pi-download"
            class="!bg-ecu-purple !border-ecu-purple hover:!bg-ecu-purple-dark"
          />
        </a>
      </div>
      
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <i class="pi pi-spin pi-spinner text-4xl text-ecu-purple"></i>
      </div>
      
      <div class="pdf-container bg-white rounded-xl shadow-xl p-6 sm:p-8">
        <VuePdfEmbed
          :source="resumePath"
          class="pdf-viewer"
          @loaded="onLoaded"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pdf-container {
  border: 1px solid #e5e7eb;
}

.pdf-viewer :deep(canvas) {
  width: 100% !important;
  height: auto !important;
  border-radius: 4px;
}

.pdf-viewer :deep(.vue-pdf-embed__page) {
  margin-bottom: 1rem;
}

.pdf-viewer :deep(.vue-pdf-embed__page:last-child) {
  margin-bottom: 0;
}
</style>
