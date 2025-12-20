import React from 'react';



const Service = ({ service, icon }) => {
    const { title, description } = service;
    return (
        <div data-aos="fade-down-left" data-aos-duration="1500" className={`card bg-primary shadow-xl border-1 border-accent  p-6 rounded-3xl hover:scale-103 transition-transform duration-300 hover:bg-secondary`}>
            <div className="card-body flex flex-col items-center justify-center">
                <div className="text-3xl mb-4 p-6 flex justify-center items-center bg-gradient-to-b from-blue-300 to-blue-100 rounded-full w-20 h-20">
                    {icon && React.createElement(icon)}
                </div>

                <h2 className="card-title flex justify-center">{title}</h2>
                <p className='flex justify-center text-center'>{description}</p>
            </div>
        </div>
    );
};

export default Service;