<template>
  <HeaderApp />
  <main class="static grid grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
    <h2 class="text-3xl font-bold">Quizz culture</h2>
    <p>Une de ces affiramations est vraie, laquelle ? À la fin du film Fight Club...</p>
    <div class="mt-5 flex flex-col justify-center gap-10">
      <div class="flex flex-grow-0 items-center gap-5">
        <p class="flex-grow text-base font-normal">Tyler quitte les États-Unis pour aller vivre à Londres</p>
        <input type="checkbox" class="flex-none rounded-full border-0 text-lime-450" />
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <p class="flex-grow text-base font-normal">Tyler est fou, il n’a pas d’ami</p>
        <input type="checkbox" class="flex-none rounded-full border-0 text-lime-450" />
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <p class="flex-grow text-base font-normal">Tyler crée d’autres Fight Club au Mexique et au Canada</p>
        <input type="checkbox" class="flex-none rounded-full border-0 text-lime-450" />
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <p class="flex-grow text-base font-normal">
          Fight Club n’a jamais existé, Tyler est malade et s’imagine une vie factice alors qu’il est à l’agonie
        </p>
        <input type="checkbox" class="flex-none rounded-full border-0 text-lime-450" />
      </div>
    </div>
    <div class="flex justify-center">
      <RouterLink to="/">
        <bouton>Retour</bouton>
      </RouterLink>
    </div>
  </main>
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/dashboard"><home class="fill-blue-350" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
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

export default {
  name: "App",
  components: { HeaderApp, logo, reward, home, user, check, bouton },
};
</script>