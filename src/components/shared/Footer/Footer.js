import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();

    return (
        <footer className='py-5 text-center' style={{ backgroundColor: '#ddd' }}>
            <div className='container mx-auto'>
                <div className='row g-5'>
                    <div className='col-12 col-md-4'>
                        <h4>Social media</h4>
                        <div className='mt-5'>
                            <Link to="/"><img style={{width : "40px"}} className="mx-2" src='https://i.ibb.co/JyFbkD2/facebook.png' /></Link>
                            <Link to="/"><img style={{width : "40px"}} className="mx-2" src='https://i.ibb.co/C1YXjwj/linkedin.png' /></Link>
                            <Link to="/"><img style={{width : "40px"}} className="mx-2" src='https://i.ibb.co/C1YXjwj/linkedin.png' /></Link>
                            <Link to="/"><img style={{width : "40px"}} className="mx-2" src='https://i.ibb.co/Z6GygKQ/youtube.png' /></Link>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4>Our info</h4>
                        <div className='d-flex flex-column mt-5'>
                            <Link className='text-decoration-none' to="/">About us</Link>
                            <Link className='text-decoration-none' to="/">Our Services</Link>
                            <Link className='text-decoration-none' to="/">Private Policy</Link>
                            <Link className='text-decoration-none' to="/">Team & Conditions</Link>
                            <Link className='text-decoration-none' to="/">Contact us</Link>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4>Quick links</h4>
                        <div className='d-flex flex-column mt-5'>
                            <Link className='text-decoration-none' to="/">Home</Link>
                            <Link className='text-decoration-none' to="/">Products</Link>
                            <Link className='text-decoration-none' to="/">Blog</Link>
                            <Link className='text-decoration-none' to="/">Login</Link>
                        </div>
                    </div>
                </div>
                <div className='pt-5 text-center'>
                    <p>&copy; Copyright Motodeal {date.getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;