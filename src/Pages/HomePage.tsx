import styles from './HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Movie from '../types/movie';

function HomePage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [activeMovie, setActiveMovie] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/movies/getMovies`, {
                    method: 'GET',
                });

                const data = await response.json();
                
                if (data.error) {
                    throw new Error(data.error);
                }

                setMovies(data);
            } catch (error) {
                console.log('Error:', error);
            }
        }());
    }, []);

    function nextMovie() {
        setActiveMovie(activeMovie == movies.length - 1 ? 0 : activeMovie + 1);
    }

    function prevMovie() {
        setActiveMovie(activeMovie == 0 ? movies.length - 1 : activeMovie - 1);
    }

    function setFirstMovie() {
        return activeMovie == 0 ? movies[movies.length - 1] : movies[activeMovie - 1];
    }

    function setLastMovie() {
        return activeMovie == movies.length - 1 ? movies[0] : movies[activeMovie + 1];
    }

    function movieSelector(event: any) {
        navigate('/movie-information');
    }

    return (
        <div className={styles.container}>
            <div className={styles['section-title']}>
                <p>Playing <b>Now</b></p>
            </div>
            <div className={styles['carousel-container']}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={prevMovie}/>
                {movies.length > 0 && <img src={setFirstMovie().poster} id={setFirstMovie().id.toString()} className={styles.img} onClick={movieSelector}></img>}
                {movies.length > 0 && <img src={movies[activeMovie].poster} className={`${styles.img} ${styles['active-img']}`} id={movies[activeMovie].id.toString()} onClick={movieSelector}></img>}
                {movies.length > 0 && <img src={setLastMovie().poster} className={styles.img} onClick={movieSelector}  id={setLastMovie().id.toString()}></img>}
                <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={nextMovie}/>
            </div>
        </div>
    );
}

export default HomePage;