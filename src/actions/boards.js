import { types } from '@/reducers/boardsReducer';



// Types
export const dragTypes = {
   list: 'list',
   task: 'task'
}



// Actions

export const setBoardData = (board) => ({
   type: types.SET_BOARD_DATA,
   payload: board
});

export const updateCurrentBoard = (data) => ({
   type: types.UPDATE_CURRENT_BOARD,
   payload: data
});

export const updateCurrentTask = (listId, taskId, data) => ({
   type: types.UPDATE_CURRENT_TASK,
   payload: { listId, taskId, data }
});

export const setListToBoard = (list) => ({
   type: types.SET_LIST_TO_BOARD,
   payload: list
});

export const setTaskToList = (listId, task) => ({
   type: types.SET_TASK_TO_LIST,
   payload: { listId, newTask: task }
});

// MODAL

export const setModalTaskId = (listId, taskId) => ({
   type: types.SET_MODAL_TASK_ID,
   payload: { listId, taskId }
});

// DRAG AND DROP RELATED

export const setDragType = (type) => ({
   type: types.SET_DRAG_ELEMENT_TYPE,
   payload: type
});

/**
 * Set target task of task draggin
 * @param {{
 *    listId?: number,
 *    taskId?: number,
 * }} data 
 * @returns 
 */
export const setGrabbedListData = (data) => ({
   type: types.SET_GRABBED_LIST_DATA,
   payload: data
});

export const moveList = (listId, targetListId) => ({
   type: types.MOVE_LIST,
   payload: { listId, targetListId }
});

/**
 * Set target task of task draggin
 * @param {{
 *    listId?: number,
 *    taskId?: number,
 * }} data 
 * @returns 
 */
export const setTargetTaskId = (data) => ({
   type: types.SET_TARGET_TASK_ID,
   payload: data
});

export const moveTask = (currentListId, targetListId, taskId, targetTaskId) => ({
   type: types.MOVE_TASK,
   payload: { currentListId, taskId, targetListId, targetTaskId }
});