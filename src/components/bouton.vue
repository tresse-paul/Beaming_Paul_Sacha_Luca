<template>
  <div
    class="flex items-center justify-center rounded-full px-10 py-2.5"
    :class="{
      'bg-gradient-to-b from-blue-gradient-dark via-blue-gradient-medium to-blue-gradient-light text-white': principal,
      'border-2 border-blue-350 bg-none text-blue-350': !principal,
    }"
  >
    <p class="text-center text-xl font-bold">
      <!-- Exemple d'usage de slot pour le contenu.
    "<slot />" sera remplacé par le contenu mit entre les balise "<bouton>contenu</bouton>" de chaque instance -->
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    principal: {
      type: Boolean,
      default: false,
      bgcolor: String,
    },
  },
};
</script>