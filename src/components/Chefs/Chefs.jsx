import React from 'react';
import ChefsCards from './ChefsCards';

const Chefs = ({chefs}) => {

    return (
        <div className='my-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto'>
            {
                chefs.map(chef => <ChefsCards  key={chef.id} chef={chef}></ChefsCards>)
            }     
        </div>
    );
};

export default Chefs;