import React from 'react';
import background from "../assets/login-cover.png"
import logo from "../assets/icon.png"
import logo2 from "../assets/FurniFlex.png"
const Banner = () => {
    return (
        <div className='-mx-10'>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${background})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center flex items-center justify-center h-screen">
                    <div className="max-w-md">
                        <img className='w-40 h-40 mx-auto m-5' src={logo} alt="" />
                        <img className='w-40 mx-auto m-5' src={logo2} alt="" />

                        <p className="mb-5">
                            Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;