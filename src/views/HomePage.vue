<template>
  <div>
    <BannerComponent />
    <div class="movies" id="movies">
      <h2 class="heading">Opening This Week</h2>
      <div class="movies-container">
          <div v-for="movie in movies" :key="movie.id">
          <div class="box-img">
            <ListFilmComponent :movie="movie" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerComponent from "@/components/BannerComponent.vue";
import ListFilmComponent from "@/components/ListFilmComponent.vue";
import useMoviesStore from "../store/storeMovies";
import { computed, onMounted } from "vue";

const movieStore = useMoviesStore();

const movies = computed(() => movieStore.getMovies);


onMounted(async () => {
  await movieStore.fetchMovies();
});
</script>
