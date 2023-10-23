import { lists } from '@/helpers/localStorage';



/**
 * Function used to update a list given its id
 * @param {number} projectId id of wanted project
 * @param {number} boardId id of wanted board
 * @param {number} listId id of wanted list
 * @param {{
 *    name?: string,
 * }} data data to update
 * @returns {Promise<array<{
 *    id: number,
 *    name: string,
 *    color: string,
 *    lists: array
 * }>>} list
 */
export const updateOne = async (projectId, boardId, listId, data) => {
   const list = await lists.updateLocalList(projectId, boardId, listId, data);

   return list;
}