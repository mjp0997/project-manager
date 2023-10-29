import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';



// Actions
import { dragTypes, moveList, setDragType, setGrabbedListData } from '@/actions/boards';



// Components
import NewTaskButton from '@/components/lists/NewTaskButton';
import ListHeader from '@/components/lists/ListHeader';
import ListBody from '@/components/lists/ListBody';



const List = ({id, name, tasks}) => {

   const dispatch = useDispatch();

   const { dragType, grabbedList } = useSelector(state => state.boards);

   const handleDragStart = () => {
      dispatch(setDragType(dragTypes.list));
      
      dispatch(setGrabbedListData({ listId: id }));
   }

   const handleDragEnter = () => {
      if (dragType !== dragTypes.list) return;
      
      dispatch(setGrabbedListData({ targetListId: id }));
   }

   const handleDragEnd = () => {
      dispatch(moveList(grabbedList.listId, grabbedList.targetListId))

      dispatch(setGrabbedListData({ listId: null, targetListId: null }));

      dispatch(setDragType(null));
   }

   return (
      <li
         className='list'
         draggable
         onDragStart={handleDragStart}
         onDragEnter={handleDragEnter}
         onDragEnd={handleDragEnd}
      >
         <ListHeader id={id} name={name} />

         <ListBody
            listId={id}
            tasks={tasks}
         />

         <div className='list-footer'>
            <NewTaskButton listId={id} />
         </div>
      </li>
   );
}



List.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
   })).isRequired
}



export default List;