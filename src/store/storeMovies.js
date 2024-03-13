import axios from "axios";
import { defineStore } from "pinia";
const api = "http://localhost:3000/movies"

export const  useMoviesStore = defineStore('movies',{
    state:()=>({
        Movies:[]
    }),
    getters:{
        getMovies(state){
            return state.Movies
        }
    },
    actions:{
        async fetchMovies(){
            const res = await axios.get(api)
            this.Movies = res.data
        },
        async fetchMoviesDetail(id){
            const res = await axios.get(`${api}/${id}`)
            this.Movies = res.data

        }

    }
    

})
export default useMoviesStore



