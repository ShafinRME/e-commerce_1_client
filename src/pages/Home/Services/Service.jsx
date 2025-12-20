import React from 'react';



const Service = ({ service, icon, bgColor }) => {
    const { title, description } = service;
    return (
        <div className={`card ${bgColor} shadow-xl border-4 border-secondary  p-6 rounded-3xl hover:scale-103 transition-transform duration-300`}>
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