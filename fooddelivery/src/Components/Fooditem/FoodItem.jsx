import React ,{useState} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'

const FoodItem = (props) => {
   

    const [itemCount, setItemCount] = useState(0);
    console.log(itemCount);

    let {_id:id,name,price,description,image} = props.item; // Destructure the item object
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt="" />


    {
        !itemCount ? <img className='add' onClick={()=>setItemCount(prev=>prev +1)} src={assets.add_icon_white} alt=''  /> 
        : <div className='food-item-count'>
            <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
            <p>{itemCount}</p>
            <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
          </div>
    }



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
