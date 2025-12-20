import React from 'react';

const FeatureCard = ({ feature }) => {

    const { title, description, imageUrl } = feature;
    return (
        <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500" className="bg-white shadow-xl p-6 flex sm:flex-row sm:items-center sm:justify-start flex-col gap-6 rounded-xl">
            <div className='w-full sm:w-2/8 flex justify-center'>
                <img src={imageUrl} alt={title} className="h-40 w-44 mb-4" />
            </div>


            <div className="w-full border-dashed sm:w-auto sm:h-32 sm:border-l-2 sm:border-gray-500 sm:mr-6 border-t-2 sm:border-t-0 border-gray-500"></div>

            <div className='w-full sm:w-6/8 flex flex-col justify-center items-start gap-2'>
                <h2 className="text-2xl font-bold text-center sm:text-left ">{title}</h2>

                <p className="text-accent text-center sm:text-left">{description}</p>
            </div>


        </div>
    );
};

export default FeatureCard;
