import { useState } from "react";
import { MovieCTX } from "./Context";
import { movies } from './Movie';

const MovieProvider: React.FC <({children: React.ReactNode})> = (props) => {
    const [movie, setMovie] = useState(movies[0]);

    const obj = {
        movie,
        setMovie
    }

    return (
        <MovieCTX.Provider value={obj}>
            {props.children}
        </MovieCTX.Provider>
    )
}

export default MovieProvider;