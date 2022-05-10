import React, { useEffect, useState } from 'react';
import Image from './Image';
const Images = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8888/gallery').then(res => res.json()).then(data => {
            setGalleryItems(data);
        });
    }, []);
    return (
        <>
            {galleryItems.map(item => <Image key={item} src={item} />)}
        </>
    )
}

export default Images