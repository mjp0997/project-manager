import { flushSync } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';



// ACtions
import { moveTask, setTargetTaskId } from '@/actions/boards';



// Components
import NewTaskButton from '@/components/board/NewTaskButton';
import ListHeader from '@/components/board/ListHeader';
import Task from '@/components/board/Task';
import Icon from '@/components/ui/Icon';



// Services
import { moveOneTask } from '@/services/tasks';



const List = ({id, name, tasks}) => {

   const dispatch = useDispatch();

   const { projectId, boardId } = useParams();

   const { targetTask } = useSelector(state => state.boards);

   const handleDragOver = (e) => e.preventDefault();

   const handleDragEnter = () => dispatch(setTargetTaskId({listId: id, taskId: -1}));

   const handleDragEnd = () => dispatch(setTargetTaskId({listId: null}));

   const handleDrop = async (e, isHeader = false) => {
      e.preventDefault();

      const currentListId = e.dataTransfer.getData('listId');
      const taskId = e.dataTransfer.getData('taskId');

      const resolvedTargetTaskId = !isHeader ? targetTask.taskId : -1;

      document.startViewTransition(() => {
         flushSync(() => {
            dispatch(moveTask(Number(currentListId), id, Number(taskId), resolvedTargetTaskId));
         });
      });

      dispatch(setTargetTaskId({listId: null, taskId: null}));

      await moveOneTask(Number(projectId), Number(boardId), Number(currentListId), id, Number(taskId), resolvedTargetTaskId);
   }

   return (
      <li className='list'>
         <div
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDrop={(e) => handleDrop(e, true)}
            onDragEnd={handleDragEnd}
         >
            <ListHeader id={id} name={name} />
         </div>

         <div className='list-body'>
            <ol className='list-content' onDragOver={handleDragOver} onDrop={handleDrop}>
               {
                  (targetTask.listId === id && targetTask.taskId === -1) && (
                     <li
                        className='task prevent-selection drop-zone'
                     >
                        <Icon icon='faPlus' />
                     </li>
                  )
               }

               {
                  tasks.map(task => (
                     <Task
                        key={`task-${task.id}`}
                        listId={id}
                        id={task.id}
                        text={task.text}
                     />
                  ))
               }

               {
                  (tasks.length === 0 && targetTask.listId !== id) && (
                     <li
                        className='task prevent-selection empty-list'
                     >
                        <p>Empty list...</p>
                     </li>
                  )
               }
            </ol>
         </div>

         <div className='list-footer'>
            <NewTaskButton listId={id} />
         </div>
      </li>
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