import axios from 'axios';

const apiUrl = 'http://localhost:8080/products'; 

// Action types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

// Action creators
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const createProductSuccess = (product) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProductSuccess = (product) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const deleteProductSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

// Async actions
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(apiUrl);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const createProduct = (productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(apiUrl, productData);
      dispatch(createProductSuccess(response.data));
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };
};

export const updateProduct = (id, productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, productData);
      dispatch(updateProductSuccess(response.data));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
};