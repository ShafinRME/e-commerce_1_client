import React from 'react';
import { useLoaderData } from 'react-router';
import BangladeshMap from './BangladeshMap';


const Coverage = () => {
    const serviceCenters = useLoaderData();

    return (
        <div className='shadow-sm w-15/16 mx-auto rounded-4xl mb-6 p-4 lg:p-16 bg-base-100'>
            <h1 className="text-3xl lg:text-5xl font-bold text-left mb-10 mt-6 w-auto">We are available in 64 districts</h1>

            {/* Later you can add your search box here */}
            {/* <SearchDistrictBox /> */}

            <BangladeshMap serviceCenters={serviceCenters} />
        </div>
    );
};

export default Coverage;