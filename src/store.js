// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers.js'; // Importa tu combinación de reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;