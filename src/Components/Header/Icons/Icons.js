import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../Context/CartProvider';
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import CartBody from './CartBody';
import Contact from '../Navbar/Contact';
//styles
import './Cart.scss';

const Icons = props => {
    const [isContactVisible, setContactVisible] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const { isCartVisible, setCartVisible } = useContext(CartContext);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const handleButtonOnClick = e => {
        const type = e.currentTarget.getAttribute('data-type');
        if (type === 'cart') {
            setContactVisible(false);
            return setCartVisible(visibility => !visibility);
        } else if (type === 'contact') {
            setCartVisible(false);
            setContactVisible(visibility => !visibility)
        }

    }
    useEffect(() => {
        window.addEventListener('resize', () => setWindowSize(getWindowSize()));
        return () => {
            window.removeEventListener('resize', () => setWindowSize(getWindowSize()));
        }
    }, []);

    useEffect(() => {
        if (windowSize.innerWidth > 768) {
            setContactVisible(false);
        }
    }, [windowSize])

    console.log(props);
    return (
        <>
            <button data-type='contact' onClick={handleButtonOnClick} className={`${isContactVisible ? 'cart__icon--toggle' : 'navbar__icon'} d-md-none`}>
                <FontAwesomeIcon icon={solid('phone')} color='#064420' />
            </button>
            <button onClick={handleButtonOnClick} data-type='cart' className={isCartVisible ? 'cart__icon--toggle' : 'navbar__icon'}>
                <FontAwesomeIcon icon={solid('cart-shopping')} color='#064420' />
            </button>
            {isCartVisible && <CartBody />}
            {isContactVisible && <Contact checkout={props.checkout} isVisible={true} />}
        </>
    )
}

export default Icons;