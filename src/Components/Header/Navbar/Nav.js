import React from 'react';
import { Link } from 'react-router-dom';
//bootstrap
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap';
//components
import Contact from './Contact';
import Icons from '../Icons/Icons';

const Nav = ({ checkout }) => {
    console.log(checkout);
    return (
        <Navbar className='navbar'>
            <Container fluid>
                <Link to='/'>
                    <Col className='navbar__brand' sm='2' />
                </Link>
                <Col md='4'>
                    <Contact checkout={checkout} />
                </Col>
                {!checkout &&
                    <Col className='cart' md='2'>
                        <Icons />
                    </Col>
                }
            </Container>
        </Navbar>
    )
}

export default Nav