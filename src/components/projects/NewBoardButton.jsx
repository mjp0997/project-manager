import { useNavigate, useParams } from 'react-router-dom';



// Components
import Icon from '@/components/ui/Icon';



// Services
import { createBoard } from '@/services/boards';



// Custom hooks
import { useGetProjects } from '@/hooks/services/useProjects';



const NewBoardButton = () => {

   const navigate = useNavigate();

   const { projectId } = useParams();

   const { dispatchProjects } = useGetProjects();

   const handleCreate = async () => {
      const boardId = await createBoard(Number(projectId));

      dispatchProjects();

      navigate(`/projects/${projectId}/${boardId}`);
   }

   return (
      <button
         className='board button'
         type='button'
         onClick={handleCreate}
      >
         <Icon icon='faPlus' />

         <p>New board</p>
      </button>
   );
}



export default NewBoardButton;