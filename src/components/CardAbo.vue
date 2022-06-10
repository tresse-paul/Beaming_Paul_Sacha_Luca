<template>
  <div>
    <h3 class="text-xl uppercase">{{ forfait }}</h3>
    <p>{{ prix }}</p>
    <span :class="{ 'block bg-blue-350 ': separation }" class="block h-0.5 w-full bg-black"></span>
    <p class="text-xl">Disposez de</p>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    forfait: String,
    prix: String,
    separation: Boolean,
  },
};
</script>