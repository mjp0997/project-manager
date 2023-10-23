import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';



// Actions
import { setListToBoard } from '@/actions/boards';



// Components
import Icon from '@/components/ui/Icon';



// Services
import { createList } from '@/services/lists';



const NewListButton = () => {

   const dispatch = useDispatch();

   const { projectId, boardId } = useParams();

   const handleCreate = async () => {
      const list = await createList(Number(projectId), Number(boardId));

      dispatch(setListToBoard(list));
   }

   return (
      <li className='list-create'>
         <button
            type='button'
            onClick={handleCreate}
         >
            <Icon icon='faPlus' />

            <p>New List</p>
         </button>
      </li>
   );
}



export default NewListButton;