import { configureStore } from '@reduxjs/toolkit';

// Importaciones de los reducers
import {
   boardsReducer,
   projectsReducer,
   uiReducer
} from '@/reducers';



// Main reducer
const reducers = {
   // Lista de reducers
   boards: boardsReducer,
   projects: projectsReducer,
   ui: uiReducer,
}

export const store = configureStore({
   reducer: reducers,
   devTools: !import.meta.env.PROD
});