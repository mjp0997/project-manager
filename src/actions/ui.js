import { types } from '@/reducers/uiReducer';



// Actions

export const handleModal = (key, value) => ({
   type: types.HANDLE_MODAL,
   payload: { key, value }
});

export const setContextPosition = (x, y) => ({
   type: types.SET_CONTEXT_POSITION,
   payload: { x, y }
});