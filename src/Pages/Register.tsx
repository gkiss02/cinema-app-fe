import { useState } from "react";
import Input from "../components/Input/Input";
import { useReservationContext } from "../context/ReservationContext";
import styles from './Register.module.css';
import Button from "../components/Button/Button";

function Register() {
    const reservationContext = useReservationContext();
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    
    const register = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword
                })
            });

            const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <h1>Register now!</h1>
            <div className={styles[`form-container`]}>
                <Input 
                    placeholder="First name" 
                    type="text"
                    onChange={setFirstName}
                />
                <Input 
                    placeholder="Last name" 
                    type="text"
                    onChange={setLastName}
                />
                <Input 
                    placeholder="Email" 
                    type="email"
                    onChange={setEmail}
                />
                <Input 
                    placeholder="Password" 
                    type="password"
                    onChange={setPassword}
                />
                <Input 
                    placeholder="Confirm password" 
                    type="password"
                    onChange={setConfirmPassword}
                />
            </div>
            <div className={styles.wrapper}>
                <Button onClick={register}>Register</Button>
                <div>
                    <p>Already have an account?</p>
                    <p>Login</p>
                </div>
            </div>
        </div>
    );
}

export default Register;