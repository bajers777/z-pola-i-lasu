import React from 'react';
//bootstrap
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap';
//components
import Contact from './Contact';
import Cart from '../Cart/Cart';
//assets
import Logo from '../../../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Nav = () => {
    const clientWidth = document.body.clientWidth;

    return (
        <Navbar className='navbar'>
            <Container fluid>
                <Col className='navbar__brand' sm='2'>
                </Col>

                <Col md='4'>
                    <Contact clientWidth={clientWidth} />
                </Col>
                <Col className='cart' md='2'>
                    <Cart clientWidth={clientWidth} />
                </Col>
            </Container>
        </Navbar>
    )
}

export default Nav