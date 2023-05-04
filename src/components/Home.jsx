import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import {useLoaderData} from 'react-router-dom';
import ChefsCard from './Chefs/Chefs.jsx';
import Chefs from './Chefs/Chefs.jsx';
import Services from './Services.jsx';
import Reviews from './Reviews.jsx';

const Home = () => {
    const chefs = useLoaderData()
    
    return (
        <div>
            <div className='banner text-white d-flex align-items-center mb-5'>
                <h1 className='text-center w-75 mx-auto'>Experience the ultimate culinary adventure with our diverse range of recipes!</h1>
            </div>

            <Services></Services>
            <Chefs chefs={chefs}></Chefs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;