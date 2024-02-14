import './Select.css';

interface OptionsType {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    options: OptionsType[];
}

const Select = (props: SelectProps) => {
    const { value, options } = props;
    return (
        <select className='select-element' value={value}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}

export default Select;
