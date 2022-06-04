<template>
  <div class="flex items-center justify-between px-4 pt-5">
    <logo />
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
