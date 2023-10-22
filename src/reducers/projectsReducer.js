


export const types = {
   SET_PROJECTS: '[PROJECTS] SET PROJECTS DATA',
   SET_PROJECT_DATA: '[PROJECTS] SET SINGLE PROJECT'
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

      default:
         return state;
   }
}