import React from 'react'
import { Link, Redirect } from 'react-router-dom';

function Home(props) {
    console.log(props)
    const isLogged = props.isLoggedIn
    if(isLogged === null){
        return(<div>
            <h1 className="logo">DLComics</h1>
            <p className="text">The one stop shop for all things comics! You name it, we got it!</p>
            <div className="buttons">
                <Link to="/login" className="button">Login</Link>
                <Link to="/signup" className="button">Sign Up</Link>
            </div>
       </div>)
    }else{
    return <h1>Happy Shopping, {props.isLoggedIn.username} <button onClick={props.logout}>Logout</button></h1>
    }

}


export default Home