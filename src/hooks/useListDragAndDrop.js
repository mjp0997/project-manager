import { flushSync } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';



// Actions
import { dragTypes, moveList, setDragType, setGrabbedListData } from '@/actions/boards';


/**
 * Custom hook to separate lists drag and drop functionality from List component
 * @param {number} listId id of target list
 * @returns {{
*    handleDragStart: () => void,
*    handleDragEnter: () => void,
*    handleDragEnd: () => void,
* }}
*/
export const useListDragAndDrop = (listId) => {

   const dispatch = useDispatch();

   const { dragType, grabbedList } = useSelector(state => state.boards);

   const handleDragStart = () => {
      dispatch(setDragType(dragTypes.list));
      
      dispatch(setGrabbedListData({ listId }));
   }

   const handleDragEnter = () => {
      if (dragType !== dragTypes.list) return;
      
      dispatch(setGrabbedListData({ targetListId: listId }));
   }

   const handleDragEnd = () => {
      document.startViewTransition(() => {
         flushSync(() => {
            dispatch(moveList(grabbedList.listId, grabbedList.targetListId))
         });
      });

      dispatch(setGrabbedListData({ listId: null, targetListId: null }));

      dispatch(setDragType(null));
   }

   return {
      handleDragStart,
      handleDragEnter,
      handleDragEnd,
   }
}