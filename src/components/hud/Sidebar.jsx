


// Components
import SidebarLink from '@/components/hud/SidebarLink';
import NewProjectButton from '@/components/ui/NewProjectButton';



const Sidebar = () => {

   return (
      <aside className='sidebar body-aside'>
         <ul className='sidebar-links'>
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
         </ul>

         <NewProjectButton className='sidebar-button' />
      </aside>
   );
}



export default Sidebar;