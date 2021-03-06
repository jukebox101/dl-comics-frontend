import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login"
import SignUp from './components/SignUp';
import NavBar from './components/NavBar'
import Home from './components/Home'
import ComicShow from './components/ComicShow'
import ComicContainer from './components/ComicContainer'
import Cart from './components/Cart'
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import ThankYou from './components/ThankYou'

class App extends Component {
  state = {
    currentUser: null,
    query: "",
    comics: [],
    cart: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/comics`)
    .then(r => r.json())
    .then(comicsData => {
        const comicsArr = comicsData
        this.setState({
          comics: comicsArr
        })
    })
  }
  

  addToCart = (product) => {
    console.log("adding to cart from App.js")
      this.setState ({
        cart:[...this.state.cart, product]
      })
    
  }

  removeFromCart = (productToRemove) => {
    const updateCart = this.state.cart.filter((product, index) => {if(index !== productToRemove) return product} )

    this.setState({
        cart: updateCart
    })
  }

  handleLogin = (currentUser) => {
    this.setState({ currentUser }, () => {
      this.props.history.push('/comics')
    })
  }
  
  updateUser = (newUser) => {
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
            cart={this.state.cart}
            query={this.state.query} 
            handleQuery={this.handleQuery} 
            currentUser={this.state.currentUser} 
            handleLogout={this.handleLogout}
            />
          <Switch>
            <Route exact path="/comics/:id" component={ComicShow} addToCart={this.addToCart}  />

            <Route exact path="/login" component={ Login } >
              <Login handleLogin={this.handleLogin} />
            </Route>

            <Route exact path="/signup" component={ SignUp } >
              <SignUp handleLogin={this.handleLogin} />
            </Route>

            {this.state.currentUser && <Route exact path="/comics" render={() => <ComicContainer cart={this.state.cart} addToCart={this.addToCart} comics={this.state.comics} query={this.state.query}/>} />}
              {/* <ComicContainer cart={this.state.cart} addToCart={this.addToCart} comics={this.state.comics} query={this.state.query}/> */}
            {/* </Route> */}

            <Route exact path="/" component={ Home }  >
              <Home isLoggedIn={this.state.currentUser} logout={this.handleLogout}/>
            </Route>

            <Route exact path="/thankyou">
              <ThankYou/>
            </Route>
            <Route exact path="/cart" component={ Cart } >
              <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
            </Route>

          </Switch>
        </div>
    )
  }


}
export default withRouter (App);

