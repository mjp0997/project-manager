


export const types = {
   SET_BOARD_DATA: '[BOARDS] SET SINGLE BOARD',
   UPDATE_CURRENT_BOARD: '[BOARDS] UDPATE CURRENT BOARD',
   UPDATE_CURRENT_TASK: '[BOARDS] UPDATE CURRENT TASK',
   SET_LIST_TO_BOARD: '[BOARDS] ADD LIST TO CURRENT BOARD',
   SET_TASK_TO_LIST: '[BOARDS] ADD TASK TO GIVEN LIST',

   // Modal data
   SET_MODAL_TASK_ID: '[BOARDS] SET MODAL TASK ID',

   // Drag and drop functionality related
   SET_TARGET_TASK_ID: '[BOARDS] SET TARGET TASK ID',
   MOVE_TASK: '[BOARDS] MOVE TASK POSITION',
}



const initialState = {
   board: null,

   openTask: {
      listId: null,
      taskId: null,
   },

   targetTaskId: null,

   targetTask: {
      listId: null,
      taskId: null,
   }
}



export const boardsReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.SET_BOARD_DATA: {
         return {
            ...state,
            board: action.payload
         }
      }

      case types.UPDATE_CURRENT_BOARD: {
         return {
            ...state,
            board: {
               ...state.board,
               ...action.payload
            }
         }
      }

      case types.UPDATE_CURRENT_TASK: {
         const { listId, taskId, data } = action.payload;

         const lists = state.board.lists.map(list => {
            if (list.id === listId) {
               return {
                  ...list,
                  tasks: list.tasks.map(task => {
                     if (task.id === taskId) {
                        return {
                           ...task,
                           ...data
                        }
                     }

                     return task;
                  })
               }
            }

            return list;
         });

         return {
            ...state,
            board: {
               ...state.board,
               lists: lists
            }
         }
      }

      case types.SET_LIST_TO_BOARD: {
         return {
            ...state,
            board: {
               ...state.board,
               lists: [...state.board.lists, action.payload]
            }
         }
      }

      case types.SET_TASK_TO_LIST: {
         const { listId, newTask } = action.payload;

         return {
            ...state,
            board: {
               ...state.board,
               lists: state.board.lists.map(list => {
                  if (list.id === listId) {
                     return {
                        ...list,
                        tasks: [...list.tasks, newTask]
                     }
                  }

                  return list;
               })
            }
         }
      }

      case types.SET_MODAL_TASK_ID: {
         const { listId, taskId } = action.payload;

         return {
            ...state,
            openTask: {
               listId,
               taskId,
            }
         }
      }

      case types.SET_TARGET_TASK_ID: {
         return {
            ...state,
            targetTask: {
               ...state.targetTask,
               ...action.payload
            }
         }
      }

      case types.MOVE_TASK: {

         const { currentListId, taskId, targetListId, targetTaskId } = action.payload;

         const { lists } = state.board;

         let task = null;

         const listsWithoutTask = lists.map(list => {
            if (list.id === currentListId) {

               task = list.tasks.find(task => task.id === taskId);

               return {
                  ...list,
                  tasks: list.tasks.filter(task => task.id !== taskId)
               }
            }

            return list;
         });

         const listsWithTask = listsWithoutTask.map(list => {
            if (list.id === targetListId) {

               const targetIndex = list.tasks.findIndex(task => task.id === targetTaskId);

               return {
                  ...list,
                  tasks: list.tasks.toSpliced(targetIndex + 1, 0, task)
               }
            }

            return list;
         });

         return {
            ...state,
            board: {
               ...state.board,
               lists: listsWithTask
            }
         }
      }

      default:
         return state;
   }
}