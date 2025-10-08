import { defineStore } from 'pinia'
import { ref, computed, type Component } from 'vue'

export interface WindowState {
  id: number
  title: string
  component: Component
  visible: boolean
  minimized: boolean
  zIndex: number
  x: number
  y: number
  width: number
  height: number
}

export interface AppState {
  name: string
  icon: string
  component: Component
}

export interface Notification {
  id: number
  title: string
  message: string
  icon: string
}

export const usePortfolioStore = defineStore('portfolio', () => {
  // Desktop windows
  const windows = ref<WindowState[]>([])
  const nextWindowId = ref(1)
  const highestZIndex = ref(100)

  // Mobile app
  const activeApp = ref<AppState | null>(null)

  // Device detection
  const isMobile = ref(false)

  // Theme (default to dark mode for macOS dark theme)
  const isDarkMode = ref(true)

  // Wallpaper
  const currentWallpaper = ref('/wallpapers/default.jpg')

  // Terminal (Easter egg)
  const terminalOpen = ref(false)

  // Notifications
  const notifications = ref<Notification[]>([])
  const nextNotificationId = ref(1)

  // Computed
  const visibleWindows = computed(() => 
    windows.value.filter(w => w.visible && !w.minimized)
  )

  const minimizedWindows = computed(() => 
    windows.value.filter(w => w.minimized)
  )

  // Window actions
  function openWindow(title: string, component: Component) {
    const existingWindow = windows.value.find(w => w.title === title)
    
    if (existingWindow) {
      // Bring to front if already open
      existingWindow.visible = true
      existingWindow.minimized = false
      existingWindow.zIndex = ++highestZIndex.value
      return
    }

    const newWindow: WindowState = {
      id: nextWindowId.value++,
      title,
      component,
      visible: true,
      minimized: false,
      zIndex: ++highestZIndex.value,
      x: 100 + (windows.value.length * 30),
      y: 80 + (windows.value.length * 30),
      width: 800,
      height: 600,
    }

    windows.value.push(newWindow)
  }

  function closeWindow(id: number) {
    windows.value = windows.value.filter(w => w.id !== id)
  }

  function minimizeWindow(id: number) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      window.minimized = true
    }
  }

  function restoreWindow(id: number) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      window.minimized = false
      window.zIndex = ++highestZIndex.value
    }
  }

  function bringToFront(id: number) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      window.zIndex = ++highestZIndex.value
    }
  }

  function updateWindowPosition(id: number, x: number, y: number) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      window.x = x
      window.y = y
    }
  }

  function updateWindowSize(id: number, width: number, height: number) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      window.width = width
      window.height = height
    }
  }

  // Mobile app actions
  function openApp(app: AppState) {
    activeApp.value = app
  }

  function closeApp() {
    activeApp.value = null
  }

  // Device detection
  function setIsMobile(value: boolean) {
    isMobile.value = value
  }

  // Theme toggle
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }

  // Terminal
  function toggleTerminal() {
    terminalOpen.value = !terminalOpen.value
  }

  // Wallpaper
  function setWallpaper(url: string) {
    currentWallpaper.value = url
  }

  // Notifications
  function addNotification(title: string, message: string, icon = '📢') {
    const notification: Notification = {
      id: nextNotificationId.value++,
      title,
      message,
      icon,
    }
    
    notifications.value.push(notification)
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeNotification(notification.id)
    }, 5000)
  }

  function removeNotification(id: number) {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  return {
    // State
    windows,
    activeApp,
    isMobile,
    isDarkMode,
    currentWallpaper,
    terminalOpen,
    notifications,
    
    // Computed
    visibleWindows,
    minimizedWindows,
    
    // Actions
    openWindow,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    bringToFront,
    updateWindowPosition,
    updateWindowSize,
    openApp,
    closeApp,
    setIsMobile,
    toggleDarkMode,
    toggleTerminal,
    setWallpaper,
    addNotification,
    removeNotification,
  }
})
