const initialState = [];

import {
  FETCH_ORDERS_SUCCESS,
  CREATE_ORDERS_SUCCESS,
  UPDATE_ORDERS_SUCCESS,
  DELETE_ORDERS_SUCCESS,
} from '../actions/orderActions';

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return action.payload;
    case CREATE_ORDERS_SUCCESS:
      return [...state, action.payload];
    case UPDATE_ORDERS_SUCCESS:
      return state.map((order) =>
        order.id === action.payload.id ? action.payload : order
      );
    case DELETE_ORDERS_SUCCESS:
      return state.filter((order) => order.id !== action.payload);
    default:
      return state;
  }
};

export default ordersReducer;