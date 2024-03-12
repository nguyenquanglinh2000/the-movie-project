<template>
  <div>
<!-- 
    file nay se co 2 component 
    1: BannerComponent
    2: ListFilmComponent (trong list film se co FilmItemComponent)
    3: IntroduceComponent
-->
    <BannerComponent />
    <ListFilmComponent />
  </div>
</template>

<script setup>
import BannerComponent from "@/components/BannerComponent.vue";
import ListFilmComponent from "@/components/ListFilmComponent.vue";
</script>
