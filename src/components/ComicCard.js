import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComicCard.css'
const ComicCard = (props) => {

    return (
        <div className="card">
            <h2><Link to={`/comics/${props.comicId}`}>{props.title}</Link></h2>
            <img src="https://www.midtowncomics.com/images/PRODUCT/FUL/1924869_ful.jpg" />
            <p>Price: ${props.price}</p>
            <p>Genre: {props.genre}</p>
            <p>Author: {props.author}</p>
            <p>Release Date: {props.release_date}</p>
            <p>Description: {props.description}</p>
            <p>Publisher: {props.publisher}</p>
            
            <button onClick={() => {}}>Add to Cart</button>
        </div>
    )
}

export default ComicCard;