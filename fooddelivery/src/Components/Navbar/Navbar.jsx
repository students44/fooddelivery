import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
     <img src={assets.logo} alt=""  width={120} height={120}/>
     <ul className="menu-bar">
      <li>Home</li>
      <li>Menu</li>
      <li>Mobile-App</li>
      <li>Contact Us</li>
     </ul>

     <div className="navbar-ri">
      <img src={assets.search_icon} alt="Search icon" />
     </div>
    </div>
  )

}

export default Navbar
