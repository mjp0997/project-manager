


// Components
import List from '@/components/projects/List';
import NewListButton from '@/components/projects/NewListButton';
import Body from '@/components/ui/Body';



const Project = () => {

   return (
      <div className='project-container'>
         <div className='project-header'>
            <h1 className='project-title'>My project</h1>
         </div>

        <div className='project-body'>
         <Body>
               <ol className='lists-container'>
                  <List />
                  <List />
                  <NewListButton />
               </ol>
            </Body>
        </div>
      </div>
   );
}



export default Project;