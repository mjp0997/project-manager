import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';



// Custom hooks
import { useScrollbarSize } from '@/hooks/useScrollbarSize';



const Modal = ({children, className, state, close}) => {

   const modal = useRef(null);

   const scrollWidth = useScrollbarSize();

   useEffect(() => {
      const header = document.querySelector('.header-group');

      if (state) {
         document.body.style.paddingRight = `${scrollWidth}px`;

         if (header) {
            header.style.right = `${scrollWidth}px`;
            header.style.width = `calc(100% - ${scrollWidth}px)`;
         }

         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.paddingRight = 0;

         if (header) {
            header.style.right = 0;
            header.style.width = '100%';
         }

         document.body.style.overflow = 'auto';
      }
   }, [state, scrollWidth]);

   const handleShow = (status) => status ? 'modal-container active' : 'modal-container';
   
   const handleClose = (e) => {
      if (modal.current && modal.current === e.target) {
         close();
      }
   }
   
   return (
      <div className={handleShow(state)} onClick={handleClose}>
         <div className={'modal ' + className} ref={modal}>
            {children}
         </div>
      </div>
   );
}



Modal.propTypes = {
   children: PropTypes.element.isRequired,
   className: PropTypes.string,
   state: PropTypes.bool.isRequired,
   close: PropTypes.func.isRequired
}

Modal.defaultProps = {
   className: ''
}



export default Modal;