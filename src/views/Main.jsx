


// Components
import NewProjectButton from '@/components/ui/NewProjectButton';
import ProjectElement from '@/components/main/ProjectElement';
import Body from '@/components/ui/Body';



// Custom hooks
import { useGetProjects } from '@/hooks/services/useProjects';



const Main = () => {

   const { projects } = useGetProjects();

   return (
      <>
         <Body>
            <div className='projects-container'>
               <div className='projects'>
                  <h3 className='projects-title'>My projects</h3>

                  {
                     projects.map(pr => (
                        <ProjectElement
                           key={`project-${pr.id}`}
                           id={pr.id}
                           name={pr.name}
                           boardsCount={pr.boards.length}
                           color={pr.color}
                        />
                     ))
                  }

                  <NewProjectButton className='project button' />
               </div>
            </div>
         </Body>
      </>
   );
}



export default Main;