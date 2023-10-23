import { lists } from '@/helpers/localStorage';



/**
 * Function used to create a new list
 * @param {number} projectId id of parent project
 * @param {number} boardId id of parent board
 * @returns {Promise<{
 *    id: number,
 *    name: string,
 *    tasks: array
 * }>} list
 */
export const create = async (projectId, boardId) => {
   const list = await lists.setLocalList(projectId, boardId);

   return list;
}