import PropTypes from 'prop-types';



// Components
import NewTaskButton from '@/components/board/NewTaskButton';
import ListHeader from '@/components/board/ListHeader';



const List = ({id, name, tasks}) => {

   return (
      <li className='list'>
         <ListHeader id={id} name={name} />

         <div className='list-body'>
            <ol className='list-content'>
               {
                  tasks.map(task => (
                     <li
                        key={`task-${task.id}`}
                        className='task prevent-selection'
                     >
                        <p>{task.text}</p>
                     </li>
                  ))
               }
            </ol>
         </div>

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