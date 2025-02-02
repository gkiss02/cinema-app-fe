import styles from './OrderModal.module.css'
import { createPortal } from 'react-dom';
import DateCard from '../DateCard/DateCard';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Screening from '../../types/screening';

const OrderModal: React.FC<({closeModal: () => void})> = (props) => {
    const [selectedDate, setSelectedDate] = useState(1);
    const [selectedTime, setSelectedTime] = useState('');
    const [emptySelectedTime, setEmptySelectedTime] = useState(false);
    const [screenings, setScreenings] = useState<Screening[]>([]);
    const [selectedScreeningId, setSelectedScreeningId] = useState();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/screenings/getScreeningsByMovie/${params.movieId}`, {
                    method: 'GET',
                });
    
                const data = await response.json();
    
                if (data.error) {
                    throw new Error(data.error);
                }
                
                setScreenings(data);
            } catch (error) {
                console.log('Error:', error);
            }
        })();
    }, []);

    function selectDate(date: number) {
        setSelectedDate(date);
        setSelectedTime('');
        setEmptySelectedTime(false);
    }

    function selectScreening(event: any) {
        setSelectedScreeningId(event.target.id);
        setSelectedTime(event.target.dataset.date);
        setEmptySelectedTime(false);
    }

    function handleClick () {
        if (selectedTime != '' && selectedScreeningId) {
            navigate(`/booking/${selectedScreeningId}`);
        } else {
            setEmptySelectedTime(true);
        }
    }

    function getUniqueDates() {
        return Array.from(new Set(screenings.map(screening => new Date(screening.date.toString().split('T')[0]).getTime())));
    }


    return (
        createPortal (
        <div className={styles.container} onClick={props.closeModal}>
            <div className={styles['modal-container']} onClick={event => event.stopPropagation()}>
                <div className={styles['icon-container']} onClick={props.closeModal}>
                    <FontAwesomeIcon icon={faX}/>
                </div>
                <h3>Select Date</h3>
                <div className={styles['date-container']}>
                    {getUniqueDates().map(date => 
                        <DateCard day={new Date(date).getDate()} month={new Date(date).toLocaleString("en-US", { month: "short" })} selectedDate={selectedDate} selectDate={selectDate}/>
                    )}
                </div>
                <h3>Select Time</h3>
                <div className={styles['time-container']}>
                    {screenings.filter(screening => new Date(screening.date.toString().split('T')[0]).getDate() == selectedDate).map(screening =>
                        <div 
                            id={screening.id.toString()} 
                            data-date={new Date(screening.date).toUTCString()} 
                            className={`${styles.time} ${selectedTime == new Date(screening.date).toUTCString() && styles.selected} ${emptySelectedTime && styles.empty}`} 
                            onClick={selectScreening}>
                                {new Date(screening.date).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                        </div>
                    )}
                </div>
                <Button clickHandle={handleClick}>Order Now</Button>
            </div>
        </div>
        , document.body)
    )
}

export default OrderModal;