<template>
  <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
    <div class="box">
      <img
        :src="`${movie.image}`"
        :alt="movie.name"
        style="width: 100%;"
      />
    
      <h3>{{ movie.title }}</h3>
      <span>{{ movie.rating }} | {{ movie.imdbid }}</span>
   

    </div>
  </router-link>
  
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    movie: {
      type: Object,
      required: true,
      
    },
  });
  </script>