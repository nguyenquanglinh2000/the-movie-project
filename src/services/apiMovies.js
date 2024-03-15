import axios from "axios";
const api ="http://localhost:3000/movies"
const getApiMovies = async ()=>{
    try {
        const res = await axios.get(api);
        if (res && res.data) return res.data;
      } catch (error) {
        console.log("fetchMoviesDetail Error", error);
      }
}
const getMovieDetail = async (id)=>{
  try {
    const res = await axios.get(`${api}/${id}`);
    if (res && res.data) return res.data;

  } catch (error) {
    throw new Error("fetchMoviesDetail Error: " + error);
  }
}
export { getApiMovies,getMovieDetail}