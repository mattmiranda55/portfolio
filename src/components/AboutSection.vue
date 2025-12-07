<script setup lang="ts">
import Card from 'primevue/card'

const skills = [
  { category: 'Frontend', items: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
  { category: 'Backend', items: ['Python', 'Node.js', 'Django', 'FastAPI', 'REST APIs'] },
  { category: 'Tools & Other', items: ['Git', 'Docker', 'AI/LLMs', 'PostgreSQL', 'MongoDB'] }
]
</script>

<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <div class="w-20 h-1 bg-ecu-purple mx-auto"></div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-lg text-gray-600 mb-6">
            I'm a full stack web developer passionate about creating efficient, scalable, and 
            user-friendly applications. I enjoy working across the entire stack, from crafting 
            intuitive user interfaces to building robust backend systems.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            I'm particularly interested in leveraging AI tools and technologies to enhance 
            development workflows and build smarter applications. Whether it's using LLMs 
            for code assistance or integrating AI features into products, I'm always exploring 
            new ways to work smarter.
          </p>
          <p class="text-lg text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open source projects, or learning about the latest developments in AI and web development.
          </p>
        </div>
        
        <div class="space-y-6">
          <Card v-for="skill in skills" :key="skill.category" class="!shadow-md !border-l-4 !border-l-ecu-purple">
            <template #title>
              <span class="text-ecu-purple">{{ skill.category }}</span>
            </template>
            <template #content>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="item in skill.items"
                  :key="item"
                  class="px-3 py-1 bg-purple-100 text-ecu-purple rounded-full text-sm font-medium"
                >
                  {{ item }}
                </span>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
