import styles from './OrderModal.module.css'
import { createPortal } from 'react-dom';
import DateCard from '../DateCard/DateCard';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const OrderModal: React.FC<({closeModal: () => void})> = (props) => {
    const [selectedDate, setSelectedDate] = useState(1);
    const [selectedTime, setSelectedTime] = useState('');
    const [emptySelectedTime, setEmptySelectedTime] = useState(false);
    const navigate = useNavigate();

    function selectDate(date: number) {
        setSelectedDate(date);
        setSelectedTime('');
        setEmptySelectedTime(false);
    }

    function selectTime(event: any) {
        setSelectedTime(event.target.id);
        setEmptySelectedTime(false);
    }

    function empty () {
        if (selectedTime != '') navigate('/booking')
        else setEmptySelectedTime(true);
    }

    return (
        createPortal (
        <div className={styles.container} onClick={props.closeModal}>
            <div className={styles['modal-container']} onClick={event => event.stopPropagation()}>
                <FontAwesomeIcon icon={faX} className={styles.icon} onClick={props.closeModal}/>
                <h3>Select Date</h3>
                <div className={styles['date-container']}>
                    <DateCard day={1} month="Jan" selectedDate={selectedDate} selectDate={selectDate}/>
                    <DateCard day={2} month="Jan" selectedDate={selectedDate} selectDate={selectDate}/>
                    <DateCard day={3} month="Jan" selectedDate={selectedDate} selectDate={selectDate}/>
                    <DateCard day={4} month="Jan" selectedDate={selectedDate} selectDate={selectDate}/>
                    <DateCard day={5} month="Jan" selectedDate={selectedDate} selectDate={selectDate}/>
                    <DateCard day={6} month="Jan" selectedDate={selectedDate} selectDate={selectDate}/>
                    <DateCard day={7} month="Jan" selectedDate={selectedDate} selectDate={selectDate}/>
                </div>
                <h3>Select Time</h3>
                <div className={styles['time-container']}>
                    <div id={'10:00'} className={`${styles.time} ${selectedTime == '10:00' && styles.selected} ${emptySelectedTime && styles.empty}`} onClick={selectTime}>10:00</div>
                    <div id={'12:00'} className={`${styles.time} ${selectedTime == '12:00' && styles.selected} ${emptySelectedTime && styles.empty}`} onClick={selectTime}>12:00</div>
                    <div id={'14:00'} className={`${styles.time} ${selectedTime == '14:00' && styles.selected} ${emptySelectedTime && styles.empty}`} onClick={selectTime}>14:00</div>
                    <div id={'16:00'} className={`${styles.time} ${selectedTime == '16:00' && styles.selected} ${emptySelectedTime && styles.empty}`} onClick={selectTime}>16:00</div>
                </div>
                <Button clickHandle={empty}>Order Now</Button>
            </div>
        </div>
        , document.body)
    )
}

export default OrderModal;