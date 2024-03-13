<template>
  <div class="movies" id="movies">
    <h2 class="heading">Opening This Week</h2>
    <div class="movies-container">
        <div v-for="movie in movies" :key="movie.id">
        <div class="box-img">
          <ComingComponent :movie="movie" />
          </div>
        </div>
    </div>
  </div>

</template>
<script setup>
import ComingComponent from "@/components/ComingComponent.vue";
import useMoviesStore from "../store/storeMovies";
import { computed, onMounted } from "vue";

const movieStore = useMoviesStore();

const movies = computed(() => movieStore.getMovies);

onMounted(async () => {
  await movieStore.fetchMovies();
});
</script>
