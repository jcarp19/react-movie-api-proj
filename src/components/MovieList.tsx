import {useState, useEffect} from "react";
import getMovies from "../services/getMovies";
import Movie from "../models/Movie";

export default function MovieList() {
    // const [movie, setMovie] = useState<Movie[]>([]);
    const [movie, setMovie] = useState<Movie[]>([]);
    
    useEffect(() => {getMovies().then(data => setMovie(data));
    }, []);

    return (
        
            <div>
                {movie?.slice(0,10).map((singleMovie, index) => {
                    return (
                        <div key={index}>
                            <p>{singleMovie?.title}</p>
                            <p>{singleMovie?.vote_average}</p>
                        </div>
                    )
                })}
            </div>
        
        // <div>
        //     {
            
        //     /* {movie?.map((singleMovie, index) => {
        //         return (
        //             // <div key={index}>
        //             //     <p>{singleMovie?.title}</p>
        //             //     <p>{singleMovie?.vote_average}</p>
        //             // </div>
        //         )
        //     })} */}
        // </div>
    )
};