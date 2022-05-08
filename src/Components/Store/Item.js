import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Item = props => {
    const { name, price, cap, stock, shortDesc, longDesc } = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {shortDesc}
                </Card.Text>
                <Button variant="primary">Dodaj do koszyka <FontAwesomeIcon icon={solid('basket-shopping')} size='sm' color='#f1e4e4' /></Button>
            </Card.Body>
        </Card>
    )
}

export default Item