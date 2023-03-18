import { createRouter, createWebHistory } from 'vue-router'
import StcDoAmorAfiliado from '../views/StcDoAmorAfiliado.vue'
import Apresentacao from '../views/Apresentacao.vue'
import Q1 from '../views/Q1.vue'
import Q2 from '../views/Q2.vue'
import Q3 from '../views/Q3.vue'
import Info from '../views/Info.vue'

const routes = [
  {
    path: '/',
    name: 'Apresentacao',
    component: Apresentacao
  },
  {
    path: '/q1',
    name: 'Q1',
    component: Q1
  },
  {
    path: '/q2/:response1?',
    name: 'Q2',
    component: Q2
  },
  {
    path: '/q3/:response1?/:response2?',
    name: 'Q3',
    component: Q3
  },
  {
    path: '/info/:response1?/:response2?/:response3?',
    name: 'Info',
    component: Info
  },
  {
    path: '/StcDoAmor',
    name: 'StcDoAmor',
    component: StcDoAmorAfiliado
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
