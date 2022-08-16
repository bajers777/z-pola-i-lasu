import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from '../../Header/Navbar/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './ProductInfo.scss';

const ProductInfo = props => {
    const [product, setProduct] = useState([]);
    let params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:8888/products').then(res => res.json()).then(data => {
            setProduct(data.filter(product => product.name === params.productId)[0]);
        });
    }, []);
    const testDesc = product.longDesc;
    console.log(testDesc);
    return (
        <>
            <Nav />
            <Container data-aos='fade-in' className='product-info'>
                <Row>
                    <Col className='product-info__icons'>
                        <Button onClick={() => navigate(-1)}>
                            <FontAwesomeIcon icon={solid('arrow-left')} size='3x' color='#064420' />
                        </Button>

                    </Col>
                </Row>
                <Row>
                    <Col className='product-info__img'>
                        <Image fluid rounded src={product.img} style={{ height: '50%' }}></Image>
                    </Col>
                    <Col className='product-info__desc'>
                        <b className='product-info__desc--name'>
                            {product.name}
                        </b>
                        <p className='product-info__desc--short'>
                            {product.shortDesc}
                        </p>
                        <p className='product-info__desc--stock'>
                            Dostępność: {product.stock} szt.
                        </p>
                        <p className='product-info__desc--price'>
                            Cena: {product.price} zł.
                        </p>
                        <p className='product-info__desc--long'>
                            {product.longDesc}
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductInfo