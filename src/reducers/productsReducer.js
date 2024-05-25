import {
    FETCH_PRODUCTS_SUCCESS,
    CREATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_SUCCESS,
  } from '../actions/productActions';
  
  const initialState = [];
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return action.payload;
      case CREATE_PRODUCT_SUCCESS:
        return [...state, action.payload];
      case UPDATE_PRODUCT_SUCCESS:
        return state.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      case DELETE_PRODUCT_SUCCESS:
        return state.filter((product) => product.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default productsReducer;