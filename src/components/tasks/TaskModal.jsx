import { useDispatch, useSelector } from 'react-redux';



// Actions
import { handleModal } from '@/actions/ui';



// Components
import Modal from '@/components/ui/Modal';
import TaskModalContent from '@/components/tasks/TaskModalContent';



const TaskModal = () => {

   const dispatch = useDispatch();

   const { taskModal } = useSelector(state => state.ui);
   
   const handleCloseModal = () => dispatch(handleModal('task', false));

   return (
      <Modal
         state={taskModal}
         close={handleCloseModal}
         className='task-modal-container'
      >
         <TaskModalContent />
      </Modal>
   );
}



export default TaskModal;