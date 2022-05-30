import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Car from './Components/Car';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './Components/Login';
import { ReactNotifications } from 'react-notifications-component'
import PannellumReact from './Components/PannellumReact';
const history = createBrowserHistory();

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <ReactNotifications />
        <BrowserRouter history={history}>
          <div>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/car" component={Car} />
            <Route exact path="/pannel" component={PannellumReact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);
