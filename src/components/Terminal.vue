<template>
  <div class="terminal-container" ref="terminalContainer">
    <div class="terminal-header">
      <div class="terminal-buttons">
        <div class="terminal-button close"></div>
        <div class="terminal-button minimize"></div>
        <div class="terminal-button maximize"></div>
      </div>
      <div class="terminal-title">Terminal - API Demo</div>
    </div>
    <div class="terminal-content" ref="terminalContent">
      <div class="terminal-line">
        <span class="prompt">{{ props.prompt }}</span>
        <span class="command-text">{{ displayedCommand }}</span>
        <span class="cursor" :class="{ 'blink': showCursor }">█</span>
      </div>
      
      <div v-if="showResponse" class="response-container">
        <div class="response-headers">
          <div class="response-header">HTTP/1.1 200 OK</div>
          <div class="response-header">Content-Type: application/json</div>
          <div class="response-header">Cache-Control: public, max-age=3600</div>
          <div class="response-header"></div>
        </div>
        <pre class="json-response">{{ formattedResponse }}</pre>
      </div>
      
      <div v-if="showSecondCommand" class="terminal-line">
        <span class="prompt">{{ props.prompt }}</span>
        <span class="command-text">{{ displayedSecondCommand }}</span>
        <span class="cursor" :class="{ 'blink': showSecondCursor }">█</span>
      </div>
      
      <div v-if="showSecondResponse" class="response-container">
        <div class="response-headers">
          <div class="response-header">HTTP/1.1 200 OK</div>
          <div class="response-header">Content-Type: application/json</div>
          <div class="response-header">Cache-Control: public, max-age=3600</div>
          <div class="response-header"></div>
        </div>
        <pre class="json-response">{{ formattedSecondResponse }}</pre>
      </div>
      
      <div v-if="showFinalPrompt" class="terminal-line">
        <span class="prompt">{{ props.prompt }}</span>
        <span class="cursor blink">█</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Props
const props = defineProps({
  command: {
    type: [String, Array],
    default: 'curl -L mattmiranda.dev'
  },
  prompt: {
    type: String,
    default: 'visitor@mattmiranda.dev:~$'
  },
  autoStart: {
    type: Boolean,
    default: true
  },
  typingSpeed: {
    type: Number,
    default: 80
  }
})

const terminalContainer = ref(null)
const terminalContent = ref(null)

// Animation state
const displayedCommand = ref('')
const showCursor = ref(true)
const showResponse = ref(false)
const showSecondCommand = ref(false)
const displayedSecondCommand = ref('')
const showSecondCursor = ref(false)
const showSecondResponse = ref(false)
const showFinalPrompt = ref(false)

// Commands - can be string or array
const commands = computed(() => {
  if (Array.isArray(props.command)) {
    return props.command
  }
  return [props.command]
})

const firstCommand = computed(() => commands.value[0] || 'curl -L mattmiranda.dev')
const secondCommand = computed(() => commands.value[1] || null)

const apiResponse = {
  name: "Matt Miranda",
  title: "Full Stack Developer",
  email: "mattmiranda55@gmail.com",
  github: "https://github.com/mattmiranda55",
  website: "https://mattmiranda.dev"
}

const projectsResponse = {
  projects: [
    {
      id: 1,
      name: "CardCraft",
      description: "AI-powered Django flashcard management system with OpenAI GPT-3.5-turbo integration",
      technologies: ["OpenAI API", "Django", "GPT-3.5", "PDF Processing", "AI Generation", "JWT Auth"],
      github: "https://github.com/mattmiranda55/CardCraftBackEnd"
    },
    {
      id: 2,
      name: "Bone Graft Consortium Backend", 
      description: "Comprehensive Django REST API for nonprofit platform with PayPal integration and AWS S3",
      technologies: ["PostgreSQL", "Django", "REST APIs", "JWT Auth", "PayPal Integration", "AWS S3"],
      github: "https://github.com/mattmiranda55/BGCBackEnd"
    },
    {
      id: 3,
      name: "PDF Question Bot",
      description: "Intelligent document analysis with IBM watsonx.ai, LangChain, and RAG",
      technologies: ["IBM watsonx.ai", "LangChain", "Streamlit", "RAG", "Vector DB", "NLP"],
      github: "https://github.com/mattmiranda55/PDF_Question_Bot"
    }
  ],
  meta: {
    total_projects: 3,
    featured_projects: 3
  }
}

