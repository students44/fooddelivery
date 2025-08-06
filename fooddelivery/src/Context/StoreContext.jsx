import React, { createContext, useEffect, useState } from 'react';
import { food_list } from "../assets/frontend_assets/assets";

// Create Context
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    // Add to cart
    const addToCart = (itemid) => {
        console.log("Item added to cart:", itemid);
        setCartItems(prev => ({
            ...prev,
            [itemid]: (prev[itemid] || 0) + 1
        }));
    };

    // Remove from cart
    const removeFromCart = (itemid) => {
        console.log("Item removed from cart:", itemid);
        setCartItems(prev => ({
            ...prev,
            [itemid]: prev[itemid] > 1 ? prev[itemid] - 1 : 0
        }));
    };


    useEffect(() => {
        // Initialize cart items from localStorage if available
        // const storedCart = JSON.parse(localStorage.getItem('cartItems')) || {};
        // setCartItems(storedCart);
        console.log("Cart items initialized:", cartItems);
    }, [cartItems]);

    // Provide value to children
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
