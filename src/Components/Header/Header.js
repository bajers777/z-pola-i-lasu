import React from 'react';
//Components
import Hero from './Hero/Hero';
import Navbar from './Navbar/Nav';
//styles
import './Header.scss';

const Header = () => {
    return (
        <>
            <Navbar />
            <Hero />
        </>
    )
}

export default Header