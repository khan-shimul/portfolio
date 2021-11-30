import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: '#24263B', height: '100vh' }}>
                <Container>
                    <h2 className="text-center py-5 text-white">Comming Soon</h2>
                </Container>
            </div>
        </div>
    );
};

export default Blogs;