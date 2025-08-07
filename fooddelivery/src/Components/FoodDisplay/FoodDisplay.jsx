import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../Fooditem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>

      <h2>Top dishes Near to you</h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          // Filter items based on the selected category
          if (category === "all" || category === item.category) {
            return <FoodItem item={item} key={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
 