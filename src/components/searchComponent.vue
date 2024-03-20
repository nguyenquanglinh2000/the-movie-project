<template>
  <div class="search">
    <form @submit.prevent="submitSearchMovie()">
      <input type="text" v-model="searchMovie" class="form-control" />

      <div v-if="movie.length >= 1" style="width: 300px">
        <div v-for="movie in movie" :key="movie.id">
          <router-link :to="{ name: 'MovieDetail', params: { id: movie.id } }">
            <div class="render-value-search">
              <li class="movie-item">
                <img
                  :src="`${movie.image}`"
                  :alt="movie.name"
                  style="width: 10%"
                />
                {{ movie.title }}
              </li>
            </div>
          </router-link>
        </div>
      </div>
      <div v-else></div>
    </form>
  </div>
</template>

<script setup>
import useMoviesStore from "../store/storeMovies";
import { computed, onMounted, ref } from "vue";

const movieStore = useMoviesStore();
const movies = computed(() => movieStore.getMovies);

const searchMovie = ref("");
const title = ref("");

const movie = computed(() => {
  const searchString = searchMovie.value.toLowerCase();
  if (searchString === "") {
    return [];
  } else {
    return movies.value.filter((movie) =>
      movie.title.toLowerCase().includes(searchString)
    );
  }
});

const submitSearchMovie = async () => {
  if (searchMovie.value === "") {
    return;
  } else {
    title.value = searchMovie.value;
    await movieStore.searchMoviebytitle(title.value);
  }
};

</script>

<style>
.search a {
  display: flex;
}
.search form {
  position: absolute;
  right: -300px;
  z-index: 1000;
  top: -21px;
  background-color: black;
}
.search form input {
  width: 530px;
  color: black;
}
.search a {
  display: flex;
}

.movie-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}

.movie-item img {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.movie-item span {
  font-size: 16px;
  font-weight: bold;
}

/* Tùy chỉnh kiểu dáng khi hover */
.movie-item:hover {
  background-color: #f0f0f0;
}

.movie-item:hover img {
  opacity: 0.8;
}

.movie-item:hover span {
  color: #ff0000;
}
</style>
