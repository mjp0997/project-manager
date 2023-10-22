import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



// Components
import Icon from '@/components/ui/Icon';



const NewBoardButton = ({projectId}) => {

   return (
      <Link
         className='board button'
         to={`/project/${projectId}/new`}
      >
         <Icon icon='faPlus' />

         <p>New board</p>
      </Link>
   );
}



NewBoardButton.propTypes = {
   projectId: PropTypes.number.isRequired,
}



export default NewBoardButton;