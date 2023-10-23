import { types } from '@/reducers/projectsReducer';



// Actions

export const setProjects = (projects) => ({
   type: types.SET_PROJECTS,
   payload: projects
});

export const updateProjectFromList = (projectId, data) => ({
   type: types.UPDATE_PROJECT_FROM_LIST,
   payload: { projectId, data }
});

export const updateBoardFromProjects = (projectId, boardId, data) => ({
   type: types.UPDATE_BOARD_FROM_PROJECTS,
   payload: { projectId, boardId, data }
});

export const setProjectData = (project) => ({
   type: types.SET_PROJECT_DATA,
   payload: project
});

export const updateCurrentProject = (data) => ({
   type: types.UPDATE_PROJECT_DATA,
   payload: data
});