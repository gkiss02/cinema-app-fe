import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Ticket from "../components/Ticket/Ticket";
import styles from "./OrderForm.module.css";

function OrderForm() {
    return (
        <div className={styles.container}>
            <Ticket />
            <div className={styles['form-container']}>
                <Input 
                    placeholder="First name" 
                    type="text"
                />
                <Input 
                    placeholder="Last name" 
                    type="text"
                />
                <Input 
                    placeholder="Email" 
                    type="email"
                />
                <Input 
                    placeholder="Phone" 
                    type="tel"
                />
                <div className={styles['checkbox-container']}>
                    <input type="checkbox" />
                    <p>I would like to register</p>
                </div>
            </div>
            <Button clickHandle={() => {}}>Order</Button>
        </div>
    );
}

export default OrderForm;