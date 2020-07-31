import React from 'react'
import { Link } from 'react-router-dom';

function Home(props) {
    console.log(props)
    const isLogged = props.isLoggedIn
    console.log(isLogged)
    if(isLogged === null){
        return(<div>
            <h1 className="logo">DLComics</h1>
            <p className="text">The exclusive one stop shop for all things comics! You name it, we got it! To shop with us you must first login or sign up! </p>
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