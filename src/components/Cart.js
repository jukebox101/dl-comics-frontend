import React, { useContext } from 'react'
import CartContext from './CartContext'

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
        return (
            <div>
                <span>Items in cart: {cart.length}</span>
                <br />
                <span>Total price: 0 </span>
            </div>
        )
}


export default Cart