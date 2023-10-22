import { configureStore } from '@reduxjs/toolkit';

// Importaciones de los reducers
import {
   projectsReducer,
   uiReducer
} from '@/reducers';



// Main reducer
const reducers = {
   // Lista de reducers
   projects: projectsReducer,
   ui: uiReducer,
}

export const store = configureStore({
   reducer: reducers,
   devTools: !import.meta.env.PROD
});