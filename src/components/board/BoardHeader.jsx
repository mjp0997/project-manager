import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



// Actions
import { updateBoardFromProjects } from '@/actions/projects';
import { updateCurrentBoard } from '@/actions/boards';



// Services
import { updateBoard } from '@/services/boards';



const viewData = {
   minInputWidth: 21,
   maxInputWidth: 42,
}



const BoardHeader = () => {

   const dispatch = useDispatch();

   const { projectId } = useParams();

   const { board } = useSelector(state => state.boards);

   const [boardTitle, setBoardTitle] = useState(board?.name);
   const [inputWidth, setInputWidth] = useState(viewData.minInputWidth);

   useEffect(() => {
      if (!boardTitle) return;

      const charCount = boardTitle.length;

      if (charCount > viewData.minInputWidth && charCount <= viewData.maxInputWidth) {
         setInputWidth(charCount);
      } else if (charCount > viewData.maxInputWidth) {
         setInputWidth(viewData.maxInputWidth);
      } else {
         setInputWidth(viewData.minInputWidth);
      }
   }, [boardTitle]);

   useEffect(() => {
      const updateTimeout = setTimeout(() => {
         if (board?.name !== boardTitle) {
            handleUpdateTitle(Number(projectId), board.id, boardTitle);

            const reduxData = { name: boardTitle }

            dispatch(updateBoardFromProjects(Number(projectId), board.id, reduxData));

            dispatch(updateCurrentBoard(reduxData));
         }
      }, 500);

      return () => clearTimeout(updateTimeout);
   }, [board?.name, boardTitle, board?.id, dispatch, projectId]);

   const handleUpdateTitle = async (projectId, boardId, projectName) => await updateBoard(projectId, boardId, { name: projectName });

   const handleTitle = (e) => setBoardTitle(e.target.value);

   return (
      <div className='board-header'>
         <input
            className='board-title'
            name='board-title'
            type='text'
            value={boardTitle}
            onChange={handleTitle}
            style={{width: `${inputWidth}ch`}}
         />
      </div>
   );
}



export default BoardHeader;