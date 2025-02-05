import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ConfirmEmail.module.css';
import Button from '../components/Button/Button';

function ConfirmEmail() {
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            try {
                const token = window.location.search.split('=')[1];
                
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/confirm-email/${token}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json();
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    }, [])
    
    return (
        <div className={styles.container}>
            <h1>Email successfully confirmed!</h1>
            <p>Click the button below to login</p>
            <Button onClick={() => navigate('/')}>Login</Button>   
        </div>
    );
}

export default ConfirmEmail;