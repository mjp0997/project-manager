


export const types = {
   SET_BOARD_DATA: '[BOARDS] SET SINGLE BOARD',
   UPDATE_CURRENT_BOARD: '[BOARDS] UDPATE CURRENT BOARD',
   SET_LIST_TO_BOARD: '[BOARDS] ADD LIST TO CURRENT BOARD',
   SET_TASK_TO_LIST: '[BOARDS] ADD TASK TO GIVEN LIST',
}



const initialState = {
   board: null,
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

      default:
         return state;
   }
}