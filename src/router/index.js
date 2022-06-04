import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/application/DashboardView.vue'
import DefisView from '../views/application/DefisView.vue'
import ProgressionView from '../views/application/ProgressionView.vue'
import UserView from '../views/application/UserView.vue'
import LegaleView from '../views/application/LegaleView.vue'
import QuizzView from '../views/application/QuizzView.vue'

import AccesView from '../views/compte/AccesView.vue'
import ConnexionView from '../views/compte/ConnexionView.vue'

import CreateDefi from '../views/application/defis/CreateView.vue'
import ListeDefi from '../views/application/defis/ListeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/dashboard', name: 'DashboardView', component: DashboardView },
    { path: '/defis', name: 'Defis', component: DefisView },
    { path: '/progression', name: 'Progression', component: ProgressionView },
    { path: '/user', name: 'User', component: UserView },
    { path: '/legale', name: 'Legale', component: LegaleView },
    { path: '/quizz', name: 'Quizz', component: QuizzView },

    { path: '/defis', name: 'ListeDefi', component: ListeDefi },
    { path: '/createDefi', name: 'CreateDefi', component: CreateDefi },

    { path: '/acces', name: 'Acces', component: AccesView },
    { path: '/connexion', name: 'Connexion', component: ConnexionView },
    // ici les autre routes
  ]
})

export default router
