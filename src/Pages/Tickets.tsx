import styles from './Tickets.module.css';
import Ticket from '../Components/Ticket/Ticket';

function Tickets () {
    return (
        <div className={styles.container}>
            <div className={styles['ticket-container']}>
                <Ticket></Ticket>
                <Ticket></Ticket>
                <Ticket></Ticket>
            </div>
        </div>
    )
}

export default Tickets;