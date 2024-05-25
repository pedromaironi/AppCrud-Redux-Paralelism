import { fetchOrders, FETCH_ORDERS_SUCCESS, fetchOrderSuccess } from "./orderActions";
import { fetchProducts, FETCH_PRODUCTS_SUCCESS, fetchProductsSuccess } from "./productActions";


export const ThreadsActions = () => {
    return async dispatch => {
        try {
          const [orders, products] = await Promise.all([
            dispatch(fetchOrders()),
            dispatch(fetchProducts())
          ]);
          dispatch({ type: FETCH_ORDERS_SUCCESS, payload: orders });
          dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      };
}