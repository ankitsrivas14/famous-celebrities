import './CelebrityInfo.css'
import DeleteIcon from '../../../assets/icons/delete.svg'
import PencilIcon from '../../../assets/icons/pencil.svg'
import Input from '../../../design-system/Input/Input';
import { useState } from 'react';
import Select from '../../../design-system/Select/Select';
import Textarea from '../../../design-system/Textarea/Textarea';

interface CelebrityInfoProps {
    description: string;
}

const GenderOptions = [
    {value: 'na', label: 'Rather not say'},
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
]

const CelebrityInfo = (props: CelebrityInfoProps) => {
    const { description } = props;
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="celebrity-info">
            <div className="header">
                <div className='header-content'>
                    <div className="label">Age</div>
                    <div className="description" onClick={() => setIsActive(!isActive)}>
                        {isActive ? (
                            <Input type='text' value='19 Years' onChange={() => {}} />
                        ) : (
                            <span>19 Years</span>
                        )}
                    </div>
                </div>
                <div className='header-content'>
                    <div className="label">Gender</div>
                    <div className="description">
                        <Select value={"0"} options={GenderOptions} />
                    </div>
                </div>
                <div className='header-content'>
                    <div className="label">Country</div>
                    <div className="description">
                    {isActive ? (
                        <Input type='text' value='India' onChange={() => {}} />
                    ) : (
                        <span>India</span>
                    )}
                    </div>
                </div>
                <div />
            </div>
            <div className='content'>
                <div className='label'>Description</div>
                <div className='description'>
                    {isActive ? (
                        <Textarea value={description} onChange={() => {}} />
                    ) : (
                        <span>{description}</span>
                    )}
                </div>
            </div>
            <div className='footer'>
                <img src={DeleteIcon} alt="delete-icon" />
                <img src={PencilIcon} alt="edit-icon" />
            </div>
        </div>
    );
}

export default CelebrityInfo;