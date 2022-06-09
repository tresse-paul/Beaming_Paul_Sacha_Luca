<template>
  <HeaderApp />
  <form class="static grid grid-flow-row gap-7 overflow-y-auto px-4 pt-5 pb-28" @submit.prevent="updtateUser">
    <h2 class="text-3xl font-bold">Mon photo</h2>
    <div class="flex flex-col gap-20">
      <div class="flex justify-center">
        <span>
          <img class="h-64 w-64 rounded-3xl object-cover" :src="user.avatar" />
        </span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <label class="text-sm" for="file">Choisir un avatar</label>
        <input type="file" @change="previewImage" />
      </div>
      <div class="flex flex-col items-center gap-4">
        <button type="submit">
          <RouterLink to="">
            <bouton principal>Modifier</bouton>
          </RouterLink>
        </button>
      </div>
    </div>
  </form>

  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/dashboard"><home class="fill-gray-750" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-blue-350" /></RouterLink>
  </nav>
</template>

<script >
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../../main.js";

import HeaderApp from "../../../components/HeaderApp.vue";
import check from "../../../components/icons/check.vue";
import home from "../../../components/icons/home.vue";
import reward from "../../../components/icons/reward.vue";
import user from "../../../components/icons/user.vue";
import bouton from "../../..//components/bouton.vue";

export default {
  components: { HeaderApp, check, home, reward, user, bouton },
  name: "PersonnalisationView",
  data() {
    return {
      imageData: null,
      user: {
        eamil: null,
        password: null,
        avatar: null,
      },
      userInfo: null,
      name: "Personnalisation",
      //   avatar: null,
      isAdmin: false,
      refUser: null,
      avatarModifiee: false,
      avatarActuelle: null,
    };
  },

  mounted() {
    this.getUserConnect();

    emitter.on("connectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
      this.getUserInfo(this.user);
    });

    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
      this.userInfo = null;
      this.name = "Personnalisation";
      this.user.avatar = null;
      this.admin = false;
    });

    console.log("id user", this.$route.params.id);
    this.getUserInfo(this.$route.params.id);
  },

  methods: {
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.user = user;
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
    },
    async getUser(id) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const docRef = doc(firestore, "users", id);
      // Recherche du user par son uid
      this.refUser = await getDoc(docRef);
      if (this.refUser.exists()) {
        this.user = this.refUser.data();
        this.avatarActuelle = this.user.avatar;
      } else {
        this.console.log("User inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "users/" + this.user.avatar);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUser = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUser, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.user.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.user.avatar = this.file.name;
      this.avatarModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.user.avatar = e.target.result;
        };
        reader.readAsDataURL(input.files[O]);
      }
    },

    async updateUser() {
      if (this.avatarModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "users/" + this.avatarActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "users/" + this.avatar);
        await uploadString(docRef, this.avatar, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.avatar);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "user", this.$route.params.id), this.user);
      this.$route.push("/user");
    },
  },
};
</script>