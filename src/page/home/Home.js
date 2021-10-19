import React from 'react';
import TopBanner from './TopBanner';
import Servicepart from './Servicepart';
import Contact from './contact/Contact';
import Section from './Section';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Servicepart></Servicepart>
            <Contact></Contact>
            <Section></Section>
        </div>
    );
};

export default Home;