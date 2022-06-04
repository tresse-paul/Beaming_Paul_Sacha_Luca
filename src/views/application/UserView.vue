<template>
  <HeaderApp />
  <main class="static grid grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
    <h2 class="text-3xl font-bold">Mon profil</h2>
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-4">
        <p class="text-2xl font-bold">Paul Tresse</p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <bouton>Paramètres</bouton>
        <boutonWarning>Déconexion</boutonWarning>
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
  props: {
    bgcolor: String,
  },
  components: { HeaderApp, logo, reward, home, user, check, bouton, boutonWarning },
};
</script>