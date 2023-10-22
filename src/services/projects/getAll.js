import { projects } from '@/helpers/localStorage';



/**
 * Function used to get all projects
 * @returns {Promise<array<{
 *    id: number,
 *    name: string,
 *    boards: array
 * }>>} project id
 */
export const getAll = async () => {
   const projectsList = await projects.getAllLocalProjects();

   return projectsList;
}