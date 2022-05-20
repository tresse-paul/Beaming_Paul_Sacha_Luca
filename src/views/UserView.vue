<template>
  <nav class="mt-10 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/"><home class="fill-gray-750" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-blue-350" /></RouterLink>
  </nav>
</template>

<script >
import logo from "../components/icons/logo.vue";
import reward from "../components/icons/reward.vue";
import check from "../components/icons/check.vue";
import home from "../components/icons/home.vue";
import user from "../components/icons/user.vue";

export default {
  name: "App",
  components: { logo, reward, home, user, check },
};
</script>