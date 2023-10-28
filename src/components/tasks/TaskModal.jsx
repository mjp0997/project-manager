import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



// Actions
import { handleModal } from '@/actions/ui';



// Components
import Modal from '@/components/ui/Modal';
import TaskModalHeader from '@/components/tasks/TaskModalHeader';



const TaskModal = () => {

   const dispatch = useDispatch();

   const { taskModal } = useSelector(state => state.ui);

   const { board, openTask } = useSelector(state => state.boards);

   const [currentTask, setCurrentTask] = useState(null);

   useEffect(() => {
      const list = board?.lists?.find(list => list.id === openTask.listId) || [];

      const task = list?.tasks?.find(task => task.id === openTask.taskId);

      setCurrentTask(task);
   }, [board.lists, openTask.listId, openTask.taskId]);
   
   const handleCloseModal = () => dispatch(handleModal('task', false));

   return (
      <Modal
         state={taskModal}
         close={handleCloseModal}
         className='task-modal-container'
      >
         {
            (!board || !openTask.listId || !openTask.taskId || !currentTask)
            ?
            (
               <></>
            )
            :
            (
               <div className='task-modal'>
                  <TaskModalHeader
                     text={currentTask?.text}
                  />
               </div>
            )
         }
      </Modal>
   );
}



export default TaskModal;