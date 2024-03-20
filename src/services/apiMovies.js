import axios from "axios";
const apiMovies = "http://localhost:3000/movies";
const apiComment = "http://localhost:3000/comments";

const getApiMovies = async (_limit, _sort) => {
  try {
    const res = await axios.get(apiMovies, {
      params: {
        _limit,
        _sort,
      },
    });
    if (res && res.data) return res.data;
  } catch (error) {
    console.log("fetchMoviesDetail Error", error);
  }
};

const getMovieDetail = async (id) => {
  try {
    const res = await axios.get(`${apiMovies}/${id}`);
    if (res && res.data) return res.data;
  } catch (error) {
    throw new Error("fetchMoviesDetail Error: " + error);
  }
};

const updateViewsMovie = async (id, views) => {
  try {
    const res = await axios.put(`${apiMovies}/${id}`, { views });
    if (res && res.data) return res.data;
    console.log(res);
  } catch (error) {
    throw new Error("Update Views Movie Error: " + error);
  }
};

const searchMovie  = async (title)=>{
  try{
    const res = await axios.get(`${apiMovies}?title=${title}`)
    if(res && res.data) return res.data;
  }
  catch(error) {
    console.log("error search movie:" + error);
  }

}

//comments

const fetchCommentsForMovie = async (movieId) => {
  try {
    const res = await axios.get(`${apiComment}?movieID=${movieId}`);
    if (res && res.data) return res.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

const commentCreate = async(commentData)=> {
  try {
    const res = await axios.post(apiComment,commentData);
    if (res && res.data) return res.data;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};

export {
  getApiMovies,
  getMovieDetail,
  updateViewsMovie,
  fetchCommentsForMovie,
  commentCreate,
  searchMovie
};
