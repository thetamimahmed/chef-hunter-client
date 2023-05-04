import React from 'react';

const Services = () => {
    return (
        <div>
            <h1 className='text-center primary-color my-3'>Our Services</h1>
            <div className='container-lg shadow p-5 rounded d-flex flex-column flex-lg-row justify-content-between'>
                <div className='text-center'>
                    <img className='services-icon' src="https://cdn-icons-png.flaticon.com/512/1248/1248833.png?w=740&t=st=1683232654~exp=1683233254~hmac=f2e96f0c683f51f9cd7786fe2b41b47481b0aaf2dbb8cfa3e62368170809ac47" alt="" />
                    <h4 className='primary-color'>Recipe Rolodex</h4>
                    
                </div>
                <div className='text-center'>
                    <img className='services-icon' src="https://cdn-icons-png.flaticon.com/512/1249/1249445.png?w=740&t=st=1683232747~exp=1683233347~hmac=e02eef020b64d1ee2a7cc68415d19cd1df2868d94b891c373dfa73aa93470747" alt="" />
                    <h4 className='primary-color'>Ingredient Insight</h4>
                    
                </div>
                <div className='text-center'>
                    <img className='services-icon' src="https://cdn-icons-png.flaticon.com/512/1189/1189186.png?w=740&t=st=1683232785~exp=1683233385~hmac=bbefdd33013f367fa2cdb7b3245d7c3e1d525f7eeeb7d090578935bf6f8d925a" alt="" />
                    <h4 className='primary-color'>Cooking Community</h4>
                    
                </div>
                <div className='text-center'>
                    <img className='services-icon' src="https://cdn-icons-png.flaticon.com/512/1249/1249636.png?w=740&t=st=1683232833~exp=1683233433~hmac=aeb5eafbfb8bbee7e233017df0dfcc7694694b4ad62b2f96e086f2622111b990" alt="" />
                    <h4 className='primary-color'>Chef's Picks</h4>
                </div>
            </div>
        </div>
    );
};

export default Services;