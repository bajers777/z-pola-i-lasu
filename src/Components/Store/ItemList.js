import React, { useState, useEffect } from 'react';
import Item from './Item';


const ItemList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/products').then(res => res.json()).then(data => {
            setProductList(data.productList);
        });
    }, []);

    return (
        <>
            {
                productList.map(item => <Item
                    key={item.name + item.stock}
                    name={item.name}
                    price={item.price}
                    cap={item.cap}
                    stock={item.stock}
                    shortDesc={item.shortDesc}
                    longDesc={item.longDesc}
                />)
            }
        </>
    )
}

export default ItemList