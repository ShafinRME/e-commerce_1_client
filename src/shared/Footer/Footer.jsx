import React from 'react';
import Prologo from '../Prologo/Prologo';
import { NavLink } from 'react-router';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <footer className="flex flex-col items-center justify-center gap-10 bg-base-200 text-neutral-content p-6 px-20 w-15/16  mt-auto mx-auto mb-6 rounded-3xl">

                <Prologo />

                <p className="font-bold w-full md:w-1/2 text-center -mb-6 md:text-center  lg:w-3/4 lg:text-center">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>

                <hr className='w-full border-dashed border-gray-400 border-t-2 opacity-30 lg:-mb-6' />

                <div className="flex flex-wrap items-center justify-center gap-6">
                    <NavLink to="/" className="text-center md:text-left">Home</NavLink>
                    <NavLink to="/services" className="text-center md:text-left">Services</NavLink>
                    <NavLink to="/coverage" className="text-center md:text-left">Coverage</NavLink>
                    <NavLink to="/about" className="text-center md:text-left">About Us</NavLink>
                    <NavLink to="/pricing" className="text-center md:text-left">Pricing</NavLink>
                    <NavLink to="/rider" className="text-center md:text-left">Be a Rider</NavLink>
                </div>

                <hr className='w-full border-dashed border-gray-400 border-t-2 opacity-30 -mt-4' />

                <div className="flex flex-wrap items-center justify-center gap-6 -mt-6">
                    <FaLinkedin color='#7132CA' size={40} />
                    <FaXTwitter color='#FCF8F8' size={40} />
                    <FaFacebook color='#7132CA' size={40} />
                    <FaYoutube color='#FF3838' size={40} />
                </div>

                <p className='-mt-4 text-center'>Copyright © {new Date().getFullYear()} - All rights reserved</p>

            </footer>
        </div>
    );
};

export default Footer;
