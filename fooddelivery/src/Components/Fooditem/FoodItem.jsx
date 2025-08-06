import React, { useState, useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext'; // Make sure the path is correct

const FoodItem = (props) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const { _id: id, name, price, description, image } = props.item;

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt="" />

                {
                    !cartItems[id] ? (
                        <img
                            className='add'
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_white}
                            alt=''
                        />
                    ) : (
                        <div className='food-item-count'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                    )
                }
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className="food-item-price">
                    <span>₹</span>{price}
                </p>
            </div>
        </div>
    );
};

export default FoodItem;
