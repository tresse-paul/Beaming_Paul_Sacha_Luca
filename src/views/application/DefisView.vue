<template>
  <HeaderApp />
  <div class="static grid grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
    <h2 class="text-3xl font-bold">Tous les défis</h2>
    <div class="flex flex-col gap-5">
      <div v-for="defis in listeDefis" :key="defis.id" class="flex flex-col gap-5">
        <div class="flex flex-grow-0 items-center gap-5">
          <p class="flex-grow text-base font-normal">{{ defis.libele }}</p>
          <check class="h-auto w-6 flex-none fill-lime-450" />
        </div>
      </div>
    </div>
  </div>
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/dashboard"><home class="fill-gray-750" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-blue-350" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
  </nav>
</template>

<script >
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

import HeaderApp from "../../components/HeaderApp.vue";
import check from "../../components/icons/check.vue";
import home from "../../components/icons/home.vue";
import reward from "../../components/icons/reward.vue";
import user from "../../components/icons/user.vue";

export default {
  name: "App",
  components: { HeaderApp, check, home, reward, user },

  data() {
    return {
      defis: {
        libele: null,
      },
      listeDefis: [],
    };
  },

  mounted() {
    this.getDefis();
  },

  methods: {
    async getDefis() {
      const firestore = getFirestore();
      const dbDefis = collection(firestore, "defis");
      const query = await onSnapshot(dbDefis, (snapshot) => {
        this.listeDefis = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
  },
};
</script>