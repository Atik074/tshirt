import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const [cart,setCart] =useState([])

    const handleAddtoCart = (tshirt)=>{
        console.log(tshirt)
    }
    const tShirts =useLoaderData()

    return (
        <div className='home-container'>
           <div className='t-shirts-container'>
           {
                tShirts.map(tshirt =><Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddtoCart={handleAddtoCart}
                ></Tshirt>)
            }
           </div>

           <div className='cart-container'>
            <Cart></Cart>
           </div>

           
        </div>
    );
};

export default Home;