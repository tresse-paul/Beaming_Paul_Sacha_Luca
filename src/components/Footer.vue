<template>
  <div class="flex flex-col gap-10 bg-gray-100 py-5">
    <div class="gap flex flex-col items-center gap-5">
      <img class="h-auto w-1/2" src="../assets/Logo_ucl.svg" alt="Logo de UCL" />
      <p class="w-3/4 text-center text-gray-400">Nos sources proviennent de diverses recherches menées par l’University College London</p>
    </div>
    <div class="relative mb-10 flex flex-col gap-5">
      <h5 class="font-bold uppercase">nous suivres</h5>
      <div class="flex gap-5">
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
      <img class="absolute left-24 -bottom-32 scale-50" src="../assets/Pouce_3D.webp" alt="Pouce en 3D" />
    </div>
    <RouterLink to="/legale">
      <p class="flex justify-center text-xs underline">Mentions légales</p>
    </RouterLink>
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