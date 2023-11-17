
import axios from "axios";

const baseUrl='https://api.themoviedb.org/3/discover/movie?api_key=376e45b97d32f40b86aa5bff2c9563d2'

export const movieData=async()=>{

    const response=await axios.get(baseUrl)
    return response


}