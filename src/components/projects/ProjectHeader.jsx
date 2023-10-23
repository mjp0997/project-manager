import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



// Actions
import { updateCurrentProject, updateProjectFromList } from '@/actions/projects';



// Services
import { updateProject } from '@/services/projects';



const viewData = {
   minInputWidth: 21,
   maxInputWidth: 42,
}



const ProjectHeader = () => {

   const dispatch = useDispatch();

   const { project } = useSelector(state => state.projects);

   const [projectTitle, setProjectTitle] = useState(project?.name);
   const [inputWidth, setInputWidth] = useState(viewData.minInputWidth);

   useEffect(() => {
      if (!projectTitle) return;

      const charCount = projectTitle.length;

      if (charCount > viewData.minInputWidth && charCount <= viewData.maxInputWidth) {
         setInputWidth(charCount);
      } else if (charCount > viewData.maxInputWidth) {
         setInputWidth(viewData.maxInputWidth);
      } else {
         setInputWidth(viewData.minInputWidth);
      }
   }, [projectTitle]);

   useEffect(() => {
      const updateTimeout = setTimeout(() => {
         if (project?.name !== projectTitle) {
            handleUpdateTitle(project.id, projectTitle);

            const reduxData = { name: projectTitle }

            dispatch(updateProjectFromList(project.id, reduxData));

            dispatch(updateCurrentProject(reduxData));
         }
      }, 500);

      return () => clearTimeout(updateTimeout);
   }, [project?.name, projectTitle, project?.id, dispatch]);

   const handleUpdateTitle = async (projectId, projectName) => await updateProject(projectId, { name: projectName });
   
   const handleTitle = (e) => setProjectTitle(e.target.value);

   return (
      <div className='project-header'>
         <input
            className='project-title'
            name='project-title'
            type='text'
            value={projectTitle}
            onChange={handleTitle}
            style={{width: `${inputWidth}ch`}}
         />
      </div>
   );
}



export default ProjectHeader;