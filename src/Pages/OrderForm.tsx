import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Ticket from "../components/Ticket/Ticket";
import { useReservationContext } from "../context/ReservationContext";
import styles from "./OrderForm.module.css";
import { useNavigate } from "react-router-dom";
import BackendError from "../types/backendError";
import CheckoutForm from "../components/CheckOutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";

function OrderForm() {
    const reservationContext = useReservationContext();
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState<BackendError[]>([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

            if (response.status === 422) {
                let arr: BackendError[] = [];
                data.errors.forEach((error: BackendError) => {
                    arr.push(error);
                })
                setErrors(arr);
                return;
            }

            navigate('/reservationSuccess');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const stripePromise =
    loadStripe('pk_test_51QqYEk2X1ovq6uUrFRxnjdYmpFuNUeRLs8H4g1GRd1sMfFyHW63C7LTJiH3LGBJYfXHnnxyxY63KxFt6mAzL7Hwi00TigGKEg0');
const options: StripeElementsOptions = {
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
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
                    errorMessage={errors.find(x => x.path == 'firstName')?.msg} 
                    isValid={errors.find(x => x.path == 'firstName') ? true : false} 
                />
                <Input 
                    name="lastName"
                    label="Last name"
                    placeholder="Doe" 
                    type="text"
                    onChange={setLastName}
                    errorMessage={errors.find(x => x.path == 'lastName')?.msg}
                    isValid={errors.find(x => x.path == 'lastName') ? true : false}
                />
                <Input 
                    name="lastName"
                    label="Last name"
                    placeholder="johndoe@example.com" 
                    type="email"
                    onChange={setEmail}
                    errorMessage={errors.find(x => x.path == 'email')?.msg}
                    isValid={errors.find(x => x.path == 'email') ? true : false}
                />
            </div>
            <Button onClick={handleOpen}>{loading ? 'Ordering...' : 'Order'}</Button>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm open={open} onClose={handleClose} />
            </Elements>
        </div>
    );
}

export default OrderForm;