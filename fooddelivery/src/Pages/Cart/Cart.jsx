import React, {useContext} from 'react'
import { StoreContext } from '../../Context/StoreContext';
import './Cart.css'

const Cart = () => {

 const {cartItems, food_list, removeFrom} = useContext(StoreContext);
 


  return (
    <div className='cart' id='cart-page'>
      <div className='cart-item'>
        <div className="cart-items-title">
          <p>items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Removed</p>
        </div>
        <br />
        <hr />


      
      </div>
    </div>
  )
}

export default Cart
