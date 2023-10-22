import { useEffect, useState } from 'react';



const viewData = {
   minInputWidth: 21,
   maxInputWidth: 42,
}



const ProjectHeader = () => {

   const [projectTitle, setProjectTitle] = useState('My project');
   const [inputWidth, setInputWidth] = useState(viewData.minInputWidth);

   useEffect(() => {
      const charCount = projectTitle.length;

      if (charCount > viewData.minInputWidth && charCount <= viewData.maxInputWidth) {
         setInputWidth(charCount);
      } else if (charCount > viewData.maxInputWidth) {
         setInputWidth(viewData.maxInputWidth);
      } else {
         setInputWidth(viewData.minInputWidth);
      }
   }, [projectTitle]);

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