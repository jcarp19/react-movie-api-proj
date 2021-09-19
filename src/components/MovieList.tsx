import {useState, useEffect} from "react";

import Movie from "../models/Movie";
import GetMovies from "../services/GetMovies";
import "./MovieList.css";
import SearchForm from "./SearchForm";
import {useParams} from "react-router";

interface RouteParams {
    filterValue: any
}

export default function MovieList() {
    const [movie, setMovie] = useState<Movie[]>([]);
    // const {filterValue} = useParams<RouteParams>();

    useEffect(() => {
        GetMovies().then(data => setMovie(data))}, []);

    return (
        <div>
            {movie?.slice(0,10).map((singleMovie, index) => {
                return (
                    <div key={index} className="movieBox">
                        <h2>{singleMovie?.title}</h2>
                        <p>{singleMovie?.vote_average}</p>
                    </div>
                )
            })}
        </div>
    )
};