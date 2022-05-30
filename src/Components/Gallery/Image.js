import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
//components
import ImgModal from './ImgModal';
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-plus" /> */ }

const Image = props => {
    const [isActive, setStatus] = useState(false);

    const handleClose = () => setStatus(false);
    return (
        <>
            {isActive && <ImgModal src={props.src} isActive={isActive} handleClose={handleClose} />}
            <div className='gallery__item' style={{
                background: `url(${props.src}) center/100% 100% no-repeat`,

            }}>
                {/* <Col className='gallery__item'>
                     <img
                        src={props.src}
                         alt=""
                     /> */}
                <span onClick={() => setStatus(prevState => !prevState)} className='gallery__item--icon'>
                    <FontAwesomeIcon icon={solid('magnifying-glass-plus')} size='2x' color='#ffffff' />
                </span>
            </div>
        </>
    )
}
// () => setStatus(prevState => !prevState)
export default Image