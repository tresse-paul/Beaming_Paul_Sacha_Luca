<template>
  <HeaderApp />
  <nav class="fixed bottom-0 flex h-auto w-full justify-between border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-5">
    <RouterLink to="/dashboard"><home class="fill-gray-750" /></RouterLink>
    <RouterLink to="/defis"><check class="fill-gray-750" /></RouterLink>
    <RouterLink to="/progression"><reward class="fill-gray-750" /></RouterLink>
    <RouterLink to="/user"><user class="fill-blue-350" /></RouterLink>
  </nav>
</template>

<script >
import HeaderApp from "../../../components/HeaderApp.vue";
import check from "../../../components/icons/check.vue";
import home from "../../../components/icons/home.vue";
import reward from "../../../components/icons/reward.vue";
import user from "../../../components/icons/user.vue";

export default {
  components: { HeaderApp, check, home, reward, user },
};
</script>