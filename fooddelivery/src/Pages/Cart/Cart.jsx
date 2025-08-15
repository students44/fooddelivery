import React, {useContext} from 'react'
import { StoreContext } from '../../Context/StoreContext';
import './Cart.css'
import FoodItem from '../../Components/Fooditem/FoodItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

 const {cartItems, food_list, removeFromCart, getTotalItems} = useContext(StoreContext);
 
 console.log(cartItems, food_list);

 const navigate = useNavigate();


  return (
    <div className='cart' id='cart-page'>
      <div className='cart-item'>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Removed</th>
            </tr>
          </thead>
          <tbody>
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <tr key={item._id} className="cart-items-item">
                    <td><img src={item.image} alt={item.name} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px' }} /></td>
                    <td>{item.name}</td>
                    <td>₹ {item.price}</td>
                    <td>{cartItems[item._id]}</td>
                    <td>₹ {item.price * cartItems[item._id]}</td>
                    <td><button onClick={() => removeFromCart(item._id)} className='remove-item'>Remove</button></td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>


      {/* cart bottom */}

      <div className='cart-bottom'>
    <div className="cart-total">
      <h2>Cart totals</h2>
      <div>
        <div className="cart-total-details">
          <p>Sub total</p>
          <p><span style={{marginRight:'1px'}}>$</span>{getTotalItems()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery fee</p>
          <p><span style={{marginRight:'1px'}}>$</span>{2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b><span style={{marginRight:'1px'}}>$</span>{getTotalItems() +2}</b>
        </div>

        
      </div>
      <div className="proceed-parent">
    <button className='proceed-checkout' onClick={()=>navigate('/order')}>Proceed Checkout</button>
      </div>

    </div>

    <div className="cart-promoCode">
      <div>
        <p>
          If you have a promo code, please enter it below

        </p>
        <div className='cart-promoCode-input'>
          <input type="text" placeholder='Enter promo code' />
          <button className='apply-promoCode'>submit</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Cart
