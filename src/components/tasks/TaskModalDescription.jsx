import { useEffect, useRef, useState } from 'react';



// Components
import TaskModalSection from '@/components/tasks/TaskModalSection';



const TaskModalDescription = () => {

   const taskDescRef = useRef();

   const [description, setDescription] = useState('');

   useEffect(() => {
      taskDescRef.current.style.height = 'auto';
      taskDescRef.current.style.height = taskDescRef.current.scrollHeight + 'px';
   }, [description]);

   const handleDescriptionChange = (e) => setDescription(e.target.value);

   return (
      <TaskModalSection
         icon='faAlignLeft'
         title='Description'
      >
         <textarea
            name='description'
            placeholder='Add a detailed task description...'
            rows='3'
            ref={taskDescRef}
            value={description}
            onChange={handleDescriptionChange}
         />
      </TaskModalSection>
   );
}



export default TaskModalDescription;