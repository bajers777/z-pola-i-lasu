import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
//assets
import EuroEko from '../../Assets/Images/euro_eko.jpg';
import PolskaSmakuje from '../../Assets/Images/polska_smakuje.jpg';
import ProduktLokalny from '../../Assets/Images/produkt_lokalny.jpg';

import './About.scss';
const About = () => {
    const imgStyle = {
        width: '150px'
    }
    return (
        <section className='about'>
            <Container fluid>
                <Row className='mb-5 justify-content-center align-items-center text-center'>
                    <Col sm={3}>
                        <hr />
                    </Col>
                    {/* <Col className='d-flex flex-column justify-content-center align-items-center'> */}
                    <Col sm={4}>
                        <h1>
                            Z Pola i Lasu
                        </h1>
                    </Col>
                    <Col sm={3}>
                        <hr />
                    </Col>
                </Row>
                <Row className='text-center justify-content-center'>
                    <Col sm={10}>
                        <h2>
                            Ekologiczna plantacja i naturalne domowe przetwory
                        </h2>
                        <p className='text-center pb-5' >
                            Z POLA I LASU powstało z zamiłowania do tego co zdrowe i smaczne. Nasza plantacja znajduje się w Kazimierskim Parku Krajobrazowym. Na tych malowniczych terenach, wśród wąwozów lessowych, prowadzimy rodzinne gospodarstwo ekologiczne.
                        </p>
                    </Col>
                </Row>
                {/* </Col> */}

                <Row className='flex-row justify-content-center align-items-stretch mb-5'>
                    <Col md={3} className='d-flex flex-column justify-content-center align-items-stretch text-center text-md-end'>
                        <p className='d-flex flex-column '>
                            <b>Z POLA I LASU </b>
                            Gospodarstwo powstało z zamiłowania do tego co zdrowe i smaczne. W naszej ofercie znajdują się syropy owocowe i ziołowe, soki bezcukrowe oraz konfitury. Wszystkie produkty oparte są na tradycyjnych recepturach.

                        </p>

                        <p className='d-flex flex-column '>
                            <b>NASZA PLANTACJA</b>
                            Plantacja znajduje się w Kazimierskim Parku Krajobrazowym. Na tych malowniczych terenach, wśród wąwozów lessowych, prowadzimy rodzinne gospodarstwo ekologiczne.
                        </p>

                        <p className='d-flex flex-column '>
                            <b>EKO PRODUKCJA</b>
                            Do produkcji wykorzystujemy owoce i zioła z własnego gospodarstwa. Nie stosujemy sztucznych konserwantów, chemicznych aromatów, czy barwników. Ufamy przyrodzie i na niej się opieramy. W naszych ręcznie wykonanych produktach ukryliśmy aromaty i smaki natury.
                        </p>

                    </Col>
                    <Col md={3} className="d-flex justify-content-center align-items-center flex-column about__logos">
                        <img className='img-fluid' src={EuroEko} style={imgStyle} alt="Logo produkcji ekologicznej EU" />
                        <img src={PolskaSmakuje} style={imgStyle} alt="Logo Polska Smakuje" />
                        <img src={ProduktLokalny} style={imgStyle} alt="Logo Produkt Lokalny" />
                    </Col>
                    <Col md={3} className='d-flex flex-column justify-content-stretch text-center text-md-start'>
                        <p className='d-flex flex-column'>
                            <b>PRODUKTY</b>
                            Wszystkie produkty oparte są na tradycyjnych recepturach. Do produkcji wykorzystujemy owoce i zioła z własnego gospodarstwa.
                        </p>
                        <p className='d-flex flex-column'>
                            <b>ZDROWIE</b>
                            Nie stosujemy sztucznych konserwantów, chemicznych aromatów, czy barwników. Ufamy przyrodzie i na niej się opieramy.
                        </p>
                        <p className='d-flex flex-column'>
                            <b>RĘKODZIEŁO</b>
                            Poza produktami spożywczymi oferujemy szeroką gamę ręcznie wykonanych bieżników, kosmetyczek, poduszek, i innych. Do ich produkcji wykorzystujemy jedynie naturalne, wysokiej jakości materiały.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About