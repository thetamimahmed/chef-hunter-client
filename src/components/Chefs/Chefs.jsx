import React from 'react';
import ChefsCards from './ChefsCards';

const Chefs = ({chefs}) => {

    return (
        <div>
            {
                chefs.map(chef => <ChefsCards key={chef.id} chef={chef}></ChefsCards>)
            }     
        </div>
    );
};

export default Chefs;