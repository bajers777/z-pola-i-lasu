import React, { useState } from 'react'

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);
    const value = { cartItems, setCartItems, isCartVisible, setCartVisible }
    return (
        <CartContext.Provider value={value}>
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider