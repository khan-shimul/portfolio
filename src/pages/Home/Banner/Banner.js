import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import myImg from '../../../image/me/1.png';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const Banner = () => {
    return (
        <section className="banner-container py-5">
            <Container>
                <Row className="d-flex align-items-center mt-3 text-white">
                    <Col
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        xs={12} sm={12} md={8}>
                        <div className="d-flex align-items-center pb-4">
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

                        <h6 className="my-2">WELCOME TO MY WORLD</h6>
                        <h2>I’m Md. Shimul Miah</h2>
                        <Typical
                            steps={['a', 1000, 'a MERN Stack Web Developer', 500, 'a Front-End Web Developer', 500, 'a Professional coder', 500]}
                            loop={Infinity}
                            wrapper="h3"
                        />
                        <p className="w-75 mt-4">Passionate about building first-class web applications. I always love to do clean and reusable code.</p>
                        <Link to="/shimul'sResume.pdf" target="_blank" download>
                            <button className="primary-button mt-3 mb-4">Download Resume</button>
                        </Link>
                        <a href="#contact">
                            <button className="secondary-button">Hire Me</button>
                        </a>
                    </Col>
                    <Col
                        data-aos="fade-left"
                        xs={12} sm={12} md={4}>
                        <img className="img-fluid" src={myImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;