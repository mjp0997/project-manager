import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';



// Actions
import { handleModal } from '@/actions/ui';
import { dragTypes, setDragType, setTargetTaskId, startSetModalTask } from '@/actions/boards';



const Task = ({listId, id, text}) => {

   const dispatch = useDispatch();

   const { dragType } = useSelector(state => state.boards);

   const handleOpenModal = () => {
      dispatch(startSetModalTask(listId, id));
      dispatch(handleModal('task', true));
   }

   const handleDragStart = (e) => {
      e.stopPropagation();

      dispatch(setDragType(dragTypes.task));

      e.dataTransfer.setData('taskId', id);
      e.dataTransfer.setData('listId', listId);
   }

   const handleDragEnter = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (dragType !== dragTypes.task) return;

      dispatch(setTargetTaskId({listId: null, taskId: id}));
   }

   const handleDragEnd = (e) => {
      e.stopPropagation();
      
      if (dragType !== dragTypes.task) return;

      dispatch(setTargetTaskId({taskId: null}));

      dispatch(setDragType(null));
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