import React, { useState, useEffect } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Item from './Item';


const ItemList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/products').then(res => res.json()).then(data => {
            setProductList(data);
        });
    }, []);

    return (
        <Container >
            <Row sm={2} md={3} xl={5} px={5} className='text-center'>
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
                    />)
                }
            </Row>
        </Container>
    )
}

export default ItemList