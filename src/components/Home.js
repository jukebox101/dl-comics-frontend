import React from 'react'
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Home() {
    return(
        <Jumbotron> 
            <h1 className="logo">DLComics</h1>
            <p className="text">The one stop shop for all things comics! You name it, we got it!</p>
            <div className="buttons">
                <Link to="/login" className="button">Login</Link>
                <Link to="/signup" className="button">Sign Up</Link>
            </div>
        </Jumbotron>
    )
}


export default Home