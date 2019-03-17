import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return(
      <Provider>
        <BrowserRouter>
          <Switch>

          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}