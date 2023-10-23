import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';



// Components
import Icon from '@/components/ui/Icon';



const SidebarLink = ({id, name, boards}) => {

   const { projectId } = useParams();
   
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      if (Number(projectId) === id) {
         setIsOpen(true);
      } else {
         setIsOpen(false);
      }
   }, [projectId, id]);

   const handleClassName = (className) => isOpen ? `${className} open` : className;

   return (
      <li className={handleClassName('sidebar-link')}>
         <div className='sidebar-link-header'>
            <Link to={`/projects/${id}`}>{name}</Link>

            <Icon icon='faChevronDown' onClick={() => setIsOpen(current => !current)} />
         </div>

         <div className='sidebar-link-options'>
            <ul>
               {
                  boards.map(board => (
                     <NavLink
                        key={`board-sidebar-${board.id}`}
                        className='sidebar-link-option'
                        to={`/projects/${id}/${board.id}`}
                     >
                        <p>{board.name}</p>

                        <Icon icon='faChevronRight' />
                     </NavLink>
                  ))
               }
               
            </ul>
         </div>
      </li>
   );
}



SidebarLink.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   boards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
   })).isRequired,
}



export default SidebarLink;