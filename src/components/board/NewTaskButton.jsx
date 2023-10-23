import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';



// Actions
import { setTaskToList } from '@/actions/boards';



// Components
import Icon from '@/components/ui/Icon';



// Services
import { createTask } from '@/services/tasks';



const NewTaskButton = ({listId}) => {

   const dispatch = useDispatch();

   const { projectId, boardId } = useParams();

   const handleCreate = async () => {
      const task = await createTask(Number(projectId), Number(boardId), listId);

      dispatch(setTaskToList(listId, task));
   }

   return (
      <button
         type='button'
         className='list-footer-button'
         onClick={handleCreate}
      >
         <Icon icon='faPlus' />

         <p>New task</p>
      </button>
   );
}



NewTaskButton.propTypes = {
   listId: PropTypes.number.isRequired
}



export default NewTaskButton;