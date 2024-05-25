import axios from 'axios';

const headers = {
    "Content-Type": "application/json"
};

axios.interceptors.response.use(
    response => response,
    error => {
      console.error('Axios error:', error);
      return Promise.reject(error);
    }
  );

const apiUrl = 'http://192.168.100.7:8080/orders'; 

// Action types
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const CREATE_ORDERS_SUCCESS = 'CREATE_ORDERS_SUCCESS';
export const UPDATE_ORDERS_SUCCESS = 'UPDATE_ORDERS_SUCCESS';
export const DELETE_ORDERS_SUCCESS = 'DELETE_ORDERS_SUCCESS';

// Action creators
export const fetchOrderSuccess = (orders) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const createOrderSuccess = (product) => ({
  type: CREATE_ORDERS_SUCCESS,
  payload: product,
});

export const updateOrderSuccess = (product) => ({
  type: UPDATE_ORDERS_SUCCESS,
  payload: product,
});

export const deleteOrderSuccess = (id) => ({
  type: DELETE_ORDERS_SUCCESS,
  payload: id,
});

// Async actions
export const fetchOrders= () => {
  return async (dispatch) => {
    try {
        const response = await axios.get(apiUrl + "/all", {headers});
        const orders = response.data.map(item => ({
          id: item.id_orden,
          id_client: item.id_cliente,
          date: item.fecha,
          total: item.total,
          state: item.estado,
          subtotal: item.subtotal,
          taxes: item.taxes,
          payment: item.pago_envio
        }));
        dispatch(fetchOrderSuccess(orders));
        return orders;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
  };
};

export const createOrders = (orderData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(apiUrl, orderData);
      dispatch(createOrderSuccess(response.data));
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };
};

export const updateOrder = (id, orderData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, orderData);
      dispatch(updateOrderSuccess(response.data));
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      dispatch(deleteOrderSuccess(id));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };
};