import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';



// Components
import Icon from '@/components/ui/Icon';



// Custom hooks
import { useTaskDropzone } from '@/hooks/useTaskDropzone';



// Services
import { updateList } from '@/services/lists';



const ListHeader = ({id, name, handleOpenMenu, menuButtonRef}) => {

   const { projectId, boardId } = useParams();
   
   const [listTitle, setListTitle] = useState(name);
   const [wasClicked, setWasClicked] = useState(false);

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

   const handleInputFocus = (giveFocus = true) => setWasClicked(giveFocus);

   return (
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
               className={wasClicked ? 'focus' : ''}
               onClick={() => handleInputFocus()}
               onBlur={() => handleInputFocus(false)}
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
   );
}



ListHeader.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   handleOpenMenu: PropTypes.func.isRequired,
   menuButtonRef: PropTypes.object.isRequired,
}



export default ListHeader;