import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import myImg from '../../../image/me/1.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="banner-container py-5">
            <Container>
                <Row className="d-flex justify-content-between align-items-center text-white">
                    <Col
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        xs={12} sm={12} md={8}>
                        <div className="d-flex align-items-center pb-4 ">
                            <div className="">
                                <a href="https://www.linkedin.com/in/khanshimul196/" target="_blank" rel="noreferrer">
                                    <button className="social-contact"><i className="fab fa-linkedin-in"></i></button>
                                </a>
                            </div>
                            <div className="">
                                <a href="https://twitter.com/khanshimul196" target="_blank" rel="noreferrer">
                                    <button className="social-contact"><i className="fab fa-twitter"></i></button>
                                </a>
                            </div>
                            <div className="">
                                <a href="https://github.com/khan-shimul" target="_blank" rel="noreferrer">
                                    <button className="social-contact"><i className="fab fa-github"></i></button>
                                </a>
                            </div>
                        </div>
                        <h6>WELCOME TO MY WORLD</h6>
                        <h2>I’m Md. Shimul Miah</h2>
                        <p>i'm Shimul, professional web developer with long time <br /> experience in this field​</p>
                        <Link to="/shimul'sResume.pdf" target="_blank" download>
                            <button className="primary-button my-3">Get Resume</button>
                        </Link>
                        <a href="#contact">
                            <button className="secondary-button">Hire Me</button>
                        </a>
                    </Col>
                    <Col
                        data-aos="fade-left"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        xs={12} sm={12} md={4}>
                        <img className="img-fluid" src={myImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;