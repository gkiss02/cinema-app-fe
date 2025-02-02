import style from './Input.module.css';

type InputProps = {
    placeholder: string;
    type: string;
};

const Input: React.FC<InputProps> = (props) => {
    return (
        <div className={style.container}>
            <p className={style.label}>{props.placeholder}</p>
            <input type={props.type} placeholder={props.placeholder} className={style.input}/>
        </div>
    );
}

export default Input;