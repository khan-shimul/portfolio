import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './MyServices.css';

const MyServices = () => {
    return (
        <div className="services-container">
            <h2 className="text-center fw-bold fs-1">My Services </h2>
            <div className="line"></div>
            <div className="services">
                <Container>
                    <div className="service-container py-5">
                        <Row xs={1} md={3} className="g-4">
                            <Col
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <Card className="service-card h-100">
                                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                    <Card.Body>
                                        <p className="icon"><i className="fas fa-code"></i></p>
                                        <Card.Title className="fw-bold">Web Development</Card.Title>
                                        <Card.Text className="service-details">
                                            Building state-of-the-art, easy-to-use, user-friendly Web Applications is truly a passion of mine. In addition to my knowledge base, I actively seek out new technologies. Excited to pursue your organization to grow my skills.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-center"
                            >
                                <Card className="service-card h-100">
                                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                    <Card.Body>
                                        <p className="icon"><i className="fas fa-pencil-ruler"></i></p>
                                        <Card.Title className="fw-bold">Web Design</Card.Title>
                                        <Card.Text className="service-details">
                                            I am a web designer/developer. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col
                                data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <Card className="service-card h-100">
                                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                    <Card.Body>
                                        <p className="icon"><i className="fas fa-layer-group"></i></p>
                                        <Card.Title className="fw-bold">Graphic Design</Card.Title>
                                        <Card.Text className="service-details">
                                            Also I'm a experienced Creative Graphic Designer on Fiverr. I love to create eye-catching unique and professional quality designs.  Specializes in Business Card Design, Web Banner Design, Social Media Banner Design, Flyer Design and any Graphic designing.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default MyServices;