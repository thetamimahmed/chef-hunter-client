import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOutUser()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <Navbar bg="light" className='bg-white' expand="lg">
            <Container fluid>
                <Navbar.Brand><Link to={"/"} className="text-decoration-none primary-color fs-3">Italian Chef Hunt</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Link to={'/'} className="text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover">Home</Link>
                        <Link to={'/blog'} className="text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover">Blog</Link>
                        <Link to={'/login'} className="text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover">Login</Link>
                        <Link to={'/register'} className="text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover">Register</Link>
                    </Nav>
                    <div>
                        {
                            user ?
                                <>
                                    <span><img title={user && user.displayName} style={{ width: '50px', height: '50px', borderRadius: '50%', margin: '0px 8px' }} src={user.photoURL ? user.photoURL : '/public/images/defaultProfile.png'} alt="" /></span>
                                    <button onClick={handleLogOut} className='btn btn-primary custom-btn'>Logout</button>
                                </> :
                                <button className='btn btn-primary custom-btn'>
                                    <Link to="/login" className='text-decoration-none text-white'>Login</Link>
                                </button>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;