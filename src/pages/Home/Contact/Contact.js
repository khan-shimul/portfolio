import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    const url = 'https://form.jotform.com/213323667618055';
    return (
        <section id="contact" style={{ backgroundColor: '#1F2235' }}>
            <h2 className="text-center text-white pt-5">Contact Me</h2>
            <iframe title="your title" style={{ height: '700px', color: 'white', width: '100%' }} src={url}></iframe>
        </section>
    );
};

export default Contact;