import styles from './Login.module.css';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function Login () {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const navigate = useNavigate();

    async function handleLogin() {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const data = await response.json();

            if (response.status === 401 || response.status === 403) {
                return;
            }

            sessionStorage.setItem('accessToken', data.accessToken);
            sessionStorage.setItem('refreshToken', data.refreshToken);
            const expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + 1);
            sessionStorage.setItem('expirationDate', expirationDate.toISOString());
            navigate('/');
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <Input type='email' placeholder='Email' onChange={setEmail} />
            <Input type='password' placeholder='Password' onChange={setPassword} />
            <Button onClick={handleLogin}>Login</Button>
        </div>
    )
}

export default Login;