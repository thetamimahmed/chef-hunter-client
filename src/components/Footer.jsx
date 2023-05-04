import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-banner mt-5'>
            <div className='d-flex flex-column footer-padding py-5 flex-lg-row justify-content-center align-items-center justify-content-lg-around'>
                <div className='w-50'>
                    <h3 className='primary-color text-center'>About Us</h3>
                    <p className='text-center'>Connect with authentic Italian chefs from around the world and experience the best of Italian cuisine. Our platform features a curated selection of passionate and talented chefs who are dedicated to sharing their knowledge and creativity with food enthusiasts like you.</p>
                </div>
                <div className='d-flex flex-column w-lg-25'>
                    <h3 className='primary-color'>Quick Links</h3>
                    <Link to={'/'} className="text-decoration-none fs-5 text-white ms-4 ">Home</Link>
                    <Link to={'/blog'} className="text-decoration-none fs-5 text-white ms-4 ">Blog</Link>
                    <Link to={'/login'} className="text-decoration-none fs-5 text-white ms-4 ">Login</Link>
                    <Link to={'/register'} className="text-decoration-none fs-5 text-white ms-4 ">Register</Link>
                </div>
                <div className='w-lg-25'>
                    <h3 className="primary-color">Contact Us</h3>
                    <p className='fs-5'>Email: info@italianchefhunt.com</p>
                    <p className='fs-5'>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <p className='text-center'>&copy; All right reserved by <Link to="/" className='primary-color'>ITALIAN CHEF HUNT</Link></p>
        </div>
    );
};

export default Footer;