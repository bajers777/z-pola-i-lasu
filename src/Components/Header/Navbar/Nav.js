import React from 'react';
//bootstrap
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap';
//components
import Contact from './Contact';
import Cart from '../Cart/Cart';
//assets
import Logo from '../../../Assets/Images/logo.png';

const Nav = () => {
    return (
        <Navbar className='navbar'>
            <Container fluid>
                <Col sm='6'>
                    <NavbarBrand>
                        <img src={Logo} alt="" />
                    </NavbarBrand>
                </Col>
                <Col sm='4'>
                    <Contact />
                </Col>
                <Col sm='1'>
                    <Cart />
                </Col>
            </Container>
        </Navbar>
    )
}

export default Nav