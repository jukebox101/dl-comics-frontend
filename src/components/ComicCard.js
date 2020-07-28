import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ComicShow from './ComicShow.js';

const ComicCard = (props) => {

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
            </div>
        </Router>
       
    )
}

export default ComicCard;