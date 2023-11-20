import { ReactNode } from 'react';
import styles from './SeatSign.module.css';

const SeatSign: React.FC<({color: string, children: ReactNode})> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.square} style={{backgroundColor: props.color}}></div>
            <p>{props.children}</p>
        </div>
    );
}

export default SeatSign;