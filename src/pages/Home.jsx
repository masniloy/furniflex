import React from 'react';
import Products from './Products';
import { Link, Outlet } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {

    return (
        <div className='h-screen'>

            <Banner></Banner>

        </div>
    );
};

export default Home;




