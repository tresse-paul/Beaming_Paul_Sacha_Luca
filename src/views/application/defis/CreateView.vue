<template>
  <HeaderApp />
  <div class="pt-5 pb-28">
    <form class="grid grid-flow-row gap-12 px-4" @submit.prevent="CreateDefi">
      <h3 class="text-2xl font-bold">Créer un nouveau défi</h3>
      <input type="text" class="h-10 rounded-lg border px-4" placeholder="Faire 30 minutes de sport..." v-model="libele" required />
      <div class="flex flex-wrap content-center justify-center gap-10">
        <button type="button" @click="createDefis()" title="Création">
          <RouterLink to="/dashboard">
            <bouton class="w-52 flex-initial" principal>Ajouter</bouton>
          </RouterLink>
        </button>
        <RouterLink to="/dashboard">
          <boutonWarning class="w-52 flex-initial">Retour</boutonWarning>
        </RouterLink>
      </div>
    </form>
  </div>
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/"><home class="fill-blue-350" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
  </nav>
</template>

<script >
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import bouton from "../../../components/bouton.vue";
import boutonWarning from "../../../components/boutonWarning.vue";
import HeaderApp from "../../../components/HeaderApp.vue";
import check from "../../../components/icons/check.vue";
import home from "../../../components/icons/home.vue";
import reward from "../../../components/icons/reward.vue";
import user from "../../../components/icons/user.vue";

export default {
  name: "App",
  components: { bouton, boutonWarning, HeaderApp, check, home, reward, user },
  name: "CreateView",
  data() {
    return {
      defis: {
        //Le participant à créer
        libele: null, //Le libele du défi
      },
    };
  },

  methods: {
    async createDefis() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection) document pays
      const dbDefis = collection(firestore, "defis");
      // On passe en paramètre format json
      // les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbDefis, {
        libele: this.libele,
      });
      console.log("document créé avec le id : ", docRed.id);
    },
  },
};
</script>