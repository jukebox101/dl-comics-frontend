import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from "./SignIn"
import SignUp from './SignUp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import NavBar from './components/NavBar'
import ComicContainer from './components/ComicContainer';



class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />

          <Switch>
            <Route exact path="/login" component={ SignIn } />
            <Route exact path="/signup" component={ SignUp } />
            <Route exact path="/" component={ Home } />
            <Route path="/comics" component={ComicContainer}/>
            <Route path="/users" >
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

// export default function App() {
//   return (
//     <Router>
//       <div>

//       <NavBar />
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
          
//           <Route path="/comics" component={ComicContainer}/>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
  
//   return <h2>Home</h2>;
// }
}
export default App

function Users() {
  return <h2>Users</h2>;
}
