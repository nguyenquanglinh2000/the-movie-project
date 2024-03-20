import { defineStore } from "pinia";
import {
  getApiMovies,
  getMovieDetail,
  updateViewsMovie,
  fetchCommentsForMovie,
  commentCreate,
  searchMovie
} from "@/services/apiMovies";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [],
    comments: [],
  }),
  getters: {
    getMovies(state) {
      return state.movies;
    },
    getComments(state) {
      return state.comments;
    },
  },
  actions: {
    async fetchMovies(_limit = 10, _sort = "id") {
      const movies = await getApiMovies(_limit, _sort);

      this.$patch((state) => {
        state.movies = movies;
      });
    },
    async fetchMoviesDetail(id) {
      const movie = await getMovieDetail(id);
      return movie;
    },
    async updateViews(id, views) {
      const movieViews = await updateViewsMovie(id, views);
      return movieViews;
    },
    async searchMoviebytitle(title){
        const search = await searchMovie(title);
        console.log(search);
        return search;
    },
    
    //comments

    async commentsbyMovieId(movieId){
      const comments = await fetchCommentsForMovie(movieId)
      return comments;
    },
    async createComment(commentData) { 
      await commentCreate(commentData);
    }
  },
});
export default useMoviesStore;
