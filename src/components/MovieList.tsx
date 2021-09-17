import {useState, useEffect} from "react";

import Movie from "../models/Movie";
import GetMovies from "../services/GetMovies";
import SearchForm from "./SearchForm";

export default function MovieList() {
    const [movie, setMovie] = useState<Movie[]>([]);
    
    useEffect(() => {GetMovies().then(data => setMovie(data));
    }, []);

    return (
        <div>
            <SearchForm />
            {movie?.slice(0,10).map((singleMovie, index) => {
                return (
                    <div key={index}>
                        <p>{singleMovie?.title}</p>
                        <p>{singleMovie?.vote_average}</p>
                    </div>
                )
            })}
        </div>
    )
};