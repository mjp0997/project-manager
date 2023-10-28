import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';



// Actions
import { handleModal } from '@/actions/ui';
import { setModalTaskId, setTargetTaskId } from '@/actions/boards';



const Task = ({listId, id, text}) => {

   const dispatch = useDispatch();

   const handleOpenModal = () => {
      dispatch(setModalTaskId(listId, id));
      dispatch(handleModal('task', true));
   }

   const handleDragStart = (e) => {
      e.dataTransfer.setData('taskId', id);
      e.dataTransfer.setData('listId', listId);
   }

   const handleDragEnter = (e) => {
      e.preventDefault();

      dispatch(setTargetTaskId({taskId: id}));
   }

   const handleDragEnd = () => {
      dispatch(setTargetTaskId({taskId: null}));
   }

   return (
      <li
         className='task prevent-selection'
         onClick={handleOpenModal}
         draggable
         onDragStart={handleDragStart}
         onDragEnter={handleDragEnter}
         onDragEnd={handleDragEnd}
         style={{viewTransitionName: `task-${id}`}}
      >
         <p>{text}</p>
      </li>
   );
}



Task.propTypes = {
   listId: PropTypes.number.isRequired,
   id: PropTypes.number.isRequired,
   text: PropTypes.string.isRequired,
}



export default Task;