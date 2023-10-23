import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';



// Helpers
import { contrastColor } from '@/helpers/colors';



const BoardElement = ({id, name, color, listsCount, tasksCount}) => {

   const { projectId } = useParams();

   return (
      <Link
         className='board'
         style={{ color: contrastColor(color), backgroundColor: color}}
         to={`/projects/${projectId}/${id}`}
      >
         <h4 className='boards-name'>{name}</h4>

         <p className='boards-data'>Lists: <span>{listsCount}</span></p>
         <p className='boards-data'>Tasks: <span>{tasksCount}</span></p>
      </Link>
   );
}



BoardElement.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   listsCount: PropTypes.number.isRequired,
   tasksCount: PropTypes.number.isRequired,
}



export default BoardElement;