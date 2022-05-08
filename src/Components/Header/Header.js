import React from 'react';
//bootstrap
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap';
//components
import Cart from './Cart/Cart';
import Contact from './Contact';
//assets
import Logo from '../../Assets/Images/logo.png';
//styles
import './Header.scss';

const Header = () => {
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

export default Header