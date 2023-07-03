import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react';
import Cart from './components/Cart';
import Home from './components/Home';
import list from './data';

const App = () => {

       
        const [cart, setCart] = useState([]);
        const [warning, setWarning] = useState(false);
        const [show, setShow] = useState(true);

        const handleClick =(item) => {
          let isPresent = false;
          cart.forEach((product) => {
            if(item.id === product.id) 
            return isPresent=true;
        })

        if(isPresent)
        {
          setWarning(true);
          setTimeout(()=>{
            setWarning(false);
          },2000);
          return;
        }
        
        setCart([...cart, item]);
      }


  return (
    <>
    <Navbar size = {cart.length} setShow={setShow}/>
    {
      show ? <Home  handleClick = {handleClick}/> :
      <Cart cart={cart} setCart={setCart}/>
    }
    
    {
      warning && <div className='warning'>Item is already added to cart</div>
    }
    </>
  )
}

export default App