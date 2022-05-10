import React from 'react';

import { Col, Carousel } from 'react-bootstrap';
const Slider = () => {
    return (
        <Col sm={12} lg={8}>
            <Carousel className='h-100'>
                <Carousel.Item className='h-100'>
                    <div className='gallery__slider--item d-flex flex-column justify-content-center align-items-center h-100 text-center'>
                        <h3>Zdrowe bo z natury</h3>
                        <p>
                            Wszystkie produkty oparte są na tradycyjnych recepturach. Do produkcji wykorzystujemy owoce i zioła z własnego gospodarstwa. </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='h-100'>
                    <div className='gallery__slider--item d-flex flex-column justify-content-center align-items-center h-100 text-center'>
                        <h3>Chemia? NIE!</h3>
                        <p>Nie stosujemy sztucznych konserwantów, chemicznych aromatów, czy barwników. Ufamy przyrodzie i na niej się opieramy.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Col >
    )
}

export default Slider