import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mehh from '../../../image/me/meh.png'
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about" className="about-container py-5">
            <Container>
                <Row className="align-items-center">
                    <Col
                        data-aos="fade-up-right"
                        xs={12} sm={12} md={7}>
                        <h2 className="about-title">About Me</h2>
                        <div className="line2 mb-3"></div>
                        <p className="summary">Determined Junior Developer with the ability to adapt in both self-starting and collaborative environments.
                            <br />
                            <span className="d-inline-block my-3">
                                Specialize in Designing, Developing, and Debugging. Passionate about building first-class web applications. I always love to do clean and reusable code.
                            </span>
                        </p>
                        <div className="w-75">
                            <ul>
                                <li>
                                    <p className="stack">
                                        <span className="stack-title">Front-End:</span> <br /> HTML, CSS, Bootstrap, Tailwind, Material/UI, JavaScript, ES6, React Js
                                    </p>
                                </li>
                                <li>
                                    <p className="stack">
                                        <span className="stack-title">Back-End:</span> <br /> MongoDB, Express Js, Node Js, RestAPI
                                    </p>
                                </li>
                                <li>
                                    <p className="stack">
                                        <span className="stack-title">Tools:</span> <br />Git, Google Chrome, VS Code, Netlify, Heroku, Figma, Photoshop
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <a href="#contact">
                            <button className="primary-button mt-3">Get In Touch</button>
                        </a>
                    </Col>
                    <Col
                        data-aos="fade-up-left"
                        xs={12} sm={12} md={5}>
                        <img className="img-fluid" src={mehh} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutMe;