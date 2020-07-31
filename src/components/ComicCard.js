import React, {useContext, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ComicShow from './ComicShow.js';
import CartContext from './CartContext'
import './ComicCard.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ComicCard = (props) => {

    return (

        <Card className="card-style">
            <Card.Img variant="top" src={props.img_src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="price">
                    Price: ${props.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href=`/comics/${props.comicId}`;
                    }}
                >Details</Button>
                {' '}
                <Button onClick={() => props.addToCart(props.title)}>Add to Cart</Button>
            </Card.Footer>
        </Card>
        // <div className="column">
        //     <div className="card">
        //         <img src= alt= width="100" />
        //         <h2>{<Link to={`/comics/${props.comicId}`}>{props.title}</Link>}</h2>
        //         <p className="price"></p>
        //         {/* <p>Genre: {props.genre}</p>
        //         <p>Written By: {props.author}</p>
        //         <p>Art By: {props.artist}</p>
        //         <p>Release Date: {props.release_date}</p>
        //         <p>Description: {props.description}</p>
        //         <p>Publisher: {props.publisher}</p> */}
        //         <p></p>
        //     </div>
        // </div>

       
    )
}

export default ComicCard;