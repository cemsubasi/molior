import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Super from './super/Super';
import Home from './home/Home';
import Dummy from './dummy/Dummy';
import Login from './login/Login';
import About from './about/About';
import Dress from './products/Dress';
import Bottom from './products/Bottom';
import Top from './products/Top';
import Discount from './products/Discount';
import Cart from './shoppingcart/Cart';
import Payment from './payment/Payment';
import SuperTest from './super/SuperTest';
import SuperOrders from './super/SuperOrders';
import Page404 from '../common/404';

// const PrivateRoute = ({ props }) => {
// 	return (
// 	);
// };

const RouteComponent = () => {
  const state = useSelector((state) => state);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log('state', state);
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/elbise" component={Dress} />
          <Route exact path="/alt-giyim" component={Bottom} />
          <Route exact path="/ust-giyim" component={Top} />
          <Route path="/indirimli-urunler" component={Discount} />
          <Route path="/sepet" component={Cart} />
          <Route path="/supertest" component={SuperTest} />
          <Route path="/payment" component={Payment} />
          <Route path="/orders" component={SuperOrders} />
          <Route
            path="/admin"
            render={() => (isLoggedIn === true ? <Super /> : <Login />)}
          />
          <Route path="/:slug" component={Dummy} />
          <Route path="*" component={Page404} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default RouteComponent;
