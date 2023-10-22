


// Components
import Icon from '@/components/ui/Icon';



const List = () => {

   return (
      <li className='list'>
         <div className='list-header'>
            <input type='text' defaultValue='Task list' />
            
            <Icon icon='faEllipsis' />
         </div>

         <div className='list-body'>
            <ol className='list-content'>
               <li className='task prevent-selection'>
                  <p>Task</p>
               </li>

               <li className='task prevent-selection'>
                  <p>Task</p>
               </li>
               
               <li className='task prevent-selection'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex voluptates nesciunt exercitationem culpa eos expedita molestias incidunt quia in. Ullam, nemo sapiente dolore similique sit fugit blanditiis assumenda labore!</p>
               </li>
               <li className='task prevent-selection'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex voluptates nesciunt exercitationem culpa eos expedita molestias incidunt quia in. Ullam, nemo sapiente dolore similique sit fugit blanditiis assumenda labore!</p>
               </li>
               <li className='task prevent-selection'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex voluptates nesciunt exercitationem culpa eos expedita molestias incidunt quia in. Ullam, nemo sapiente dolore similique sit fugit blanditiis assumenda labore!</p>
               </li>
               <li className='task prevent-selection'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex voluptates nesciunt exercitationem culpa eos expedita molestias incidunt quia in. Ullam, nemo sapiente dolore similique sit fugit blanditiis assumenda labore!</p>
               </li>
               <li className='task prevent-selection'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex voluptates nesciunt exercitationem culpa eos expedita molestias incidunt quia in. Ullam, nemo sapiente dolore similique sit fugit blanditiis assumenda labore!</p>
               </li>
               <li className='task prevent-selection'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex voluptates nesciunt exercitationem culpa eos expedita molestias incidunt quia in. Ullam, nemo sapiente dolore similique sit fugit blanditiis assumenda labore!</p>
               </li>
               <li className='task prevent-selection'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ex voluptates nesciunt exercitationem culpa eos expedita molestias incidunt quia in. Ullam, nemo sapiente dolore similique sit fugit blanditiis assumenda labore!</p>
               </li>
            </ol>
         </div>

         <div className='list-footer'>
            <button type='button' className='list-footer-button'>
               <Icon icon='faPlus' />

               <p>New task</p>
            </button>
         </div>
      </li>
   );
}



export default List;