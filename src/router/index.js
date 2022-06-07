import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { getFirestore, collection, onSnapshot, query, where } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';

import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/application/DashboardView.vue'
import DefisView from '../views/application/DefisView.vue'
import ProgressionView from '../views/application/ProgressionView.vue'
import UserView from '../views/application/UserView.vue'
import LegaleView from '../views/application/LegaleView.vue'
import QuizzView from '../views/application/QuizzView.vue'

import ConnexionView from '../views/compte/ConnexionView.vue'

import CreateDefi from '../views/application/defis/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Landing page
    { path: '/', name: 'HomeView', component: HomeView },
    //Page de connexion
    { path: '/connexion', name: 'Connexion', component: ConnexionView },

    //Application mobile accès admin
    //Accueil application
    { path: '/dashboard', name: 'DashboardView', component: DashboardView, beforeEnter: guard },
    //Page historique des défis
    { path: '/defis', name: 'Defis', component: DefisView, beforeEnter: guard },
    //Page de progression sur l'application
    { path: '/progression', name: 'Progression', component: ProgressionView, beforeEnter: guard },
    //Page de profil utilisateur
    { path: '/user', name: 'User', component: UserView, beforeEnter: guard },
    //Page des mentions légales
    { path: '/legale', name: 'Legale', component: LegaleView },
    //Page du quizz culturel
    { path: '/quizz', name: 'Quizz', component: QuizzView, beforeEnter: guard },

    //Les vues de création des défis
    //Page de création d'un défi
    { path: '/createDefi', name: 'CreateDefi', component: CreateDefi, beforeEnter: guard },


    // ici les autre routes
  ]
})

// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guard(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connecté
      console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // userInfo étant un tableau, on récupère
        // ses informations dans la 1° cellule du tableau : 0
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "HomeView" });
          return;
        }
      })
    } else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log('router NOK => user ', user);
      next({ name: "HomeView" });
    }
  });
}

export default router
