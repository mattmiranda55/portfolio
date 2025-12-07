<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-bold text-white mb-2">Matt Miranda</h3>
          <p class="text-gray-400">Full Stack Web Developer</p>
        </div>
        
        <div class="flex gap-6">
          <a
            href="https://github.com/mattmiranda55"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-ecu-purple-light transition-colors"
          >
            <i class="pi pi-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-miranda-b4b45a232/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-ecu-purple-light transition-colors"
          >
            <i class="pi pi-linkedin text-2xl"></i>
          </a>
          <a
            href="mailto:mattmiranda55@gmail.com"
            class="text-gray-400 hover:text-ecu-purple-light transition-colors"
          >
            <i class="pi pi-envelope text-2xl"></i>
          </a>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          &copy; {{ currentYear }} Matt Miranda. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
