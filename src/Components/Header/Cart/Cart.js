import React from 'react';
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ReactComponent as Icon } from '../../../Assets/Images/cart_icon.svg';


const Cart = props => {
    return (
        <>
            <span className='d-md-none navbar__icon'>
                <FontAwesomeIcon icon={solid('phone')} color='#064420' />
            </span>
            <span className='navbar__icon'>

                <FontAwesomeIcon icon={solid('cart-shopping')} color='#064420' />
            </span>
        </>
    )
}

export default Cart