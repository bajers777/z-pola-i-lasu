import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Item = props => {
    const { name, price, cap, stock, shortDesc, longDesc, img } = props;
    return (
        <Col className='store__item'>
            <Card>
                <div className="card__img">
                    <Card.Img src={img} alt={name} />
                    <Button variant="primary">Dodaj do koszyka <FontAwesomeIcon icon={solid('basket-shopping')} size='sm' color='#f1e4e4' /></Button>
                </div>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{cap}</Card.Text>
                    <Card.Text>Cena: {price} zł.</Card.Text>
                    {/* <Card.Text>
                    {shortDesc}
                </Card.Text> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item