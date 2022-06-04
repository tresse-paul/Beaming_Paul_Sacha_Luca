<template>
  <div class="static grid grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
    <h2 class="text-3xl font-bold">Défis terminés, félicitation !</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
      <div class="flex flex-grow-0 items-center gap-5">
        <check class="h-auto w-6 flex-none fill-lime-450" />
        <p class="flex-grow text-base">Préparer mon repas de ce soir</p>
      </div>
    </div>
  </div>
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/"><home class="fill-gray-750" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-blue-350" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
  </nav>
</template>

<script >
import check from "../components/icons/check.vue";
import home from "../components/icons/home.vue";
import reward from "../components/icons/reward.vue";
import user from "../components/icons/user.vue";

export default {
  name: "App",
  components: { check, home, reward, user },
};
</script>