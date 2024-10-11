import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
//bootstrap-icon
import 'bootstrap-icons/font/bootstrap-icons.css'

//mi scss
import '@/assets/styles/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
