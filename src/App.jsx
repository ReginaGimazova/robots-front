import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import AuthPage from './pages/AuthPage';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/auth" component={AuthPage} exact/>
          <Route path="/game" component={GamePage} exact/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
