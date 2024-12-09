import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMassage = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Opps..!!</h1>
            <Link className='underline' to="/">Go to Home</Link>
        </div>
    );
};

export default ErrorMassage;