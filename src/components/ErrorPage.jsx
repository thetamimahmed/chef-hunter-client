import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='error-banner d-flex align-items-center justify-content-center '>
                <div className='text-center'>
                    <h1 className='primary-color' style={{fontSize:'120px'}}>404</h1>
                    <h3 className='primary-color'>Sorry Page Was Not Found</h3>
                    <button className='btn btn-primary custom-btn my-3'>
                        <Link className='text-decoration-none text-white' to="/">Back to home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;