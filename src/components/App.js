import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import ItemList from './ItemList';
import Nav from './Nav';
import { fetchProducts } from '../redux/actions/products';
// Styling
import '../App.css';

import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());

  })
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:catId" component={ItemList} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
