import React, { useEffect, useState } from 'react';

import servicesData from '../../../../public/services.json';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(servicesData);
    }, []);

    return (
        <div className='flex flex-col w-15/16 mx-auto my-12 p-4 bg-base-200 rounded-lg'>
            <div className="w-2/3 mx-auto mt-10 mb-6 ">
                <h1 className='text-4xl font-bold text-primary text-center'>Our Services</h1>
                <p className='text-accent text-center '>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {
                    services.map((service, idx) => {
                        <Service key={idx} service={service}></Service>
                    })
                }

            </div>

        </div>
    );
};

export default Services;