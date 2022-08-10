import React, { useContext, useState } from 'react';
import { CartContext } from '../../../Context/CartProvider';
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ReactComponent as Icon } from '../../../Assets/Images/cart_icon.svg';
import CartBody from './CartBody';
//styles
import './Cart.scss';

const Cart = props => {
    const [isContactVisible, setContactVisible] = useState(false);
    const { isCartVisible, setCartVisible } = useContext(CartContext);

    const handleButtonOnClick = e => {
        const type = e.currentTarget.getAttribute('data-type');
        if (type === 'cart') {
            return setCartVisible(visibility => !visibility);
        } else if (type === 'contact') {
            setContactVisible(visibility => !visibility)
        }

    }

    return (
        <>
            <span data-type='contact' onClick={handleButtonOnClick} className='d-md-none navbar__icon'>
                <FontAwesomeIcon icon={solid('phone')} color='#064420' />
            </span>
            <button onClick={handleButtonOnClick} data-type='cart' className={isCartVisible ? 'cart__icon--toggle' : 'navbar__icon'}>
                <FontAwesomeIcon icon={solid('cart-shopping')} color='#064420' />
            </button>
            {isCartVisible && <CartBody />}
        </>
    )
}

export default Cart