import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types/movie';
import Carousel from '../components/Carousel/Carousel';

function HomePage() {
    const [movies, setMovies] = useState<Movie[]>([]);
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

    function movieSelector(event: any) {
        console.log('Movie selected');
        console.log(event.target.id);
        navigate(`/movie/${event.target.id}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles['section-title']}>
                <p>Playing <b>Now</b></p>
            </div>
            <Carousel>
                {movies.map((movie, index) => (
                    <div key={index} id={movie.id.toString()}>
                        <img src={movie.poster} alt={movie.title} className={styles.img} id={movie.id.toString()} onClick={movieSelector}/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default HomePage;