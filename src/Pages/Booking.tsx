import BackComponent from '../Components/BackComponent/BackComponent';
import Button from '../Components/Button/Button';
import SeatSign from '../Components/SeatSign/SeatSign';
import styles from './Booking.module.css';
import { useState } from 'react';

function Booking() {
    const [isSelected, setIsSelected] = useState<string[]>([]);
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    let numbers: number[] = [];
    for (let i = 0; i < 165; i++) {
        numbers.push(i);
    }

    function select(event: any) {
        const id = event.target.id;
        if (isSelected.includes(id)) {
            setIsSelected(isSelected.filter((element) => element != id));
        } else {
            setIsSelected([...isSelected, id]);
        }
    }

    let count = -1;
    let seatNumber = 1;
    return (
        <div className={styles.container}>
            <BackComponent link='/'>Select seats</BackComponent>
            <div className={styles.canvas}></div>
            <div className={styles['seats-container']}>
                {numbers.map((number) => {
                    if (number % 15 == 0) {
                        count++;
                        seatNumber = 1;
                    }
                    const isSeat = number % 15 != 0 && number % 15 != 14 && number % 15 != 6 && number % 15 != 7;
                    const seatId = letters[count] + seatNumber;
                    if (isSeat && number < 150) seatNumber++;
                    if (number < 150) {
                        return (<div 
                                    id={isSeat ? seatId : number.toString()} 
                                    className={`${styles.square} ${isSeat && styles.seat} 
                                                ${isSeat && isSelected.includes(seatId) && styles.selected}`
                                            } 
                                    onClick={select}
                                >
                            {(number % 15 == 0 || number % 15 == 14) && <p>{letters[count]}</p>}
                        </div>)
                    } else {
                        return (<div className={styles.square}>{number == 150 || number == 164 || number == 156 || number == 157  ? ' ' : seatNumber++}</div>)
                    }
                })}
            </div>
            <div className={styles['sign-container']}>
                <SeatSign color='#455A64'>Available</SeatSign>
                <SeatSign color='white'>Selected</SeatSign>
                <SeatSign color='#90A4AE'>Reserved</SeatSign>
            </div>
            {isSelected.length != 0 && <div className={styles['confirm-container']}>
                <Button clickHandle={() => {}}>Confirm</Button>
            </div>}
        </div>
    );
}

export default Booking;