import { projects } from '@/helpers/localStorage';



/**
 * Function used to update a project given its id
 * @param {number} projectId id of wanted project
 * @param {{
 *    name?: string,
 *    color?: string,
 * }} data data to update
 * @returns {Promise<array<{
 *    id: number,
 *    name: string,
 *    color: string,
 *    boards: array
 * }>>} project
 */
export const updateOne = async (projectId, data) => {
   const project = await projects.updateLocalProject(projectId, data);

   return project;
}