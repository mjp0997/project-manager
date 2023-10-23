import { useState } from 'react';
import { useDispatch } from 'react-redux';



// Actions
import { setBoardData } from '@/actions/boards';



// Services
import { getBoard } from '@/services/boards';



export const useGetBoard = () => {

   const dispatch = useDispatch();

   const [isLoading, setIsLoading] = useState(true);

   const getBoardById = async (projectId, boardId) => {
      setIsLoading(true);

      const board = await getBoard(projectId, boardId);
   
      dispatch(setBoardData(board));

      setIsLoading(false);

      return board;
   }

   return { getBoardById, isLoading }
}