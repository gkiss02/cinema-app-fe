import { useEffect, useState } from "react";
import styles from './Movie.module.css';
import { faBookmark, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import InformationCard from "../components/InformationCard/InformationCard";
import Button from "../components/Button/Button";
import BackComponent from "../components/BackComponent/BackComponent";
import OrderModal from "../components/OrderModel/OrderModal";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { Movie as MovieType } from '../types/movie';
import { useReservationContext } from "../context/ReservationContext";
import hourFormatter from "../utils/hourFormatter";
import Screening from "../types/screening";

function Movie() {
    const [showModal, setShowModal] = useState(false);
    const movie = useLoaderData() as MovieType;
    const reservationContext = useReservationContext();
    const [screenings, setScreenings] = useState<Screening[]>([]);
    const params = useParams();
    const [loading, setloading] = useState(false);

    useEffect(() => {
        reservationContext.setTitle(movie.title);
    }, [movie]);

    function clickHandle() {
        console.log('clicked');
    }

    function closeModal() {
        setShowModal(!showModal);
    }

    const fetchScreenings = async () =>{
        setloading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/screenings/getScreeningsByMovie/${params.movieId}`, {
                method: 'GET',
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }
            
            setScreenings(data);
            setShowModal(true);
        } catch (error) {
            console.log('Error:', error);
        } finally {
            setloading(false);
        }
    }

    return (
        <div className={styles.container}>
            <BackComponent link={'/'}>Movie Details</BackComponent>
            <div className={styles.wrapper}>
                <div className={styles['hero-container']}>
                    <img src={movie?.poster} className={styles.img} />
                    <div className={styles['information-card_container']}>
                        <InformationCard icon={faBookmark} name="Category" information={'+13'}/>
                        <InformationCard icon={faClock} name="Duration" information={hourFormatter(movie?.duration)}/>
                        <InformationCard icon={faStar} name="Rating" information={`${movie?.rating}/10`}/>
                    </div>
                </div>
                <div className={styles['text-container']}>
                    <h1>{movie?.title}</h1>
                    <p>{movie?.description}</p>
                    <Button onClick={fetchScreenings} disabled={loading}>
                        {loading ? 'Loading...' : 'Get Ticket'}
                    </Button>
                    <a href={movie?.trailer} target="blank"><Button onClick={clickHandle}>Watch Trailer</Button></a>
                </div>
            </div>
            {showModal && <OrderModal closeModal={closeModal} screenings={screenings} />}
        </div>
    )
}

export default Movie;

export const loadMovie = async ({ params }: LoaderFunctionArgs) => {
    const { movieId } = params;
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/movies/getMovieById/${movieId}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch movie');
    }

    return await response.json();
};