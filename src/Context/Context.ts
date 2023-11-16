import { createContext } from "react";
import { movies } from "./Movie"

export const MovieCTX = createContext({
    movie: movies[0],
    setMovie: (movie: any) => {}
});