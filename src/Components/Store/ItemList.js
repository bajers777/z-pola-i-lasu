import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Item from './Item';


const ItemList = () => {
    const [productList, setProductList] = useState([]);

    const CartCtx = useContext(CartContext);

    useEffect(() => {
        fetch('http://localhost:8888/products').then(res => res.json()).then(data => {
            console.log(data);
            setProductList(data);
        });
    }, []);

    return (
        <Container>
            <Row px={5} className='text-center justify-content-center justify-content-sm-start'>
                {
                    productList.map(item => <Item
                        key={item.name + item.stock}
                        name={item.name}
                        price={item.price}
                        cap={item.cap}
                        stock={item.stock}
                        shortDesc={item.shortDesc}
                        longDesc={item.longDesc}
                        img={item.img}
                        thumbnail={item.thumbnail}
                        setCartItems={CartCtx.setCartItems}
                        cartItems={CartCtx.cartItems}
                        isCartVisible={CartCtx.isCartVisibe}
                        setCartVisible={CartCtx.setCartVisible}
                    />)
                }
            </Row>
        </Container>
    )
}

export default ItemList