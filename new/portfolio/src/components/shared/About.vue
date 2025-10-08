<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- Profile Image -->
      <div class="w-32 h-32 rounded-full bg-gradient-to-br from-apple-blue to-apple-purple flex items-center justify-center shadow-xl">
        <Laptop class="w-16 h-16 text-white" />
      </div>

      <!-- Bio -->
      <div class="flex-1 space-y-4">
        <h1 class="text-4xl font-bold dark:text-white text-apple-gray-900">Hello, I'm Matt Miranda</h1>
        <p class="text-xl dark:text-dark-text-secondary text-apple-gray-600">
          AI-Powered Full Stack Developer
        </p>
        <p class="dark:text-dark-text-secondary text-apple-gray-700 leading-relaxed">
          I'm a Computer Science graduate from East Carolina University specializing in AI-powered full-stack development. With expertise in OpenAI API integration, machine learning frameworks like LangChain and Apache Spark, and robust backend systems using Django and PostgreSQL, I create intelligent applications that transform how users interact with data. From AI-driven flashcard generators to document analysis systems, I combine cutting-edge artificial intelligence with scalable web architecture to build solutions that are both innovative and practical.
        </p>
      </div>
    </div>

    <!-- Skills -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold dark:text-white text-apple-gray-900 mb-6">Skills & Technologies</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
          v-for="skill in skills" 
          :key="skill.name"
          class="p-4 rounded-xl bg-gradient-to-br text-white shadow-lg hover:scale-105 transition-transform cursor-pointer"
          :class="skill.color"
        >
          <div class="mb-2 flex items-center justify-center">
            <component :is="skill.icon" class="w-8 h-8" />
          </div>
          <div class="font-semibold text-center">{{ skill.name }}</div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold dark:text-white text-apple-gray-900 mb-6">Education</h2>
      <div class="p-6 rounded-xl dark:bg-dark-elevated bg-apple-gray-50 border dark:border-apple-gray-700 border-apple-gray-200 hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-semibold dark:text-white text-apple-gray-900">Computer Science</h3>
        <div class="text-apple-blue font-medium mt-1">East Carolina University</div>
        <p class="dark:text-dark-text-secondary text-apple-gray-700 mt-3">
          Specialized in AI-powered full-stack development, combining cutting-edge artificial intelligence with scalable web architecture.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Laptop, Code, TerminalIcon, Cloud, ColorSwatch, Chip } from '@/utils/icons'

const skills = [
  { name: 'OpenAI API', icon: Chip, color: 'from-green-400 to-green-600' },
  { name: 'LangChain', icon: Code, color: 'from-blue-400 to-blue-600' },
  { name: 'Django', icon: Code, color: 'from-green-500 to-green-700' },
  { name: 'PostgreSQL', icon: Code, color: 'from-blue-500 to-blue-700' },
  { name: 'Vue.js', icon: Code, color: 'from-green-400 to-green-600' },
  { name: 'Python', icon: TerminalIcon, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Apache Spark', icon: Chip, color: 'from-orange-400 to-orange-600' },
  { name: 'AWS S3', icon: Cloud, color: 'from-orange-400 to-orange-600' },
]
</script>