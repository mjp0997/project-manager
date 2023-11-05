import PropTypes from 'prop-types';



// Components
import Icon from '@/components/ui/Icon';



const TaskModalSection = ({children, title, icon}) => {

   return (
      <div className='task-modal-section'>
         <div className='task-modal-section-title'>
            <div className='task-modal-section-offset'>
               <Icon icon={icon} />
            </div>

            <p>{title}</p>

            {/* <div className='task-modal-section-actions'>
               <button className='task-modal-section-action'>Delete</button>
               <button className='task-modal-section-action danger'>Delete</button>
            </div> */}
         </div>

         <div className='task-modal-section-body'>
            {children}
         </div>
      </div>
   );
}



TaskModalSection.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired
}



export default TaskModalSection;