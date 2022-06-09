<template>
  <div class="flex-auto items-center justify-center gap-2.5 rounded-full border-2 border-red-500 px-10 py-1.5">
    <p class="text-center text-xl font-bold text-red-500">
      <!-- Exemple d'usage de slot pour le contenu.
    "<slot />" sera remplacé par le contenu mit entre les balise "<bouton>contenu</bouton>" de chaque instance -->
      <slot />
    </p>
  </div>
</template>

