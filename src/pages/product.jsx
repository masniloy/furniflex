import image1 from "../assets/image (1).png";


import React from 'react';

const product = () => {
    return (
        <div>
            <div className="card w-96 shadow-xl">
                <figure className="">
                    <img
                        src={image1}
                        alt="Shoes"
                        className="rounded-xl h-[236px] w-[236]" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Colored Wooden Chair</h2>
                    <div className="flex w-2/3">
                        <p className="font-bold">$299.00</p>
                        <p className=" text-gray-300">$299.00</p>
                        <p className=" text-red-600 text-sm font-bold">30% OFF</p>
                    </div>
                    <p>It has a backrest that can be tilted back, and often a footrest extended</p>
                    <div className="card-actions">
                        <button className="btn w-full bg-color1 text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default product;
