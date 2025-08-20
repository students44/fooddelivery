import React, { useState, useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext'; // Adjusted path
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    payment: 'cod',
    note: '',
  });

  const { getTotalItems, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show sweet alert
    Swal.fire({
      title: 'Order Placed!',
      text: 'Your order has been placed successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    // Reset form
    setForm({
      name: '',
      address: '',
      phone: '',
      payment: 'cod',
      note: '',
    });
  };

const handleProceedCheckout = () => {
  // Check if the cart is empty
  if (getTotalItems() === 0) {
    Swal.fire({
      title: 'Cart is empty!',
      text: 'Add some items to proceed.',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Check if all required form fields are filled
  const { name, address, phone, payment } = form;
  if (!name || !address || !phone || !payment) {
    Swal.fire({
      title: 'Incomplete Form!',
      text: 'Please fill all required delivery information before proceeding.',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Clear the cart
  clearCart();

  // Show success alert and navigate after confirmation
  Swal.fire({
    title: 'Proceeding to Payment',
    text: 'Your cart has been cleared for checkout.',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    navigate('/cart'); // Change '/cart' to your payment page route
  });
};


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
          <textarea id="note" name="note" value={form.note} onChange={handleChange} required />
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
              <p><span style={{marginRight:'1px'}}>$</span>{getTotalItems() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b><span style={{marginRight:'1px'}}>$</span>{getTotalItems() + (getTotalItems() === 0 ? 0 : 2)}</b>
            </div>
          </div>
          <div className="proceed-parent">
            <button 
              type="button" 
              className='proceed-checkout' 
              onClick={handleProceedCheckout}
            >
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
