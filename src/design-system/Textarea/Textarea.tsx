
import './Textarea.css'

interface TextareaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = (props: TextareaProps) => {
    const { value, onChange } = props;
    return (
        <textarea className="textarea-element" value={value} onChange={onChange} />
    )
}

export default Textarea;