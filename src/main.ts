// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'

// 引入Font Awesome,Font Awesome 是个​丰富的图标资源库1
const fontAwesomeScript = document.createElement('script')
fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js'
document.head.appendChild(fontAwesomeScript)

createApp(App).mount('#app')