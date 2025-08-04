import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
     <img src={assets.logo} alt=""  width={120} height={120}/>
     <ul className="menu-list">
      <li>Home</li>
      <li>Menu</li>
      <li>Mobile-App</li>
      <li>Contact Us</li>
     </ul>

     <div className="navbar-right">
      <img src={assets.search_icon} alt="Search icon" />

      <div className='navbar-search-icon'>
        <img src={assets.basket_icon} alt=" basket icon" />
        <div className='dot'></div>
      </div>

       <button className='sign-in'>Sign in</button>
     </div>
    </div>
  )

}

export default Navbar
