import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      {/* header contents */}
      <div className="header-contents">
        <h2>Welcome to Our Food Delivery Service</h2>
        <p>Order your favorite meals from the comfort of your home.</p>
        <button className='view-menu'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
