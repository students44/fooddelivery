import React from 'react'
import './FoodDisplay.css'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../Fooditem/FoodItem';

const FoodDisplay = (category) => {

    const { food_list } = useContext(StoreContext);
    console.log(food_list)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes Near to you</h2>

     <div className="food-display-list">
  {food_list.map((item, index) => {
    return (
      <FoodItem item={item} // ✅ Pass the entire item object
        key={index}
      
      />
    );
  })}
</div>

      
    </div>
  )
}

export default FoodDisplay
