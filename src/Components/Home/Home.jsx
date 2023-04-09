import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';


const Home = () => {
    const [cart,setCart] =useState([])

    const handleAddtoCart = (tshirt)=>{
      const exists =  cart.find(ts=> ts._id === tshirt._id )
      if(exists){
        toast('already added')
      }
      else{
        const newCart =[...cart , tshirt]
        setCart(newCart)
      }
       
    }
    const handleRemoveFromCart =(id)=>{
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
       
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
            <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            
            ></Cart>
           </div>

           
        </div>
    );
};

export default Home;