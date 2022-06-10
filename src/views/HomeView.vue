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
        <RouterLink to="/inscription">
          <bouton principal class="uppercase">Commencer gratuitement</bouton>
        </RouterLink>
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
        <p class="mb-10">Avec Beaming, découvrez chaque jours de nouveaux objectifs à accomplir.</p>
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
      <div class="mb-10 flex flex-col gap-4">
        <h3 class="text-xl font-bold">Combien de temps ?</h3>
        <p>Il faut en moyenne 66 jours, pour adopter une nouvelle habitude, pas de panique !</p>
        <div class="flex justify-center">
          <img class="h-28 w-28 object-contain" src="/src/assets/Chronometre_3D.webp" alt="Chronomètre en 3D" />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">Quelle méthode adopter ?</h3>
        <p>Identifier les raisons du changement, Évaluer sa motivation et réaliser plusieurs objectifs simples pour atteindre le sommet.</p>
        <div class="flex justify-center">
          <img class="h-28 w-28 object-contain" src="/src/assets/Puzzle_3D.webp" alt="Une pièce de puzzle en 3D" />
        </div>
      </div>
    </div>
    <div class="mb-5 flex flex-col items-center gap-7 px-4">
      <h2 class="text-center text-2xl font-bold"><span class="inline h-1/2 w-auto bg-pink-350">Lancez-vous</span> maintenant</h2>
      <div class="relative flex flex-col gap-14">
        <div class="mx-5 flex flex-col gap-7 rounded-xl bg-gray-100 p-4 px-4 drop-shadow-xl backdrop-blur-sm">
          <div>
            <h3 class="text-2xl uppercase">Gratuit</h3>
          </div>
          <div class="flex flex-col gap-20">
            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-4">
                <p class="text-3xl font-bold">O.OO €</p>
                <span class="block h-0.5 w-auto bg-gray-900"></span>
                <p class="text-center text-xl">Disposez de</p>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>2 objectifs Beaming</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 objectif de votre choix</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 relance d’objectif</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 objectif mensuel de votre choix</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <RouterLink to="/inscription">
                <button class="rounded-full border-2 border-gray-900 px-6 font-bold uppercase">commencer</button>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="mx-5 flex flex-col gap-7 rounded-xl border-2 border-blue-350 bg-gray-100 p-4 px-4 drop-shadow-xl backdrop-blur-sm">
          <div>
            <h3 class="text-2xl uppercase">Déterminé</h3>
          </div>
          <div class="flex flex-col gap-20">
            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-4">
                <p class="text-3xl font-bold">3.99 € <span class="text-base font-normal">/ mois</span></p>
                <span class="block h-0.5 w-auto bg-blue-350"></span>
                <p class="text-center text-xl">Disposez de</p>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>2 objectifs Beaming</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>Choix illimié d’objectifs</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>4 relances d’objectif</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>Pas de pub</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 objectif mensuel de votre choix</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 relance d’objectif mensuel</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <RouterLink to="/inscription">
                <bouton principal class="scale-75 uppercase">commencer</bouton>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="mx-5 flex flex-col gap-7 rounded-xl bg-gray-100 p-4 px-4 drop-shadow-xl backdrop-blur-sm">
          <div>
            <h3 class="text-2xl uppercase">Passioné</h3>
          </div>
          <div class="flex flex-col gap-20">
            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-4">
                <p class="text-3xl font-bold">15.96 € <span class="text-base font-normal">/ 6 mois</span></p>
                <p class="text-center">Soit <span class="font-bold">2.66 €</span> / mois</p>
                <span class="block h-0.5 w-auto bg-gray-900"></span>
                <p class="text-center text-xl">Disposez de</p>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>2 objectifs Beaming</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>Choix illimié d’objectifs</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>4 relances d’objectif</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>Pas de pub</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 objectif mensuel de votre choix</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 relance d’objectif mensuel</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <RouterLink to="/inscription">
                <button class="rounded-full border-2 border-gray-900 px-6 font-bold uppercase">commencer</button>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="mx-5 flex flex-col gap-7 rounded-xl bg-gray-100 p-4 px-4 drop-shadow-xl backdrop-blur-3xl">
          <div>
            <h3 class="text-2xl uppercase">champion</h3>
          </div>
          <div class="flex flex-col gap-20">
            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-4">
                <p class="text-3xl font-bold">24.00 € <span class="text-base font-normal">/ 6 mois</span></p>
                <p class="text-center">Soit <span class="font-bold">2.00 €</span> / mois</p>
                <span class="block h-0.5 w-auto bg-gray-900"></span>
                <p class="text-center text-xl">Disposez de</p>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>2 objectifs Beaming</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>Choix illimié d’objectifs</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>4 relances d’objectif</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>Pas de pub</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 objectif mensuel de votre choix</p>
                </div>
                <div class="flex gap-4">
                  <check class="h-6 w-6 fill-lime-450" />
                  <p>1 relance d’objectif mensuel</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <RouterLink to="/inscription">
                <button class="rounded-full border-2 border-gray-900 px-6 font-bold uppercase">commencer</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-7 px-4">
      <h2 class="text-center text-2xl font-bold"><span class="inline h-1/2 w-auto bg-blue-350">Qui</span> somme-nous ?</h2>
      <div class="flex flex-col items-center justify-center">
        <img class="scale-75" src="../assets/Sacha.svg" alt="" />
        <div class="flex flex-col gap-3">
          <h3 class="text-center text-xl">Sacha <span class="inline font-bold uppercase">Wicky</span></h3>
          <p>Étudiant en 1er année de B.U.T MMI à Montbéliard. Graphiste chargé du design et de l’identité visuelle de Beaming.</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <img class="scale-75" src="../assets/Luca.svg" alt="" />
        <div class="flex flex-col gap-3">
          <h3 class="text-center text-xl">Luca <span class="inline font-bold uppercase">Thomesse</span></h3>
          <p>Étudiant en 1er année de B.U.T MMI à Montbéliard. Communicant de Beaming, chargé du contenu textuel et des mentions légales</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="scale-75" src="../assets/Paul.png" alt="" />
        <div class="flex flex-col gap-3">
          <h3 class="text-center text-xl">Paul <span class="inline font-bold uppercase">Tresse</span></h3>
          <p>Étudiant en 1er année de B.U.T MMI à Montbéliard. Développeur front end de l’équipe Beaming</p>
        </div>
      </div>
    </div>
    <div class="items-centers flex flex-col gap-5 bg-gray-100 px-4 py-5">
      <h2 class="text-center text-2xl font-bold">Vous aves des questions ? C’est ici</h2>
      <form class="flex flex-col gap-7">
        <div class="flex flex-col gap-2">
          <label for="Prenom">Prenom *</label>
          <input class="rounded-lg" placeholder="Jean" type="text" required />
        </div>
        <div class="flex flex-col gap-2">
          <label for="Nom">Nom *</label>
          <input class="rounded-lg" placeholder="Dupont" type="text" required />
        </div>
        <div class="flex flex-col gap-2">
          <label for="Email">Email *</label>
          <input class="rounded-lg" placeholder="monadresse@email.com" type="email" required />
        </div>
        <div class="flex flex-col gap-2">
          <label for="textarea">Votre message *</label>
          <textarea
            class="rounded-lg"
            placeholder="Ecrivez votre message juste ici..."
            name="Textarea"
            cols="30"
            rows="5"
            required
          ></textarea>
          <p class="text-xs">* Champs obligatoires</p>
        </div>
        <p class="text-center text-sm">
          En cliquant sur envoyer, vous accepté nos <strong>conditions d’utilisations</strong> et notre
          <strong>politique de confidentialité</strong>.
        </p>
        <button type="submit" class="flex justify-center">
          <bouton class="">Envoyer</bouton>
        </button>
      </form>
    </div>
    <div class="items-centers flex flex-col gap-5 px-4">
      <h2 class="text-center text-2xl font-bold">Rejoignez-nous des maintenant</h2>
      <p class="text-center">Démarrez gratuitement, changez d’abonnement à tout moment</p>
      <div class="flex justify-center">
        <RouterLink to="/inscription">
          <bouton principal>Inscription gratuite</bouton>
        </RouterLink>
      </div>
    </div>
    <Footer class="px-4" />
  </div>
</template>

<script>
import HeaderSite from "../components/HeaderSite.vue";
import bouton from "../components/bouton.vue";
import CardAbo from "../components/CardAbo.vue";
import Footer from "../components/Footer.vue";
import check from "../components/icons/check.vue";

export default {
  components: { HeaderSite, bouton, CardAbo, Footer, check },
};
</script>
