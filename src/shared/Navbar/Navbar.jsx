import React from 'react';
import { NavLink } from 'react-router';
import Prologo from '../Prologo/Prologo';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {

    // Active / inactive nav link styling
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "bg-secondary text-base-200 font-bold rounded-lg px-4 py-2"
            : "px-4 py-2 font-semibold  rounded-lg hover:bg-accent hover:text-base-200 transition duration-300";

    const navItems = (
        <>
            <li>
                <NavLink to="/services" className={navLinkClass}>
                    Services
                </NavLink>
            </li>

            <li>
                <NavLink to="/" end className={navLinkClass}>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/coverage" className={navLinkClass}>
                    Coverage
                </NavLink>
            </li>

            <li>
                <NavLink to="/about" className={navLinkClass}>
                    About Us
                </NavLink>
            </li>

            <li>
                <NavLink to="/pricing" className={navLinkClass}>
                    Pricing
                </NavLink>
            </li>

            <li>
                <NavLink to="/rider" className={navLinkClass}>
                    Be a Rider
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm w-15/16 mx-auto rounded-lg mb-6 px-2 lg:px-6">

            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-secondary text-base-200 mr-6 lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    {/* Mobile Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {navItems}
                    </ul>
                </div>

                <NavLink to="/" className="text-xl w-4 mb-4 lg:w-auto">
                    <Prologo />
                </NavLink>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-4">
                <NavLink to="/login" className="btn btn-primary text-base-200 border-gray-300">
                    Sign In
                </NavLink>

                <button className="btn btn-secondary text-base-200">
                    Be a Rider
                </button>

                <div className="bg-base-200 -rotate-45 rounded-full p-2 -ms-2">
                    <FaArrowRight size={30} color="#CAEB66" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
