import React from 'react';
import { useSelector } from 'react-redux';
const Purchases = () => {
    const purchases = useSelector(state => state.purchases);
    console.log(purchases);
    return (
        <div>
            <h1>Purchases</h1>
        </div>
    );
};

export default Purchases;
