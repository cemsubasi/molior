import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Root from './components/Root';
import { AddToCart, GetAllProducts, GetAllCartItems } from './store/actions';

import 'semantic-ui-css/semantic.min.css';
import './assets/css/App.css';
import './assets/css/blog.css';
import './assets/css/signin.css';

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    dispatch(GetAllProducts());
    if (JSON.parse(localStorage.getItem('cart')))
      dispatch(GetAllCartItems(JSON.parse(localStorage.getItem('cart'))));
  }, []);
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  return <Root />;
};

export default App;
