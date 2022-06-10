<template>
  <div class="relative flex flex-col gap-10 bg-gray-100 py-5">
    <div class="gap flex flex-col items-center gap-5">
      <img class="h-auto w-1/2" src="../assets/Logo_ucl.svg" alt="Logo de UCL" />
      <p class="w-3/4 text-center text-gray-400">Nos sources proviennent de diverses recherches menées par l’University College London</p>
    </div>
    <div class="mb-10 flex flex-col gap-5">
      <div class="flex justify-between">
        <div class="flex flex-col gap-3 px-4">
          <h5 class="font-bold uppercase">nous suivres</h5>
          <div class="flex gap-6">
            <a href="https://www.facebook.com/">
              <facebook class="scale-125" />
            </a>
            <a href="https://www.instagram.com/">
              <instagram class="scale-125" />
            </a>
            <a href="https://twitter.com/">
              <twitter class="scale-125" />
            </a>
          </div>
        </div>
        <img class="h-32 w-32" src="../assets/Pouce_3D.webp" alt="Pouce en 3D" />
      </div>
    </div>
    <div class="flex justify-center gap-5">
      <RouterLink to="/legale">
        <p class="flex justify-center text-xs underline">Mentions légales</p>
      </RouterLink>
      <RouterLink to="/cgu">
        <p class="flex justify-center text-xs underline">Conditions d'utilisation</p>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import facebook from "../components/icons/facebook.vue";
import instagram from "../components/icons/instagram.vue";
import twitter from "../components/icons/twitter.vue";

export default {
  components: { facebook, instagram, twitter },
};
</script>