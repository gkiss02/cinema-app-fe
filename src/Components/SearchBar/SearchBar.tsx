import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './SearchBar.module.css';
import { useRef, useState } from "react";
import { Movie } from "../../types/movie";
import { useNavigate } from "react-router-dom";

function SearchBar () {
    const [movies, setMovies] = useState<Movie[]>([]);
    const ref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSearch = async () => {        
        if (ref.current?.value.length && ref.current?.value.length < 3) {
            setMovies([]);
            return;
        }

        if (ref.current?.value == '') {
            setMovies([]);
            return;
        }

        try {
            const query = ref.current?.value;
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/movies/getMoviesByName?title=${query}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = (event: any) => {
        console.log(event.target.dataset.id);
        navigate(`/movie/${event.target.dataset.id}`);
        ref.current!.value = '';
        setMovies([]);
    };


    return (
        <div className={styles.container}>
            <div className={styles['search-container']}>
                <input 
                    type="text" 
                    placeholder="Search Movie" 
                    className={styles['search-input']}
                    onChange={handleSearch}
                    ref={ref}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']}/>
            </div>
            {movies.length !== 0 && <div className={styles['result-container']}>
                {movies.map((movie: Movie) => (
                    <div 
                        key={movie.id} 
                        className={styles.result} 
                        onClick={handleClick}
                        data-id={movie.id}
                    >
                        {movie.title}
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SearchBar;