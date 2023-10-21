import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Fas from '@fortawesome/free-solid-svg-icons';
import * as Far from '@fortawesome/free-regular-svg-icons';
import * as Fab from '@fortawesome/free-brands-svg-icons';



const Icons = { Fas, Far, Fab }



const Icon = ({path, icon, ...props}) => {

   return (
      <FontAwesomeIcon icon={Icons[path][icon]} {...props} />
   );
}



Icon.propTypes = {
   path: PropTypes.oneOf(['Fas', 'Far', 'Fab']),
   icon: (props, propName, componentName) => {
   
      const entries = Object.entries({...Icons[props['path']]});
   
      const icons = entries.map(([key]) => key);
   
      if (!icons.includes(props[propName])) {
   
         const errorIcons = icons.map(icon => `"${icon}"`);
   
         return new Error(
            'Invalid prop `' + propName + '` of value `' + props[propName] + '` supplied to `' + componentName + '`, expected one of [' + errorIcons.toString() + '].'
         );
      }
   }
}

Icon.defaultProps = {
   path: 'Fas'
}



export default Icon;