import PropTypes from 'prop-types';



// Components
import NewTaskButton from '@/components/lists/NewTaskButton';
import ListHeader from '@/components/lists/ListHeader';
import ListBody from '@/components/lists/ListBody';
import ListContextMenu from '@/components/lists/ListContextMenu';



// Custom hooks
import { useListDragAndDrop } from '@/hooks/useListDragAndDrop';
import { useContextLikeMenu } from '@/hooks/useContextLikeMenu';



const List = ({id, name, tasks}) => {

   const { handleDragStart, handleDragEnter, handleDragEnd } = useListDragAndDrop(id);

   const { menuButtonRef, menuIsOpen, handleCloseMenu, handleOpenMenu } = useContextLikeMenu();

   return (
      <>
         <li
            className='list'
            draggable
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
            style={{viewTransitionName: `list-${id}`}}
         >
            <ListHeader id={id} name={name} handleOpenMenu={handleOpenMenu} menuButtonRef={menuButtonRef} />

            <ListBody
               listId={id}
               tasks={tasks}
            />

            <div className='list-footer'>
               <NewTaskButton listId={id} />
            </div>
         </li>
         
         <ListContextMenu isOpen={menuIsOpen} handleClose={handleCloseMenu} />
      </>
   );
}



List.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
   })).isRequired
}



export default List;