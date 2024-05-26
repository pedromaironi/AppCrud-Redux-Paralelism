import axios from 'axios';
import Products from '../models/Products';
const headers = {
  'Content-Type': 'application/json',
};

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error);
    return Promise.reject(error);
  },
);

const apiUrl = 'http://192.168.100.7:8080/products';

// Action types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

// Action creators
export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const createProductSuccess = product => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProductSuccess = product => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const deleteProductSuccess = id => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

// Async actions
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(apiUrl + '/all', {headers});
      const products = response.data.map(item => ({
        id: item.id,
        name: item.nombre,
        description: item.descripcion,
        price: item.precio,
        image: item.imagen,
        category_id: item.id_categoria,
        stock: item.stock,
      }));
      dispatch(fetchProductsSuccess(products));
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const createProduct = (productData) => {
  const {
    name: nombre,
    description: descripcion,
    image: imagen,
    price: precio,
    stock,
    id_category: id_categoria,
  } = productData;
  
  const productDataFormat = {
    nombre,
    descripcion,
    imagen,
    precio: parseFloat(precio),
    id_categoria: parseInt(id_categoria, 10),
    stock: parseFloat(stock),
  }
  
  console.log(productDataFormat);
  return async dispatch => {
    try {
      const response = await axios.post(apiUrl + '/create', productDataFormat);
      dispatch(createProductSuccess(response.data));
      dispatch(fetchProducts());
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };
};

export const updateProduct = (id, productData) => {
  return async dispatch => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, productData);
      dispatch(updateProductSuccess(response.data));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
};

export const deleteProduct = id => {
  return async dispatch => {
    try {
      await axios.delete(`${apiUrl}/delete/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
};
