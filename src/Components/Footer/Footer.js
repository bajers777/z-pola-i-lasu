import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

//style
import './Footer.scss';
//assets
import Logo from '../../Assets/Images/logo.png';
const Footer = () => {
    return (
        <footer>
            {/* <div className="footer__contact">
                <img src={Logo} alt="" />
                <ul>
                    <li><b>Kontakt</b></li>
                    <li>kontakt@zpolailasu.pl</li>
                    <li>dzioskaj@krzewy.net.pl (rękodzieło)</li>
                    <li>Brzozowa Gać 119</li>
                    <li>24-170 Kurów</li>
                </ul>
            </div> */}
            <div className="footer__social">
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                <FontAwesomeIcon icon={brands('facebook')} size='xl' color='#ffffff' />
                <FontAwesomeIcon icon={brands('instagram')} size='xl' color='#ffffff' />


            </div>
        </footer>
    )
}

export default Footer