import Vue from 'vue'
import App from './App.vue'
import { Prisma } from './index'

Vue.config.productionTip = false
Vue.use(Prisma)

new Vue({
  render: h => h(App)
}).$mount('#app')
