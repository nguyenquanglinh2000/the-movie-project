<template>
  <div class="box">
    <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
      <img
        :src="`/src/asset/image/${movie.avatar}.jpg`"
        :alt="movie.name"
        style="width: 100%"
      />
      <h3>{{ movie.name }}</h3>
      <span>{{ movie.time }} | Action</span>
    </router-link>
  </div>
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
