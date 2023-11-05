


// Components
import TaskModalSidebarElement from '@/components/tasks/TaskModalSidebarElement';



const TaskModalSidebar = () => {

   return (
      <aside className='task-modal-sidebar'>
         <div className='task-modal-sidebar-group'>
            <h4>Título</h4>

            <TaskModalSidebarElement color='danger' />
            <TaskModalSidebarElement />
            <TaskModalSidebarElement />
         </div>
         <div className='task-modal-sidebar-group'>
            <h4>Título</h4>

            <TaskModalSidebarElement />
            <TaskModalSidebarElement />
            <TaskModalSidebarElement />
         </div>
         <div className='task-modal-sidebar-group'>
            <h4>Título</h4>

            <TaskModalSidebarElement />
            <TaskModalSidebarElement />
            <TaskModalSidebarElement />
         </div>
      </aside>
   );
}



export default TaskModalSidebar;