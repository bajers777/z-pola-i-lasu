import React from 'react';
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ReactComponent as Icon } from '../../../Assets/Images/cart_icon.svg';
const Cart = () => {
    return (
        <div className='navbar__icon'>
            <FontAwesomeIcon icon={solid('cart-shopping')} size='xl' color='#9C9C42' />

        </div>
    )
}

export default Cart