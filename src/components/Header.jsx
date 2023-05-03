import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" className='bg-white' expand="lg">
            <Container fluid>
                <Navbar.Brand><Link to={"/"} className="text-decoration-none primary-color fs-3">Italian Chef Hunt</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto ms-5 my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link> <Link to={'/'} className="text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover">Home</Link> </Nav.Link>
                        <Nav.Link> <Link to={'/blog'} className="text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover">Blog</Link> </Nav.Link>
                        <Nav.Link> <Link to={'/login'} className="text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover">Login</Link> </Nav.Link>
                        <Nav.Link> <Link to={'/register'} className="text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover">Register</Link> </Nav.Link>
                    </Nav>
                    <div>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;