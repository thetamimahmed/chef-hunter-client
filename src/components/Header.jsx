import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';
import ActiveLink from './route/ActiveLink';

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
                        <ActiveLink to={'/'}>Home</ActiveLink>
                        <ActiveLink to={'/blog'}>Blog</ActiveLink>
                        <ActiveLink to={'/login'}>Login</ActiveLink>
                        <ActiveLink to={'/register'}>Register</ActiveLink>
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