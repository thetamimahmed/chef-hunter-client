import React from 'react';
import { Rating } from '@smastrom/react-rating';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';



const Recipe = ({ recipe }) => {
    const { recipe_id, recipe_name, recipe_img, ingredients, cooking_method, rating } = recipe;

    const addFavorite = event =>{
       toast("Marked As Favorite");
       event.target.setAttribute('disabled', true)
    }
    return (
        <div className="col">
            <div className="card">
                <img src={recipe_img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{recipe_name}</h5>
                    <div className='d-flex justify-content-center fs-5 primary-color'>
                        <Rating
                        className='me-2'
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                         {rating}
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='w-50 me-2'>
                            <h5 className='primary-color'>Ingredients</h5>
                            {
                                ingredients?.map((ingredient, i) =>  <ul className="list-group">
                                <li key={i} className="list-group-item">{ingredient}</li>
                              </ul>)
                            }
                        </div>
                        <div className='w-50'>
                            <h5 className='primary-color'>Cooking Method</h5>
                            <div className='border rounded'>
                                {cooking_method}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={addFavorite} className='btn btn-primary w-25 mx-auto my-3 custom-btn'><BookmarkIcon style={{ height: '20', width: '20' }} className="text-blue-500" />Favorite</button>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Recipe;