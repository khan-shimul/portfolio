import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = ({ project }) => {
    const { name, img, description, technology, liveSite, clientSideCode, serverSideCode } = project;
    return (
        <Col
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="project">
            <Card className="h-100 project-card">
                <Card.Img variant="top" className="img-fluid" src={img} />

                <Card.Body>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Text className="short-description">
                        {description.split('').slice(0, 100).toString().replace(/,/g, '')}...
                    </Card.Text>
                    {/* <div className="w-100 d-flex flex-wrap mb-1">
                        <Card.Text className="tech-html">
                            HTML
                        </Card.Text>
                        <Card.Text className="tech-css">
                            CSS
                        </Card.Text>
                        <Card.Text className="tech-bootstrap">
                            Bootstrap
                        </Card.Text>
                        <Card.Text className="tech-react">
                            React Js
                        </Card.Text>
                        <Card.Text className="tech-mongoDB">
                            MongoDB
                        </Card.Text>
                    </div> */}
                    <a href={liveSite} target="_blank" rel="noreferrer">
                        <button className="site-button my-2">Live Site</button>
                    </a>
                    <a href={clientSideCode} target="_blank" rel="noreferrer">
                        <button className="site-button">Code</button>
                    </a>
                    <Link to='details'>
                        <button className="site-button">Details</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;