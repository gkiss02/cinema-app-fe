import styles from './Button.module.css';

const Button: React.FC<({children: React.ReactNode, clickHandle: () => void})> = (props) => {
    return (    
        <button onClick={props.clickHandle} className={styles.container}>{props.children}</button>
    )
}

export default Button;