import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login"
import SignUp from './components/SignUp';
import NavBar from './components/NavBar'
import ComicContainer from './components/ComicContainer';
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import ComicShow from "./components/ComicShow";
import Cart from './components/Cart';
import Container from 'react-bootstrap/Container'

class App extends Component {
  state = {
    currentUser: null,
    query: "",
    cart: []
  }

  addToCart = (comic) => {
    
    this.setState({
      ...this.state,
      cart: {...this.state.cart, comic}
    })
    console.log(this.state.cart)
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
  handleQuery = (event) => {
    console.log(event.target.value)
    this.setState({query: event.target.value})
    
  }

  render() {
    return (
      
        <div className="app">
          <NavBar 
            query={this.state.query} 
            handleQuery={this.handleQuery} 
            currentUser={this.state.currentUser} 
            handleLogout={this.handleLogout}
            />
          <Switch>
            <Route exact path="/comics/:id" component={ComicShow} />
            {/* <Route exact path="/comics" component={ComicContainer}/> */}
            {/* <Route exact path="/" component={ Home } /> */}

            <Route exact path="/login" component={ Login } >
              <Login handleLogin={this.handleLogin} />
            </Route>

            <Route exact path="/signup" component={ SignUp } >
              <SignUp handleLogin={this.handleLogin} />
            </Route>
            <Route exact path="/comics" >
              <ComicContainer 
                addToCart={this.addToCart} 
                query={this.state.query} 
                />
            </Route>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/" component={ Home } />

            <Route path="/comics" component={ComicContainer}>
              {this.state.currentUser ? <h1>Happy Shopping, {this.state.currentUser.username}</h1> : <Redirect to='/' />}
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
