import React from 'react';
import {Route} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
const Cart = (props) => {

    // let [total, setTotal] = useState([
    //     {
    //         total: 0
    //     }
    // ])

    // const getTotalSum = () => {
    //     total = total.reduce((sum, { price }) => sum + { price },5);
    //     return total
    // }

    const prices = props.cart.map(item => {return item.price})
    console.log("prices",prices)

    let sum = prices.reduce(function(a,b){
        return a+b;
    }, 0)
    console.log("sum",sum)
    console.log("cart", props.cart)
    
    const eachItem = props.cart.map((item, idx) => {
        console.log(idx)
        return(
           
            <Container key={idx}>
                 <Card >
                <Card.Header>Item: {item.title}</Card.Header>
                <Col xs={6} md={4}>
                    <Image src={item.img_src} thumbnail />
                </Col>
                
                <Card.Body>
                <Card.Title>Price: ${item.price} </Card.Title>
                <Card.Text>
                Price: ${item.price}
                </Card.Text>
                <Button onClick={() => props.removeFromCart(idx)}>Remove from Cart</Button>
                </Card.Body>
            </Card>
            {' '}
            </Container>
        )
    })
   
    if (eachItem.length !== 0){
        return(
            
        <Container>
            <Row>
                <Col sm={8}>
                    {eachItem}
                </Col>
                <Col sm={4}>
                    {'   '}
                    <Card>
                        <Card.Header>Total Cost</Card.Header>
                        <Card.Body>
                        <Card.Title> Item(s): {props.cart.length} </Card.Title>
                        <Card.Text>
                            Total: ${sum}
                        </Card.Text>
                        <Button onClick={() => {window.location.replace("/thankyou")}}>Complete Order</Button>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
                    
        </Container>
        )
    }  else {
    return(
        <Container>
                    <Row>
                        <Col sm={8}>
                        <Card>
                                <Card.Header>Items</Card.Header>
                                <Card.Body>
                                <Card.Title> Empty Cart </Card.Title>
                                <Card.Text>
                                    Fill me up with awesome comics!
                                </Card.Text>
                                </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <Card.Header>Total Cost</Card.Header>
                                <Card.Body>
                                <Card.Title> Item(s): {props.cart.length} </Card.Title>
                                <Card.Text>
                                    Total: ${sum}
                                </Card.Text>
                                <Button onClick={() => {console.log("complete order")}}>Complete Order</Button>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                    </Row>
                            
                </Container>
    )}
}

export default Cart;