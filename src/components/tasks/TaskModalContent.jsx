import { useSelector } from 'react-redux';



// Components
import TaskModalDescription from '@/components/tasks/TaskModalDescription';
import TaskModalHeader from '@/components/tasks/TaskModalHeader';
import TaskModalSidebar from '@/components/tasks/TaskModalSidebar';



const TaskModalContent = () => {

   const { board, openTask } = useSelector(state => state.boards);

   if (!board || !openTask.listId || !openTask.task?.id) {
      return (<></>);
   }

   return (
      <div className='task-modal'>
         <TaskModalHeader />

         <div className='task-modal-body'>
            <div className='task-modal-content custom-scrollbar'>
               <TaskModalDescription />
            </div>

            <TaskModalSidebar />
         </div>
      </div>
   );
}



export default TaskModalContent;