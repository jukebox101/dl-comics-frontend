import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from "./SignIn"
import SignUp from './SignUp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/login" component={ SignIn } />
            <Route exact path="/signup" component={ SignUp } />
            <Route exact path="/" component={ Home } />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
