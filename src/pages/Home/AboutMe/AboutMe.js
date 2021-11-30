import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mehh from '../../../image/me/meh.png'
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about" className="about-container">
            <Container className="pt-5">
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={7}>
                        <h2>About Me</h2>
                        <div className="line2 mb-3"></div>
                        <p>Determined Junior Developer with the ability to adapt in both self-starting and collaborative environments. Experience in Designing, Developing, and Debugging. Passionate about building first-class web applications. I always love to do clean and reusable code.
                        </p>
                        <p><span className="fw-bold">• Front-End Technologies:</span> HTML, CSS, Bootstrap, Tailwind, Material/UI, JavaScript, ES6, React Js <br />
                            <span className="fw-bold">• Back-End Technologies:</span> MongoDB, Express Js, Node Js, RestAPI <br />
                            <span className="fw-bold">• Tools:</span> Git, Google Chrome, VS Code, Netlify, Heroku, Figma, Photoshop</p>
                        <a href="#contact">
                            <button className="primary-button mt-3">Get In Touch</button>
                        </a>
                    </Col>
                    <Col xs={12} sm={12} md={5}>
                        <img style={{ marginTop: '-60px' }} className="img-fluid" src={mehh} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutMe;