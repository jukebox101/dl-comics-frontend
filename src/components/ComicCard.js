import React, {useContext, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ComicShow from './ComicShow.js';
import './ComicCard.css'
import { render } from '@testing-library/react';

const ComicCard = (props) => {
    const [page, setPge] = useState("products")
    return (
        <Router>
            <div className="card">
                <div>
                    <h2>{<Link to={`/comics/${props.comicId}`}>{props.title}</Link>}</h2>
                    <p>Price: ${props.price}</p>
                    <p>Genre: {props.genre}</p>
                    <p>Author: {props.author}</p>
                    <p>Release Date: {props.release_date}</p>
                    <p>Description: {props.description}</p>
                    <p>Publisher: {props.publisher}</p>
                    <button onClick={() => props.addToCart(props)}>Add to Cart</button>
                </div>
            </div>
        </Router>
    )
}

export default ComicCard;