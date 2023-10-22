import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



// Actions
import { setProjectData, setProjects } from '@/actions/projects';



// Services
import { getAllProjects, getProject } from '@/services/projects';



export const useGetProjects = () => {

   const dispatch = useDispatch();
   
   const { projects } = useSelector(state => state.projects);

   const [isLoading, setIsLoading] = useState(true);

   const dispatchProjects = async () => {
      setIsLoading(true);

      const projects = await getAllProjects();

      dispatch(setProjects(projects));

      setIsLoading(false);
   }

   const getProjectById = async (projectId) => {
      setIsLoading(true);

      const project = await getProject(projectId);

      setIsLoading(false);

      return project;
   }

   return { projects, dispatchProjects, getProjectById, isLoading }
}

export const useGetProject = () => {

   const dispatch = useDispatch();

   const [isLoading, setIsLoading] = useState(true);

   const getProjectById = async (projectId) => {
      setIsLoading(true);

      const project = await getProject(projectId);
   
      dispatch(setProjectData(project));

      setIsLoading(false);

      return project;
   }

   return { getProjectById, isLoading }
}