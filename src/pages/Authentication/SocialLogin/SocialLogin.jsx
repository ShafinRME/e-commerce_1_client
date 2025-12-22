import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className="divider w-2/3">OR</div>
            <button className=" flex justify-center items-center h-12 font-semibold text-base-200 gap-2 rounded-lg border-none w-2/3 bg-white  shadow-md hover:shadow-xl  hover:bg-secondary hover:text-base-200">
                <FcGoogle size={25} />
                Register with Google
            </button>
        </div>
    );
};

export default SocialLogin;