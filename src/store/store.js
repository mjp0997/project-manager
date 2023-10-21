import { configureStore } from '@reduxjs/toolkit';

// Importaciones de los reducers
import {
   uiReducer
} from '@/reducers';



// Main reducer
const reducers = {
   // Lista de reducers
   ui: uiReducer,
}

export const store = configureStore({
   reducer: reducers,
   devTools: !import.meta.env.PROD
});