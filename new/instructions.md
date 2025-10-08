````markdown
# 🍎 Apple Ecosystem Portfolio (Vue 3 + Vite + Tailwind)

This project creates an **interactive portfolio** that mimics **macOS on desktop** and **iOS on mobile**.  
It’s a **Single Page Application (SPA)** built with **Vue 3 + Vite**, deployed on **Cloudflare Pages** with optional Cloudflare Functions for backend features (e.g., contact form, AI demos, analytics).

---

## 🚀 Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + custom macOS/iOS components
- **State Management:** Pinia (optional)
- **Deployment:** Cloudflare Pages
- **Optional Tools:** VueUse, Motion/Transitions

---

## 🧱 Project Setup

### 1️⃣ Create Project (done)

```bash
npm create vite@latest portfolio -- --template vue
cd portfolio
npm install
````

### 2️⃣ Add Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### `tailwind.config.js`

```js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### `src/assets/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### `main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

createApp(App).mount('#app')
```

---

## 📁 Recommended File Structure

```
new/
│
├── public/                     # Static assets
│   └── icons/                  # App + folder icons
│
├── src/
│   ├── assets/
│   │   ├── tailwind.css
│   │   └── wallpapers/
│   │       └── default.jpg
│   │
│   ├── components/
│   │   ├── desktop/
│   │   │   ├── DesktopView.vue
│   │   │   ├── Dock.vue
│   │   │   ├── Window.vue
│   │   │   ├── TopBar.vue
│   │   │   └── Icon.vue
│   │   │
│   │   ├── mobile/
│   │   │   ├── MobileView.vue
│   │   │   ├── AppIcon.vue
│   │   │   ├── AppWindow.vue
│   │   │   ├── StatusBar.vue
│   │   │   └── DockMobile.vue
│   │   │
│   │   ├── shared/
│   │   │   └── About.vue
│   │   │   └── Projects.vue
│   │   │   └── Contact.vue
│   │   │   └── AiTools.vue
│   │
│   ├── store/
│   │   └── index.js            # (Optional) Pinia store
│   │
│   ├── utils/
│   │   └── device.js           # Detect mobile vs desktop
│   │
│   ├── App.vue
│   └── main.js
│
├── .env                        # API keys, etc.
├── package.json
└── vite.config.js
```

---

## 🧩 Core App Logic

### `App.vue`

```vue
<template>
  <div class="w-screen h-screen overflow-hidden">
    <DesktopView v-if="!isMobile" />
    <MobileView v-else />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DesktopView from './components/desktop/DesktopView.vue'
import MobileView from './components/mobile/MobileView.vue'

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})
</script>
```

---

## 🖥️ Desktop View (macOS-style)

`components/desktop/DesktopView.vue`

```vue
<template>
  <div class="relative w-full h-full bg-cover bg-center" :style="wallpaperStyle">
    <TopBar />
    <div class="absolute inset-0 flex flex-wrap gap-6 p-8">
      <Icon label="About Me" icon="/icons/folder.png" @click="openWindow('about')" />
      <Icon label="Projects" icon="/icons/folder.png" @click="openWindow('projects')" />
      <Icon label="AI Tools" icon="/icons/folder.png" @click="openWindow('ai')" />
      <Icon label="Contact" icon="/icons/folder.png" @click="openWindow('contact')" />
    </div>
    <Dock />
    <Window v-for="win in windows" :key="win.id" v-if="win.visible" :title="win.title" @close="closeWindow(win.id)">
      <component :is="win.component" />
    </Window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopBar from './TopBar.vue'
import Dock from './Dock.vue'
import Icon from './Icon.vue'
import Window from './Window.vue'
import About from '../shared/About.vue'
import Projects from '../shared/Projects.vue'
import AiTools from '../shared/AiTools.vue'
import Contact from '../shared/Contact.vue'

const wallpaperStyle = "background-image: url('/wallpapers/default.jpg');"

const windows = ref([])

function openWindow(name) {
  const map = {
    about: { title: 'About Me', component: About },
    projects: { title: 'Projects', component: Projects },
    ai: { title: 'AI Tools', component: AiTools },
    contact: { title: 'Contact', component: Contact },
  }
  windows.value.push({ id: Date.now(), visible: true, ...map[name] })
}

function closeWindow(id) {
  windows.value = windows.value.filter(w => w.id !== id)
}
</script>
```

---

## 📱 Mobile View (iPhone-style)

`components/mobile/MobileView.vue`

```vue
<template>
  <div class="relative w-full h-full bg-cover bg-center" :style="wallpaperStyle">
    <StatusBar />
    <div class="grid grid-cols-4 gap-4 p-6 mt-8">
      <AppIcon name="About" icon="/icons/about.png" @click="openApp('about')" />
      <AppIcon name="Projects" icon="/icons/projects.png" @click="openApp('projects')" />
      <AppIcon name="AI Tools" icon="/icons/ai.png" @click="openApp('ai')" />
      <AppIcon name="Contact" icon="/icons/contact.png" @click="openApp('contact')" />
    </div>
    <DockMobile />
    <AppWindow v-if="activeApp" :name="activeApp.title" @close="activeApp = null">
      <component :is="activeApp.component" />
    </AppWindow>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatusBar from './StatusBar.vue'
import DockMobile from './DockMobile.vue'
import AppIcon from './AppIcon.vue'
import AppWindow from './AppWindow.vue'
import About from '../shared/About.vue'
import Projects from '../shared/Projects.vue'
import AiTools from '../shared/AiTools.vue'
import Contact from '../shared/Contact.vue'

const wallpaperStyle = "background-image: url('/wallpapers/default.jpg');"
const activeApp = ref(null)

function openApp(name) {
  const map = {
    about: { title: 'About Me', component: About },
    projects: { title: 'Projects', component: Projects },
    ai: { title: 'AI Tools', component: AiTools },
    contact: { title: 'Contact', component: Contact },
  }
  activeApp.value = map[name]
}
</script>
```

---

## ☁️ Cloudflare Functions Example

`functions/contact-form.js`

```js
export async function onRequestPost(context) {
  const { name, email, message } = await context.request.json()
  // Do something here, like send an email or store data
  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
}
```

---

## 🧪 Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment (Cloudflare Pages)

1. Push to GitHub.
2. Connect repo to **Cloudflare Pages**.
3. Set build command to `npm run build`.
4. Set output directory to `dist/`.
5. Add Cloudflare Functions in `/functions`.

---

## ✅ Next Steps

* Add draggable windows (desktop)
* Add smooth app transitions (mobile)
* Add animations with `@vueuse/motion`
* Polish UI to feel authentically Apple-like
* Add Easter eggs (e.g., AI terminal, hidden shortcuts)

---

🎉 **You now have the foundation for your Apple-style portfolio SPA!**

```
```
