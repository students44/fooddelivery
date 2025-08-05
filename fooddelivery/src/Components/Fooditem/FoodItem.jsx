import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'

const FoodItem = (props) => {
    let {_id:id,name,price,description,image} = props.item; // Destructure the item object
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt="" />
      </div>

        <div className="food-item-info"> 
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-description'>
                {description}
            </p>
            <p className="food-item-price">
                <span>₹</span>
                {price}
            </p>
            </div>
    </div>
  )
}

export default FoodItem
