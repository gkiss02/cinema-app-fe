import BackComponent from '../Components/BackComponent/BackComponent';
import styles from './Booking.module.css';

function Booking() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    let numbers: number[] = [];
    for (let i = 0; i < 165; i++) {
        numbers.push(i);
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
                    }

                    if (number < 150) {
                        return (<div className={`${styles.square} ${(number % 15 != 0 && number % 15 != 14 && number % 15 != 6 && number % 15 != 7) && styles.seat}`}>
                            {(number % 15 == 0 || number % 15 == 14) && <p>{letters[count]}</p>}
                        </div>)
                    } else {
                        return (<div className={styles.square}>{number == 150 || number == 164 || number == 156 || number == 157  ? ' ' : seatNumber++}</div>)
                    }
                })}
            </div>
        </div>
    );
}

export default Booking;