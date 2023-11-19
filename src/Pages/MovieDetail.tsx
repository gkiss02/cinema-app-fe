import { useContext } from "react";
import { MovieCTX } from "../Context/Context";
import styles from './MovieDetail.module.css';
import { faBookmark, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import InformationCard from "../Components/InformationCard/InformationCard";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";
import BackComponent from "../Components/BackComponent/BackComponent";

function hourFormatter(minutes: number) {
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

function MovieDetail() {
    const movieCTX = useContext(MovieCTX);

    function clickHandle() {
        console.log('clicked');
    }

    return (
        <div className={styles.container}>
            <BackComponent link={'/'}>Movie Details</BackComponent>
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
                    <Link to={'/booking'}><Button clickHandle={clickHandle}>Get Ticket</Button></Link>
                    <a href={movieCTX.movie.trailer} target="blank"><Button clickHandle={clickHandle}>Watch Trailer</Button></a>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;