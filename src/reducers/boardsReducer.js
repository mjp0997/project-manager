


export const types = {
   SET_BOARD_DATA: '[BOARDS] SET SINGLE BOARD',
   UPDATE_CURRENT_BOARD: '[BOARDS] UDPATE CURRENT BOARD',
   UPDATE_CURRENT_TASK: '[BOARDS] UPDATE CURRENT TASK',
   SET_LIST_TO_BOARD: '[BOARDS] ADD LIST TO CURRENT BOARD',
   SET_TASK_TO_LIST: '[BOARDS] ADD TASK TO GIVEN LIST',

   // Modal data
   SET_MODAL_TASK: '[BOARDS] SET MODAL TASK ID',

   // Drag and drop functionality related
   SET_DRAG_ELEMENT_TYPE: '[BOARDS] SET ELEMENT TYPE BEING DRAGGED',

   // Lists
   SET_GRABBED_LIST_DATA: '[BOARDS] SET TARGET LIST ID',
   MOVE_LIST: '[BOARDS] MOVE LIST POSITION',

   // Tasks
   SET_TARGET_TASK_ID: '[BOARDS] SET TARGET TASK ID',
   MOVE_TASK: '[BOARDS] MOVE TASK POSITION',
}



const initialState = {
   board: null,

   openTask: {
      listId: null,
      task: null,
   },

   dragType: null,

   grabbedList: {
      listId: null,
      targetListId: null,
   },

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

         const newOpenTask = {
            ...state.openTask.task,
            ...data
         }

         const updatedLists = state.board.lists.map(list => {
            if (list.id === listId) {
               return {
                  ...list,
                  tasks: list.tasks.map(task => {
                     if (task.id === taskId) {
                        return newOpenTask;
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
               lists: updatedLists
            },
            openTask: {
               ...state.openTask,
               task: {
                  ...state.openTask.task,
                  ...data
               }
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

      case types.SET_MODAL_TASK: {
         const { listId, task } = action.payload;

         return {
            ...state,
            openTask: {
               listId,
               task,
            }
         }
      }

      case types.SET_DRAG_ELEMENT_TYPE: {
         return {
            ...state,
            dragType: action.payload
         }
      }

      case types.SET_GRABBED_LIST_DATA: {
         return {
            ...state,
            grabbedList: {
               ...state.grabbedList,
               ...action.payload
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

      case types.MOVE_LIST: {

         const { listId, targetListId } = action.payload;

         console.log(listId, targetListId);

         const { lists } = state.board;

         const toMoveList = lists.find(list => list.id === listId);

         const listsWithoutList = lists.filter(list => list.id !== listId);

         const targetIndex = lists.findIndex(list => list.id === targetListId);

         const updatedLists = listsWithoutList.toSpliced(targetIndex, 0, toMoveList);

         return {
            ...state,
            board: {
               ...state.board,
               lists: updatedLists
            }
         }
      }

      default:
         return state;
   }
}