<template>
  <div class="static grid grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
    <h2 class="text-3xl font-bold">Mentions légales</h2>
    <div class="flex flex-col gap-7">
      <h3 class="font-bold">Identification du professionnel :</h3>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Identité de l’entreprise :</h3>
        <div>
          <p>Étudiants Luca THOMESSE, Paul TRESSE, Sacha WICKY</p>
          <p>Département MMI Montbéliard - 4 Place Tharradin 25200 Montbéliard</p>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Pour nous contacter :</h3>
        <div>
          <p>Adresse e-mail du site : beaming.app@gmail.com</p>
          <p>
            Adresse e-mail de Luca THOMESSE :
            <a class="underline" href="mailto:luca.thomesse@edu.univ-fcomte.fr">luca.thomesse@edu.univ-fcomte.fr</a>
          </p>
          <p>
            Adresse e-mail de Paul TRESSE :
            <a class="underline" href="mailto:paul.tresse@edu.univ-fcomte.fr">paul.tresse@edu.univ-fcomte.fr</a>
          </p>
          <p>
            Adresse e-mail de Sacha WICKY : <a class="underline" href="sacha.wicky@edu.univ-fcomte.fr">sacha.wicky@edu.univ-fcomte.fr</a>
          </p>
          <p>
            Adresse e-mail de l’entreprise :
            <a class="underline" href="dut-mmi-montbeliard@univ-fcomte.fr">dut-mmi-montbeliard@univ-fcomte.fr</a>
          </p>
          <p>Numéro de l’entreprise : <a class="underline" href="tel:+33 (0)3 81 99 47 34">+33 (0)3 81 99 47 34</a></p>
        </div>
      </div>
    </div>
  </div>
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/"><home class="fill-gray-750" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-blue-350" /></RouterLink>
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