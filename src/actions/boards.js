import { types } from '@/reducers/boardsReducer';



// Actions

export const setBoardData = (board) => ({
   type: types.SET_BOARD_DATA,
   payload: board
});

export const updateCurrentBoard = (data) => ({
   type: types.UPDATE_CURRENT_BOARD,
   payload: data
});

export const setListToBoard = (list) => ({
   type: types.SET_LIST_TO_BOARD,
   payload: list
});

export const setTaskToList = (listId, task) => ({
   type: types.SET_TASK_TO_LIST,
   payload: { listId, newTask: task }
});