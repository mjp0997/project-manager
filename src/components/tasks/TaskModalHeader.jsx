import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';



// Actions
import { handleModal } from '@/actions/ui';
import { updateCurrentTask } from '@/actions/boards';



// Components
import Icon from '@/components/ui/Icon';



// Services
import { updateTask } from '@/services/tasks';



const TaskModalHeader = ({text}) => {

   const dispatch = useDispatch();

   const { projectId, boardId } = useParams();

   const { openTask } = useSelector(state => state.boards);

   const [firstExecution, setFirstExecution] = useState(true);
   
   const taskNameRef = useRef(null);

   useEffect(() => {
      const updateTimeout = setTimeout(() => {
         if (!firstExecution) {
            handleUpdateText(Number(projectId), Number(boardId), openTask?.listId, openTask?.taskId, text);
         }
      }, 500);

      return () => clearTimeout(updateTimeout);
   }, [projectId, boardId, openTask?.listId, openTask?.taskId, text, firstExecution]);
  
   useEffect(() => {
      taskNameRef.current.style.height = 'auto';
      taskNameRef.current.style.height = taskNameRef.current.scrollHeight + 'px';
   }, [text]);

   const handleCloseModal = () => dispatch(handleModal('task', false));

   const handleTaskName = (e) => {
      dispatch(updateCurrentTask(openTask.listId, openTask.taskId, { text: e.target.value }));
      setFirstExecution(false);
   }

   const handleUpdateText = async (projectId, boardId, listId, taskId, text) => {
      await updateTask(projectId, boardId, listId, taskId, { text });
   }

   return (
      <div className='task-modal-header'>
         <textarea
            name='task-name'
            rows={1}
            value={text}
            onChange={handleTaskName}
            ref={taskNameRef}
         />

         <button
            type='button'
            onClick={handleCloseModal}
         >
            <Icon icon='faXmark' />
         </button>
      </div>
   );
}



TaskModalHeader.propTypes = {
   text: PropTypes.string.isRequired,
}



export default TaskModalHeader;