import { useContext } from "react";
import { MovieCTX } from "../Context/Context";
import styles from './MovieInformation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookmark, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import InformationCard from "../Components/InformationCard/InformationCard";
import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";

function hourFormatter(minutes: number) {
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

function MovieInformation() {
    const movieCTX = useContext(MovieCTX);
    const navigate = useNavigate();

    function clickHandle() {
        console.log('clicked');
    }

    function goBack() {
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <div className={styles['back-container']}>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goBack}/>
                <span>Movie Detail</span>
            </div>
            <div className={styles.wrapper}>
                <div className={styles['hero-container']}>
                    <img src={movieCTX.movie.image} className={styles.img}></img>
                    <div className={styles['information-card_container']}>
                        <InformationCard icon={faBookmark} name="Category" information={'+13'}/>
                        <InformationCard icon={faClock} name="Duration" information={hourFormatter(movieCTX.movie.duration)}/>
                        <InformationCard icon={faStar} name="Rating" information={`${movieCTX.movie.rating}/10`}/>
                    </div>
                </div>
                <div className={styles['text-container']}>
                    <h1 className={styles.title}>{movieCTX.movie.title}</h1>
                    <p className={styles.description}>{movieCTX.movie.description}</p>
                    <p><b>Director:</b> {movieCTX.movie.director}</p>
                    <p>
                        <b>Actors: </b> 
                        {movieCTX.movie.actors.map((actor, index) => {return actor + (index == movieCTX.movie.actors.length - 1 ? '' : ', ')})}
                    </p>
                    <Button clickHandle={clickHandle}>Get Ticket</Button>
                    <Button clickHandle={clickHandle}>Watch Trailer</Button>
                </div>
            </div>
        </div>
    )
}

export default MovieInformation;