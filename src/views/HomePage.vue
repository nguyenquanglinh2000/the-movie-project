<template>
  <div>
<!-- 
    file nay se co 2 component 
    1: BannerComponent
    2: ListFilmComponent (trong list film se co FilmItemComponent)
    3: IntroduceComponent
-->
    <bannerMovies />
    <ItemMovies />
  </div>
</template>

<script setup>
import bannerMovies from "@/components/bannerMovies.vue";
import ItemMovies from "@/components/ItemMovies.vue";
</script>
