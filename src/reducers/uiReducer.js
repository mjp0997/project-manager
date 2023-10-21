


export const types = {
   HANDLE_MODAL: '[ui] HANDLE MODAL STATE'
}



const initialState = {
   
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

      default:
         return state;
   }
}