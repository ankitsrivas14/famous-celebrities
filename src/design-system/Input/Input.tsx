
import './Input.css'

interface InputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
    const { type, value, onChange } = props;
    return (
        <input className="input-element" type={type} value={value} onChange={onChange}  />
    )
}

export default Input;