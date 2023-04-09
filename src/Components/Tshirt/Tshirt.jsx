import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddtoCart}) => {

    
   const {picture,name,price} = tshirt

    return (
        <div className='single-tShirt-item'>
            <img src={picture} alt='#'/>
            <h2>Name:{name}</h2>
            <p>Price:{price}</p>
            <button onClick={()=>{handleAddtoCart(tshirt)}}>Buy Now</button>
        </div>
    );
};

export default Tshirt;