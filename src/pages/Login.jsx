import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex sm:items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">

                <div className="md:w-1/2 p-8 md:border-r-4 md:border-b-0 border-b-4 border-color1">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Log in</h2>
                    <form onSubmit="">
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"

                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="joe@email.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"

                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="Enter your Password"
                            />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <a href="#" className="text-sm text-red-600 hover:underline">forgot password?</a>
                        </div>
                        <button className="w-full bg-color py-2 rounded-lg hover:bg-color transition duration-200" >
                            Login
                        </button>

                        <div className="flex items-center justify-between mt-4">
                            <p className=" text-sm"> have an account</p> <Link to={"/register"} className=" text-red-600 text-sm"><p>register</p></Link>
                        </div>
                    </form>
                </div>

                <div className="md:w-2/3 bg-color p-8 flex flex-col justify-center items-center ">
                    <div className=" text-center ">
                        {/* <img
                            src={logo} // Replace with your logo path
                            alt="Buggybites Logo"
                            className="w-32 h-32 mx-auto mb-4"
                        /> */}
                        <h1 className="text-2xl font-bold mb-2">Eventify</h1>
                        <p className="text-sm text-color1">Our platform is designed with simplicity and usability in mind, making it easy for anyone to navigate and use</p>


                        <p className="mt-10 text-sm">Or Login Using</p>
                        <div className=" flex items-center justify-center gap-5 mt-2">



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;