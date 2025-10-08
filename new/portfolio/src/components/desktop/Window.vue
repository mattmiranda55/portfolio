<template>
  <div 
    v-if="windowState"
    class="fixed sequoia-panel rounded-xl overflow-hidden window-shadow flex flex-col animate-scale-in"
    :style="windowStyle"
    @mousedown="bringToFront"
  >
    <!-- Title Bar -->
    <div 
      class="flex items-center justify-between px-4 py-2 border-b dark:border-apple-gray-700 border-gray-200 cursor-move select-none dark:bg-dark-elevated bg-white"
      @mousedown="startDrag"
    >
      <div class="flex items-center gap-2">
        <button 
          class="w-3 h-3 rounded-full bg-apple-red hover:bg-red-600 transition-colors"
          @click.stop="close"
        ></button>
        <button 
          class="w-3 h-3 rounded-full bg-apple-yellow hover:bg-yellow-600 transition-colors"
          @click.stop="minimize"
        ></button>
        <button 
          class="w-3 h-3 rounded-full bg-apple-green hover:bg-green-600 transition-colors"
          @click.stop="maximize"
        ></button>
      </div>
      <div class="text-sm font-semibold dark:text-white text-apple-gray-700 absolute left-1/2 transform -translate-x-1/2">
        {{ title }}
      </div>
      <div></div>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-auto dark:bg-dark-surface bg-gray-50 p-6">
      <component :is="windowState.component" />
    </div>

    <!-- Resize Handle -->
    <div 
      class="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
      @mousedown.stop="startResize"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePortfolioStore } from '@/store'

const props = defineProps<{
  windowId: number
  title: string
}>()

const store = usePortfolioStore()

const windowState = computed(() => 
  store.windows.find(w => w.id === props.windowId)
)

const windowStyle = computed(() => {
  if (!windowState.value) return {}
  
  return {
    left: `${windowState.value.x}px`,
    top: `${windowState.value.y}px`,
    width: `${windowState.value.width}px`,
    height: `${windowState.value.height}px`,
    zIndex: windowState.value.zIndex,
  }
})

const isDragging = ref(false)
const isResizing = ref(false)
const dragStartX = ref(0)
const dragStartY = ref(0)
const resizeStartWidth = ref(0)
const resizeStartHeight = ref(0)

function close() {
  store.closeWindow(props.windowId)
}

function minimize() {
  store.minimizeWindow(props.windowId)
}

function maximize() {
  if (!windowState.value) return
  
  // Toggle between maximized and normal
  if (windowState.value.width >= window.innerWidth - 100) {
    store.updateWindowSize(props.windowId, 800, 600)
    store.updateWindowPosition(props.windowId, 100, 80)
  } else {
    store.updateWindowSize(props.windowId, window.innerWidth - 100, window.innerHeight - 150)
    store.updateWindowPosition(props.windowId, 50, 40)
  }
}

function bringToFront() {
  store.bringToFront(props.windowId)
}

function startDrag(e: MouseEvent) {
  if (!windowState.value) return
  
  isDragging.value = true
  dragStartX.value = e.clientX - windowState.value.x
  dragStartY.value = e.clientY - windowState.value.y
  
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

function onDrag(e: MouseEvent) {
  if (!isDragging.value || !windowState.value) return
  
  const newX = e.clientX - dragStartX.value
  const newY = Math.max(28, e.clientY - dragStartY.value) // Keep below top bar
  
  store.updateWindowPosition(props.windowId, newX, newY)
}

function stopDrag() {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

function startResize(e: MouseEvent) {
  if (!windowState.value) return
  
  isResizing.value = true
  resizeStartWidth.value = windowState.value.width
  resizeStartHeight.value = windowState.value.height
  dragStartX.value = e.clientX
  dragStartY.value = e.clientY
  
  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', stopResize)
}

function onResize(e: MouseEvent) {
  if (!isResizing.value || !windowState.value) return
  
  const deltaX = e.clientX - dragStartX.value
  const deltaY = e.clientY - dragStartY.value
  
  const newWidth = Math.max(400, resizeStartWidth.value + deltaX)
  const newHeight = Math.max(300, resizeStartHeight.value + deltaY)
  
  store.updateWindowSize(props.windowId, newWidth, newHeight)
}

function stopResize() {
  isResizing.value = false
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
}
</script>
