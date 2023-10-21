import { types } from '@/reducers/uiReducer';



// Actions

export const handleModal = (key, value) => ({
   type: types.HANDLE_MODAL,
   payload: { key, value }
});