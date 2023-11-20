import styles from './DateCard.module.css';

const DateCard: React.FC<({day: number, month: string, selectedDate: number, selectDate: (date: number) => void})> = (props) => {
    function clickHandle() {
        props.selectDate(props.day);
    }

    return (
        <div className={styles.container} style={{borderColor: props.selectedDate == props.day ? 'white' : ''}} onClick={clickHandle}>
            <h3>{props.day}</h3>
            <h4>{props.month}</h4>
        </div>
    )
}

export default DateCard;