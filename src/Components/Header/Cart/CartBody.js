import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Col, Row, Table } from 'react-bootstrap';
import { CartContext } from '../../../Context/CartProvider';

const CartBody = (props) => {
    const [isDeleted, setDeletedStatus] = useState(true);
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemoveButtonOnClick = e => {
        const targetName = e.currentTarget.getAttribute('data-target');
        console.log(cartItems);
        const newCartItems = cartItems;
        const index = newCartItems.findIndex(el => el.name === targetName);
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        setDeletedStatus(status => !status);
    }


    return (
        <div className='cart__body'>
            {cartItems.length === 0 ? <b>Twój koszyk jest pusty, dodaj coś!</b>
                :
                <Table striped>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nazwa</th>
                            <th>Ilość</th>
                            <th>Cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((el, index) => <tr key={index}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {el.name}
                                </td>
                                <td>
                                    {el.count}
                                </td>
                                <td>
                                    {el.price}
                                </td>
                                <td className='cart__icons'>
                                    <button onClick={handleRemoveButtonOnClick} className='cart__icons--remove' data-target={el.name}>
                                        <FontAwesomeIcon className='mx-2' size='1x' icon={solid('circle-minus')} color='#262626' />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>}

        </div>
    )
}

export default CartBody