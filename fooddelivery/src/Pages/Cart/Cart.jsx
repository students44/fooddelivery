import React, {useContext} from 'react'
import { StoreContext } from '../../Context/StoreContext';
import './Cart.css'
import FoodItem from '../../Components/Fooditem/FoodItem';

const Cart = () => {

 const {cartItems, food_list, removeFrom} = useContext(StoreContext);
 
 console.log(cartItems, food_list);


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
                    <td><button onClick={() => removeFrom(item._id)} className='remove-item'>Remove</button></td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart
