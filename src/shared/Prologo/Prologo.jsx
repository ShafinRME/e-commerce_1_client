import React from 'react';

import logo from '../../assets/logo.png';
import { Link } from 'react-router';

const Prologo = () => {
    return (
        <Link to="/">
            <div className='flex items-center justify-start'>
                <img src={logo} alt="logo" />
                <p className='text-3xl font-extrabold mt-6 -ml-2'>ProFast</p>
            </div>
        </Link>
    );
};

export default Prologo;