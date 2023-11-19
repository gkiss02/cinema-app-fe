import styles from './BackComponent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BackComponent: React.FC<({children: React.ReactNode, link: string})> = (props) => {
    return (
        <div className={styles['container']}>
            <Link to={props.link}><FontAwesomeIcon icon={faArrowLeft} color='white'/></Link>
            <span>{props.children}</span>
        </div>
    )
}

export default BackComponent;