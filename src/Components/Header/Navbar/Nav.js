import React from 'react';
//bootstrap
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap';
//components
import Contact from './Contact';
import Icons from '../Icons/Icons';
//assets
import Logo from '../../../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Nav = () => {

    return (
        <Navbar className='navbar'>
            <Container fluid>
                <Col className='navbar__brand' sm='2'>
                </Col>

                <Col md='4'>
                    <Contact />
                </Col>
                <Col className='cart' md='2'>
                    <Icons />
                </Col>
            </Container>
        </Navbar>
    )
}

export default Nav