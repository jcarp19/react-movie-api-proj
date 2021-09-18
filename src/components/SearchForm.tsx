import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import Movie from "../models/Movie";
import FilterMovies from "../services/FilterMovies";
interface RouteParams {
    filterValue: any
}

export default function SearchForm() {
    const [genre, setGenre] = useState("");
    const [movie, setMovie] = useState<Movie[]>([]);
    const {filterValue} = useParams<RouteParams>();
    // function handleClick() {
    //     history.push(`/Movies/${filterValue}`)
    // }
    useEffect(() => { console.log(filterValue)
        FilterMovies(filterValue).then(data => setMovie(data));
    }, []);

    return (
        <div>

        <form>
            <label htmlFor="filter">Filter
                <input value={filterValue} type="text" name="filter" id="filter" required placeholder="Filter by Genre" onChange={(event) => {
                    setGenre(event.target.value)
                }} />
                {/* <input type="radio" name="filter" id="filter" value={genre} onChange={(event) => {
                    setGenre(event.target.value)
                }} /> */}
            </label>
            <button type="submit">Filter</button>
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