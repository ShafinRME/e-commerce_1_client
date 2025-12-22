import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Prologo from '../shared/Prologo/Prologo';

const AuthLayout = () => {
    return (
        <div className='w-15/16 mx-auto min-h-screen rounded-xl pt-6'>
            <NavLink to='/'> <Prologo></Prologo></NavLink>

            <Outlet></Outlet>

        </div>
    );
};

export default AuthLayout;