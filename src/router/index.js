import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefisView from '../views/DefisView.vue'
import ProgressionView from '../views/ProgressionView.vue'
import UserView from '../views/UserView.vue'
import LegaleView from '../views/LegaleView.vue'
import QuizzView from '../views/QuizzView.vue'

import CreateDefi from '../views/defis/CreateView.vue'
import ListeDefi from '../views/defis/ListeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/defis', name: 'Defis', component: DefisView },
    { path: '/progression', name: 'Progression', component: ProgressionView },
    { path: '/user', name: 'User', component: UserView },
    { path: '/legale', name: 'Legale', component: LegaleView },
    { path: '/quizz', name: 'Quizz', component: QuizzView },

    { path: '/defis', name: 'ListeDefi', component: ListeDefi },
    { path: '/createDefi', name: 'CreateDefi', component: CreateDefi },
    // ici les autre routes
  ]
})

export default router
