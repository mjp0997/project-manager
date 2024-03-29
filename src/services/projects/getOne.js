import { projects } from '@/helpers/localStorage';



/**
 * Function used to get one project by its id
 * @param {number} projectId id of wanted project
 * @returns {Promise<array<{
 *    id: number,
 *    name: string,
 *    color: string,
 *    boards: array
 * }>>} project
 */
export const getOne = async (projectId) => {
   const project = await projects.getOneLocalProject(projectId);

   return project;
}