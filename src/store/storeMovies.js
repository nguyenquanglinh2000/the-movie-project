import axios from "axios";
import { defineStore } from "pinia";
const api = "http://localhost:3000/movies";

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
      try {
        const res = await axios.get(api);
        if (res && res.data) this.movies = res.data;
      } catch (error) {
        console.log("fetchMovies Error", error);
      }
    },
    async fetchMoviesDetail(id) {
      try {
        const res = await axios.get(`${api}/${id}`);
        if (res && res.data) return res.data;
      } catch (error) {
        console.log("fetchMoviesDetail Error", error);
      }
    },
  },
});
export default useMoviesStore;
