import React, { createContext, useState } from 'react';
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

    // Clear entire cart
    const clearCart = () => {
        console.log("Cart cleared");
        setCartItems({});
    };

    // Get total items amount
    const getTotalItems = () => {
        let totalAmount = 0;
        for (const Item in cartItems) {
            let itemInfo = food_list.find((product) => product._id === Item);
            totalAmount += itemInfo ? itemInfo.price * cartItems[Item] : 0;
            if (itemInfo) {
                console.log(`Item: ${itemInfo.name}, Quantity: ${cartItems[Item]}, Total: ₹${itemInfo.price * cartItems[Item]}`);
            }
        }
        return totalAmount;
    };
    const deleteFromCart = (id) => {
  setCartItems(prev => {
    const updated = { ...prev };
    delete updated[id]; // remove item fully
    return updated;
  });
};


    // Provide value to children
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
         deleteFromCart,
        clearCart,      // <-- Added this
        getTotalItems
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
