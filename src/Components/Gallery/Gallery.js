import React from 'react';
//bootstrap
import { Container, Row } from 'react-bootstrap';
//components
import Slider from './Slider';
import Images from './Images';
//css
import './Gallery.scss';
const Gallery = () => {
    return (
        <Container fluid className='gallery'>
            <Row className='gallery__slider d-flex justify-content-center'>
                <Slider />
            </Row>
            <Row className='h-100'>
                <Images />
            </Row>
        </Container>
    )
}

export default Gallery