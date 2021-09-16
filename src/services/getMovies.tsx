
import axios from "axios";
import Movie from "../models/Movie";

export default function getMovies(): Promise<Movie[]> {
    const api_Key = "322003cc5ee7f07a72d0f0de66ac55a3"    
    return axios
        .get("https://api.themoviedb.org/3/movie/top_rated?api_key=322003cc5ee7f07a72d0f0de66ac55a3&language=en-US&page=1")
        .then(response => {
            return response.data.results;
        })
        
  }