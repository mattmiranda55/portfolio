<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  // TODO: Implement form submission
  console.log('Form submitted:', { name: name.value, email: email.value, message: message.value })
  alert('Thank you for your message! I\'ll get back to you soon.')
  name.value = ''
  email.value = ''
  message.value = ''
}

const contactInfo = [
  { icon: 'pi-envelope', label: 'Email', value: 'mattmiranda55@gmail.com', href: 'mailto:mattmiranda55@gmail.com' },
  { icon: 'pi-linkedin', label: 'LinkedIn', value: 'https://www.linkedin.com/in/matthew-miranda-b4b45a232/', href: 'https://www.linkedin.com/in/matthew-miranda-b4b45a232/' },
  { icon: 'pi-github', label: 'GitHub', value: 'github.com/mattmiranda55', href: 'https://github.com/mattmiranda55' }
]
</script>

<template>
  <section id="contact" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <div class="w-20 h-1 bg-ecu-purple mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or just having a chat about technology.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
          <div class="space-y-4">
            <a
              v-for="info in contactInfo"
              :key="info.label"
              :href="info.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-ecu-purple transition-colors">
                <i :class="['pi', info.icon, 'text-xl text-ecu-purple group-hover:text-white transition-colors']"></i>
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ info.label }}</p>
                <p class="text-gray-600">{{ info.value }}</p>
              </div>
            </a>
          </div>
        </div>
        
        <Card class="!shadow-md">
          <template #title>
            <span class="text-ecu-purple">Send a Message</span>
          </template>
          <template #content>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <InputText
                  id="name"
                  v-model="name"
                  placeholder="Your name"
                  class="w-full"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <InputText
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full"
                  required
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  v-model="message"
                  placeholder="Your message..."
                  rows="4"
                  class="w-full"
                  required
                />
              </div>
              <Button
                type="submit"
                label="Send Message"
                icon="pi pi-send"
                class="!bg-ecu-purple !border-ecu-purple hover:!bg-ecu-purple-dark w-full"
              />
            </form>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>
