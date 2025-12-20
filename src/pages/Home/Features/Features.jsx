import React, { useEffect, useState } from 'react';

import featuresData from '../../../../public/features.json';
import FeatureCard from './FeatureCard';



const Features = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, [])


    return (
        <div className="flex flex-col w-15/16 mx-auto my-12 p-4 rounded-lg">

            <div className="grid grid-cols-1 gap-6 p-4">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
            <hr className='w-15/16 mx-auto border-dashed border-gray-400 border-t-2 opacity-30 mt-14' />
        </div>
    );
};

export default Features;