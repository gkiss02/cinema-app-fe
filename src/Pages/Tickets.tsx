import styles from './Tickets.module.css';
import Ticket from '../components/Ticket/Ticket';
import { useEffect, useState } from 'react';
import { getAuthToken } from '../utils/auth';
import Reservation from '../types/reservation';

function Tickets () {
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/reservations/getMyReservations`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getAuthToken()
                    }
                });

                if (response.status === 401) {
                    return;
                }

                const data = await response.json();
                setReservations(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);    

    return (
        <div className={styles.container}>
            <h1>Tickets</h1>
            <div className={styles['ticket-container']}>
                {reservations.map(reservation => 
                    <Ticket 
                        key={reservation.id} 
                        title={reservation.screening.movie.title} 
                        date={new Date(reservation.screening.date)} 
                        seats={reservation.seats.map(seat => seat.seatId)}
                    />
                )}
            </div>
        </div>
    )
}

export default Tickets;