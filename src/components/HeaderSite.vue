<template>
  <nav class="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 pb-5 pt-5">
    <RouterLink to="/"><logo /></RouterLink>
    <div @click="toggleNav" class="flex">
      <button type="button" class="flex flex-col gap-1.5">
        <span class="block h-1 w-7 rounded-full bg-blue-350"></span>
        <span class="block h-1 w-7 rounded-full bg-blue-350"></span>
        <span class="block h-1 w-7 rounded-full bg-blue-350"></span>
      </button>
    </div>
  </nav>
  <ul :class="showMenu ? 'flex' : 'hidden'" class="flex flex-col items-center gap-5 bg-gray-50 px-4 py-4">
    <a class="text-xl font-bold">Fonctionnalités</a>
    <a class="text-xl font-bold">À propos</a>
    <div class="flex w-auto flex-col gap-5">
      <li>
        <RouterLink to="/connexion"><bouton class="flex">Connexion</bouton></RouterLink>
      </li>
      <li><bouton principal>Inscription</bouton></li>
    </div>
  </ul>
</template>

<script>
import CardAbo from "../components/CardAbo.vue";
import logo from "../components/icons/logo.vue";
import bouton from "../components/bouton.vue";
import { ref } from "vue";

export default {
  components: { CardAbo, logo, bouton },
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>