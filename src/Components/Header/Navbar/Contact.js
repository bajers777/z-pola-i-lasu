import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
const Contact = () => {
    return (
        <>
            <span className='d-sm-none navbar__icon'>
                <FontAwesomeIcon icon={solid('phone')} size='xl' color='#9C9C42' />
            </span>

            <div className='d-none d-sm-flex'>
                Grzegorz Szymanek
                798 488 333
                Justyna Szymanek
                517 468 801

            </div>
        </>
    )
}

export default Contact;