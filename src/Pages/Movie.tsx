import { useEffect, useState } from "react";
import styles from './Movie.module.css';
import { faBookmark, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import InformationCard from "../components/InformationCard/InformationCard";
import Button from "../components/Button/Button";
import BackComponent from "../components/BackComponent/BackComponent";
import OrderModal from "../components/OrderModel/OrderModal";
import { useParams } from "react-router-dom";
import { Movie as MovieType } from '../types/movie';
import { useReservationContext } from "../context/ReservationContext";

function hourFormatter(minutes: number | undefined) {
    if (!minutes) {
        return '';
    }
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

function Movie() {
    const params = useParams();
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState<MovieType>();
    const reservationContext = useReservationContext();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/movies/getMovieById/${params.movieId}`, {
                    method: 'GET',
                });

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }
                
                setMovie(data);

                reservationContext.setTitle(data.title);
            } catch (error) {
                console.log('Error:', error);
            }
        })();
    }, [params]);

    function clickHandle() {
        console.log('clicked');
    }

    function closeModal() {
        setShowModal(!showModal);
    }

    return (
        <div className={styles.container}>
            <BackComponent link={'/'}>Movie Details</BackComponent>
            <div className={styles.wrapper}>
                <div className={styles['hero-container']}>
                    <img src={movie?.poster} className={styles.img}></img>
                    <div className={styles['information-card_container']}>
                        <InformationCard icon={faBookmark} name="Category" information={'+13'}/>
                        <InformationCard icon={faClock} name="Duration" information={hourFormatter(movie?.duration)}/>
                        <InformationCard icon={faStar} name="Rating" information={`${movie?.rating}/10`}/>
                    </div>
                </div>
                <div className={styles['text-container']}>
                    <h1 className={styles.title}>{movie?.title}</h1>
                    <p className={styles.description}>{movie?.description}</p>
                    <Button onClick={closeModal}>Get Ticket</Button>
                    <a href={movie?.trailer} target="blank"><Button onClick={clickHandle}>Watch Trailer</Button></a>
                </div>
            </div>
            {showModal && <OrderModal closeModal={closeModal}></OrderModal>}
        </div>
    )
}

export default Movie;