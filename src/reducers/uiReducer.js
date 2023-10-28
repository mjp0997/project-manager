


export const types = {
   HANDLE_MODAL: '[UI] HANDLE MODAL STATE',

   SET_CONTEXT_POSITION: '[UI] SET CONTEXT POSITION DATA',
}



const initialState = {
   taskModal: false,

   // List context menu'
   contextPosition: {
      x: null,
      y: null,
   }
}



export const uiReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.HANDLE_MODAL: {
         const { key, value } = action.payload;

         return {
            ...state,
            [`${key}Modal`]: value
         }
      }

      case types.SET_CONTEXT_POSITION: {
         const { x, y } = action.payload;

         return {
            ...state,
            contextPosition: {
               ...state.contextPosition,
               x, y,
            }
         }
      }

      default:
         return state;
   }
}