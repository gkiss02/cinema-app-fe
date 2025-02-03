import { useRef } from 'react';
import style from './Input.module.css';

type InputProps = {
    placeholder: string;
    type: string;
    setValue: (s: string | undefined) => void;
};

const Input: React.FC<InputProps> = (props) => {
    let ref = useRef<HTMLInputElement>(null);
    
    function changeHandler () {
        props.setValue(ref.current?.value);
    }

    return (
        <div className={style.container}>
            <p className={style.label}>{props.placeholder}</p>
            <input type={props.type} 
            placeholder={props.placeholder} 
            className={style.input}
            ref={ref} 
            onChange={changeHandler}
        />
        </div>
    );
}

export default Input;