<template>
  <div class="flex h-full flex-col">
    <div class="static grid grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
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
    <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
      <RouterLink to="/"><home class="fill-gray-750" /></RouterLink>
      <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
      <RouterLink to="/progression"><reward class="fill-blue-350" /></RouterLink>
      <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
    </nav>
  </div>
</template>

<script >
import logo from "../components/icons/logo.vue";
import reward from "../components/icons/reward.vue";
import check from "../components/icons/check.vue";
import home from "../components/icons/home.vue";
import user from "../components/icons/user.vue";

export default {
  name: "App",
  components: { logo, reward, home, user, check },
};
</script>