import { boards } from '@/helpers/localStorage';



/**
 * Function used to update a board given its id
 * @param {number} projectId id of wanted project
 * @param {number} boardId id of wanted board
 * @param {{
 *    name?: string,
 *    color?: string,
 * }} data data to update
 * @returns {Promise<array<{
 *    id: number,
 *    name: string,
 *    color: string,
 *    lists: array
 * }>>} board
 */
export const updateOne = async (projectId, boardId, data) => {
   const board = await boards.updateLocalBoard(projectId, boardId, data);

   return board;
}