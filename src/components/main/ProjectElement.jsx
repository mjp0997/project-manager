


// Helpers
import { contrastColor } from '@/helpers/colors';



const ProjectElement = () => {

   return (
      <div className='project' style={{ color: contrastColor('#FF0000'), backgroundColor: '#FF0000'}}>
         <h4 className='project-name'>Mi proyecto</h4>

         <p className='project-data'>Boards: <span>5</span></p>
      </div>
   );
}



export default ProjectElement;