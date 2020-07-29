import React, { Component } from 'react';
import './App.css';
import SignIn from "./SignIn"
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import NavBar from './components/NavBar'
import ComicContainer from './components/ComicContainer';
import ComicShow from './components/ComicShow';
import Cart from './components/Cart';


class App extends Component {
  state = {
    query: ""
  }

  handleQuery = (event) => {
    console.log(event.target.value)
    this.setState({query: event.target.value})
    
  }
  

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar query={this.state.query} handleQuery={this.handleQuery}/>

          <Switch>
            <Route exact path="/login" component={ SignIn } />
            <Route exact path="/signup" component={ SignUp } />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/comics/:id" component={ComicShow} />
            <Route exact path="/comics" >
              <ComicContainer query={this.state.query} />
            </Route>
            <Route exact path="/" component={ Home } />
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
