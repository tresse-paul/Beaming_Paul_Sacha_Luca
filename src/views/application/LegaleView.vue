<template>
  <HeaderApp />
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
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Propriété intellectuelle des illustrations du site :</h3>
        <p>Sacha WICKY, vijay verma [@realvjy], Freepik</p>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Rédacteur en chef :</h3>
        <p>Luca THOMESSE</p>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Mentions relatives à l’hébergeur du site :</h3>
        <div>
          <p>Infomaniak</p>
          <p>Dénomination sociale : Infomaniak Entertainment</p>
          <p>Adresse siège sociale : Rue Eugène-Marziano 25 1227 Les Acacias Suisse</p>
          <p>Fax : Fax +41 844551156</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script >
import HeaderApp from "../../components/HeaderApp.vue";
import check from "../../components/icons/check.vue";
import home from "../../components/icons/home.vue";
import reward from "../../components/icons/reward.vue";
import user from "../../components/icons/user.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "App",
  components: { HeaderApp, check, home, reward, user, Footer },
};
</script>