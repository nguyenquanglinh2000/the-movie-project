import axios from "axios";
import { defineStore } from "pinia";
import { getApiMovies,getMovieDetail } from "@/services/apiMovies";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
  }),
  getters: {
    getMovies(state) {
      return state.movies;
    },
  },
  actions: {
    async fetchMovies() {
      const movies = await getApiMovies();
      this.$patch((state) => {
        state.movies = movies;
      });
    },
    async fetchMoviesDetail(id) {
      const movie = await getMovieDetail(id);
      this.$patch((state) => {
        state.movies = movie;
      });
      console.log(movie);
    },
  },
});
export default useMoviesStore;
