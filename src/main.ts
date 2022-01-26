import { createApp } from 'vue'
import App from './App.vue'
import Prisma from './index'
import './aassets/index.css'

const app = createApp(App)

app.use(Prisma)

app.mount('#app')
