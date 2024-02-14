import './Collapsible.css'
import CaretIcon from '../../assets/icons/caret.svg'


const Collapsible = ({children}) => {
  return (
    <div className='collapsible-wrapper'>
      <div className='header'>
        <div className='header-info'>
            <img
              className='header-image' 
              src="https://images.pexels.com/photos/12592489/pexels-photo-12592489.png?auto=compress&cs=tinysrgb&w=300" 
              alt="collapsible-image" 
            />
          <div className='header-text'
        >
          John Doe
        </div>
        </div>
        <img 
          className='header-icon' 
          src={CaretIcon}
          alt="caret-icon" 
        />
      </div>
      <div className='content'>
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
