import styles from './Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { movies } from '../Context/Movie';
import { MovieCTX } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

function Main() {
    const [activeMovie, setActiveMovie] = useState(0);
    const movieCTX = useContext(MovieCTX);
    const navigate = useNavigate();

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
        movieCTX.setMovie(movies[event.target.id - 1]);
        console.log(event.target.id);
        navigate('/movie-information');
    }

    return (
        <div className={styles.container}>
            <div className={styles['section-title']}>
                <p>Playing <b>Now</b></p>
            </div>
            <div className={styles['carousel-container']}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={prevMovie}/>
                <img src={setFirstMovie().image} id={setFirstMovie().id.toString()} className={styles.img} onClick={movieSelector}></img>
                <img src={movies[activeMovie].image} className={`${styles.img} ${styles['active-img']}`} id={movies[activeMovie].id.toString()} onClick={movieSelector}></img>
                <img src={setLastMovie().image} className={styles.img} onClick={movieSelector}  id={setLastMovie().id.toString()}></img>
                <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={nextMovie}/>
            </div>
        </div>
    );
}

export default Main;