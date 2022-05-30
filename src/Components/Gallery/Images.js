import React, { useEffect, useState, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import Image from './Image';
const Images = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    // const [isKeyPressed, setKeyPressed] = useState(false);
    // const [startPoint, setStartPoint] = useState(0);

    const imagesRow = useRef(null);
    const imagesContainer = useRef(null);

    let isKeyPressed = false;
    let startPoint = 0;
    let startLeftValue;

    const handleCarouselMove = e => {
        if (!isKeyPressed) return;
        let slideValue = (e.pageX - startPoint) + startLeftValue;
        let maxSlideValue = imagesRow.current.offsetWidth - imagesContainer.current.offsetWidth;
        if (slideValue > 0) {
            imagesRow.current.style.left = `0px`;
            return;
        } else if ((slideValue * -1) > maxSlideValue) {
            imagesRow.current.style.left = `${maxSlideValue * -1}px`;
            return;
        }
        imagesRow.current.style.left = `${slideValue}px`;
    }
    const handleOnMouseUp = e => {
        isKeyPressed = false;
        e.target.style.cursor = 'pointer';
    }

    const handleOnClick = e => {
        isKeyPressed = true;
        startPoint = e.pageX;
        startLeftValue = parseInt(getComputedStyle(imagesRow.current).left);
        e.target.style.cursor = 'grabbing';
    }

    useEffect(() => {
        fetch('http://localhost:8888/gallery').then(res => res.json()).then(data => {
            setGalleryItems(data);
        });
    }, []);



    console.log('test');
    return (
        <div ref={imagesContainer} className='gallery__container'>
            <div onMouseDown={handleOnClick} onMouseUp={handleOnMouseUp} onMouseMove={handleCarouselMove} ref={imagesRow} className='gallery__images'>
                {galleryItems.map(item => <Image key={item} src={item} />)}
            </div>
        </div >

    )
}

export default Images