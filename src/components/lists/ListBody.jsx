import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';



// Components
import Task from '@/components/tasks/Task';
import TaskDragPlaceholder from '@/components/tasks/TaskDragPlaceholder';



// Custom hooks
import { useTaskDropzone } from '@/hooks/useTaskDropzone';



const ListBody = ({listId, tasks}) => {
   
   const { projectId, boardId } = useParams();

   const { targetTask } = useSelector(state => state.boards);

   const { handleDragOver, handleDrop } = useTaskDropzone(Number(projectId), Number(boardId), listId);

   return (
      <div className='list-body custom-scrollbar'>
         <ol className='list-content' onDragOver={handleDragOver} onDrop={handleDrop}>
            {
               (targetTask.listId === listId && targetTask.taskId === -1) && (
                  <TaskDragPlaceholder />
               )
            }

            {
               tasks.map(task => (
                  <React.Fragment key={`task-${task.id}`}>
                     <Task
                        listId={listId}
                        id={task.id}
                        text={task.text}
                     />

                     {
                        task.id === targetTask.taskId && (
                           <TaskDragPlaceholder />
                        )
                     }
                  </React.Fragment>
               ))
            }

            {
               (tasks.length === 0 && targetTask.listId !== listId) && (
                  <li
                     className='task prevent-selection empty-list'
                  >
                     <p>Empty list...</p>
                  </li>
               )
            }
         </ol>
      </div>
   );
}



ListBody.propTypes = {
   listId: PropTypes.number.isRequired,
   tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
   })).isRequired,
}



export default ListBody;