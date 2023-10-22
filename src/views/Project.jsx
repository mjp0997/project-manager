


// Components
import BoardElement from '@/components/projects/BoardElement';
import NewBoardButton from '@/components/projects/NewBoardButton';
import ProjectHeader from '@/components/projects/ProjectHeader';
import Body from '@/components/ui/Body';



const Project = () => {

   return (
      <div className='project-container'>
         <ProjectHeader />

         <div className='project-body'>
            <Body>
               <div className='boards-container'>
                  <div className='boards'>
                     <h3 className='boards-title'>My boards</h3>

                     <BoardElement />
                     <BoardElement />
                     <BoardElement />
                     <BoardElement />
                     <BoardElement />
                     <BoardElement />
                     <BoardElement />
                     <BoardElement />

                     <NewBoardButton projectId={1} className='board button' />
                  </div>
               </div>
            </Body>
         </div>
      </div>
   );
}



export default Project;