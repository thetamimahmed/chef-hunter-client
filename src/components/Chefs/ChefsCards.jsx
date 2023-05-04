import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazyload';


const ChefsCards = ({ chef }) => {
    const { id, chef_name, chef_picture, likes, years_of_experience, number_of_recipes, } = chef;
    return (
        <div className="col" >
            <div className="card">
                <LazyLoad>
                <img src={chef_picture} className="card-img-top" style={{height:'450px'}} alt="..."/>
                </LazyLoad>
                    <div className="card-body">
                        <h3 className="card-title primary-color">{chef_name}</h3>
                        <div className="d-flex flex-column">
                            <p>Years Of Experience: {years_of_experience}</p>
                            
                            <p>Numbers of recipes: {number_of_recipes}</p>
                                         
                            <p><HandThumbUpIcon style={{height:'25', width:'25'}} className="text-blue-500 primary-color" />{likes} Likes</p>
                        </div>
                        <button className='btn btn-primary custom-btn'>
                            <Link to={`/chef/${id}`} className="text-decoration-none text-white">View Recipes</Link>
                        </button>
                    </div>
            </div>

        </div >
    );
};

export default ChefsCards;