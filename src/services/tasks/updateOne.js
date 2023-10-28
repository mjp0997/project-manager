import { tasks } from '@/helpers/localStorage';



/**
 * Function used to update a task given its id
 * @param {number} projectId id of wanted project
 * @param {number} boardId id of wanted board
 * @param {number} listId id of wanted list
 * @param {number} taskId id of wanted task
 * @param {{
 *    text?: string,
 * }} data data to update
 * @returns {Promise<array<{
 *    id: number,
 *    task: string,
 * }>>} task
 */
export const updateOne = async (projectId, boardId, listId, taskId, data) => {
   const task = await tasks.updateLocalTask(projectId, boardId, listId, taskId, data);

   return task;
}