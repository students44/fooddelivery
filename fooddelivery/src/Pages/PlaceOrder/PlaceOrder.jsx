import React, { useState,useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext'; // Adjusted path



const PlaceOrder = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    payment: 'cod',
    note: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Place order logic here
    alert('Order placed successfully!');
  };


  const { getTotalItems } = useContext(StoreContext);

  return (
   <form className="placeorder-form" onSubmit={handleSubmit}>
  <div className="placeorder-left">
    <h2>Delivery Information</h2>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label htmlFor="address">Address</label>
      <textarea id="address" name="address" value={form.address} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label>Payment Method</label>
      <select name="payment" value={form.payment} onChange={handleChange}>
        <option value="cod">Cash on Delivery</option>
        <option value="card">Credit/Debit Card</option>
        <option value="upi">UPI</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="note">Order Note (optional)</label>
      <textarea id="note" name="note" value={form.note} onChange={handleChange} />
    </div>
  </div>

  <div className="placeorder-right">
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
          <b><span style={{marginRight:'1px'}}>$</span>{getTotalItems() + 2}</b>
        </div>
      </div>
      <div className="proceed-parent">
        <button className='proceed-checkout'>Proceed to payment</button>
      </div>
    </div>
  </div>
</form>

  );
}

export default PlaceOrder
