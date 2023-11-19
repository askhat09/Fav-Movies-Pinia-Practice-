import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../src/assets/main.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).mount('#app')
