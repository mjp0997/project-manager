import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



// Components
import Icon from '@/components/ui/Icon';



// Services
import { createProject } from '@/services/projects';



// Custom hooks
import { useGetProjects } from '@/hooks/services/useProjects';



const NewProjectButton = ({className}) => {

   const navigate = useNavigate();

   const { dispatchProjects } = useGetProjects();

   const handleCreate = async () => {
      const projectId = await createProject();

      dispatchProjects();

      navigate(`/projects/${projectId}`);
   }

   return (
      <button
         className={className}
         type='button'
         onClick={handleCreate}
      >
         <Icon icon='faPlus' />

         <p>New project</p>
      </button>
   );
}



NewProjectButton.propTypes = {
   className: PropTypes.string.isRequired
}



export default NewProjectButton;