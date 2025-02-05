import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Ticket from "../components/Ticket/Ticket";
import { useReservationContext } from "../context/ReservationContext";
import styles from "./OrderForm.module.css";

function OrderForm() {
    const reservationContext = useReservationContext();
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [register, setRegister] = useState(false);

    const makeReservation = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/reservations/makeReservation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    screeningId: reservationContext.screeningId,
                    seats: reservationContext.reservedSeats,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                }),
            });

            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <Ticket
                title={reservationContext.title}
                date={reservationContext.date}
                seats={reservationContext.reservedSeats}
            />
            <div className={styles['form-container']}>
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
                <div className={styles['checkbox-container']}>
                    <input type="checkbox" />
                    <p>I would like to register</p>
                </div>
            </div>
            <Button onClick={makeReservation}>Order</Button>
        </div>
    );
}

export default OrderForm;