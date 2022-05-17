<template>
  <div>
    <Header />
  </div>
  <div class="grid grid-flow-row gap-12">
    <!-- Block Défi en cours -->
    <div class="flex flex-col gap-5 px-4 pt-5">
      <div class="flex items-baseline justify-between">
        <h2 class="weight text-3xl font-bold">Défis en cours</h2>
        <plus class="flex-none" />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-grow-0 items-center gap-5">
          <minus class="flex-none" />
          <p class="flex-grow text-base font-normal">Faire 30 minutes de sport</p>
          <check class="fill-lime-450 h-auto w-4 flex-none" />
        </div>
        <div class="flex flex-grow-0 items-center gap-5">
          <minus class="flex-none" />
          <p class="flex-grow text-base font-normal">Lire un chapitre de mon livre</p>
          <check class="h-auto w-4 flex-none fill-gray-300" />
        </div>
        <div class="flex flex-grow-0 items-center gap-5">
          <minus class="flex-none" />
          <p class="flex-grow text-base font-normal">Réviser mes cours</p>
          <check class="h-auto w-4 flex-none fill-gray-300" />
        </div>
        <div class="flex flex-grow-0 items-center gap-5">
          <minus class="flex-none" />
          <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
          <check class="fill-lime-450 h-auto w-4 flex-none" />
        </div>
      </div>
    </div>
    <!-- Block Défi bonus -->
    <div class="flex flex-col gap-5 px-4 pt-5">
      <div class="flex flex-wrap items-baseline justify-between gap-3">
        <h2 class="weight text-3xl font-bold">Défis bonus</h2>
        <p class="text-xl">2j 5h 34min 4sec</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <p class="flex-grow text-base font-normal">Regarder le film Fight Club</p>
        <check class="fill-lime-450 h-auto w-4 flex-none" />
      </div>
    </div>
    <!-- Block Quizz culturel -->
    <div class="flex flex-col gap-5 px-4 pt-5">
      <div class="flex items-baseline justify-between">
        <h2 class="weight text-3xl font-bold">Défis bonus</h2>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <p class="flex-grow text-base font-normal">Répondez correctement à notre quizz culture et obtenez des Beamings.</p>
      </div>
      <div class="flex justify-center">
        <a href="#"><bouton>Commencer</bouton></a>
      </div>
    </div>
  </div>
  <Nav class="static bottom-0 mt-10" />
</template>
<script >
import Header from "./components/Header.vue";
import plus from "./components/icons/plus.vue";
import check from "./components/icons/check.vue";
import minus from "./components/icons/minus.vue";
import bouton from "./components/bouton.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: { Header, plus, check, minus, bouton, Nav },
};
</script>