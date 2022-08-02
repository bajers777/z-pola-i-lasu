import React from 'react';
//bootstrap
import { Container, Row } from 'react-bootstrap';
//components
import Slider from './Slider';
import Images from './Images';
import Leaf from '../../Assets/Images/003-green-tea-1.png'
//css
import './Gallery.scss';
const Gallery = () => {
    return (
        <Container fluid className='gallery'>
            <Row className='gallery__slider d-flex justify-content-center'>
                <img src={Leaf} alt="" />
                <Slider />
            </Row>
            <Row className='h-100'>
                <Images />
            </Row>
        </Container>
    )
}

export default Gallery