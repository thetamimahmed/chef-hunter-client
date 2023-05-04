import React from 'react';

const Services = () => {
    return (
        <div>
            <h1 className='text-center primary-color my-3'>Our Services</h1>
            <div className='container shadow p-5 rounded d-flex justify-content-between'>
                <div className='text-center'>
                    <img className='services-icon' src="/public/images/rolodex.jpg" alt="" />
                    <h4 className='primary-color'>Recipe Rolodex</h4>
                    
                </div>
                <div className='text-center'>
                    <img className='services-icon' src="/public/images/insight.png" alt="" />
                    <h4 className='primary-color'>Ingredient Insight</h4>
                    
                </div>
                <div className='text-center'>
                    <img className='services-icon' src="/public/images/community.png" alt="" />
                    <h4 className='primary-color'>Cooking Community</h4>
                    
                </div>
                <div className='text-center'>
                    <img className='services-icon' src="/public/images/chef.png" alt="" />
                    <h4 className='primary-color'>Chef's Picks</h4>
                </div>
            </div>
        </div>
    );
};

export default Services;