import styles from "./TicketDetail.module.css";
import BackComponent from "../Components/BackComponent/BackComponent";

function TicketDetail() {
    const img = require('../Assets/shang-chi.jpg')

    return (
        <div className={styles.container}>
            <BackComponent link={"/"}>Ticket Detail</BackComponent>
            <div className={styles.wrapper}>
                <img src={img} alt="endgame" className={styles.img}/>
                <h3 >Shang-Chi and the Legend of the Ten Rings</h3>
                <div>
                    <p>09:00 | Jan 1 2024</p>
                    <p>E8;E9</p>
                </div>
            </div>
        </div>
    );
}

export default TicketDetail;