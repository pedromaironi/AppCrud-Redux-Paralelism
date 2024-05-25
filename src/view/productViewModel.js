import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

const ProductViewModel = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    return {products};
};

export default ProductViewModel;