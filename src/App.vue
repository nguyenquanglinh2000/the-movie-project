<script setup>
  import { RouterView } from "vue-router";
  import headerMovies from '@/components/headerMovies.vue';
  import footerMovies from '@/components/footerMovies.vue';

</script>

<template>
  <headerMovies />
  <RouterView />
  
  <footerMovies />
</template>
