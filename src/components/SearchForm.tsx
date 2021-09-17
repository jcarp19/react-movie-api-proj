import {useEffect, useState} from "react";
import Movie from "../models/Movie";
import FilterMovies from "../services/FilterMovies";

export default function SearchForm() {
    const [movie, setMovie] = useState<Movie[]>([]);
    useEffect(() => {FilterMovies().then(data => setMovie(data));
    }, []);

    return (
        <div>

        <form onSubmit={() => {}}>
            <label htmlFor="search">Search
                <input type="text" name="search" id="search" required placeholder="Search for a movie" />
            </label>
            <button>Search</button>
        </form>
        {movie?.map((singleMovie, index) => {
                return (
                    <div key={index}>
                        <p>{singleMovie?.title}</p>
                        <p>{singleMovie?.vote_average}</p>
                    </div>
                )
            })}
        </div>
    )
}