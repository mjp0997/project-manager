import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';



// Components
import Icon from '@/components/ui/Icon';



// Services
import { updateList } from '@/services/lists';



const ListHeader = ({id, name}) => {

   const { projectId, boardId } = useParams();
   
   const [listTitle, setListTitle] = useState(name);

   useEffect(() => {
      const updateTimeout = setTimeout(() => {
         if (name !== listTitle) {
            handleUpdateTitle(Number(projectId), Number(boardId), id, listTitle);
         }
      }, 500);

      return () => clearTimeout(updateTimeout);
   }, [name, listTitle, id, projectId, boardId]);

   const handleUpdateTitle = async (projectId, boardId, listId, projectName) => await updateList(projectId, boardId, listId, { name: projectName });

   const handleChangeTitle = (e) => setListTitle(e.target.value)

   return (
      <div className='list-header'>
         <input
            type='text'
            name={`list-${id}-name`}
            value={listTitle}
            onChange={handleChangeTitle}
         />
         
         <Icon icon='faEllipsis' />
      </div>
   );
}



ListHeader.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
}



export default ListHeader;