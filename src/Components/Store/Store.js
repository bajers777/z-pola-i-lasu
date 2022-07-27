import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ItemList from './ItemList';
import './Store.scss';


const Store = () => {
    const hrStyleHead = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <section className='store'>
            <Container fluid className='justify-content-center align-items-center'>
                <Row className='justify-content-center gx-0'>
                    <Col sm={3}>
                        <hr />
                    </Col>
                    <Col sm={4}>
                        <p className='text-center store--header-text'>
                            Zapraszamy Państwa do ich odkrywania.
                        </p>
                    </Col>
                    <Col sm={3}>
                        <hr />
                    </Col>
                </Row>
            </Container>
            <ItemList />
        </section>
    )
}

export default Store