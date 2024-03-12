<script setup>
  import { RouterView } from "vue-router";
  import headerMovies from '@/component/headerMovies.vue';
  import footerMovies from '@/component/footerMovies.vue';

</script>

<template>
  <headerMovies />
  <RouterView />
  
  <footerMovies />
</template>
