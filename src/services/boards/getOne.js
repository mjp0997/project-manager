import { boards } from '@/helpers/localStorage';



/**
 * Function used to get one board by its id
 * @param {number} projectId id of wanted project
 * @param {number} boardId id of wanted board
 * @returns {Promise<array<{
 *    id: number,
 *    name: string,
 *    color: string,
 *    lists: array
 * }>>} board
 */
export const getOne = async (projectId, boardId) => {
   const board = await boards.getOneLocalBoard(projectId, boardId);

   return board;
}