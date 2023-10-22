import { boards } from '@/helpers/localStorage';



/**
 * Function used to create a new board
 * @param {number} projectId id of parent project
 * @returns {Promise<number>} board id
 */
export const create = async (projectId) => {
   const board = await boards.setLocalBoard(projectId);

   return board.id;
}