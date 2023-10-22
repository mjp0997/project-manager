


// Components
import SidebarLink from '@/components/hud/SidebarLink';
import NewProjectButton from '@/components/ui/NewProjectButton';
import { useGetProjects } from '@/hooks/services/useProjects';



const Sidebar = () => {

   const { projects } = useGetProjects();

   return (
      <aside className='sidebar body-aside'>
         <ul className='sidebar-links'>
            {
               projects.map(pr => (
                  <SidebarLink
                     key={`project-sidebar-${pr.id}`}
                     id={pr.id}
                     name={pr.name}
                     boards={pr.boards}
                  />
               ))
            }
         </ul>

         <NewProjectButton className='sidebar-button' />
      </aside>
   );
}



export default Sidebar;