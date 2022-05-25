<template>
  <Header />
  <header></header>
  <RouterView />
</template>

<script>
import home from "./components/icons/home.vue";
import check from "./components/icons/check.vue";
import reward from "./components/icons/reward.vue";
import user from "./components/icons/user.vue";
import Header from "./components/Header.vue";

export default {
  components: { home, check, reward, user, Header },
};
</script>