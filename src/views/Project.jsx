import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



// Actions
import { setProjectData } from '@/actions/projects';



// Components
import BoardElement from '@/components/projects/BoardElement';
import NewBoardButton from '@/components/projects/NewBoardButton';
import ProjectHeader from '@/components/projects/ProjectHeader';
import Body from '@/components/ui/Body';



// Custom hooks
import { useGetProject } from '@/hooks/services/useProjects';



const Project = () => {

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const { projectId } = useParams();

   const { project } = useSelector(state => state.projects);

   const { getProjectById } = useGetProject();

   useEffect(() => {
      fetchProject(projectId);
   }, [projectId, dispatch, navigate]);

   useEffect(() => {
      return () => {
         dispatch(setProjectData(null));
      }
   }, [dispatch]);

   const fetchProject = async (projectId) => {
      const data = await getProjectById(Number(projectId));

      if (!data) {
         navigate('/');
         return null;
      }

      return data;
   }

   return (
      <div className='project-container'>
         <ProjectHeader />

         <div className='project-body'>
            <Body>
               <div className='boards-container'>
                  <div className='boards'>
                     <h3 className='boards-title'>My boards</h3>

                     {
                        project?.boards?.map(board => (
                           <BoardElement
                              key={`board-${board.id}`}
                              name={board.name}
                              color={board.color}
                              listsCount={board.lists.length}
                              tasksCount={board.lists.reduce((el, acc) => acc + el.tasks.length, 0)}
                           />
                        ))
                     }

                     <NewBoardButton className='board button' />
                  </div>
               </div>
            </Body>
         </div>
      </div>
   );
}



export default Project;