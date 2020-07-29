import React, {useContext, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ComicShow from './ComicShow.js';
import CartContext from './CartContext'
import './ComicCard.css'

const ComicCard = (props) => {
    const [cart, setCart] = useContext(CartContext)
    const addToCart = () => {
        const comic = {title: props.title, price: props.price}
        setCart(currentState => [...currentState, comic])
    }

    return (
        <Router>
            <div>
            <Route path={`/comics/${props.comicId}`} component={ComicShow} />
                <h2>{<Link to={`/comics/${props.comicId}`}>{props.title}</Link>}</h2>
                <p>Price: ${props.price}</p>
                <p>Genre: {props.genre}</p>
                <p>Author: {props.author}</p>
                <p>Release Date: {props.release_date}</p>
                <p>Description: {props.description}</p>
                <p>Publisher: {props.publisher}</p>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </Router>
       
    )
}

export default ComicCard;