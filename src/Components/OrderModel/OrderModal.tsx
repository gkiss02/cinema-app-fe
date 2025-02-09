import styles from './OrderModal.module.css'
import { createPortal } from 'react-dom';
import DateCard from '../DateCard/DateCard';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Screening from '../../types/screening';
import { useReservationContext } from '../../context/ReservationContext';

const OrderModal: React.FC<({closeModal: () => void, screenings: Screening[]})> = (props) => {
    const [selectedDate, setSelectedDate] = useState(1);
    const [selectedTime, setSelectedTime] = useState('');
    const [emptySelectedTime, setEmptySelectedTime] = useState(false);
    const [selectedScreeningId, setSelectedScreeningId] = useState();
    const reservationContext = useReservationContext();
    const navigate = useNavigate();

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
            reservationContext.setScreeningId(selectedScreeningId);
            reservationContext.setDate(new Date(selectedTime));
        } else {
            setEmptySelectedTime(true);
        }
    }

    function getUniqueDates() {
        return Array.from(new Set(props.screenings.map(screening => new Date(screening.date.toString().split('T')[0]).getTime())));
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
                    {props.screenings.filter(screening => new Date(screening.date.toString().split('T')[0]).getDate() == selectedDate).map(screening =>
                        <div 
                            id={screening.id.toString()} 
                            data-date={new Date(screening.date).toUTCString()} 
                            className={`${styles.time} ${selectedTime == new Date(screening.date).toUTCString() && styles.selected} ${emptySelectedTime && styles.empty}`} 
                            onClick={selectScreening}>
                                {new Date(screening.date).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                        </div>
                    )}
                </div>
                <Button onClick={handleClick}>Order Now</Button>
            </div>
        </div>
        , document.body)
    )
}

export default OrderModal;