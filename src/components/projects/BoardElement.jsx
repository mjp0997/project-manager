


// Helpers
import { contrastColor } from '@/helpers/colors';



const BoardElement = () => {

   return (
      <div className='board' style={{ color: contrastColor('#FF0000'), backgroundColor: '#FF0000'}}>
         <h4 className='boards-name'>My board</h4>

         <p className='boards-data'>Lists: <span>3</span></p>
         <p className='boards-data'>Tasks: <span>5</span></p>
      </div>
   );
}



export default BoardElement;