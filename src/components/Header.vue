<template>
  <div class="flex h-auto w-full items-start justify-start border-b border-gray-100 bg-gray-50 px-2.5 pb-5">
    <RouterLink to="/"><logo /></RouterLink>
  </div>
</template>
<script>
import logo from "./icons/logo.vue";

export default {
  components: { logo },
};
</script>
