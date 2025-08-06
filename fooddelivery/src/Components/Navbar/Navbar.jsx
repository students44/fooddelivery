import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useState } from 'react'

const Navbar = () => {
 

  // state for navbar menu

  const [menu, setMenu] =useState("home");




  return (
    <div className='navbar'>
     <img src={assets.logo} alt="" className='logo'/>
     <ul className="menu-list">
      <li onClick={()=>setMenu("home")} className={menu === "home"?"active" : ""}>Home</li>
      <li onClick={()=>setMenu("menu")} className={menu === "menu"  ? "active" : ""}>Menu</li>
      <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"  ? "active" : ""}>Mobile-App</li>
      <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
     </ul>

     <div className="navbar-right">
      <img src={assets.search_icon} alt="Search icon" />

     <div className='navbar-search-icon'>
  <img src={assets.basket_icon} alt="basket icon" />
  <div className='dot'></div>
</div>


       <button className='sign-in'>Sign in</button>
     </div>
    </div>
  )

}

export default Navbar
