


export const types = {
   SET_PROJECTS: '[PROJECTS] SET PROJECTS DATA',
   UPDATE_PROJECT_FROM_LIST: '[PROJECTS] UPDATE PROJECT FROM PROJECTS',
   UPDATE_BOARD_FROM_PROJECTS: '[PROJECTS] UPDATE BOARD FROM PROJECTS',

   SET_PROJECT_DATA: '[PROJECTS] SET SINGLE PROJECT',
   UPDATE_PROJECT_DATA: '[PROJECTS] SET '
}



const initialState = {
   projects: [],
   project: null,
}



export const projectsReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.SET_PROJECTS: {
         return {
            ...state,
            projects: action.payload
         }
      }

      case types.SET_PROJECT_DATA: {
         return {
            ...state,
            project: action.payload
         }
      }

      case types.UPDATE_PROJECT_FROM_LIST: {
         const { projectId, data } = action.payload;

         return {
            ...state,
            projects: state.projects.map(pr => {
               if (pr.id === projectId) {
                  return {
                     ...pr,
                     ...data
                  }
               }

               return pr;
            })
         }
      }

      case types.UPDATE_BOARD_FROM_PROJECTS: {
         const { projectId, boardId, data } = action.payload;

         return {
            ...state,
            projects: state.projects.map(pr => {
               if (pr.id === projectId) {
                  return {
                     ...pr,
                     boards: pr.boards.map(board => {
                        if (board.id === boardId) {
                           return {
                              ...board,
                              ...data
                           }
                        }

                        return board;
                     })
                  }
               }

               return pr;
            })
         }
      }

      case types.UPDATE_PROJECT_DATA: {
         return {
            ...state,
            project: {
               ...state.project,
               ...action.payload
            }
         }
      }

      default:
         return state;
   }
}