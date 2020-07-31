import React, { Link, useState } from 'react';

const Cart = (props) => {

    let [total, setTotal] = useState([
        {
            total: 0
        }
    ])

    console.log(total)
    const getTotalSum = () => {
        total = total.reduce((sum, { price }) => sum + { price }, 5);
        return total
    }
    const eachItem = props.cart.map((item, idx) => {
        return(
        <div>
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={() => props.removeFromCart(idx)}>Remove from Cart</button> 
        </div>)
    })
    return(
        <div>
            <h1>Shopping Cart</h1>
            <div className="card">
                <div>
                    {eachItem}
                </div>
                <div>
                    <h4>TOTAL COST: ${getTotalSum()}</h4>
                </div>
            </div>
        </div>
    )
}

export default Cart;