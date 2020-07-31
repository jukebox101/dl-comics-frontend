import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const ComicShow = ({ match }) => {

    const { params: { id } } = match;
    let [comic, setComic] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/comics/${id}`)
        .then(r => r.json())
        .then(comic => {
            
            const comicInfo = comic
            setComic(comic)
            console.log("comic info set",comicInfo)
        })
    },[id])

    return(
        // <div>
        //     <img src={comic.img_url} alt={comic.title} width="450" height="600" />
        //     <h2>{comic.title}</h2>
        //     <p>Publisher: {comic.publisher}</p>
        //     <p>Price: ${comic.price}</p>
        //     <p>Genre: {comic.genre}</p>
        //     <p>Written By: {comic.author}</p>
        //     <p>Art By: {comic.artist}</p>
        //     <p>Release Date: {comic.release_date}</p>
        //     <p>Description: {comic.description}</p>
        // </div>
                <Container>
                <Row>
                    <Col sm={7}>
                       
                    <Image src={comic.img_url} width="500"/>
                    </Col>
                    <Col sm={5}>
                        {'   '}
                        <Card>
                            <Card.Header>Details</Card.Header>
                            <Card.Body>
                            <Card.Title> {comic.title} </Card.Title>
                            <Card.Text> Price: {comic.price} </Card.Text>
                            <Card.Text> Publisher: {comic.publisher} </Card.Text>
                            <Card.Text> Genre: {comic.genre} </Card.Text>
                            <Card.Text> Written By: {comic.author} </Card.Text>
                            <Card.Text> Art By: {comic.artist} </Card.Text>
                            <Card.Text> Description: {comic.description} </Card.Text>
                            <Card.Text>Release Date: {comic.release_date}</Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
                        
            </Container>
    )
}
export default ComicShow;