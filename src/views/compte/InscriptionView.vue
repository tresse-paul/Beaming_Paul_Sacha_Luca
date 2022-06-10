<template>
  <HeaderSite />
  <div class="flex gap-28 px-5 pt-5">
    <div class="flex w-full flex-col justify-center gap-10">
      <h2 class="text-4xl font-bold">S'inscrire</h2>
      <form class="flex flex-col gap-5">
        <div class="font-barlow flex w-full flex-col gap-2">
          <p class="text-xl">Pseudonyme</p>
          <input
            class="h-8 flex-auto rounded-lg border border-gray-300 bg-gray-100 px-3 focus:ring-blue-350"
            type="text"
            required
            placeholder="User"
          />
        </div>
        <div class="font-barlow flex w-full flex-col gap-2">
          <p class="text-xl">Email</p>
          <input
            class="h-8 flex-auto rounded-lg border border-gray-300 bg-gray-100 px-3 focus:ring-blue-350"
            type="email"
            required
            placeholder="monadresse@gmail.com"
          />
        </div>
        <div class="font-barlow flex w-full flex-col gap-2">
          <p class="text-xl">Mot de passe</p>
          <input class="h-8 flex-auto rounded-lg border border-gray-300 bg-gray-100 px-3 focus:ring-blue-350" required />
        </div>
        <div class="font-barlow mb-5 flex w-full flex-col gap-2">
          <p class="text-xl">Confirmation du mot de passe</p>
          <input class="h-8 flex-auto rounded-lg border border-gray-300 bg-gray-100 px-3 focus:ring-blue-350" required />
          <p>Vous avez déjà un compte ? <RouterLink to="/connexion" class="font-bold">Connectez-vous ici</RouterLink></p>
        </div>

        <div class="flex flex-col justify-between gap-7">
          <button type="submit"><bouton principal class="flex">Inscription</bouton></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderSite from "../../components/HeaderSite.vue";
import bouton from "../../components/bouton.vue";

export default { components: { HeaderSite, bouton } };
</script>