import styles from './HomePage.module.css';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { Movie } from '../types/movie';
import Carousel from '../components/Carousel/Carousel';

function HomePage() {
    const navigation = useNavigation(); 
    const navigate = useNavigate();
    const movies = useLoaderData() as Movie[];

    function movieSelector(event: any) {
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

export const loadMovies = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/movies/getMovies`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }

    return await response.json();
};