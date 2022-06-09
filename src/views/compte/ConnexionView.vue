<template>
  <HeaderSite />
  <div class="flex gap-28 px-5 pt-5">
    <div class="flex w-full flex-col justify-center gap-10">
      <h2 class="text-4xl font-bold">Se connecter</h2>
      <form @submit.prevent="onCnx" class="flex flex-col gap-8">
        <div class="font-barlow flex w-full flex-col gap-2">
          <p class="text-xl">Email</p>
          <input
            v-model="user.email"
            class="h-8 flex-auto rounded-lg border border-gray-300 bg-gray-100 px-3 focus:ring-blue-350"
            type="email"
            required
            placeholder="abcd@mail.com"
          />
        </div>
        <div class="font-barlow flex w-full flex-col gap-2">
          <p class="text-xl">Mot de passe</p>
          <input
            v-model="user.password"
            class="h-8 flex-auto rounded-lg border border-gray-300 bg-gray-100 px-3 focus:ring-blue-350"
            :type="type"
            required
          />
        </div>
        <div role="alert" class="rounded-lg bg-gray-100 p-3 text-center text-sm text-gray-900">{{ message }}</div>
        <div class="flex flex-col justify-between gap-7 md:flex md:flex-row">
          <button type="submit"><bouton principal class="flex w-full flex-1">Connexion</bouton></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderSite from "../../components/HeaderSite.vue";
import bouton from "../../components/bouton.vue";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../../main.js";

export default {
  data() {
    return {
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
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté :" + this.user.email;
    } else {
      this.message = "User non connecté :" + this.user.email;
    }
  },

  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          emitter.emit("connectUser", { user: this.user });
          this.message = "User connecté : " + this.user.email;
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log("Erreur de connexion", error);
          this.message = "Erreur d'authentification";
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

    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },

  components: { HeaderSite, bouton },
};
</script>