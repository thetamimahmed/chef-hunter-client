import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'


const ChefsCards = ({ chef }) => {
    console.log(chef)
    const { id, chef_name, chef_picture, likes, years_of_experience, number_of_recipes, } = chef;
    return (
        <div className="col" >
            <div class="card">
                <img src={chef_picture} className="card-img-top" style={{height:'450px'}} alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title primary-color">{chef_name}</h3>
                        <div className="d-flex flex-column">
                            <p>Years Of Experience: {years_of_experience}</p>
                            
                            <p>Numbers of recipes: {number_of_recipes}</p>
                                         
                            <p><HandThumbUpIcon style={{height:'25', width:'25'}} className="text-blue-500 primary-color" />{likes} Likes</p>
                        </div>
                        <button className='btn btn-primary custom-btn'>View Recipes</button>
                    </div>
            </div>
        </div >
    );
};

export default ChefsCards;