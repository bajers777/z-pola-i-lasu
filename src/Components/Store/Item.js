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
                </div>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <Button>
                        <FontAwesomeIcon className='mx-2' size='3x' icon={solid('circle-plus')} color='#10BC58' />
                    </Button>
                    <Card.Title>
                        <b>
                            {name}
                        </b>
                    </Card.Title>
                    <Card.Text className='card-text--price'>
                        <b>
                            {price} zł.
                        </b>
                    </Card.Text>
                    <Card.Text>
                        <i>
                            {cap}
                        </i>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item