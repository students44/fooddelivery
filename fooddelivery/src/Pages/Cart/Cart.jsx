import React from 'react'
import './Cart.css'

const Cart = () => {

 const {cartItems, food_list, removeFrom} = useContext(StoreContext);
 


  return (
    <div className='cart-page' id='cart-page'>
      <h2>this is cart page</h2>
    </div>
  )
}

export default Cart
