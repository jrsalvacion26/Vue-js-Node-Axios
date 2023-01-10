import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from '../src/routes.ts'

createApp(App).use(router).mount('#app')
