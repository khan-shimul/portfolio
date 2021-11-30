import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { projectsData } from '../../projectsData/projectsData';
import Project from '../Home/Portfolio/Project/Project';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const singleProject = projectsData.find(project => project.id === parseInt(id));
    const remaining = projectsData.filter(project => project.id !== parseInt(id));

    // const detailsBanner = {
    //     backgroundImage: `url(${singleProject.img})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'noRepeat',
    //     backgroundPosition: 'center',
    //     height: '200px',
    //     width: '100%',
    // }

    return (
        <>
            <Header />
            {/* <div className="details-banner d-flex justify-content-center align-items-center text-white text-center">
                <div>
                    <h2 className="fw-bold text-primary">Tour Package Details</h2>
                </div>
            </div> */}
            <section style={{ backgroundColor: '#24263B' }} className="details-container">
                <Container>
                    <div style={{ backgroundColor: '#24263B' }} className="card my-3">
                        <div className="row g-0 py-2">
                            <div className="col-md-5">
                                <img style={{ height: '100%', objectFit: 'cover', borderRadius: '30px' }} src={singleProject?.img} className="img-fluid p-3" alt="..." />
                            </div>
                            <div className="col-md-7 p-3">
                                <div className="card-body">
                                    <h6>Featured - Application</h6>
                                    <h2 className="fw-bold fs-1">{singleProject?.name}</h2>
                                    <p className="lh-base pt-2">{singleProject?.description}</p>
                                    <p className="w-100 d-flex flex-wrap mb-1">
                                        <span className="tech-html">{singleProject?.technology?.stack1}</span>
                                        <span className="tech-css">{singleProject?.technology?.stack2}</span>
                                        <span className="tech-bootstrap">{singleProject?.technology?.stack3}</span>
                                        {
                                            singleProject.technology.stack4 && <span className="tech-react">{singleProject?.technology?.stack4}</span>
                                        }
                                        {
                                            singleProject.technology.stack5 && <span className="tech-firebase">{singleProject?.technology?.stack5}</span>
                                        }
                                        {
                                            singleProject.technology.stack6 && <span className="tech-mongoDB">{singleProject?.technology?.stack6}</span>
                                        }
                                        {
                                            singleProject.technology.stack7 && <span className="tech-express">{singleProject?.technology?.stack7}</span>
                                        }
                                        {
                                            singleProject.technology.stack8 && <span className="tech-node">{singleProject?.technology?.stack8}</span>
                                        }
                                    </p>
                                    <a href={singleProject.liveSite} rel="noreferrer" target="_blank">
                                        <button className="primary-button my-2">View Project</button>
                                    </a>
                                    <a href={singleProject.clientSideCode} rel="noreferrer" target="_blank">
                                        <button className="primary-button my-2">Client-Side-Code</button>
                                    </a>
                                    <a href={singleProject.serverSideCode} rel="noreferrer" target="_blank">
                                        <button className="primary-button my-2">Server-Side-Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects-container py-4">
                        <Row xs={1} sm={1} md={3} className="g-4">
                            {
                                remaining?.map(project => <Project
                                    key={project.id}
                                    project={project}
                                />)
                            }
                        </Row>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Details;