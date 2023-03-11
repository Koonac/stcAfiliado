import { createRouter, createWebHistory } from 'vue-router'
import StcDoAmorAfiliado from '../views/StcDoAmorAfiliado.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/StcDoAmorAfiliado',
    name: 'StcDoAmorAfiliado',
    component: StcDoAmorAfiliado
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
