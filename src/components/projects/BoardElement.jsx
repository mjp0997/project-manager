import PropTypes from 'prop-types';



// Helpers
import { contrastColor } from '@/helpers/colors';



const BoardElement = ({name, color, listsCount, tasksCount}) => {

   return (
      <div className='board' style={{ color: contrastColor(color), backgroundColor: color}}>
         <h4 className='boards-name'>{name}</h4>

         <p className='boards-data'>Lists: <span>{listsCount}</span></p>
         <p className='boards-data'>Tasks: <span>{tasksCount}</span></p>
      </div>
   );
}



BoardElement.propTypes = {
   name: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   listsCount: PropTypes.number.isRequired,
   tasksCount: PropTypes.number.isRequired,
}



export default BoardElement;