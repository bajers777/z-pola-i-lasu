import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
//assets
import EuroEko from '../../Assets/Images/euro_eko.jpg';
import PolskaSmakuje from '../../Assets/Images/polska_smakuje.jpg';
import ProduktLokalny from '../../Assets/Images/produkt_lokalny.jpg';

import './About.scss';
const About = () => {
    const imgStyle = {
        width: '150px'
    }
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        });
    }, [])

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
                <Row data-aos='zoom-in' className='text-center justify-content-center'>
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
            </Container>

            <Container fluid>
                <Row data-aos='fade-up' className='justify-content-center align-items-stretch g-0'>
                    <Col md={3} className='justify-content-center align-items-stretch text-center text-md-end'>
                        <b>Z POLA I LASU </b>
                        <p>
                            Gospodarstwo powstało z zamiłowania do tego co zdrowe i smaczne. W naszej ofercie znajdują się syropy owocowe i ziołowe, soki bezcukrowe oraz konfitury. Wszystkie produkty oparte są na tradycyjnych recepturach.

                        </p>
                    </Col>

                    <Col md={3} className="d-flex justify-content-center align-items-center flex-column about__logos">
                        <img className='img-fluid' src={EuroEko} style={imgStyle} alt="Logo produkcji ekologicznej EU" />
                    </Col>

                    <Col md={3} className='justify-content-stretch text-center text-md-start'>
                        <b>PRODUKTY</b>
                        <p>
                            Wszystkie produkty oparte są na tradycyjnych recepturach. Do produkcji wykorzystujemy owoce i zioła z własnego gospodarstwa.
                        </p>
                    </Col>
                </Row>

                <Row data-aos='fade-up' className='justify-content-center align-items-stretch g-0'>
                    <Col md={3} className='justify-content-center align-items-stretch text-center text-md-end'>

                        <b>NASZA PLANTACJA</b>
                        <p>
                            Plantacja znajduje się w Kazimierskim Parku Krajobrazowym. Na tych malowniczych terenach, wśród wąwozów lessowych, prowadzimy rodzinne gospodarstwo ekologiczne.
                        </p>
                    </Col>

                    <Col md={3} className="d-flex justify-content-center align-items-center about__logos">
                        <img src={PolskaSmakuje} style={imgStyle} alt="Logo Polska Smakuje" />
                    </Col>

                    <Col md={3} className='justify-content-stretch text-center text-md-start'>
                        <b>ZDROWIE</b>
                        <p>
                            Nie stosujemy sztucznych konserwantów, chemicznych aromatów, czy barwników. Ufamy przyrodzie i na niej się opieramy.
                        </p>
                    </Col>

                </Row>

                <Row data-aos='fade-up' className='justify-content-center align-items-stretch g-0'>
                    <Col md={3} className='justify-content-center align-items-stretch text-center text-md-end'>
                        <b>EKO PRODUKCJA</b>
                        <p>
                            Do produkcji wykorzystujemy owoce i zioła z własnego gospodarstwa. Nie stosujemy sztucznych konserwantów, chemicznych aromatów, czy barwników. Ufamy przyrodzie i na niej się opieramy. W naszych ręcznie wykonanych produktach ukryliśmy aromaty i smaki natury.
                        </p>
                    </Col>

                    <Col md={3} className="d-flex justify-content-center align-items-center about__logos">
                        <img src={ProduktLokalny} style={imgStyle} alt="Logo Produkt Lokalny" />
                    </Col>

                    <Col md={3} className='justify-content-stretch text-center text-md-start'>
                        <b>RĘKODZIEŁO</b>
                        <p>
                            Poza produktami spożywczymi oferujemy szeroką gamę ręcznie wykonanych bieżników, kosmetyczek, poduszek, i innych. Do ich produkcji wykorzystujemy jedynie naturalne, wysokiej jakości materiały.
                        </p>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default About