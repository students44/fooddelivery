import React, { useContext, useState, useRef, useEffect} from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
// import { useState } from 'react'
import { StoreContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
 
  // Function to handle login button click

  // state for navbar menu
  const [menu, setMenu] = useState("home");

  // Get cart items from context
  const { cartItems } = useContext(StoreContext);
  // Calculate total items in cart
  const cartCount = Object.values(cartItems || {}).reduce((sum, qty) => sum + (qty || 0), 0);
  


const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setShowInput(true); // show input when icon clicked
  };

  // Close input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false); // hide input, show icon again
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <div className='navbar'>
   <Link to= '/'><img src={assets.logo} alt="" className='logo'/></Link>  
     <ul className="menu-list">
      <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active" : ""}>Home</Link>
      <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu"  ? "active" : ""}>Menu</a>
      <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"  ? "active" : ""}>Mobile-App</a>
      <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
     </ul>

     <div className="navbar-right">
 <div className="main-search" ref={inputRef}>
      {/* Show search icon only when input is hidden */}
      {!showInput && (
        <img
          src={assets.search_icon}
          alt="Search icon"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      )}

      {/* Show input only when state is true */}
      {showInput && (
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          autoFocus
        />
      )}
    </div>


    <div className='navbar-search-icon'>
  <Link to='/Cart'>
    <img src={assets.basket_icon} alt="basket icon" />
  </Link>
  {cartCount > 0 && (
    <div className='cart-count'>{cartCount}</div>
  )}
</div>



       <button onClick={()=>setShowLogin(true)} className='sign-in'>Sign in</button>
     </div>
    </div>
  )

}

export default Navbar
