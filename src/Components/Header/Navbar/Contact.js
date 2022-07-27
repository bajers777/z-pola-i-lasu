import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap';
const Contact = () => {
    return (
        <>

            <div className='d-none d-md-flex navbar__contact'>
                <div className='navbar__contact--row'>
                    <div className='navbar__contact--item'>
                        Grzegorz Szymanek
                    </div>
                    <div className='navbar__contact--item'>
                        <span>
                            <FontAwesomeIcon icon={solid('phone')} size='xs' color='#064420' /> 798 488 333
                        </span>
                        <span>
                            <FontAwesomeIcon icon={solid('envelope')} size='xs' color='#064420' />
                        </span>
                        kontakt@zpolailasu.pl
                    </div>
                </div>
                <div className='navbar__contact--row'>
                    <div className='navbar__contact--item'>
                        Justyna Szymanek
                    </div>
                    <div className='navbar__contact--item'>

                        <span>
                            <FontAwesomeIcon icon={solid('phone')} size='xs' color='#064420' /> 517 468 801
                        </span>
                        <span>
                            <FontAwesomeIcon icon={solid('envelope')} size='xs' color='#064420' />
                        </span>
                        dzioskaj@krzewy.net.pl
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;