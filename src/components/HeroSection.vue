<script setup lang="ts">
import Button from 'primevue/button'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white via-purple-50 to-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <p class="text-ecu-purple font-semibold mb-4 tracking-wide">Hello, I'm</p>
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Matt Miranda
        </h1>
        <h2 class="text-2xl sm:text-3xl text-gray-600 mb-8">
          Full Stack Web Developer
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Building modern web applications with a focus on clean code, great user experiences, 
          and leveraging AI to enhance development workflows.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button
            label="View Projects"
            icon="pi pi-arrow-down"
            iconPos="right"
            class="!bg-ecu-purple !border-ecu-purple hover:!bg-ecu-purple-dark"
            @click="scrollTo('projects')"
          />
          <Button
            label="Get in Touch"
            icon="pi pi-envelope"
            severity="secondary"
            outlined
            class="!border-ecu-purple !text-ecu-purple hover:!bg-ecu-purple hover:!text-white"
            @click="scrollTo('contact')"
          />
        </div>
        <div class="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com/mattmiranda55"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-ecu-purple transition-colors"
          >
            <i class="pi pi-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-miranda-b4b45a232/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-ecu-purple transition-colors"
          >
            <i class="pi pi-linkedin text-2xl"></i>
          </a>
          <a
            href="mailto:mattmiranda55@gmail.com"
            class="text-gray-500 hover:text-ecu-purple transition-colors"
          >
            <i class="pi pi-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
