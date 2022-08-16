import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Item = props => {
    const { name, price, cap, stock, shortDesc, longDesc, thumbnail, img, setCartItems, cartItems, isCartVisible, setCartVisible } = props;

    const handleButtonOnClick = e => {
        let newCartItem = { name, price, count: 1 };
        const newCartItems = cartItems;
        const isInCart = newCartItems.some(el => el.name === newCartItem.name);
        const index = newCartItems.findIndex(el => el.name === newCartItem.name);
        isInCart ? newCartItems[index].count += 1 : newCartItems.push(newCartItem);

        return setCartItems(newCartItems);
    }
    return (
        <Col xs='8' sm='6' md='4' lg='3' xl='3' data-aos='zoom-in' className='store__item'>
            <Card>
                <div className="card__img">
                    <Link to={`/products/${name}`}>
                        <Button>
                            <FontAwesomeIcon className='mx-2' size='3x' icon={solid('circle-question')} color='#10BC58' />
                        </Button>
                    </Link>
                    <Card.Img src={thumbnail} alt={name} />
                </div>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <Button className='btn-outline-warning' onClick={handleButtonOnClick}>
                        <FontAwesomeIcon className='mx-2' size='3x' icon={solid('circle-plus')} color='#10BC58' />
                    </Button>
                    <Card.Title>
                        <p style={{ fontSize: '1rem' }}>
                            {name}
                        </p>
                    </Card.Title>
                    <Card.Text className='card-text--cap'>
                        <i>
                            {cap}
                        </i>
                    </Card.Text>
                    <Card.Text className='card-text--price'>
                        <b>
                            {price} zł.
                        </b>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default Item