<template>
  <Header />
  <div>
    <h2>Défis terminés, félicitation !</h2>
  </div>
</template>

<script >
import Header from "../components/Header.vue";
import check from "../components/icons/check.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "App",
  components: { Header, check, Navigation },
};
</script>