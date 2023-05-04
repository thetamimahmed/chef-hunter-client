import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const {logInUser, googleLogIn, githubLogIn} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            toast('Login Successfull')
            form.reset()
            navigate(from, { replace: true })
        })
        .catch(error => {
            setErrorMessage(error.message)
        })
    }

    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(result =>{
            const loggedUser = result.user;
            toast('Login Successfull')
            navigate(from, { replace: true })
        })
        .catch(error =>{
            setErrorMessage(error.message)
        })
    }

    const handleGithubLogin = () =>{
        githubLogIn()
        .then(result =>{
            const loggedUser = result.user;
            toast('Login Successfull')
            navigate(from, { replace: true })
        })
        .catch(error =>{
            setErrorMessage(error.message)
        })
    }
    return (
        <div>
            <h3 className='text-center primary-color my-3'>Please Login Your Account</h3>
            <Form onSubmit={handleLogIn} className='w-50 mx-auto mb-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='custom-btn' variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={handleGoogleLogIn} className='custom-btn mx-lg-2 my-2' variant="primary" type="submit">
                    Login with google
                </Button>
                <Button onClick={handleGithubLogin} className='custom-btn mx-lg-2' variant="primary" type="submit">
                    Login with github
                </Button>
                <p className='mt-2'>New in Italian Chef Hunter? <span><Link className='primary-color' to={"/register"}>Register</Link></span></p>
                <p className='mt-2fw-bold text-danger'>{errorMessage}</p>
            </Form>
            <ToastContainer/>
        </div>
    );
};

export default Login;