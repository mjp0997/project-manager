


// Components
import Icon from '@/components/ui/Icon';



const TaskDragPlaceholder = () => {

   return (
      <li
         className='task prevent-selection drop-zone'
      >
         <Icon icon='faPlus' />
      </li>
   );
}



export default TaskDragPlaceholder;