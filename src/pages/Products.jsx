import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Product from './product';
const Products = () => {
    return (
        <div>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        <div className=" w-full h-12  mb-8 flex  lg:hidden">
                            <label
                                htmlFor="my-drawer-2"
                                className=" drawer-button lg:hidden"
                            >
                                <svg className="fill-current    p-2.5 h-10 w-10" SviewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

                            </label>

                        </div>
                        <Product />


                    </div>
                    <div className="drawer-side ">
                        <label
                            htmlFor="my-drawer-2"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-60 min-h-screen   text-base-content flex flex-col justify-between ">
                            {/* Sidebar content here */}
                            <div className=' font-bold'>
                                <li className="  mb-2  rounded-l-lg">
                                    <Link >Rocking chair</Link>
                                </li>
                                <li className=" mb-2  rounded-l-lg">
                                    <Link >Side chair</Link>
                                </li >
                                <li className=" mb-2  rounded-l-lg">
                                    <Link >Lounge chair</Link>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;