import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './axios.js'
import { store } from './vuex'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

// createApp(App).use(store).use(router).mount('#app')
