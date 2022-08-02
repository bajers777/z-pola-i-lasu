import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Item = props => {
    const { name, price, cap, stock, shortDesc, longDesc, img } = props;

    return (
        <Col data-aos='zoom-in' className='store__item'>
            <Card>
                <div className="card__img">
                    <Card.Img src={img} alt={name} />
                </div>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <Button>
                        <FontAwesomeIcon className='mx-2' size='3x' icon={solid('circle-plus')} color='#10BC58' />
                    </Button>
                    <Card.Title>
                        <p style={{ fontSize: '1rem' }}>
                            {name}
                        </p>
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