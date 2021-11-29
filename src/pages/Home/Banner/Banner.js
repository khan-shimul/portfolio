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
                    <Col xs={12} sm={12} md={8}>
                        <h6>WELCOME TO MY WORLD</h6>
                        <h2>I’m Md. Shimul Miah</h2>
                        <p>i'm Jonathan, professional web developer with long time <br /> experience in this field​</p>
                        <Link to="/shimul'sResume.pdf" target="_blank" download>
                            <button className="primary-button my-3">Get Resume</button>
                        </Link>
                        <button className="secondary-button">Hire Me</button>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <img className="img-fluid" src={myImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;