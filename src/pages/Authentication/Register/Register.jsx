import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
import './Register.css';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // On form submit
    const onSubmit = data => {
        console.log(data);
    };



    return (
        <div className='flex flex-col lg:flex-row items-center justify-center mx-16 lg:mx-20 gap-0 w-full px-6'>
            {/* Left Section: Form */}
            <div className='w-full lg:w-1/2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
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
                        <button className="btn btn-secondary text-base-200 mt-4 w-2/3">Register</button>
                    </fieldset>
                </form>
                <p className='mt-4'>Already have an account ?<span className='text-blue-600 font-semibold link link-hover ml-2'><NavLink to='/login'>Login</NavLink> </span></p>
            </div>

            {/* Right Section: Image */}
            <div >
                <img className='im-with' src="https://i.postimg.cc/gjmM6RDr/register.png" alt="Authentication" />
            </div>
        </div>
    );
};

export default Register;