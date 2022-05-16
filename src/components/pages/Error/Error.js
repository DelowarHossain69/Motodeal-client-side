import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column' style={{height : '80vh'}}>
            <h2 className='text-success'>OPPS!</h2>
            <h4 className='mb-3 text-danger text-uppercase'>404 Page not found.</h4>
            <Link to="/"><Button>Go back</Button></Link>
        </div>
    );
};

export default Error;