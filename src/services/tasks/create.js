import { tasks } from '@/helpers/localStorage';



/**
 * Function used to create a new task
 * @param {number} projectId id of parent project
 * @param {number} boardId id of parent board
 * @param {number} listId id of parent list
 * @returns {Promise<{
 *    id: number,
 *    text: string,
 *    description: string,
 * }>} task
 */
export const create = async (projectId, boardId, listId) => {
   const task = await tasks.setLocalTask(projectId, boardId, listId);

   return task;
}