<template>
  <HeaderApp />
  <div class="flex h-full flex-col">
    <div class="static grid grid-flow-row gap-10 overflow-y-auto px-4 pt-5 pb-28">
      <h2 class="text-3xl font-bold">Ma progression</h2>
      <div class="flex items-center gap-4">
        <reward class="h-10 w-auto fill-lime-450" />
        <p class="text-xl font-bold">Niveau 1</p>
      </div>
      <div class="flex justify-center">
        <p class="text-2xl font-bold uppercase">Félicitation</p>
      </div>
      <div class="flex justify-center" v-for="part in listePart" :id="part.id" :key="part.id">
        <img class="h-64 w-64 object-cover" :src="part.avatar" />
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <p>Votre score est de :</p>
        <div class="flex items-center justify-center gap-3">
          <p class="text-3xl font-bold">1000</p>
          <logo />
        </div>
      </div>
    </div>
    <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
      <RouterLink to="/dashboard"><home class="fill-gray-750" /></RouterLink>
      <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
      <RouterLink to="/progression"><reward class="fill-blue-350" /></RouterLink>
      <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
    </nav>
  </div>
</template>

<script >
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import HeaderApp from "../../components/HeaderApp.vue";
import logo from "../../components/icons/logo.vue";
import reward from "../../components/icons/reward.vue";
import check from "../../components/icons/check.vue";
import home from "../../components/icons/home.vue";
import user from "../../components/icons/user.vue";

export default {
  name: "App",
  components: { HeaderApp, logo, reward, home, user, check },
  data() {
    return {
      listePart: [],
    };
  },

  mounted() {
    this.getUser();
  },

  methods: {
    async getUser() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUser = collection(firestore, "users");
      const q = query(dbUser, orderBy("avatar", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listePart = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listePart.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "users/" + personne.avatar);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.avatar = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>