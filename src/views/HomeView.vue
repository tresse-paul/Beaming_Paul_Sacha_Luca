<template>
  <div class="static grid grid-flow-row gap-12 overflow-y-auto px-4 pt-5 pb-28">
    <!-- Block Défi en cours -->
    <div class="flex flex-col gap-5">
      <div class="flex items-baseline justify-between">
        <h2 class="text-3xl font-bold">Défis en cours</h2>
        <RouterLink to="/CreateDefi">
          <plus class="flex-none" />
        </RouterLink>
      </div>
      <div class="relative flex flex-col gap-2">
        <span class="flex h-2 w-full flex-auto rounded-full bg-gray-200"></span>
        <span class="absolute top-0 left-0 flex h-2 w-2/4 flex-initial rounded-full bg-lime-450"></span>
        <p class="flex justify-center text-xs">50 %</p>
      </div>
      <div class="flex flex-col gap-5">
        <div class="flex flex-grow-0 items-center gap-5">
          <minus class="flex-none" />
          <p class="flex-grow text-base font-normal">Faire 30 minutes de sport</p>
          <input type="checkbox" class="h-full w-5 flex-none rounded-full border-0 text-lime-450" />
        </div>
        <div class="flex flex-grow-0 items-center gap-5">
          <minus class="flex-none" />
          <p class="flex-grow text-base font-normal">Lire un chapitre de mon livre</p>
          <check class="h-auto w-6 flex-none fill-gray-300" />
        </div>
        <div class="flex flex-grow-0 items-center gap-5">
          <minus class="flex-none" />
          <p class="flex-grow text-base font-normal">Réviser mes cours</p>
          <check class="h-auto w-6 flex-none fill-gray-300" />
        </div>
        <div class="flex flex-grow-0 items-center gap-5">
          <minus class="flex-none" />
          <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
          <check class="h-auto w-6 flex-none fill-lime-450" />
        </div>
      </div>
    </div>
    <!-- Block Défi bonus -->
    <div class="flex flex-col gap-5 pt-5">
      <div class="flex flex-wrap items-baseline justify-between gap-3">
        <h2 class="weight text-3xl font-bold">Défis bonus</h2>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <p class="flex-grow text-base font-normal">Regarder le film Fight Club</p>
        <check class="h-auto w-6 flex-none fill-lime-450" />
      </div>
    </div>
    <!-- Block Quizz culturel -->
    <div class="flex flex-col gap-5 pt-5">
      <div class="flex items-baseline justify-between">
        <h2 class="weight text-3xl font-bold">Défis bonus</h2>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <p class="flex-grow text-base font-normal">Répondez correctement à notre quizz culture et obtenez des Beamings.</p>
      </div>
      <div class="flex justify-center">
        <RouterLink to="/quizz">
          <bouton principal>Commencer</bouton>
        </RouterLink>
      </div>
    </div>
  </div>
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/"><home class="fill-blue-350" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
  </nav>
</template>
<script >
import Header from "../components/Header.vue";
import plus from "../components/icons/plus.vue";
import check from "../components/icons/check.vue";
import minus from "../components/icons/minus.vue";
import bouton from "../components/bouton.vue";
import home from "../components/icons/home.vue";
import reward from "../components/icons/reward.vue";
import user from "../components/icons/user.vue";

export default {
  name: "App",
  components: { Header, plus, check, minus, bouton, home, reward, user },
};
</script>