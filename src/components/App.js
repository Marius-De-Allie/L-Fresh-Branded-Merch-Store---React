import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import ShopPage from './ShopPage';
import ItemList from './ItemList';
import Nav from './Nav';
// Styling
import '../App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/:catId" component={ItemList} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
