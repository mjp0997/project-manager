import PropTypes from 'prop-types';



// Components
import ContextMenuContainer from '@/components/ui/ContextMenuContainer';



const ListContextMenu = ({isOpen, handleClose}) => {

   return (
      <ContextMenuContainer isOpen={isOpen} handleClose={handleClose} title='List actions'>
         <div className='context-menu-options'>
            <button className='context-menu-option danger'>Copiar</button>
            <button className='context-menu-option'>Copiar</button>
            <button className='context-menu-option'>Copiar</button>
         </div>

         <div className='context-menu-separator'></div>

         <div className='context-menu-options'>
            <button className='context-menu-option'>Copiar</button>
            <button className='context-menu-option'>Copiar</button>
            <button className='context-menu-option'>Copiar</button>
         </div>

         <div className='context-menu-separator'></div>

         <div className='context-menu-options'>
            <button className='context-menu-option'>Copiar</button>
            <button className='context-menu-option'>Copiar</button>
            <button className='context-menu-option'>Copiar</button>
         </div>
      </ContextMenuContainer>
   );
}



ListContextMenu.propTypes = {
   isOpen: PropTypes.bool.isRequired,
   handleClose: PropTypes.func.isRequired,
}



export default ListContextMenu;