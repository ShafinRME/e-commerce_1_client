import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    // Use react-hook-form for handling the form
    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInWithGoogle, signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    // On form submit
    const onSubmit = data => {
        console.log(data);
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                console.log(location);
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.error(error);
                setLoginError("Invalid email or password.");
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                console.log(location);
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (


        <div className='flex flex-col lg:flex-row items-center justify-center mx-16 lg:mx-20 gap-0 w-full px-6'>

            {/* Left Section: Form */}
            <div className='w-full lg:w-1/2'>
                <h1 className='text-3xl lg:text-5xl font-bold text-base-200 text-left'>Welcome Back</h1>
                <p className='text-accent font-semibold mb-4 mt-2'>Login with Profast</p>
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
                        <button className="btn h-12 shadow-md hover:shadow-xl btn-secondary text-base-200 mt-4 w-2/3">Login</button>
                        {loginError && <p className="text-red-600 mt-2">{loginError}</p>}
                    </fieldset>
                </form>
                <p className='mt-4'>Don't have an account ?<span className='text-blue-600 font-semibold link link-hover ml-2'><NavLink to='/register'>Register</NavLink> </span></p>
                <div className="divider w-2/3">OR</div>
                <button onClick={handleGoogleSignIn} className=" flex justify-center items-center h-12 font-semibold text-base-200 gap-2 rounded-lg border-none w-2/3 bg-white  shadow-md hover:shadow-xl  hover:bg-secondary hover:text-base-200">
                    <FcGoogle size={25} />
                    Login with Google
                </button>
            </div>

            {/* Right Section: Image */}
            <div className='w-2/3 mr-20 lg:w-1/2'>
                <img src="https://i.postimg.cc/503BTrBW/login.webp" alt="Authentication" />
            </div>
        </div>

    );
};

export default Login;