// Generate response based on command
const getResponseForCommand = (command) => {
  if (command.includes('mattmiranda.dev/projects')) {
    return JSON.stringify(projectsResponse, null, 2)
  } else if (command.includes('mattmiranda.dev')) {
    return JSON.stringify(apiResponse, null, 2)
  } else if (command.includes('help')) {
    return `Available commands:
• curl -L mattmiranda.dev
• curl -L mattmiranda.dev/projects
• ls, pwd, whoami`
  } else if (command.includes('ls')) {
    return 'portfolio.html  projects/  contact.txt  resume.pdf'
  } else if (command.includes('pwd')) {
    return '/home/visitor'
  } else if (command.includes('whoami')) {
    return 'visitor'
  } else {
    return `Command '${command}' not found`
  }
}

const formattedResponse = computed(() => getResponseForCommand(firstCommand.value))
const formattedSecondResponse = computed(() => secondCommand.value ? getResponseForCommand(secondCommand.value) : '')

let observer = null
let hasAnimated = false

// Typewriter effect
const typeCommand = async (command, displayRef, cursorRef) => {
  cursorRef.value = true
  for (let i = 0; i <= command.length; i++) {
    displayRef.value = command.slice(0, i)
    await new Promise(resolve => setTimeout(resolve, props.typingSpeed + Math.random() * 40)) // Vary typing speed
  }
  cursorRef.value = false
  await new Promise(resolve => setTimeout(resolve, 500)) // Pause before executing
}

const startAnimation = async () => {
  if (hasAnimated) return
  hasAnimated = true
  
  // Type first command
  await typeCommand(firstCommand.value, displayedCommand, showCursor)
  
  // Show first response
  await new Promise(resolve => setTimeout(resolve, 300))
  showResponse.value = true
  
  // If there's a second command, run it
  if (secondCommand.value) {
    // Wait before second command
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show second command line
    showSecondCommand.value = true
    await typeCommand(secondCommand.value, displayedSecondCommand, showSecondCursor)
    
    // Show second response
    await new Promise(resolve => setTimeout(resolve, 300))
    showSecondResponse.value = true
  }
  
  // Show final prompt
  await new Promise(resolve => setTimeout(resolve, 1000))
  showFinalPrompt.value = true
}

onMounted(() => {
  if (props.autoStart) {
    // Set up intersection observer to trigger animation when scrolled into view
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Add a small delay before starting animation
            setTimeout(() => {
              startAnimation()
            }, 500)
          }
        })
      },
      {
        threshold: 0.3 // Trigger when 30% of the terminal is visible
      }
    )
    
    if (terminalContainer.value) {
      observer.observe(terminalContainer.value)
    }
  }
})

// Expose methods for manual control
defineExpose({
  startAnimation,
  reset: () => {
    hasAnimated = false
    displayedCommand.value = ''
    showCursor.value = true
    showResponse.value = false
    showSecondCommand.value = false
    displayedSecondCommand.value = ''
    showSecondCursor.value = false
    showSecondResponse.value = false
    showFinalPrompt.value = false
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.terminal-container {
  background: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  width: 600px;
  min-width: 600px;
  max-width: 600px;
  margin: 0 auto;
  flex-shrink: 0;
}

.terminal-header {
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #404040;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
  margin-right: 1rem;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-button.close {
  background: #ff5f57;
}

.terminal-button.minimize {
  background: #ffbd2e;
}

.terminal-button.maximize {
  background: #28ca42;
}

.terminal-title {
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
}

.terminal-content {
  padding: 1.5rem;
  height: 400px;
  background: #1e1e1e;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.terminal-line {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  min-height: 20px;
  flex-shrink: 0;
}

.prompt {
  color: #00ff00;
  font-weight: bold;
  margin-right: 0.5rem;
  white-space: nowrap;
}

.command-text {
  color: #ffffff;
  font-family: inherit;
}

.cursor {
  color: #00ff00;
  margin-left: 2px;
  animation: none;
}

.cursor.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.response-container {
  margin: 1rem 0 1rem 0;
  border-left: 3px solid #00ff00;
  padding-left: 1rem;
  flex-shrink: 0;
}

.response-headers {
  margin-bottom: 0.5rem;
}

.response-header {
  color: #888888;
  font-size: 0.875rem;
  line-height: 1.3;
}

.json-response {
  color: #00ff00;
  background: rgba(0, 255, 0, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin: 0;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.3;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Responsive design */
@media (max-width: 768px) {
  .terminal-container {
    border-radius: 4px;
    width: 500px;
    min-width: 500px;
    max-width: 500px;
  }
  
  .terminal-content {
    padding: 1rem;
    height: 300px;
    font-size: 12px;
  }
  
  .json-response {
    font-size: 11px;
    padding: 0.75rem;
  }
  
  .prompt {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .terminal-container {
    width: 400px;
    min-width: 400px;
    max-width: 400px;
  }
  
  .terminal-content {
    padding: 0.75rem;
    height: 250px;
  }
  
  .json-response {
    font-size: 10px;
    padding: 0.5rem;
  }
}
</style>

