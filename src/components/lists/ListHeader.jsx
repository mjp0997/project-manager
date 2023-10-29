import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';



// Actions
import { setContextPosition } from '@/actions/ui';



// Components
import Icon from '@/components/ui/Icon';
import ListContextMenu from '@/components/lists/ListContextMenu';



// Custom hooks
import { useTaskDropzone } from '@/hooks/useTaskDropzone';



// Services
import { updateList } from '@/services/lists';



const ListHeader = ({id, name}) => {

   const dispatch = useDispatch();

   const { projectId, boardId } = useParams();

   const menuButtonRef = useRef(null);
   
   const [listTitle, setListTitle] = useState(name);
   const [menuIsOpen, setMenuIsOpen] = useState(false);

   const { handleDragOver, handleDragEnter, handleDragEnd, handleDrop } = useTaskDropzone(Number(projectId), Number(boardId), id);

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
         <div
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDrop={(e) => handleDrop(e, true)}
            onDragEnd={handleDragEnd}
         >
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