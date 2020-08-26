import './Cart.css'

import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0 ;
    for (let i = 0; i < cart.length; i++) {
        const items = cart[i];
         total = (items.price + total); 
    }

    let shipping = 0;
     if(total > 35){
        shipping = 0
    }
    else if(total > 0){
        shipping= 12.99;
    }
    else if(total > 15){
        shipping = 4.99;
    }
   
    const tax = total/10;

    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-box'>
            <h3>Order Summary</h3>
            <h4>Items Ordered:{cart.length}</h4>
            <br/>
            <p>Items Price:{total.toFixed(2)}</p>
            <p>Shipping & Handling:{shipping.toFixed(2)}</p>
            <p>Estimated Tax:{tax.toFixed(2)}</p>
            <h3>Order Total:{parseFloat(grandTotal)}</h3>



        </div>
    );
};

export default Cart;