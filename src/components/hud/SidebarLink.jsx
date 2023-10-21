import { useState } from 'react';



// Components
import Icon from '@/components/ui/Icon';



const SidebarLink = () => {
   
   const [isOpen, setIsOpen] = useState(false);

   const handleClassName = (className) => isOpen ? `${className} open` : className;

   return (
      <li className={handleClassName('sidebar-link')}>
         <div className='sidebar-link-header'>
            <p>Proyecto</p>

            <Icon icon='faChevronDown' onClick={() => setIsOpen(current => !current)} />
         </div>

         <div className='sidebar-link-options'>
            <ul>
               <li className='sidebar-link-option'>
                  <p>Tablero</p>

                  <Icon icon='faChevronRight' />
               </li>
               
               <li className='sidebar-link-option'>
                  <p>Tablero</p>

                  <Icon icon='faChevronRight' />
               </li>
            </ul>
         </div>
      </li>
   );
}



export default SidebarLink;