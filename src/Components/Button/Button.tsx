import styles from './Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<(ButtonProps)> = (props) => {
    return (    
        <button disabled={props.disabled} onClick={props.onClick} className={styles.container}>
            {props.children}
        </button>
    )
}

export default Button;