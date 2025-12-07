<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

const projects = [
  {
    title: 'CardCraft',
    description: 'A capstone project featuring a full-stack application with a Python backend. Demonstrates complex application architecture and database design.',
    tech: ['Python', 'Backend Development'],
    github: 'https://github.com/mattmiranda55/CardCraftBackEnd',
    demo: null
  },
  {
    title: 'PDF Question Bot',
    description: 'An LLM-powered bot built using IBM watsonx.ai and Streamlit. Enables users to ask questions about PDF documents using natural language processing.',
    tech: ['Python', 'AI/LLM', 'Streamlit', 'watsonx.ai'],
    github: 'https://github.com/mattmiranda55/PDF_Question_Bot',
    demo: null
  },
  {
    title: 'JSON Formatter Extension',
    description: 'A browser extension for formatting and beautifying JSON data. Built with modern web technologies for a clean developer experience.',
    tech: ['CSS', 'Browser Extension', 'JavaScript'],
    github: 'https://github.com/mattmiranda55/jsonformatterextension',
    demo: null
  },
  {
    title: 'BGC Backend',
    description: 'Backend service built with Python, demonstrating API development and data management capabilities.',
    tech: ['Python', 'API Development'],
    github: 'https://github.com/mattmiranda55/BGCBackEnd',
    demo: null
  },
  {
    title: 'Contractor Control',
    description: 'A full-stack application for contractor management with both frontend and backend components built in Python.',
    tech: ['Python', 'Full Stack'],
    github: 'https://github.com/mattmiranda55/ContractorControl',
    demo: null
  },
  {
    title: 'Nebula',
    description: 'A Vue.js application showcasing modern frontend development practices and component-based architecture.',
    tech: ['Vue.js', 'TypeScript', 'Frontend'],
    github: 'https://github.com/mattmiranda55/nebula',
    demo: null
  }
]

function open(url: string){
  window.open(url, '_blank')
}
</script>

<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
        <div class="w-20 h-1 bg-ecu-purple mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          A selection of projects I've worked on, ranging from AI-powered tools to full-stack applications.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="project in projects"
          :key="project.title"
          class="!shadow-md hover:!shadow-lg transition-shadow h-full flex flex-col"
        >
          <template #header>
            <div class="h-3 bg-gradient-to-r from-ecu-purple to-ecu-purple-light rounded-t-lg"></div>
          </template>
          <template #title>
            <span class="text-gray-900">{{ project.title }}</span>
          </template>
          <template #content>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <Tag
                v-for="tech in project.tech"
                :key="tech"
                :value="tech"
                severity="secondary"
                class="!bg-purple-100 !text-ecu-purple"
              />
            </div>
          </template>
          <template #footer>
            <div class="flex gap-3">
              <Button
                label="GitHub"
                icon="pi pi-github"
                severity="secondary"
                outlined
                size="small"
                class="!border-ecu-purple !text-ecu-purple hover:!bg-ecu-purple hover:!text-white"
                @click="() => open(project.github)"
              />
              <Button
                v-if="project.demo"
                label="Demo"
                icon="pi pi-external-link"
                size="small"
                class="!bg-ecu-purple !border-ecu-purple hover:!bg-ecu-purple-dark"
                @click="() => open(project.demo ?? '')"
              />
            </div>
          </template>
        </Card>
      </div>
      
      <div class="text-center mt-12">
        <Button
          label="View All on GitHub"
          icon="pi pi-github"
          iconPos="right"
          severity="secondary"
          outlined
          class="!border-ecu-purple !text-ecu-purple hover:!bg-ecu-purple hover:!text-white"
          @click="() => open('https://github.com/mattmiranda55?tab=repositories')"
        />
      </div>
    </div>
  </section>
</template>
