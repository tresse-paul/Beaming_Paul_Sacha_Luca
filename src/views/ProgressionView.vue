<template>
  <div class="grid grid-flow-row gap-5 px-4">
    <h2 class="text-3xl font-bold">Ma progression</h2>
    <div class="flex items-center gap-4">
      <reward class="h-10 w-auto fill-lime-450" />
      <p class="text-xl font-bold">Niveau 1</p>
    </div>
    <div class="flex justify-center">
      <p class="text-2xl font-bold uppercase">Félicitation</p>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <p>Votre score est de :</p>
      <div class="flex items-center justify-center gap-3">
        <p class="text-3xl font-bold">1000</p>
        <logo />
      </div>
    </div>
  </div>
</template>

<script >
import logo from "../components/icons/logo.vue";
import reward from "../components/icons/reward.vue";

export default {
  name: "App",
  components: { logo, reward },
};
</script>