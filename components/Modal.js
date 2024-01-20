
import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose, handleClick }) => {
  if (!isOpen) return null;

 //add code here
    return ReactDOM.ceatePortal(
    <div className='modal' onClick={()=>handleClick()}>
      
      <div style={{ backgroundColor: 'white', padding: '2rem', position: 'relative' }} onClick={(e) => e.stopPropagation()} >// This prevents the modal from closing when clicking inside
   //add code here
{children}
      </div>
    </div>,
    document.body
)
};

export default Modal;
