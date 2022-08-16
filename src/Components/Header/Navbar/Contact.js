import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap';
const Contact = props => {
    return (
        <>

            <div className={`${props.isVisible ? 'navbar__contact--sm' : 'd-none'} d-md-flex navbar__contact`} style={props.checkout && { width: '50vw', marginLeft: '-100%' }}>
                <div className='navbar__contact--row'>
                    <div className='navbar__contact--item'>
                        Grzegorz Szymanek
                    </div>
                    <div className={`navbar__contact--item ${props.isVisible ? 'navbar__contact--visible' : ''}`}>
                        <span>
                            <FontAwesomeIcon className='navbar__contact--icon' icon={solid('phone')} size='xs' color='#064420' />
                            798 488 333
                        </span>
                        <span>
                            <FontAwesomeIcon className='navbar__contact--icon' icon={solid('envelope')} size='xs' color='#064420' />
                            kontakt@zpolailasu.pl
                        </span>
                    </div>
                </div>
                <div className='navbar__contact--row'>
                    <div className='navbar__contact--item'>
                        Justyna Szymanek
                    </div>
                    <div className={`navbar__contact--item ${props.isVisible && 'navbar__contact--visible'}`}>
                        <span>
                            <FontAwesomeIcon className='navbar__contact--icon' icon={solid('phone')} size='xs' color='#064420' />
                            517 468 801
                        </span>
                        <span>
                            <FontAwesomeIcon className='navbar__contact--icon' icon={solid('envelope')} size='xs' color='#064420' />
                            dzioskaj@krzewy.net.pl
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;