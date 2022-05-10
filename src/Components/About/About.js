import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
//assets
import EuroEko from '../../Assets/Images/euro_eko.jpg';
import PolskaSmakuje from '../../Assets/Images/polska_smakuje.jpg';
import ProduktLokalny from '../../Assets/Images/produkt_lokalny.jpg';


const About = () => {
    const imgStyle = {
        width: '150px'
    }
    return (
        <section className='about'>
            <Container fluid>
                <Row className='my-5'>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <h1>
                            Z Pola i Lasu
                        </h1>
                        <h2>
                            Ekologiczna plantacja i naturalne domowe przetwory
                        </h2>
                        <p className='text-center' >
                            Z POLA I LASU powstało z zamiłowania do tego co zdrowe i smaczne. Nasza plantacja znajduje się w Kazimierskim Parku Krajobrazowym. Na tych malowniczych terenach, wśród wąwozów lessowych, prowadzimy rodzinne gospodarstwo ekologiczne.
                        </p>
                    </Col>
                </Row>

                <Row className='mx-5'>
                    <Col sm={5} className='d-flex flex-column justify-content-center align-items-stretch'>
                        <p className='d-flex flex-column text-end'>
                            <b>Z POLA I LASU </b>
                            Gospodarstwo powstało z zamiłowania do tego co zdrowe i smaczne. W naszej ofercie znajdują się syropy owocowe i ziołowe, soki bezcukrowe oraz konfitury. Wszystkie produkty oparte są na tradycyjnych recepturach.

                        </p>

                        <p className='d-flex flex-column text-end'>
                            <b>NASZA PLANTACJA</b>
                            Plantacja znajduje się w Kazimierskim Parku Krajobrazowym. Na tych malowniczych terenach, wśród wąwozów lessowych, prowadzimy rodzinne gospodarstwo ekologiczne.
                        </p>

                        <p className='d-flex flex-column text-end'>
                            <b>EKO PRODUKCJA</b>
                            Do produkcji wykorzystujemy owoce i zioła z własnego gospodarstwa. Nie stosujemy sztucznych konserwantów, chemicznych aromatów, czy barwników. Ufamy przyrodzie i na niej się opieramy. W naszych ręcznie wykonanych produktach ukryliśmy aromaty i smaki natury.
                        </p>

                    </Col>
                    <Col sm={2} className="d-flex justify-content-center align-items-center flex-column about__logos">
                        <img src={EuroEko} style={imgStyle} alt="Logo produkcji ekologicznej EU" />
                        <img src={PolskaSmakuje} style={imgStyle} alt="Logo Polska Smakuje" />
                        <img src={ProduktLokalny} style={imgStyle} alt="Logo Produkt Lokalny" />
                    </Col>
                    <Col sm={5} className='d-flex flex-column justify-content-stretch'>
                        <p className='d-flex flex-column text-start'>
                            <b>PRODUKTY</b>
                            Wszystkie produkty oparte są na tradycyjnych recepturach. Do produkcji wykorzystujemy owoce i zioła z własnego gospodarstwa.
                        </p>
                        <p className='d-flex flex-column text-start'>
                            <b>ZDROWIE</b>
                            Nie stosujemy sztucznych konserwantów, chemicznych aromatów, czy barwników. Ufamy przyrodzie i na niej się opieramy.
                        </p>
                        <p className='d-flex flex-column text-start'>
                            <b>RĘKODZIEŁO</b>
                            Poza produktami spożywczymi oferujemy szeroką gamę ręcznie wykonanych bieżników, kosmetyczek, poduszek, i innych. Do ich produkcji wykorzystujemy jedynie naturalne, wysokiej jakości materiały.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <p className='text-center'>
                            Zapraszamy Państwa do ich odkrywania.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About