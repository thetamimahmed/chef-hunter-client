import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import Recipe from './Recipe';


const ChefRecipes = () => {
    const ChefDetails = useLoaderData();
    console.log(ChefDetails)
    const {id, chef_name, chef_picture, bio, number_of_recipes, years_of_experience, recipes, likes} = ChefDetails;
    return (
        <div className='container mt-3 mb-5'>
            <div className="card">
                <img src={chef_picture} className="card-img-top w-50 mx-auto" height={'500px'} alt="..." />
                <div className="card-body">
                    <h2 className='text-center primary-color'>{chef_name}</h2>
                    <p className='text-center my-2'>{bio}</p>
                    <div className='fs-5 d-flex justify-content-around'>
                        <p>Years Of Experience: {years_of_experience}</p>

                        <p>Numbers of recipes: {number_of_recipes}</p>

                        <p><HandThumbUpIcon style={{ height: '25', width: '25' }} className="text-blue-500 primary-color" />{likes} Likes</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center my-3 primary-color'>{chef_name}s Recipes</h2>
                {
                    recipes.map(recipe => <Recipe key={id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;