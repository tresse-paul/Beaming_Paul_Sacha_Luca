<template>
  <div class="static grid h-screen grid-flow-row overflow-y-auto px-4 pt-5 pb-28">
    <h1 class="font-outfit text-3xl font-bold">Bienvenue sur Beaming</h1>
    <div class="flex h-10 flex-col items-center gap-5">
      <bouton>Connexion</bouton>
      <bouton principal>Inscription</bouton>
    </div>
  </div>
</template>

<script>
import bouton from "../../components/bouton.vue";

export default {
  components: { bouton },
};
</script>
