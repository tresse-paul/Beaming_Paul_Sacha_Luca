<template>
  <HeaderApp />
  <div class="static grid grid-flow-row gap-5 overflow-y-auto px-4 pt-5 pb-28">
    <h2 class="text-3xl font-bold">Conditions d’utilisation</h2>
    <div class="flex flex-col gap-7">
      <h3 class="text-xl font-bold">Conditions générales de ventes (CGV) :</h3>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Caractéristiques essentielles des biens et/ou services :</h3>
        <div>
          <p class="mb-3">
            Prix TTC en euros: <br />
            Abonnement 1 mois = 3,99 euros, <br />
            Abonnement 6 mois = 15,96 euros, <br />
            Abonnement 12 mois = 24,00 euros
          </p>
          <p class="mb-3">
            Frais et date de livraison : <br />
            Pas de frais supplémentaires, livraison sous 24h Les prix de nos produits sont indiqués en euros toutes taxes comprises (TVA et
            autres taxes applicables au jour de la commande), sauf indication contraire et hors frais de traitement et d'expédition. La
            société Beaming se réserve le droit de modifier ses prix à tout moment, mais le produit sera facturé sur la base du tarif en
            vigueur au moment de la validation de la commande et sous réserve de disponibilité.
          </p>
          <p class="mb-3">
            Modalités de paiement : <br />
            par carte bancaire
          </p>
          <p class="mb-3">
            SAV : <br />
            Pas de coût pour la communication à distance
          </p>
          <p>
            Modalités de règlement des litiges : <br />
            tribunal de commerce
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">
          Protection et gestion des données utilisateur Identité et coordonnées de l’organisme responsable du traitement informatique des
          données personnelles collectées :
        </h3>
        <div>
          <p class="mb-3">
            membres du groupe de projet ainsi que la CNIL : 01 53 73 22 22 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
          </p>
          <p class="mb-3">
            Finalité poursuivie par le traitement : ces données vont permettrent de faire de comprendre les problèmes principaux des
            utilisateurs afin de les aider au mieux et de peut être mettre en place des démarches nationales. Peuvent être revendues à des
            instituts de sondages pour comprendre les besoins de la population ou encore quels sont les facteurs qui influent sur les
            résultats dans les études ou au travail.
          </p>
          <p class="mb-3">
            Base légale justifiant le traitement : consentement demandé dès l’arrivée sur le site avec l’acceptation des conditions
            générales d’utilisation et du traitement des données. Aucune conséquence pour l’utilisateur s’il n'accepte pas ce traitement de
            données.
          </p>
          <p class="mb-3">
            Destinataires des données personnelles : membres du groupe (et institut de sondage si données revendues), CNIL. Durée de
            conservation des données personnelles : 1 an
          </p>
          <p class="mb-3">
            Droits de l’internaute : le droit de refuser la collecte, le droit d'accéder, de rectifier et d'effacer ses données. Droit de
            l'internaute d'introduire une réclamation auprès de la Cnil
          </p>
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