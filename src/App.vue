<template>
  <header>
    <nav class="fixed bottom-0 flex h-auto w-full justify-between bg-gray-50 px-6 pb-7 pt-5 shadow-innertop">
      <RouterLink to="/"><home class="fill-blue-350" /></RouterLink>
      <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
      <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
      <RouterLink to="/user"><user class="fill-gray-750" /></RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import home from "./components/icons/home.vue";
import check from "./components/icons/check.vue";
import reward from "./components/icons/reward.vue";
import user from "./components/icons/user.vue";

export default {
  components: { home, check, reward, user },
};
</script>