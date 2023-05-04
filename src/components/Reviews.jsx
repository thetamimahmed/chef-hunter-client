import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-center primary-color my-3'>Our Reviews</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container-lg mx-auto'>
                <div className="col" >
                    <div className="card text-center">
                        <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className='primary-color'>Tim Devid</h3>
                            <p className='text-center'>
                                I was looking for an Italian chef for my restaurant and stumbled upon this website. The process was easy and I was able to find the perfect chef for my needs. Highly recommended!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col" >
                    <div className="card text-center">
                        <img src="https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className='primary-color'>Roman Article</h3>
                            <p className='text-center'>
                            I was a bit skeptical about hiring a chef from an online platform, but the quality of the chefs on this website is amazing. I found a great chef who created the perfect menu for my dinner party!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col" >
                    <div className="card text-center">
                        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className='primary-color'>John Wick</h3>
                            <p className='text-center'>
                                I wanted to surprise my wife with an Italian chef for her birthday dinner and this website made it possible. The chef was professional, the food was delicious, and my wife was thrilled. Thank you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviews;