import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';



// Components
import Icon from '@/components/ui/Icon';



const ContextMenuContainer = ({children, isOpen, handleClose, title}) => {

   const menuRef = useRef(null);

   const { contextPosition } = useSelector(state => state.ui);

   useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);

      return () => document.removeEventListener('mousedown', handleOutsideClick);
   }, [isOpen]);

   const handleOutsideClick = e => {
      if (menuRef.current && !menuRef.current.contains(e.target) && menuRef.current !== e.target) {
         handleClose(e);
      }
   }

   if (!isOpen) {
      return (<></>);
   }

   return (
      <div
         className='context-menu-container'
         style={{ top: contextPosition.y, left: contextPosition.x, maxHeight: `calc(100vh - ${contextPosition.y}px)` }}
         ref={menuRef}
      >
         <div className='context-menu-header'>
            <p>{title}</p>

            <button
               type='button'
            >
               <Icon icon='faXmark' />
            </button>
         </div>
         
         <div className='context-menu'>
            {children}
         </div>
      </div>
   );
}



ContextMenuContainer.propTypes = {
   children: PropTypes.node.isRequired,
   isOpen: PropTypes.bool.isRequired,
   handleClose: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired
}



export default ContextMenuContainer;