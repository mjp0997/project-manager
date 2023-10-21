import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



// Components
import Icon from '@/components/ui/Icon';



const NewProjectButton = ({className}) => {

   return (
      <Link
         className={className}
         to='/project/new'
      >
         <Icon icon='faPlus' />

         <p>New project</p>
      </Link>
   );
}



NewProjectButton.propTypes = {
   className: PropTypes.string.isRequired
}



export default NewProjectButton;