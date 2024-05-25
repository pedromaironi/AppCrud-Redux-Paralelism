import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../actions/orderActions';

const OrderViewModel = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders);
  
    useEffect(() => {
      dispatch(fetchOrders());
    }, [dispatch]);
  
    return {orders};
};

export default OrderViewModel;