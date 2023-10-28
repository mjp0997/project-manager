import { tasks } from '@/helpers/localStorage';



/**
 * Function used to update the position of a task given its id
 * @param {number} projectId id of wanted project
 * @param {number} boardId id of wanted board
 * @param {number} currentListId id of wanted list
 * @param {number} targetListId id of wanted list
 * @param {number} taskId id of wanted task
 * @param {number} targetTaskId id of wanted task
 * @returns {Promise<array<{
 *    id: number,
 *    task: string,
 * }>>} task
 */
export const moveOne = async (projectId, boardId, currentListId, targetListId, taskId, targetTaskId) => {
   const task = await tasks.updatePositionTask(projectId, boardId, currentListId, targetListId, taskId, targetTaskId);

   return task;
}