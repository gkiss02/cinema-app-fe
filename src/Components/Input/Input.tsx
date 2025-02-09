import { useRef } from 'react';
import styles from './Input.module.css';

type InputProps = {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    onChange: (s: string | undefined) => void;
    isValid: boolean;
    errorMessage: string | undefined;
};

const Input: React.FC<InputProps> = (props) => {
    let ref = useRef<HTMLInputElement>(null);
    
    function changeHandler () {
        props.onChange(ref.current?.value);
    }

    return (
        <div className={styles.container}>
            <p className={styles.label}>{props.label}</p>
            <input type={props.type} 
                placeholder={props.placeholder} 
                className={`${styles.input} ${props.isValid && styles['error-border']}`} 
                ref={ref} 
                onChange={changeHandler}
                name={props.name}
            />
            {<p className={styles['error-text']} style={{visibility: props.isValid ? 'visible' : 'hidden'}}>
                {props.errorMessage}
            </p>}
        </div>
    );
}

export default Input;