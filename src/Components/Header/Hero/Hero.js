import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import HeroBg from '../../../Assets/Videos/HeroBg.mp4';
const Hero = () => {
    const bHeaderStyle = {
        fontSize: '3rem',
        color: '#fff'
    };
    const pHeaderStyle = {
        fontSize: '2rem',
        color: '#fff'
    };

    return (
        <Container fluid className='p-0'>
            <div className="d-flex flex-column justify-content-center align-items-center hero-container">
                <video autoPlay loop muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        left: '50%',
                        top: '50%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '-1',
                    }}
                >
                    <source src={HeroBg} type='video/mp4' />

                </video>
                <Row className='hero-container__text'>
                    <Col className='d-flex flex-column align-items-center'>
                        <b style={bHeaderStyle}>
                            Z Pola i Lasu
                        </b>
                        <p style={pHeaderStyle}>
                            Proste z natury
                        </p>
                    </Col>
                </Row>


            </div>
        </Container>
    )
}

export default Hero