<template>
  <div>
    <form class="grid grid-flow-row gap-12 px-4" @submit.prevent="CreateDefi">
      <h3 class="text-2xl font-bold">Créer un nouveau défi</h3>
      <input class="h-10 rounded-lg border px-4" placeholder="Faire 30 minutes de sport..." v-model="defi.libele" />
      <div class="flex flex-wrap content-center justify-center gap-10">
        <bouton type="submit" class="w-52 flex-initial" principal>Ajouter</bouton>
        <RouterLink to="/">
          <boutonWarning class="w-52 flex-initial">Retour</boutonWarning>
        </RouterLink>
      </div>
    </form>
  </div>
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

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import bouton from "../../components/bouton.vue";
import boutonWarning from "../../components/boutonWarning.vue";

export default {
  name: "App",
  components: { bouton, boutonWarning },
  name: "CreateView",
  data() {
    return {
      defi: {
        //Le participant à créer
        libele: null, //Le libele du défi
      },
    };
  },

  methods: {
    async createDefi() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "defis/" + this.defi.libele);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.defi, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "defis"), this.defi);
      });
      // redirection sur la liste des participants
      this.$router.push("/defis");
    },
  },
};
</script>