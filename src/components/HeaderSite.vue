<template>
  <div class="flex h-auto w-full items-center justify-between border-b border-gray-100 bg-gray-50 px-4 pb-5 pt-5">
    <RouterLink to="/"><logo /></RouterLink>
    <div class="flex flex-col gap-1.5">
      <span class="block h-1 w-7 rounded-full bg-blue-350"></span>
      <span class="block h-1 w-7 rounded-full bg-blue-350"></span>
      <span class="block h-1 w-7 rounded-full bg-blue-350"></span>
    </div>
  </div>
</template>

<script>
import CardAbo from "../components/CardAbo.vue";
import logo from "../components/icons/logo.vue";

export default {
  components: { CardAbo, logo },
};
</script>