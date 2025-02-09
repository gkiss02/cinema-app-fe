import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Ticket from "../components/Ticket/Ticket";
import { useReservationContext } from "../context/ReservationContext";
import styles from "./OrderForm.module.css";
import { useNavigate } from "react-router-dom";

function OrderForm() {
    const reservationContext = useReservationContext();
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const makeReservation = async () => {
        setLoading(true);
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

            navigate('/reservationSuccess');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
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
                    name="firstName"
                    label="First name"
                    placeholder="John" 
                    type="text"
                    onChange={setFirstName}
                />
                <Input 
                    name="lastName"
                    label="Last name"
                    placeholder="Doe" 
                    type="text"
                    onChange={setLastName}
                />
                <Input 
                    name="lastName"
                    label="Last name"
                    placeholder="johndoe@example.com" 
                    type="email"
                    onChange={setEmail}
                />
            </div>
            <Button onClick={makeReservation}>{loading ? 'Ordering...' : 'Order'}</Button>
        </div>
    );
}

export default OrderForm;