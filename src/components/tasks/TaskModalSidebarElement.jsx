import PropTypes from 'prop-types';



// Components
import Icon from '@/components/ui/Icon';



const TaskModalSidebarElement = ({color}) => {

   return (
      <button
         className={`task-modal-sidebar-element ${color}`}
         type='button'
      >
         <div>
            <Icon  icon='faPaperclip' />
         </div>

         <p>Acción</p>
      </button>
   );
}



TaskModalSidebarElement.propTypes = {
   color: PropTypes.oneOf(['danger']),
}

TaskModalSidebarElement.defaultProps = {
   color: '',
}



export default TaskModalSidebarElement;