import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';



// Components
import Icon from '@/components/ui/Icon';
import ListContextMenu from '@/components/lists/ListContextMenu';



// Services
import { updateList } from '@/services/lists';
import { useDispatch } from 'react-redux';
import { setContextPosition } from '@/actions/ui';



const ListHeader = ({id, name}) => {

   const dispatch = useDispatch();

   const { projectId, boardId } = useParams();

   const menuButtonRef = useRef(null);
   
   const [listTitle, setListTitle] = useState(name);
   const [menuIsOpen, setMenuIsOpen] = useState(false);

   useEffect(() => {
      const updateTimeout = setTimeout(() => {
         if (name !== listTitle) {
            handleUpdateTitle(Number(projectId), Number(boardId), id, listTitle);
         }
      }, 500);

      return () => clearTimeout(updateTimeout);
   }, [name, listTitle, id, projectId, boardId]);

   const handleUpdateTitle = async (projectId, boardId, listId, projectName) => await updateList(projectId, boardId, listId, { name: projectName });

   const handleChangeTitle = (e) => setListTitle(e.target.value);

   const handleOpenMenu = () => {
      const { top, left, height } = menuButtonRef.current.getBoundingClientRect();

      const resolvedLeft = (left + 300) > window.innerWidth ? window.innerWidth - 300 : left;

      const resolvedTop = top + height + 10;

      dispatch(setContextPosition(!menuIsOpen ? resolvedLeft : null, !menuIsOpen ? resolvedTop : null));

      setMenuIsOpen(current => !current);
   }

   const handleCloseMenu = (e) => {
      if (menuButtonRef.current && !menuButtonRef.current.contains(e.target) && menuButtonRef.current !== e.target) {
         setMenuIsOpen(false);
         dispatch(setContextPosition(null, null));
      }
   }

   return (
      <>
         <div className='list-header'>
            <input
               type='text'
               name={`list-${id}-name`}
               value={listTitle}
               onChange={handleChangeTitle}
            />
            
            <button
               type='button'
               onClick={handleOpenMenu}
               ref={menuButtonRef}
            >
               <Icon icon='faEllipsis' />
            </button>
         </div>

         <ListContextMenu isOpen={menuIsOpen} handleClose={handleCloseMenu} />
      </>
   );
}



ListHeader.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
}



export default ListHeader;