import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../actions/orderActions';
import { fetchProducts } from './../actions/productActions';
import { ThreadsActions } from '../actions/ThreadsActions';

export const ThreadsViewModel = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const orders = useSelector((state) => state.orders);
  
    useEffect(() => {
      dispatch(ThreadsActions());
    }, [dispatch]);
  
    return {products, orders};
}