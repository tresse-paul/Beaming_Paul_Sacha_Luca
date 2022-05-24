<template>
  <div class="w-64 flex-auto items-center justify-center gap-2.5 rounded-full bg-red-500 px-9 py-2.5">
    <p class="text-center text-xl font-bold text-white">
      <!-- Exemple d'usage de slot pour le contenu.
    "<slot />" sera remplacé par le contenu mit entre les balise "<bouton>contenu</bouton>" de chaque instance -->
      <slot />
    </p>
  </div>
</template>

