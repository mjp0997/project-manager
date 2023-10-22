import { types } from '@/reducers/projectsReducer';



// Actions

export const setProjects = (projects) => ({
   type: types.SET_PROJECTS,
   payload: projects
});

export const setProjectData = (project) => ({
   type: types.SET_PROJECT_DATA,
   payload: project
});