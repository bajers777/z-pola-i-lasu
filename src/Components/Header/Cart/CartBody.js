import React from 'react';
import { Table } from 'react-bootstrap';

const CartBody = (props) => {
    const { cartItems } = props;
    return (
        <div className='cart__body'>
            {cartItems.length === 0 ? <b>Dodaj coś do koszyka!</b> :
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
                            </tr>)
                        }
                    </tbody>
                </Table>}

        </div>
    )
}

export default CartBody