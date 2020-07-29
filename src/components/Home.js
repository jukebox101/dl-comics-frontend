import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1 className="logo">DLComics</h1>
            <p className="text">The one stop shop for all things comics! You name it, we got it!</p>
            <div className="buttons">
                <Link to="/login" className="button">Login</Link>
                <Link to="/signup" className="button">Sign Up</Link>
            </div>
       </div>
    )
}


export default Home