import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/login-cover.png";
import logo from "../assets/icon.png";
import logo2 from "../assets/FurniFlex.png";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg max-w-6xl w-full rounded-lg overflow-hidden">

                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-3xl font-bold ">Welcome Back!</h2>
                    <p className=" text-gray-500 mb-6">
                        Enter your credentials to access your account
                    </p>


                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="Enter your password"
                            />
                            <span className="absolute right-2 top-2 cursor-pointer">
                                👁️
                            </span>
                        </div>
                    </div>


                    <div className="text-right mb-4">
                        <Link to="#" className="text-primary hover:underline">
                            Forgot Password?
                        </Link>
                    </div>


                    <div className="flex items-center mb-6">
                        <input type="checkbox" className="checkbox" />
                        <label className="ml-2 text-sm">
                            I agree to the{" "}
                            <Link to="#" className="text-primary hover:underline">
                                Terms & Policy
                            </Link>
                        </label>
                    </div>


                    <button className="btn bg-color1 text-white w-full mb-4">Sign In</button>

                    <p className="text-center text-gray-500 mb-4">or</p>


                    <div className="flex justify-center gap-4 mb-6">
                        <button className="btn w-1/2 btn-outline  flex items-center justify-center">
                            <span className="mr-2"> <svg className="fill-current  rounded-full p-2.5 h-10 w-10" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg></span>
                            Sign in with Google
                        </button>
                        <button className="btn w-1/2 btn-outline flex items-center justify-center">
                            <span className="mr-2"><svg className="fill-current  rounded-full  p-2.5 h-10 w-10" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg></span>
                            Sign in with Facebook
                        </button>
                    </div>


                    <p className="text-center text-gray-500">
                        Have an account?{" "}
                        <Link to="#" className="text-primary hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>


                <div
                    className="w-full md:w-1/2 bg-cover bg-center h-[900px]"
                    style={{
                        backgroundImage: `url(${background})`,
                    }}
                >
                    <div className="flex h-full justify-center items-center bg-black bg-opacity-40 p-8">
                        <div className="text-white text-center">
                            <img className="w-[85px] h-[85px] mx-auto m-5" src={logo} alt="logo" />
                            <img className="w-40 mx-auto m-5" src={logo2} alt="logo2" />
                            <p className="mt-2 text-sm">
                                Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring
                                quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
