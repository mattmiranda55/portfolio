<template>
  <div 
    class="fixed bottom-24 right-4 w-[600px] h-[400px] bg-gray-900 bg-opacity-95 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-slide-up z-50"
    @mousedown="bringToFront"
  >
    <!-- Title Bar -->
    <div 
      class="flex items-center justify-between px-4 py-2 bg-gray-800 bg-opacity-50 cursor-move"
      @mousedown="startDrag"
    >
      <div class="flex items-center gap-2">
        <button 
          class="w-3 h-3 rounded-full bg-apple-red hover:bg-red-600 transition-colors"
          @click.stop="store.toggleTerminal()"
        ></button>
        <button class="w-3 h-3 rounded-full bg-apple-yellow hover:bg-yellow-600 transition-colors"></button>
        <button class="w-3 h-3 rounded-full bg-apple-green hover:bg-green-600 transition-colors"></button>
      </div>
      <div class="text-sm text-white text-opacity-70">Terminal</div>
      <div></div>
    </div>

    <!-- Terminal Content -->
    <div class="flex-1 overflow-auto p-4 font-mono text-sm text-green-400">
      <div v-for="(line, index) in output" :key="index" class="mb-1">
        <span v-if="line.type === 'prompt'" class="text-blue-400">{{ line.text }}</span>
        <span v-else-if="line.type === 'command'" class="text-white">{{ line.text }}</span>
        <span v-else class="text-green-400">{{ line.text }}</span>
      </div>
      <div class="flex items-center">
        <span class="text-blue-400 mr-2">portfolio@mac:~$</span>
        <input
          ref="inputRef"
          v-model="currentCommand"
          @keydown.enter="executeCommand"
          @keydown.up="historyUp"
          @keydown.down="historyDown"
          class="flex-1 bg-transparent border-none outline-none text-white caret-green-400"
          autofocus
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePortfolioStore } from '@/store'

const store = usePortfolioStore()

interface TerminalLine {
  type: 'prompt' | 'command' | 'output'
  text: string
}

const output = ref<TerminalLine[]>([
  { type: 'output', text: 'Welcome to Portfolio Terminal v1.0.0' },
  { type: 'output', text: 'Type "help" for available commands' },
  { type: 'output', text: '' },
])

const currentCommand = ref('')
const commandHistory = ref<string[]>([])
const historyIndex = ref(-1)
const inputRef = ref<HTMLInputElement>()

const commands: Record<string, () => string> = {
  help: () => `Available commands:
  help      - Show this help message
  about     - About me
  skills    - List my skills
  projects  - Show projects
  contact   - Contact information
  clear     - Clear terminal
  theme     - Toggle dark mode
  whoami    - Who am I?
  date      - Show current date
  echo      - Echo your message`,
  
  about: () => `Full-Stack Developer & Designer
Passionate about creating beautiful web experiences
Expertise in Vue.js, React, TypeScript, and modern web technologies`,
  
  skills: () => `💚 Vue.js    ⚛️  React     📘 TypeScript
🟢 Node.js   🎨 Tailwind  🐍 Python
🐳 Docker    ☁️  AWS       🔥 Firebase`,
  
  projects: () => `Featured Projects:
1. E-Commerce Platform - Vue 3, Node.js, PostgreSQL
2. Task Management App - React, Firebase
3. AI Content Generator - Python, FastAPI, OpenAI
4. Weather Dashboard - TypeScript, D3.js
Type 'open <number>' to view a project`,
  
  contact: () => `📧 Email: hello@example.com
💼 LinkedIn: linkedin.com/in/yourname
🐙 GitHub: github.com/yourusername
📍 Location: San Francisco, CA`,
  
  clear: () => {
    output.value = []
    return ''
  },
  
  theme: () => {
    store.toggleDarkMode()
    return `Theme toggled to ${store.isDarkMode ? 'dark' : 'light'} mode`
  },
  
  whoami: () => 'A passionate developer building amazing things 🚀',
  
  date: () => new Date().toString(),
  
  echo: () => currentCommand.value.slice(5),
}

function executeCommand() {
  const cmd = currentCommand.value.trim()
  
  if (!cmd) return
  
  // Add to history
  commandHistory.value.push(cmd)
  historyIndex.value = -1
  
  // Add command to output
  output.value.push({ type: 'prompt', text: 'portfolio@mac:~$' })
  output.value.push({ type: 'command', text: cmd })
  
  // Execute command
  const parts = (cmd || '').split(' ')
  const baseCmd = (parts[0] || '').toLowerCase()
  const result = commands[baseCmd]?.() || `Command not found: ${baseCmd}. Type 'help' for available commands.`
  
  if (result) {
    output.value.push({ type: 'output', text: result })
    output.value.push({ type: 'output', text: '' })
  }
  
  currentCommand.value = ''
}

function historyUp() {
  if (commandHistory.value.length === 0) return
  
  if (historyIndex.value === -1) {
    historyIndex.value = commandHistory.value.length - 1
  } else if (historyIndex.value > 0) {
    historyIndex.value--
  }
  
  currentCommand.value = commandHistory.value[historyIndex.value] || ''
}

function historyDown() {
  if (historyIndex.value === -1) return
  
  if (historyIndex.value < commandHistory.value.length - 1) {
    historyIndex.value++
    currentCommand.value = commandHistory.value[historyIndex.value] || ''
  } else {
    historyIndex.value = -1
    currentCommand.value = ''
  }
}

function bringToFront() {
  // Terminal is always on top
}

function startDrag(e: MouseEvent) {
  // Drag functionality would go here
}

onMounted(() => {
  inputRef.value?.focus()
})
</script>
