import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import SignUp from './components/SignUp';
import NavBar from './components/NavBar'
import ComicContainer from './components/ComicContainer';
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: null
  }

  handleLogin = currentUser => {
    this.setState({ currentUser }, () => {
      this.props.history.push('/comics')
    })
  }
  
  updateUser = newUser => {
    this.setState({ currentUser: newUser})
  }

  handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include"
    })
      .then(r => r.json())
      .then(() => {
        this.setState({ currentUser: null }, () => {
          this.props.history.push('/')
        })
      })
  }

  render() {
    return (
        <div className="app">
          <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>

          <Switch>

            <Route exact path="/login" component={ Login } >
              <Login handleLogin={this.handleLogin} />
            </Route>

            <Route exact path="/signup" component={ SignUp } >
              <SignUp handleLogin={this.handleLogin} />
            </Route>

            <Route exact path="/" component={ Home } />

            <Route path="/comics" component={ComicContainer}>
              {this.state.currentUser ? <h1>Happy Shopping, {this.state.currentUser.username}</h1> : <Redirect to='/' />}
            </Route>
            
            <Route path="/users" >
              {/* <Users /> */}
            </Route>
          </Switch>
        </div>
    )
  }


}
export default withRouter (App);

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
