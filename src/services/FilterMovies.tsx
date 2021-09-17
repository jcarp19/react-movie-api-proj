import axios from "axios";
import {useState} from "react";
import Movie from "../models/Movie";

export default function FilterMovies(): Promise<Movie[]> {
    // const [filter, setFilter] = useState();
    const apiKey = process.env.REACT_APP_MOVIES_APP_KEY 
    let filterValue = "drama"
   return axios
       .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${filterValue}&page&include_adult=false`)
       .then(response => {
           return response.data.results;
       })    
 }