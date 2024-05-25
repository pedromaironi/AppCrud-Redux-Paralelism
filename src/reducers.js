// reducers/index.js
import { combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer.js'; // Importa tu reducer de productos
import ordersReducer from './reducers/ordersReducer'; // Importa tu reducer de órdenes

const rootReducer = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
});

export default rootReducer;