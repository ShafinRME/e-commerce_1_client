import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router';
import './Register.css';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, signInWithGoogle } = useAuth();

    const navigate = useNavigate();


    // On form submit
    const onSubmit = data => {
        const { email, password, name, photo } = data;

        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                return updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photo
                });
            })
            .then(() => {
                console.log("✅ User profile updated!");
                navigate('/');

                // Optionally: navigate('/'); or window.location.reload();
            })
            .catch(error => {
                console.error("❌ Error during user creation or update:", error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className='flex flex-col lg:flex-row items-center justify-center mx-16 lg:mx-20 gap-0 w-full px-6'>
            {/* Left Section: Form */}
            <div className='w-full lg:w-1/2'>
                <h1 className='text-3xl lg:text-5xl font-bold text-base-200 text-left'>Create an Account</h1>
                <p className='text-accent font-semibold mb-4 mt-2'>Register with Profast</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        {/* Name Input */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input w-2/3"
                            placeholder="Name"
                            {...register('name', {
                                required: "Name is required",  // Custom error message
                                pattern: {
                                    value: /^[A-Za-z\s'-]+$/, // Allows letters, spaces, apostrophes, and hyphens (for names like O'Conner, John-Doe)
                                    message: "Enter a valid name (letters, spaces, hyphens, or apostrophes only)"
                                }
                            })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                            <p className='text-red-600' role="alert">{errors.name.message}</p>
                        )}

                        <label className="label">Photo URL</label>
                        <input
                            type="url"
                            className="input w-2/3"
                            placeholder="https://example.com/photo.jpg"
                            {...register('photo', {
                                required: "Photo URL is required",
                                pattern: {
                                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                                    message: "Enter a valid image URL (jpg, jpeg, png, webp, gif)"
                                }
                            })}
                            aria-invalid={errors.photo ? "true" : "false"}
                        />

                        {errors.photo && (
                            <p className="text-red-600 text-sm mt-1" role="alert">
                                {errors.photo.message}
                            </p>
                        )}


                        {/* Email Input */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-2/3"
                            placeholder="Email"
                            {...register('email', {
                                required: "Email is required",  // Custom error message
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Enter a valid email address" // Custom pattern error message
                                }
                            })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                            <p className='text-red-600' role="alert">{errors.email.message}</p>
                        )}

                        {/* Password Input */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input w-2/3"
                            placeholder="Password"
                            {...register('password', {
                                required: "Password is required",  // Custom error message
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long" // Custom minLength error message
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, // Password must have at least one letter, one number, and one special character
                                    message: "Password must include at least one letter, one number, and one special character"
                                }
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && (
                            <p className='text-red-600' role="alert">{errors.password.message}</p>
                        )}

                        {/* Forgot Password Link */}
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {/* Submit Button */}
                        <button className="btn h-12 shadow-md hover:shadow-xl btn-secondary text-base-200 mt-4 w-2/3">Register</button>
                    </fieldset>
                </form>
                <p className='mt-4'>Already have an account ?<span className='text-blue-600 font-semibold link link-hover ml-2'><NavLink to='/login'>Login</NavLink> </span></p>
                <div className="divider w-2/3">OR</div>
                <button onClick={handleGoogleSignIn} className=" flex justify-center items-center h-12 font-semibold text-base-200 gap-2 rounded-lg border-none w-2/3 bg-white  shadow-md hover:shadow-xl  hover:bg-secondary hover:text-base-200">
                    <FcGoogle size={25} />
                    Register with Google
                </button>
            </div>

            {/* Right Section: Image */}
            <div >
                <img className='im-with' src="https://i.postimg.cc/gjmM6RDr/register.png" alt="Authentication" />
            </div>

        </div>
    );
};

export default Register;