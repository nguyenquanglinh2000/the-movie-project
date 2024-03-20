<template>
  <div>
    <BannerComponent />
    <div class="movies" id="movies">
      <h2 class="heading"></h2>
      <div class="movies-container">
        <div v-for="movie in movies" :key="movie.id">
          <div class="box-img">
            <ListFilmComponent :movie="movie" />
          </div>
        </div>
      </div>
    </div>
    <div class="seeMore">
      <button @click="loadMoreFacts" class="btn center">
        {{ fetchingFacts ? "..." : "Load more" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import BannerComponent from "@/components/BannerComponent.vue";
import ListFilmComponent from "@/components/ListFilmComponent.vue";
import useMoviesStore from "../store/storeMovies";
import { computed, onMounted, ref } from "vue";

const fetchingFacts = ref(false);
const movieStore = useMoviesStore();
const movies = computed(() => movieStore.getMovies);

const limit = ref(10)
const sort = ref('')

const loadMoreFacts = async () => {
  
  fetchingFacts.value = true;
  limit.value+=10
  
  await movieStore.fetchMovies(limit.value)
  fetchingFacts.value = false;

};

onMounted(async () => {
  await movieStore.fetchMovies(limit.value , sort.value = 'id');
});
</script>
