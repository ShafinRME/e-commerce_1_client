import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import CompanyLogos from '../CompanyLogos/CompanyLogos';
import Features from '../Features/Features';
import BeMarchant from '../BeMarchant/BeMarchant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <Services></Services>
            <CompanyLogos></CompanyLogos>
            <Features></Features>
            <BeMarchant></BeMarchant>
        </div>
    );
};

export default Home;