import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



// Helpers
import { contrastColor } from '@/helpers/colors';



const ProjectElement = ({id, name, boardsCount, color}) => {

   return (
      <Link
         className='project'
         style={{ color: contrastColor(color), backgroundColor: color}}
         to={`/projects/${id}`}
      >
         <h4 className='project-name'>{name}</h4>

         <p className='project-data'>Boards: <span>{boardsCount}</span></p>
      </Link>
   );
}



ProjectElement.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   boardsCount: PropTypes.number.isRequired,
   color: PropTypes.string.isRequired,
}



export default ProjectElement;