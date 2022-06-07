<template>
  <HeaderSite />
  <div class="flex flex-col gap-10">
    <div class="mt-24 flex flex-col gap-7 px-5">
      <img
        class="absolute -top-24 left-0 -z-10 w-screen object-cover"
        src="/src/assets/world_emoticon.png"
        alt="Vague d'émoji heureux et souriant"
      />
      <h1 class="text-center font-outfit text-3xl font-bold">Devenez la meilleure version de vous-même</h1>
      <p class="font-outfit">
        Réalisez vos objectifs et surpassez-vous quotidiennement avec <strong>Beaming</strong>. L’application web qui vous offre les clés de
        l’épanouissement, à votre rythme.
      </p>
      <div class="flex justify-center">
        <bouton principal class="uppercase">Commencer gratuitement</bouton>
      </div>
    </div>
    <div class="relative -z-20 flex flex-col items-center gap-7 bg-gray-50 px-4 py-10">
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
      <img class="absolute bottom-32 -z-10 object-contain" src="/src/assets/Serpentin_3D.webp" alt="Serpentin 3D traversant l'écran" />
    </div>
    <div class="flex flex-col items-center gap-7 px-4">
      <h2 class="text-center text-2xl font-bold">
        Faites de vos <span class="inline h-1/2 w-auto bg-lime-450">objectifs</span> une habitude
      </h2>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">Combien de temps ?</h3>
        <p>
          Il faut en moyenne 66 jours, pour adopter une nouvelle habitude, mais pas de panique ! Ce résultat varie en fonction de vos
          objectifs et de votre motivation.
        </p>
        <div class="flex justify-center">
          <img class="h-28 w-28 object-contain" src="/src/assets/Chronometre_3D.webp" alt="Chronomètre en 3D" />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">Quelle méthode adopter ?</h3>
        <p>
          Dans un premier temps, il est nécessaire d’identifier les raisons du changement, puis d’évaluer sa motivation et de réaliser
          plusieurs objectifs simples pour atteindre le sommet.
        </p>
        <div class="flex justify-center">
          <img class="h-28 w-28 object-contain" src="/src/assets/Puzzle_3D.webp" alt="Une pièce de puzzle en 3D" />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center gap-7 px-4">
      <CardAbo forfait="gratuit" prix="3.99 € / mois" :separation="true" />
    </div>
  </div>
</template>

<script>
import HeaderSite from "../components/HeaderSite.vue";
import bouton from "../components/bouton.vue";
import CardAbo from "../components/CardAbo.vue";

export default {
  components: { HeaderSite, bouton, CardAbo },
};
</script>
