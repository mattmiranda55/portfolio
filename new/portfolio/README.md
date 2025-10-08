# 🍎 Apple Ecosystem Portfolio

A stunning, interactive portfolio that mimics **macOS on desktop** and **iOS on mobile**. Built with modern web technologies to showcase your work in style.

![Vue 3](https://img.shields.io/badge/Vue%203-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## ✨ Features

### Desktop Experience (macOS-inspired)
- 🪟 **Draggable & Resizable Windows** - Fully interactive window management
- 🎯 **Animated Dock** - Beautiful dock with hover effects
- 🎨 **Glass Morphism UI** - Modern translucent design
- ⌨️ **Keyboard Shortcuts** - Power user features
- 🖱️ **Context Menus** - Right-click interactions
- 💻 **Terminal Easter Egg** - Hidden terminal with commands (Cmd/Ctrl + K)

### Mobile Experience (iOS-inspired)
- 📱 **Native App Feel** - Smooth transitions and gestures
- 🏠 **Home Screen** - App icons with launch animations
- 📊 **Status Bar** - Time, battery, signal indicators
- 🎭 **Full-Screen Apps** - Immersive content viewing

### Content Sections
- 👤 **About Me** - Bio, skills, and experience
- 💼 **Projects** - Portfolio showcase with live demos
- 🤖 **AI Tools** - Interactive AI-powered demos
- ✉️ **Contact** - Get in touch form with validation

### Technical Highlights
- 🚀 **Lightning Fast** - Powered by Vite
- 🎭 **Smooth Animations** - Using @vueuse/motion
- 📦 **State Management** - Pinia store
- 🎨 **Responsive Design** - Perfect on all devices
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 🌙 **Dark Mode** - Theme switching (Cmd/Ctrl + T)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ or 22+
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Visit [http://localhost:5173](http://localhost:5173) to see your portfolio!

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The optimized build will be in the `dist/` directory.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | Open/Close Terminal |
| `Cmd/Ctrl + T` | Toggle Dark Mode |
| `Escape` | Close Terminal or Active App |

## 🎨 Customization

### Update Personal Information

Edit the content in:
- `src/components/shared/About.vue` - Your bio and experience
- `src/components/shared/Projects.vue` - Your portfolio projects
- `src/components/shared/Contact.vue` - Contact information

### Change Colors

Customize the theme in `tailwind.config.js`:

\`\`\`js
colors: {
  'apple-blue': '#007aff',
  'apple-green': '#34c759',
  // Add your custom colors
}
\`\`\`

### Add Wallpapers

Place your wallpaper images in `public/wallpapers/` and update the path in:
- `src/components/desktop/DesktopView.vue`
- `src/components/mobile/MobileView.vue`

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy! 🎉

### Other Platforms

This project works with any static hosting platform:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📁 Project Structure

\`\`\`
portfolio/
├── public/
│   ├── wallpapers/        # Background images
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── tailwind.css   # Global styles
│   ├── components/
│   │   ├── desktop/       # macOS-style components
│   │   ├── mobile/        # iOS-style components
│   │   └── shared/        # Content components
│   ├── store/
│   │   └── index.ts       # Pinia store
│   ├── utils/
│   │   └── device.ts      # Device detection
│   ├── App.vue            # Main app component
│   └── main.ts            # App entry point
├── functions/             # Cloudflare Functions (optional)
├── package.json
├── tailwind.config.js
└── vite.config.ts
\`\`\`

## 🔧 Technologies

- **Framework:** Vue 3 (Composition API + TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Pinia
- **Animations:** @vueuse/motion
- **Utils:** @vueuse/core

## 🎯 Terminal Commands

When you open the terminal (Cmd/Ctrl + K), try these commands:

- `help` - Show all commands
- `about` - Quick bio
- `skills` - List technologies
- `projects` - Show projects
- `contact` - Contact info
- `theme` - Toggle dark mode
- `clear` - Clear terminal
- `whoami` - Who are you?
- `date` - Current date/time

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using Vue 3 + TypeScript + Tailwind CSS**