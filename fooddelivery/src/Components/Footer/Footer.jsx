import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-section logo-section'>
          <img src={assets.logo} alt='Logo' className='footer-logo' />
          <p className='footer-description'>Delicious food delivered to your door. Fast, fresh, and affordable.</p>
            <div className='footer-socials'>
            <img src={assets.facebook_icon} alt="Facebook icon" />
            <img src={assets.twitter_icon} alt="twitter icon" />
            <img src={assets.linkedin_icon} alt="linkedin icon" />
          </div>
        </div>
        <div className='footer-section links-section'>
          <h4>Company</h4>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/cart'>Cart</a></li>
            <li><a href='/order'>Order</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-section contact-section'>
          <h4>Contact Us</h4>
          <p>Email: support@fooddelivery.com</p>
          <p>Phone: +1 234 567 890</p>
        
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} FoodDelivery. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
