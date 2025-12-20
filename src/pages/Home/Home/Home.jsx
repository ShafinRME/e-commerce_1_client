import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import CompanyLogos from '../CompanyLogos/CompanyLogos';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <Services></Services>
            <CompanyLogos></CompanyLogos>
        </div>
    );
};

export default Home;