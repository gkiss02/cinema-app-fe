import styles from './Button.module.css';

const Button: React.FC<({children: React.ReactNode, onClick: () => void})> = (props) => {
    return (    
        <button onClick={props.onClick} className={styles.container}>{props.children}</button>
    )
}

export default Button;