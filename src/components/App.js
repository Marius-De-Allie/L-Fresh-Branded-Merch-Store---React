import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import Nav from './Nav';

import '../App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
