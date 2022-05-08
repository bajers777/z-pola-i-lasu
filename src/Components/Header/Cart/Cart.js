import React from 'react';
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Cart = () => {
    return (
        <div className='cart'>
            <FontAwesomeIcon icon={solid('basket-shopping')} size='2x' color='#f1e4e4' />
        </div>
    )
}

export default Cart