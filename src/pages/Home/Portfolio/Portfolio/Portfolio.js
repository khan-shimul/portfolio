import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Portfolio.css';
import proj1 from '../../../../image/projects/1.png';
import proj2 from '../../../../image/projects/2.png';
import proj3 from '../../../../image/projects/3.png';
import Project from '../Project/Project';

const projects = [
    {
        id: 1,
        name: 'Car Sale Web Application',
        img: proj1,
        description: 'This is Car Sale Web Application. On my orders page, the logged-in user will see only his/her orders and orders status. If the user wants, he/she will be able to cancel any order.Users will be able to give reviews and the reviews will be displayed on the home page. Admin could be able to make another user an admin.',
        technology: 'HTML, CSS, Bootstrap, React js, Firebase, MongoDB',
        liveSite: 'https://car-today.web.app/', clientSideCode: 'https://github.com/khan-shimul/car-today-client-sideP', serverSideCode: 'https://github.com/khan-shimul/car-today-server-sideP'
    },
    {
        id: 2,
        name: 'Travel Web Application',
        img: proj2,
        description: 'This is Travel Related Web Application. The details of the product that the user has clicked will be displayed on the booking page. The admin will be able to delete anyones order on the Manage Booking page. Also will be able to add a brand new service. After adding that service, this service will appear on the home page',
        technology: 'HTML, CSS, Bootstrap, React js, Firebase, MongoDB, Express js, Node js',
        liveSite: 'https://travel-bea.web.app/', clientSideCode: 'https://github.com/khan-shimul/travel-bea-client-sideP', serverSideCode: 'https://github.com/khan-shimul/travel-bea-server-sideP'
    },
    {
        id: 3,
        name: 'Medical Solve Web Application',
        img: proj3,
        description: 'This is Medical Instrument and Medicine Sale Web Application. Users will be able to sign in and signup using email-password and google account. If the user is not logged in, the details page redirects to the login page. After login, the user will be redirected to the page he/she wanted to go to.',
        technology: 'HTML, CSS, Bootstrap, React js, Firebase, React-Router',
        liveSite: 'https://medical-solve.web.app/', clientSideCode: 'https://github.com/khan-shimul/medical-solveP'
    },
    {
        id: 1,
        name: 'Car Sale Web Application',
        img: proj1,
        description: 'This is Car Sale Web Application. On my orders page, the logged-in user will see only his/her orders and orders status. If the user wants, he/she will be able to cancel any order.Users will be able to give reviews and the reviews will be displayed on the home page. Admin could be able to make another user an admin.',
        technology: 'HTML, CSS, Bootstrap, React js, Firebase, MongoDB',
        liveSite: 'https://car-today.web.app/', clientSideCode: 'https://github.com/khan-shimul/car-today-client-sideP', serverSideCode: 'https://github.com/khan-shimul/car-today-server-sideP'
    },

]

const Portfolio = () => {
    return (
        <section className="portfolio-container py-5">
            <Container>
                <div className="portfolio-heading">
                    <h2 className="text-white text-center fw-bold fs-1">Portfolio Showcase</h2>
                    <p className="text-secondary text-center">We’re a WordPress Theme Development company . With more than <br /> ten years of knowledge and expertise.</p>
                    <div className="line"></div>
                </div>
                <div className="projects-container py-4">
                    <Row xs={1} md={2} className="g-4">
                        {
                            projects.map(project => <Project
                                key={project.id}
                                project={project}
                            />)
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Portfolio;