import React from 'react';

import casio from '../../../assets/brands/casio.png';
import amazon from '../../../assets/brands/amazon.png';
import moonstar from '../../../assets/brands/moonstar.png';
import starPlus from '../../../assets/brands/start.png';
import startPeople from '../../../assets/brands/start-people 1.png';
import randstad from '../../../assets/brands/randstad.png';
import Marquee from 'react-fast-marquee';

const CompanyLogos = () => {
    return (
        <div className="mt-16 mb-10">
            <h2 className="text-2xl font-semibold text-center mb-6">We've helped thousands of sales teams</h2>
            <Marquee speed={50} gradient={false}  >
                <img src={casio} alt="Casio" className="h-8 mx-6" />
                <img src={amazon} alt="Amazon" className="h-8 mx-6" />
                <img src={moonstar} alt="Moonstar" className="h-8 mx-6" />
                <img src={starPlus} alt="Star+" className="h-8 mx-6" />
                <img src={startPeople} alt="StartPeople" className="h-8 mx-6" />
                <img src={randstad} alt="Randstad" className="h-8 mx-6" />
            </Marquee>
        </div>
    );
};

export default CompanyLogos;