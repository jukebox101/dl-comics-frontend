import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar'
import './App.css';
import ComicContainer from './components/ComicContainer';

export default function App() {
  return (
    <Router>
      <div>

      <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/comics" component={ComicContainer}/>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
