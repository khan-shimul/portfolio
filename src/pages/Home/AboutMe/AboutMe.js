import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about" className="about-container">
            <Container className="py-5">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, hic, ullam animi reiciendis reprehenderit a repellat perferendis sit cupiditate rem odit minus at alias assumenda eveniet aperiam beatae velit! Sapiente molestiae fugiat inventore quis nulla voluptatum consectetur tenetur tempora ullam?</p>
            </Container>
        </section>
    );
};

export default AboutMe;