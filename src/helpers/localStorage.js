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
    *    color: string,
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
    *    color: string,
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
    *    color: string,
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

   /**
    * Method to update a project given its id from localStorage
    * @param {number} projectId id of wanted project
    * @param {{
    *    name?: string,
    *    color?: string,
    * }} data given data to update
    */
   updateLocalProject: async (projectId, data) => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const updatedProjects = projects.map(pr => {
         if (pr.id === projectId) {
            return {
               ...pr,
               ...data,
            }
         }

         return pr;
      });

      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      const project = updatedProjects.find(pr => pr.id === projectId);

      return project;
   }
}

export const boards = {
   /**
    * Method to create a board inside localStorage
    * @async
    * @param {number} projectId 
    * @returns {Promise<{
    *    id: number,
    *    name: string,
    *    color: string,
    *    lists: array
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

      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      return newBoard;
   },

   /**
    * Method to get a board given its id from localStorage
    * @param {number} projectId id of wanted project
    * @param {number} board id of wanted board
    * @returns {Promise<{
    *    id: number,
    *    name: string,
    *    color: string,
    *    lists: array
    * }>}
    */
   getOneLocalBoard: async (projectId, boardId) => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const project = projects.find(pr => pr.id === projectId) || [];

      const board = project.boards.find(board => board.id === boardId);

      return board;
   },

   /**
    * Method to update a board given its id from localStorage
    * @param {number} projectId id of wanted project
    * @param {number} boardId id of wanted board
    * @param {{
    *    name?: string,
    *    color?: string,
    * }} data given data to update
    */
   updateLocalBoard: async (projectId, boardId, data) => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const updatedProjects = projects.map(pr => {
         if (pr.id === projectId) {
            return {
               ...pr,
               boards: pr.boards.map(board => {
                  if (board.id === boardId) {
                     return {
                        ...board,
                        ...data,
                     }
                  }

                  return board;
               })
            }
         }

         return pr;
      });

      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      const project = updatedProjects.find(pr => pr.id === projectId) || [];

      const board = project.boards.find(board => board.id === boardId);

      return board;
   }
}

export const lists = {
   /**
    * Method to create a list inside localStorage
    * @async
    * @param {number} projectId 
    * @param {number} boardId 
    * @returns {Promise<{
   *    id: number,
   *    name: string,
   *    tasks: array
   * }>}
   */
   setLocalList: async (projectId, boardId) => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const newList = {
         id: new Date().getTime(),
         name: 'My list',
         tasks: [],
      }

      const updatedProjects = projects.map(pr => {
         if (pr.id === projectId) {
            return {
               ...pr,
               boards: pr.boards.map(board => {
                  if (board.id === boardId) {
                     return {
                        ...board,
                        lists: [...board.lists, newList]
                     }
                  }

                  return board;
               })
            }
         }

         return pr;
      });

      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      return newList;
   },

   /**
    * Method to update a list given its id from localStorage
    * @param {number} projectId id of wanted project
    * @param {number} boardId id of wanted board
    * @param {number} listId id of wanted list
    * @param {{
    *    name?: string,
    * }} data given data to update
    */
   updateLocalList: async (projectId, boardId, listId, data) => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const updatedProjects = projects.map(pr => {
         if (pr.id === projectId) {
            return {
               ...pr,
               boards: pr.boards.map(board => {
                  if (board.id === boardId) {
                     return {
                        ...board,
                        lists: board.lists.map(list => {
                           if (list.id === listId) {
                              return {
                                 ...list,
                                 ...data,
                              }
                           }
         
                           return list;
                        })
                     }
                  }

                  return board;
               })
            }
         }

         return pr;
      });

      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      const project = updatedProjects.find(pr => pr.id === projectId) || [];

      const board = project.boards.find(board => board.id === boardId) || [];

      const list = board.lists.find(list => list.id === listId);

      return list;
   }
}

export const tasks = {
   /**
    * Method to create a task inside localStorage
    * @async
    * @param {number} projectId 
    * @param {number} boardId 
    * @param {number} listId
    * @returns {Promise<{
   *    id: number,
   *    name: string,
   * }>}
   */
   setLocalTask: async (projectId, boardId, listId) => {
      await awaiter();

      const jsonProjects = localStorage.getItem('projects');
      const projects = JSON.parse(jsonProjects) || [];

      const newTask = {
         id: new Date().getTime(),
         text: 'My task',
      }

      const updatedProjects = projects.map(pr => {
         if (pr.id === projectId) {
            return {
               ...pr,
               boards: pr.boards.map(board => {
                  if (board.id === boardId) {
                     return {
                        ...board,
                        lists: board.lists.map(list => {
                           if (list.id === listId) {
                              return {
                                 ...list,
                                 tasks: [...list.tasks, newTask]
                              }
                           }

                           return list;
                        })
                     }
                  }

                  return board;
               })
            }
         }

         return pr;
      });

      localStorage.setItem('projects', JSON.stringify(updatedProjects));

      return newTask;
   },
}