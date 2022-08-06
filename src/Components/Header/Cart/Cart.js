import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartProvider';
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ReactComponent as Icon } from '../../../Assets/Images/cart_icon.svg';
import CartBody from './CartBody';
//styles
import './Cart.scss';

const Cart = props => {

    const CartCtx = useContext(CartContext);
    const { isCartVisible, setCartVisible, cartItems } = CartCtx;

    const handleButtonOnClick = () => {
        return setCartVisible(prevState => !prevState);
    }
    return (
        <>
            <span className='d-md-none navbar__icon'>
                <FontAwesomeIcon icon={solid('phone')} color='#064420' />
            </span>
            <button onClick={handleButtonOnClick} className='navbar__icon'>

                <FontAwesomeIcon icon={solid('cart-shopping')} color='#064420' />
            </button>
            {isCartVisible && <CartBody cartItems={cartItems} />}
        </>
    )
}

export default Cart