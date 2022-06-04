<template>
  <HeaderSite />
  <div class="flex flex-col gap-28 px-4">
    <div class="bg- mt-24 flex flex-col gap-7">
      <img class="absolute -top-24 -z-10" src="/src/assets/world_emoticon.png" alt="Vague d'émoji heureux et souriant" />
      <h1 class="text-center font-outfit text-3xl font-bold">Devenez la meilleure version de vous-même</h1>
      <p class="font-outfit">
        Réalisez vos objectifs et surpassez-vous quotidiennement avec <strong>Beaming</strong>. L’application web qui vous offre les clés de
        l’épanouissement, à votre rythme.
      </p>
      <div class="flex">
        <bouton principal class="uppercase">Commencer gratuitement</bouton>
      </div>
    </div>
    <div class="relative -z-20 flex flex-col items-center gap-7">
      <h2 class="text-center text-2xl font-bold">
        <span class="inline h-1/2 w-auto bg-yellow-350">Épanouissez-vous</span> pleinement, car votre bonheur nous importe
      </h2>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">Des objectifs quotidiens pour garder le cap</h3>
        <div class="flex justify-center">
          <img class="h-28 w-28 object-contain" src="/src/assets/Trophe_3D.webp" alt="Trophé en 3D" />
        </div>
        <p>
          Avec Beaming, découvrez chaque jours de nouveaux objectifs à accomplir. Que ce soit les vôtres ou ceux que l’on vous propose,
          faites-le pour vous pas pour les autres
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">Un accompagnement durable</h3>
        <div class="flex justify-center">
          <img class="h-28 w-28 object-contain" src="/src/assets/Fusee_3D.webp" alt="Trophé en 3D" />
        </div>
        <p>Vous n’êtes pas seul(e). Beaming vous accompagne tous les jours, n’importe où et n’importe quand. Ne baissez pas les bras !</p>
      </div>
      <img class="absolute bottom-32 -z-10 scale-125" src="/src/assets/Serpentin_3D.webp" alt="Serpentin 3D traversant l'écran" />
    </div>
  </div>
</template>

<script>
import HeaderSite from "../components/HeaderSite.vue";
import bouton from "../components/bouton.vue";

export default {
  components: { HeaderSite, bouton },
};
</script>
