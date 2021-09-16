
import axios from "axios";
import Movie from "../models/Movie";

export default function getMovies(): Promise<Movie[]> {
     const apiKey = process.env.REACT_APP_MOVIES_APP_KEY 
    return axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => {
            return response.data.results;
        })    
  }