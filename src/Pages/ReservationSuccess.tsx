import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import styles from './ReservationSuccess.module.css';

function ReservationSuccess() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  
  return (
    <div className={styles.container}>
      <div>
        <h2>Reservation was successful!</h2>
        <p>We send you the tickets via email</p>
      </div>
      <Button onClick={handleClick}>Back to home</Button>
    </div>
  );
}

export default ReservationSuccess;