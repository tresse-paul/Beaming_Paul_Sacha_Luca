<template>
  <HeaderApp />
  <main class="static grid grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
    <h2 class="text-3xl font-bold">Mon profil</h2>
    <div class="flex flex-col items-center justify-between gap-10">
      <div class="flex flex-col items-center gap-4">
        <p class="text-2xl font-bold">Paul Tresse</p>
      </div>
      <div v-for="part in listePart" :id="part.id" :key="part.id">
        <img class="h-64 w-64 object-cover" :src="part.avatar" />
      </div>
      <div class="flex flex-col items-center gap-4">
        <RouterLink to="/personnalisation">
          <bouton principal>Mon avatar</bouton>
        </RouterLink>
        <RouterLink to="/">
          <boutonWarning @click="onDcnx()">Déconexion</boutonWarning>
        </RouterLink>
      </div>
      <div class="flex items-end justify-center">
        <RouterLink to="legale">
          <p class="text-xs underline">Mentions légales</p>
        </RouterLink>
      </div>
    </div>
  </main>
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/dashboard"><home class="fill-gray-750" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-blue-350" /></RouterLink>
  </nav>
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

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../main.js";

import HeaderApp from "../../components/HeaderApp.vue";
import logo from "../../components/icons/logo.vue";
import reward from "../../components/icons/reward.vue";
import check from "../../components/icons/check.vue";
import home from "../../components/icons/home.vue";
import user from "../../components/icons/user.vue";
import bouton from "../../components/bouton.vue";
import boutonWarning from "../../components/boutonWarning.vue";

export default {
  name: "App",

  components: { HeaderApp, logo, reward, home, user, check, bouton, boutonWarning },

  data() {
    return {
      listePart: [],
      user: {
        email: "",
        paswword: "",
      },
      message: null,
      view: false,
      type: "password",
      imageData: null,
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

    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "User non connecté";
          this.user = {
            email: null,
            paswword: null,
          };
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur déconnexion", error);
        });
    },
  },
};
</script>