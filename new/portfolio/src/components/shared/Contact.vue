<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-4xl font-bold dark:text-white text-apple-gray-900 mb-4">Get In Touch</h1>
    <p class="text-xl dark:text-dark-text-secondary text-apple-gray-600 mb-12">
      I'm always interested in new opportunities and exciting AI projects!
    </p>

    <!-- Contact Form -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-semibold dark:text-white text-apple-gray-700 mb-2">
          Name
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 rounded-xl border dark:bg-dark-elevated dark:border-apple-gray-700 dark:text-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-semibold dark:text-white text-apple-gray-700 mb-2">
          Email
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 rounded-xl border dark:bg-dark-elevated dark:border-apple-gray-700 dark:text-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-semibold dark:text-white text-apple-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="6"
          class="w-full px-4 py-3 rounded-xl border dark:bg-dark-elevated dark:border-apple-gray-700 dark:text-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full px-8 py-4 bg-apple-blue text-white rounded-xl font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>

      <div 
        v-if="submitMessage"
        class="p-4 rounded-xl text-center font-medium"
        :class="submitSuccess ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'"
      >
        {{ submitMessage }}
      </div>
    </form>

    <!-- Social Links -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold dark:text-white text-apple-gray-900 mb-6 text-center">Connect With Me</h2>
      <div class="flex justify-center gap-4">
        <a 
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
          class="w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg"
          :class="social.gradient"
          :title="social.name"
        >
          <component :is="social.icon" class="w-6 h-6 text-white" />
        </a>
      </div>
    </div>

    <!-- Quick Info -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 rounded-xl dark:bg-dark-elevated bg-apple-gray-50 text-center">
        <div class="mb-2 flex items-center justify-center">
          <Mail class="w-8 h-8 text-apple-blue" />
        </div>
        <div class="font-semibold dark:text-white text-apple-gray-900">Email</div>
        <div class="text-sm dark:text-dark-text-secondary text-apple-gray-600 mt-1">mattmiranda55@gmail.com</div>
      </div>
      <div class="p-6 rounded-xl dark:bg-dark-elevated bg-apple-gray-50 text-center">
        <div class="mb-2 flex items-center justify-center">
          <Github class="w-8 h-8 text-apple-blue" />
        </div>
        <div class="font-semibold dark:text-white text-apple-gray-900">GitHub</div>
        <div class="text-sm dark:text-dark-text-secondary text-apple-gray-600 mt-1">@mattmiranda55</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Github, Linkedin, Twitter, Mail } from '@/utils/icons'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const socials = [
  { name: 'GitHub', icon: Github, link: 'https://github.com/mattmiranda55', gradient: 'from-gray-600 to-gray-800' },
  { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/matthew-miranda-b4b45a232/', gradient: 'from-blue-500 to-blue-700' },
  { name: 'Twitter', icon: Twitter, link: 'https://twitter.com', gradient: 'from-sky-400 to-sky-600' },
  { name: 'Email', icon: Mail, link: 'mailto:mattmiranda55@gmail.com', gradient: 'from-red-400 to-red-600' },
]

async function handleSubmit() {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would normally send to Cloudflare Function
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form.value)
    // })

    submitSuccess.value = true
    submitMessage.value = '✅ Message sent successfully! I\'ll get back to you soon.'
    
    // Reset form
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = '❌ Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>