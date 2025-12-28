import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Prologo from '../Prologo/Prologo';
import { FaArrowRight, FaUserCircle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login'); // optional: redirect after logout
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Active / inactive nav link styling
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "bg-secondary text-base-200 font-bold rounded-lg px-4 py-2"
            : "px-4 py-2 font-semibold  rounded-lg hover:bg-primary hover:text-base-200 transition duration-300";

    const navItems = (
        <>

            <li>
                <NavLink to="/" end className={navLinkClass}>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/services" className={navLinkClass}>
                    Services
                </NavLink>
            </li>


            <li>
                <NavLink to="/coverage" className={navLinkClass}>
                    Coverage
                </NavLink>
            </li>

            {
                user && <>
                    <li>
                        <NavLink to="/dashboard" className={navLinkClass}>
                            Dashboard
                        </NavLink>
                    </li>

                </>
            }


            <li>
                <NavLink to="/about" className={navLinkClass}>
                    About Us
                </NavLink>
            </li>

            <li>
                <NavLink to="/sendParcel" className={navLinkClass}>
                    Pricing
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

                <Link to="/" className="text-xl w-4 mb-4 lg:w-auto">
                    <Prologo />
                </Link>
            </div>

            {/* Navbar Center (Desktop Menu) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems}
                </ul>
            </div>

            {/* Navbar End */}
            {/* Navbar End */}
            <div className="navbar-end gap-4">
                <Link to="/beARider">
                    <button className="btn btn-base-300 text-white">
                        Be a Rider
                    </button>
                </Link>
                {!user ? (
                    <Link to="/login" className="btn btn-primary text-base-200 border-gray-300">
                        Sign In
                    </Link>


                ) : (
                    <>
                        <button onClick={handleLogout} className="btn btn-primary text-base-200 border-gray-300">
                            Logout
                        </button>

                        {/* Profile Image or Fallback */}
                        <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    onError={(e) => (e.target.src = "/public/defaultUser.png")}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <FaUserCircle size={40} className="text-secondary" />
                            )}
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default Navbar;
