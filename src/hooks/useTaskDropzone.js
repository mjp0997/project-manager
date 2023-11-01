import { flushSync } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';



// Actions
import { dragTypes, moveTask, setTargetTaskId } from '@/actions/boards';




// Services
import { moveOneTask } from '@/services/tasks';



/**
 * Custom hook to separate tasks drag and drop functionality from List component
 * @param {number} projectId id of lists related project
 * @param {number} boardId id of lists related project
 * @param {number} listId id of target list
 * @returns {{
 *    handleDragOver: (e: DragEvent) => void,
 *    handleDragEnter: () => void,
 *    handleDragEnd: () => void,
 *    handleDrop: (e: Event, isHeader: boolean) => void
 * }}
 */
export const useTaskDropzone = (projectId, boardId, listId) => {

   const dispatch = useDispatch();

   const { dragType, targetTask } = useSelector(state => state.boards);

   const handleDragOver = (e) => e.preventDefault();

   const handleDragEnter = () => {
      if (dragType !== dragTypes.task) return;

      dispatch(setTargetTaskId({listId, taskId: -1}));
   }

   const handleDragEnd = () => {
      if (dragType !== dragTypes.task) return;

      dispatch(setTargetTaskId({listId: null}));
   }

   const handleDrop = async (e, isHeader = false) => {
      e.preventDefault();

      if (dragType !== dragTypes.task) return;

      const currentListId = e.dataTransfer.getData('listId');
      const taskId = e.dataTransfer.getData('taskId');

      const resolvedTargetTaskId = !isHeader ? targetTask.taskId : -1;

      document.startViewTransition(() => {
         flushSync(() => {
            dispatch(moveTask(Number(currentListId), listId, Number(taskId), resolvedTargetTaskId));
         });
      });

      dispatch(setTargetTaskId({listId: null, taskId: null}));

      await moveOneTask(projectId, boardId, Number(currentListId), listId, Number(taskId), resolvedTargetTaskId);
   }

   return {
      handleDragOver,
      handleDragEnter,
      handleDragEnd,
      handleDrop,
   }
}