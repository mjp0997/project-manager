import { randomHexColor } from '@/helpers/colors';



const awaiter = async () => {
   return await new Promise((resolve) => {
      setTimeout(() => {
         resolve();
      }, 500);
   });
}



export const projects = {
   /**
    * Method to create a project inside localStorage
    * @async
    * @returns {Promise<{
    *    id: number,
    *    name: string,
    *    boards: array
    * }>}
    */
   setLocalProject: async () => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const newProject = {
         id: new Date().getTime(),
         name: 'My project',
         color: randomHexColor(),
         boards: [],
      }

      localStorage.setItem('projects', JSON.stringify([...projects, newProject]));

      return newProject;
   },

   /**
    * Method to get all projects inside localStorage
    * @returns {Promise<array<{
    *    id: number,
    *    name: string,
    *    boards: array
    * }>>}
    */
   getAllLocalProjects: async () => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      return projects;
   },

   /**
    * Method to get a project given its id from localStorage
    * @param {number} projectId id of wanted project
    * @returns {Promise<{
    *    id: number,
    *    name: string,
    *    boards: array
    * }>}
    */
   getOneLocalProject: async (projectId) => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const project = projects.find(pr => pr.id === projectId);

      return project;
   },
}

export const boards = {
   /**
    * Method to create a board inside localStorage
    * @async
    * @param {number} projectId 
    * @returns {Promise<{
    *    id: number,
    *    name: string,
    *    boards: array
    * }>}
    */
   setLocalBoard: async (projectId) => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const newBoard = {
         id: new Date().getTime(),
         name: 'My board',
         color: randomHexColor(),
         lists: [],
      }

      const updatedProjects = projects.map(pr => {
         if (pr.id === projectId) {
            return {
               ...pr,
               boards: [...pr.boards, newBoard]
            }
         }

         return pr;
      });

      console.log(updatedProjects);

      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      return newBoard;
   },
}