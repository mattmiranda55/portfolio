<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-4xl font-bold dark:text-white text-apple-gray-900 mb-8">Featured Projects</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="group rounded-2xl overflow-hidden dark:bg-dark-elevated bg-white border dark:border-apple-gray-700 border-apple-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        @click="openProject(project.link)"
      >
        <!-- Project Image/Icon -->
        <div 
          class="h-48 bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          :class="project.gradient"
        >
          <component :is="project.icon" class="w-20 h-20 text-white" />
        </div>

        <!-- Project Content -->
        <div class="p-6">
          <h2 class="text-2xl font-bold dark:text-white text-apple-gray-900 mb-2">{{ project.title }}</h2>
          <p class="dark:text-dark-text-secondary text-apple-gray-600 mb-4">{{ project.description }}</p>
          
          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="px-3 py-1 dark:bg-apple-gray-700 bg-apple-gray-100 dark:text-dark-text text-apple-gray-700 text-xs font-medium rounded-full"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Link -->
          <div class="flex gap-4 text-sm">
            <a 
              :href="project.link" 
              target="_blank"
              class="flex items-center gap-1 text-apple-blue hover:text-blue-600 transition-colors"
              @click.stop
            >
              <Github class="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- GitHub CTA -->
    <div class="mt-12 text-center">
      <a 
        href="https://github.com/mattmiranda55" 
        target="_blank"
        class="inline-flex items-center gap-2 px-8 py-4 dark:bg-dark-elevated bg-apple-gray-900 text-white rounded-full font-semibold hover:bg-apple-gray-700 transition-colors"
      >
        <Github class="w-5 h-5" />
        <span>View More on GitHub</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShoppingCart, ClipboardList, Chip, CloudSun, Dumbbell, Music, Github } from '@/utils/icons'

const projects = [
  {
    title: 'CardCraft',
    description: 'An AI-powered Django flashcard management system developed as a capstone project. Features intelligent PDF processing with OpenAI GPT-3.5-turbo integration that automatically extracts text and generates comprehensive question-answer pairs from uploaded documents.',
    icon: Chip,
    gradient: 'from-purple-400 to-purple-600',
    tech: ['OpenAI API', 'Django', 'GPT-3.5', 'PDF Processing', 'AI Generation', 'JWT Auth'],
    link: 'https://github.com/mattmiranda55/CardCraftBackEnd',
  },
  {
    title: 'Bone Graft Consortium Backend',
    description: 'A comprehensive Django REST API serving as the backend for the Bone Graft Consortium database - a non-biased, 501(c)(3) nonprofit platform. Features complete graft management with categorization, regulatory compliance tracking, user authentication with JWT tokens.',
    icon: ClipboardList,
    gradient: 'from-blue-400 to-blue-600',
    tech: ['PostgreSQL', 'Django', 'REST APIs', 'JWT Auth', 'PayPal Integration', 'AWS S3'],
    link: 'https://github.com/mattmiranda55/BGCBackEnd',
  },
  {
    title: 'PDF Question Bot',
    description: 'An intelligent document analysis application leveraging IBM watsonx.ai and LangChain for PDF processing. Features vector embeddings with HuggingFace transformers, document chunking and indexing, retrieval-augmented generation (RAG).',
    icon: CloudSun,
    gradient: 'from-green-400 to-green-600',
    tech: ['IBM watsonx.ai', 'LangChain', 'Streamlit', 'RAG', 'Vector DB', 'NLP'],
    link: 'https://github.com/mattmiranda55/PDF_Question_Bot',
  },
]

function openProject(link: string) {
  if (link !== '#') {
    window.open(link, '_blank')
  }
}
</script>