import React, { useState, useEffect, useContext } from 'react';
import CartContext from './Context/CartContext';

function CartList(){

    const [list, setList] = useState([]);


    useEffect(()=>{
        // we assume this array was loaded from a rest api:
        const productList = [
        ]

        setList(productList);

    },[])

    const pdlist = list.map((i,index) => {
        return <li key={index}>id:{i.id} | product name: <strong>{i.name}</strong>  <Addbutton pd={i}/></li>
    })

    return ( 
        <ul>
            {pdlist}
        </ul>
    );
}

//// a button to add new product to cart
function Addbutton(props){

    const stt = useContext(listContext);

    return(
            <button onClick={()=>stt.addNew(props.pd)}>add to cart</button>    
    )
}

export default CartList;