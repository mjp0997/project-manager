import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';



// Actions
import { setBoardData } from '@/actions/boards';



// Components
import List from '@/components/board/List';
import NewListButton from '@/components/board/NewListButton';
import BoardHeader from '@/components/board/BoardHeader';
import Body from '@/components/ui/Body';
import TaskModal from '@/components/tasks/TaskModal';



// Custom hooks
import { useGetBoard } from '@/hooks/services/useBoards';



const Board = () => {

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const { projectId, boardId } = useParams();

   const { board } = useSelector(state => state.boards);

   const { getBoardById } = useGetBoard();

   useEffect(() => {
      dispatch(setBoardData(null));
      fetchProject(projectId, boardId);
   }, [projectId, boardId, dispatch, navigate]);

   useEffect(() => {
      return () => {
         dispatch(setBoardData(null));
      }
   }, [dispatch]);

   const fetchProject = async (projectId, boardId) => {
      const data = await getBoardById(Number(projectId), Number(boardId));

      if (!data) {
         navigate('/');
         return null;
      }

      return data;
   }

   if (!board) {
      return (
         <div className='board-container'></div>
      );
   }

   return (
      <div className='board-container'>
         <BoardHeader />

         <div className='board-body'>
            <Body>
               <ol className='lists-container'>
                  {
                     board?.lists?.map(list => (
                        <List
                           key={`list-${list.id}`}
                           id={list.id}
                           name={list.name}
                           tasks={list.tasks}
                        />
                     ))
                  }
                  
                  <NewListButton />
               </ol>
            </Body>
         </div>

         <TaskModal />
      </div>
   );
}



export default Board;