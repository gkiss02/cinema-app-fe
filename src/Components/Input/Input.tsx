import { useRef } from 'react';
import styles from './Input.module.css';

type InputProps = {
    placeholder: string;
    type: string;
    onChange: (s: string | undefined) => void;
};

const Input: React.FC<InputProps> = (props) => {
    let ref = useRef<HTMLInputElement>(null);
    
    function changeHandler () {
        props.onChange(ref.current?.value);
    }

    return (
        <div className={styles.container}>
            <p className={styles.label}>{props.placeholder}</p>
            <input type={props.type} 
            placeholder={props.placeholder} 
            className={styles.input}
            ref={ref} 
            onChange={changeHandler}
        />
        </div>
    );
}

export default Input;