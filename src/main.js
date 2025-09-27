import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Font Awesome imports (if you want to use Font Awesome icons)
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(faGithub, faLinkedin, faEnvelope)

const app = createApp(App)

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
