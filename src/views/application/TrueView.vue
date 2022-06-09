<template>
  <HeaderApp />
  <div class="static grid h-screen grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
    <div class="flex flex-col items-center justify-center gap-10">
      <h2 class="text-4xl font-bold uppercase">Félicitation</h2>
      <p>Vous remportez :</p>
      <div class="flex flex-col gap-14">
        <div class="flex flex-col items-center gap-6">
          <p class="text-4xl font-bold">100</p>
          <logo class="scale-150" />
        </div>
        <RouterLink to="/dashboard">
          <bouton>Terminer</bouton>
        </RouterLink>
      </div>
    </div>
  </div>
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/dashboard"><home class="fill-blue-350" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
  </nav>
</template>

<script >
import HeaderApp from "../../components/HeaderApp.vue";
import reward from "../../components/icons/reward.vue";
import logo from "../../components/icons/logo.vue";
import check from "../../components/icons/check.vue";
import home from "../../components/icons/home.vue";
import user from "../../components/icons/user.vue";
import bouton from "../../components/bouton.vue";

export default {
  name: "App",
  components: { HeaderApp, logo, reward, home, user, check, bouton },
};
</script>