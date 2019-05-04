import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import MenuPage from './components/pages/MenuPage';
import GamePage from './components/pages/GamePage';
import AuthPage from './components/pages/AuthPage';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AuthPage} exact/>
          <Route path="/menu" component={MenuPage} exact/>
          <Route path="/game" component={GamePage} exact/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
