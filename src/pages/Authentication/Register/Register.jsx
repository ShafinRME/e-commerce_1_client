import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from 'react-router';
import './Register.css';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import useAxios from '../../../hooks/useAxios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, signInWithGoogle, updateUserProfile } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const [profilePic, setProfilePic] = useState('');
    const axiosInstance = useAxios();
    const from = location.state?.from || '/';


    // On form submit
    const onSubmit = data => {

        console.log(data);

        createUser(data.email, data.password)
            .then(async (result) => {
                console.log(result.user);
                navigate(from);

                // update userinfo in the database
                const userInfo = {
                    email: data.email,
                    role: 'user', // default role
                    created_at: new Date().toISOString(),
                    last_log_in: new Date().toISOString()
                }

                const userRes = await axiosInstance.post('/users', userInfo);
                console.log(userRes.data);

                // update user profile in firebase
                const userProfile = {
                    displayName: data.name,
                    photoURL: profilePic
                }
                updateUserProfile(userProfile)
                    .then(() => {
                        console.log('profile name pic updated')
                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(async (result) => {
                const user = result.user;
                console.log(result.user);
                // update userinfo in the database
                const userInfo = {
                    email: user.email,
                    role: 'user', // default role
                    created_at: new Date().toISOString(),
                    last_log_in: new Date().toISOString()
                }

                const res = await axiosInstance.post('/users', userInfo);
                console.log('user update info', res.data)

                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        console.log(image)

        const formData = new FormData();
        formData.append('image', image);


        const imagUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`
        const res = await axios.post(imagUploadUrl, formData)

        setProfilePic(res.data.data.url);

    }




    return (
        <div className='flex flex-col lg:flex-row items-center justify-center mx-16 lg:mx-20 gap-0 w-full px-6'>
            {/* Left Section: Form */}
            <div className='w-full lg:w-1/2'>
                <h1 className='text-3xl lg:text-5xl font-bold text-base-200 text-left'>Create an Account</h1>
                <p className='text-accent font-semibold mb-4 mt-2'>Register with Profast</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        {/* name field */}
                        <label className="label">Your Name</label>
                        <input type="text"
                            {...register('name', { required: true })}
                            className="input w-2/3" placeholder="Your Name" />
                        {
                            errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>
                        }
                        {/* Photo field */}
                        <label className="label">Your Profile Picture</label>
                        <input type="file"
                            onChange={handleImageUpload}
                            className="input w-2/3" placeholder="Your Profile picture" />



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