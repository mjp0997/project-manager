import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';



// Actions
import { handleModal } from '@/actions/ui';
import { setModalTaskId, setTargetTaskId } from '@/actions/boards';



// Components
import Icon from '@/components/ui/Icon';



const Task = ({listId, id, text}) => {

   const dispatch = useDispatch();

   const { targetTask } = useSelector(state => state.boards);

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

      dispatch(setTargetTaskId({listId: null, taskId: id}));
   }

   const handleDragEnd = () => dispatch(setTargetTaskId({taskId: null}));

   return (
      <>
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

         {
            id === targetTask.taskId && (
               <li
                  className='task prevent-selection drop-zone'
               >
                  <Icon icon='faPlus' />
               </li>
            )
         }
      </>
   );
}



Task.propTypes = {
   listId: PropTypes.number.isRequired,
   id: PropTypes.number.isRequired,
   text: PropTypes.string.isRequired,
}



export default Task;