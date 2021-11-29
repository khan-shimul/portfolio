import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default Home;