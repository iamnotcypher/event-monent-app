import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './axios'
import store from './vuex'

createApp(App).use(router).use(store).mount('#app')
