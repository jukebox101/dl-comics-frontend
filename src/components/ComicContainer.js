import React, { useState, useEffect } from "react";
import ComicCard from './ComicCard'
import Cart from './Cart'
import CartContext from './CartContext'
import './ComicCard.css'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ComicContainer = (props) => {
    
    let [comics, setComics] = useState([])
    let [cart, setCart] = useState([])
    console.log(cart)

    useEffect(() => {
        fetch(`http://localhost:3000/comics`)
        .then(r => r.json())
        .then(comicsData => {
            const comicsArr = comicsData
            setComics(comicsArr)
        })
    }, [])

    let comicsArray = comics

    console.log(comicsArray)
    const comicsCards = comics.map(comic => 
        comic.title.toLowerCase().includes(props.query) ? 
        <ComicCard 
            key={comic.id}
            comicId={comic.id} 
            title={comic.title} 
            price={comic.price} 
            genre={comic.genre}
            author={comic.author}
            artist={comic.artist}
            release_date={comic.release_date}
            description={comic.description}
            publisher={comic.publisher} 
            img_src={comic.img_url}
            addToCart={props.addToCart}
            />
            : null
            )
            
    return (
        <Container >
            <Row>
                <Col>
                    <CardColumns>
                        {comicsCards}
                    </CardColumns>
                </Col>
                
            </Row>
            
        </Container>

        // <div className="container" >
        //     <div className="row">
                
        //     </div>
        // </div>
         
    )
}
export default ComicContainer;