<template>
  <nav class="flex h-auto w-full justify-between bg-gray-50 px-6 pb-7 pt-5 shadow-innertop">
    <RouterLink to="/"><home class="fill-blue-350" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
  </nav>
</template>

<script>
import home from "./icons/home.vue";
import check from "./icons/check.vue";
import reward from "./icons/reward.vue";
import user from "./icons/user.vue";

export default {
  components: { home, check, reward, user },
};
</script>