import './Collapsible.css'
import CaretIcon from '../../assets/icons/caret.svg'

interface CollapsibleProps {
  children: React.ReactNode;
  isOpen: boolean;
  id: number;
  picture: string;
  onClick: (id: number) => void;
}


const Collapsible = (props: CollapsibleProps) => {

  const { children, isOpen, onClick, id, picture} = props;

  return (
    <div className='collapsible-wrapper'>
      <div className='header' onClick={() => onClick(id)}>
        <div className='header-info'>
          <img
            className='header-image' 
            src={picture} 
            alt="collapsible-image" 
          />
          <div className='header-text'>John Doe</div>
        </div>
        <img 
          className='header-icon' 
          src={CaretIcon}
          alt="caret-icon" 
        />
      </div>
      {isOpen && <div className='content'>
        {children}
      </div>}
    </div>
  );
};

export default Collapsible;
