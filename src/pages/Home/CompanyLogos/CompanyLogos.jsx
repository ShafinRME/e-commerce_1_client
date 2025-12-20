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
            <h2 className="text-2xl font-semibold text-center mb-10">We've helped thousands of sales teams</h2>
            <Marquee speed={50} gradient={false}  >
                <img src={casio} alt="Casio" className="h-6 mx-6" />
                <img src={amazon} alt="Amazon" className="h-6 mx-6" />
                <img src={moonstar} alt="Moonstar" className="h-6 mx-6" />
                <img src={starPlus} alt="Star+" className="h-6 mx-6" />
                <img src={startPeople} alt="StartPeople" className="h-6 mx-6" />
                <img src={randstad} alt="Randstad" className="h-6 mx-6" />
            </Marquee>

            <hr className='w-11/12 mx-auto border-dashed border-gray-400 border-t-2 opacity-30 mt-16' />
        </div>
    );
};

export default CompanyLogos;