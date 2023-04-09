import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart)
    return (
        <div>
            <h2>output from Cart {cart.length}</h2>
            {cart.map(tshirt =><p 
            key={tshirt._id}>
                {tshirt.name}
                <button onClick={()=>{handleRemoveFromCart(tshirt._id)}}>Delete</button>
            </p>)}
        </div>
    );
};

export default Cart;